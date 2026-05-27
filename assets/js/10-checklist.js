"use strict";

/* ============================================================
   CHECKLIST TAB
   Action-oriented view of in-scope sub-controls. Teams use this
   as a working punchlist: tick boxes as items are completed,
   filter by principle / severity / status, and export the list
   to CSV or JSON for handoff to GRC tooling.

   Persistence is browser-local: the user's tick state lives in
   localStorage keyed by the active assessment hash so two
   different assessments don't trample each other.
   ============================================================ */

(function () {
  // ---- module state ---------------------------------------------------
  let _rendered = false;
  let _dirty = true;
  let _filterStatus = "all";        // "all" | "open" | "done"
  let _filterPrinciple = "all";     // "all" | "A" | "B" | ...
  let _filterApp = "all";           // "all" | "core" | "supplemental"
  let _filterSeverity = "all";      // "all" | "critical" | "high" | "medium"
  let _query = "";

  // checked-state map: { "A001.1": true, ... }
  let _checked = {};

  // ---- persistence ---------------------------------------------------
  function assessmentKey() {
    // Stable string derived from current assessment answers. If the user
    // re-runs with different inputs, they get a fresh checklist.
    try {
      const s = state || {};
      const arrJoin = (a) => (Array.isArray(a) ? a : []).slice().sort().join(",");
      const parts = [
        arrJoin(s.audience),
        (s.facing || ""),
        (s.automation ? "1" : "0"),
        arrJoin(s.inputModalities),
        arrJoin(s.outputModalities),
        arrJoin(s.jurisdictions),
        arrJoin(s.dataCategories),
      ];
      return "cm-checklist:" + parts.join("|");
    } catch (e) {
      return "cm-checklist:default";
    }
  }

  function loadChecked() {
    try {
      const raw = localStorage.getItem(assessmentKey());
      _checked = raw ? JSON.parse(raw) : {};
    } catch (e) {
      _checked = {};
    }
  }

  function saveChecked() {
    try {
      localStorage.setItem(assessmentKey(), JSON.stringify(_checked));
    } catch (e) { /* quota or disabled — non-fatal */ }
  }

  // ---- helpers --------------------------------------------------------
  function activatedSet() {
    const { reasons } = deriveActivations(state);
    return new Set(Object.keys(reasons));
  }

  function activationReasons() {
    return deriveActivations(state).reasons || {};
  }

  function principleOf(slug) {
    return (slug || "").charAt(0);
  }

  function principleName(code) {
    const p = (PRINCIPLES || []).find(p => p.code === code);
    return p ? p.name : code;
  }

  // Flatten in-scope requirements to a row-per-sub-control list.
  function buildRows() {
    const activated = activatedSet();
    const reasons = activationReasons();
    const rows = [];
    Object.keys(REQUIREMENTS_DETAIL || {}).sort().forEach(slug => {
      if (!activated.has(slug)) return;
      const detail = REQUIREMENTS_DETAIL[slug];
      const subs = detail.sub_controls || [];
      const why = (reasons[slug] || []).join("; ");
      subs.forEach(sub => {
        rows.push({
          reqSlug: slug,
          reqTitle: REQUIREMENTS[slug] || slug,
          principle: principleOf(slug),
          why,
          frequency: detail.frequency || "",
          subId: sub.id,
          subTitle: sub.title || "",
          application: sub.application || "",
          severity: sub.severity || "",
          mandatory: !!sub.mandatory,
          guidance: sub.guidance || "",
          shouldInclude: Array.isArray(sub.should_include) ? sub.should_include : [],
        });
      });
    });
    return rows;
  }

  function rowMatchesFilters(r) {
    if (_filterStatus === "open" && _checked[r.subId]) return false;
    if (_filterStatus === "done" && !_checked[r.subId]) return false;
    if (_filterPrinciple !== "all" && r.principle !== _filterPrinciple) return false;
    if (_filterApp !== "all" && r.application !== _filterApp) return false;
    if (_filterSeverity !== "all" && r.severity !== _filterSeverity) return false;
    if (_query) {
      const hay = (
        r.subId + " " + r.subTitle + " " +
        r.reqSlug + " " + r.reqTitle + " " +
        r.guidance + " " + r.shouldInclude.join(" ")
      ).toLowerCase();
      if (!hay.includes(_query)) return false;
    }
    return true;
  }

  // ---- controls bar ---------------------------------------------------
  function renderControls() {
    const root = document.getElementById("cm-checklist-controls");
    if (!root) return;
    clear(root);

    const search = el("div", { class: "cm-req-search" }, [
      el("span", { class: "icon", text: "⌕" }),
      el("input", {
        type: "search",
        placeholder: "Search checklist…",
        value: _query,
        oninput: (e) => {
          _query = (e.target.value || "").toLowerCase().trim();
          renderList();
        },
      }),
    ]);

    function chip(label, key, group) {
      const cur = group === "status"   ? _filterStatus
                : group === "app"      ? _filterApp
                : group === "severity" ? _filterSeverity
                : _filterPrinciple;
      const isActive = cur === key;
      return el("button", {
        type: "button",
        class: "cm-req-chip" + (isActive ? " active" : ""),
        onclick: () => {
          if (group === "status") _filterStatus = key;
          else if (group === "app") _filterApp = key;
          else if (group === "severity") _filterSeverity = key;
          else _filterPrinciple = key;
          renderControls();
          renderList();
        },
      }, [label]);
    }

    const statusFilter = el("div", { class: "cm-req-filter" }, [
      chip("All", "all", "status"),
      chip("Open", "open", "status"),
      chip("Done", "done", "status"),
    ]);

    const appFilter = el("div", { class: "cm-req-filter" }, [
      chip("Core + Supp.", "all", "app"),
      chip("Core", "core", "app"),
      chip("Supp.", "supplemental", "app"),
    ]);

    const severityFilter = el("div", { class: "cm-req-filter" }, [
      chip("All Sev.", "all", "severity"),
      chip("Critical", "critical", "severity"),
      chip("High", "high", "severity"),
      chip("Medium", "medium", "severity"),
    ]);

    const principleChips = [chip("All P.", "all", "principle")];
    (PRINCIPLES || []).forEach(p => {
      principleChips.push(chip(p.code, p.code, "principle"));
    });
    const principleFilter = el("div", { class: "cm-req-filter" }, principleChips);

    const exportWrap = el("div", { class: "cm-checklist-export" }, [
      el("button", {
        type: "button",
        class: "cm-checklist-export-btn",
        onclick: () => exportCSV(),
        text: "Export CSV ↓",
      }),
      el("button", {
        type: "button",
        class: "cm-checklist-export-btn",
        onclick: () => exportJSON(),
        text: "Export JSON ↓",
      }),
      el("button", {
        type: "button",
        class: "cm-checklist-export-btn ghost",
        onclick: () => resetChecks(),
        text: "Reset ticks",
      }),
    ]);

    const meta = el("div", { class: "cm-req-meta", id: "cm-checklist-meta" });

    mount(root,
      search,
      statusFilter,
      appFilter,
      severityFilter,
      principleFilter,
      exportWrap,
      meta);
  }

  // ---- main list ------------------------------------------------------
  function renderList() {
    const root = document.getElementById("cm-checklist");
    if (!root) return;
    clear(root);

    const rows = buildRows();
    const visibleRows = rows.filter(rowMatchesFilters);
    const totalDone = rows.filter(r => _checked[r.subId]).length;

    const meta = document.getElementById("cm-checklist-meta");
    if (meta) {
      meta.textContent = totalDone + " / " + rows.length + " complete";
    }

    if (!rows.length) {
      root.appendChild(el("div", { class: "cm-req-empty",
        text: "Submit the assessment to populate your checklist." }));
      return;
    }

    if (!visibleRows.length) {
      root.appendChild(el("div", { class: "cm-req-empty",
        text: "No items match the current filters." }));
      return;
    }

    // Group by principle, then by requirement slug.
    const byPrinciple = {};
    visibleRows.forEach(r => {
      (byPrinciple[r.principle] = byPrinciple[r.principle] || []).push(r);
    });

    (PRINCIPLES || []).forEach(p => {
      const items = byPrinciple[p.code];
      if (!items || !items.length) return;

      const doneInGroup = items.filter(r => _checked[r.subId]).length;

      const head = el("div", { class: "cm-req-group-head" }, [
        el("span", { class: "cm-req-group-code", text: p.code }),
        el("span", { class: "cm-req-group-name", text: p.name }),
        el("span", { class: "cm-req-group-count",
          text: doneInGroup + " / " + items.length + " done" }),
      ]);
      root.appendChild(head);

      // Sub-group rows by requirement so users see which checklist
      // items belong to the same parent control.
      const byReq = {};
      items.forEach(r => {
        (byReq[r.reqSlug] = byReq[r.reqSlug] || []).push(r);
      });

      const groupBody = el("div", { class: "cm-checklist-group" });
      Object.keys(byReq).sort().forEach(slug => {
        const reqRows = byReq[slug];
        const reqHead = el("div", { class: "cm-checklist-req-head" }, [
          el("span", { class: "cm-checklist-req-code", text: slug }),
          el("span", { class: "cm-checklist-req-title", text: reqRows[0].reqTitle }),
          el("span", { class: "cm-checklist-req-why", text: reqRows[0].why }),
        ]);
        groupBody.appendChild(reqHead);

        reqRows.forEach(r => groupBody.appendChild(buildItem(r)));
      });
      root.appendChild(groupBody);
    });
  }

  function buildItem(r) {
    const isDone = !!_checked[r.subId];

    const checkbox = el("button", {
      type: "button",
      class: "cm-checklist-box" + (isDone ? " on" : ""),
      role: "checkbox",
      "aria-checked": isDone ? "true" : "false",
      "aria-label": "Mark " + r.subId + " complete",
      onclick: (e) => {
        e.stopPropagation();
        toggleCheck(r.subId);
      },
    }, [
      el("span", { class: "cm-checklist-box-mark", text: isDone ? "✓" : "" }),
    ]);

    const idTag = el("span", { class: "cm-checklist-item-id", text: r.subId });

    const titleWrap = el("div", { class: "cm-checklist-item-titlewrap" }, [
      el("span", { class: "cm-checklist-item-title", text: r.subTitle }),
      r.guidance
        ? el("span", { class: "cm-checklist-item-guidance", text: r.guidance })
        : null,
    ]);

    const pills = el("div", { class: "cm-checklist-item-pills" });
    pills.appendChild(el("span", {
      class: "cm-detail-pill app-" + (r.application || "core"),
      text: r.application || "core",
    }));
    if (r.severity) {
      pills.appendChild(el("span", {
        class: "cm-detail-pill sev-" + r.severity,
        text: r.severity,
      }));
    }
    pills.appendChild(el("span", {
      class: "cm-req-pill " + (r.mandatory ? "mandatory" : "optional"),
      text: r.mandatory ? "Mandatory" : "Optional",
    }));

    const item = el("div", {
      class: "cm-checklist-item" + (isDone ? " done" : ""),
      data: { subId: r.subId },
      onclick: () => toggleCheck(r.subId),
    }, [checkbox, idTag, titleWrap, pills]);

    return item;
  }

  function toggleCheck(subId) {
    if (_checked[subId]) delete _checked[subId];
    else _checked[subId] = true;
    saveChecked();
    renderList();
  }

  function resetChecks() {
    if (!Object.keys(_checked).length) return;
    if (!confirm("Clear all ticks on this checklist?")) return;
    _checked = {};
    saveChecked();
    renderList();
  }

  // ---- export ---------------------------------------------------------
  function exportRows() {
    return buildRows().map(r => ({
      principle: r.principle,
      principle_name: principleName(r.principle),
      requirement_id: r.reqSlug,
      requirement_title: r.reqTitle,
      sub_control_id: r.subId,
      sub_control_title: r.subTitle,
      application: r.application,
      severity: r.severity,
      mandatory: r.mandatory,
      frequency: r.frequency,
      activation_reason: r.why,
      guidance: r.guidance,
      should_include: r.shouldInclude,
      status: _checked[r.subId] ? "done" : "open",
    }));
  }

  function downloadFile(name, mime, content) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function csvEscape(v) {
    if (v == null) return "";
    const s = Array.isArray(v) ? v.join(" | ") : String(v);
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function exportCSV() {
    const rows = exportRows();
    if (!rows.length) {
      alert("Submit the assessment first — there is nothing to export yet.");
      return;
    }
    const cols = [
      "status", "principle", "principle_name",
      "requirement_id", "requirement_title",
      "sub_control_id", "sub_control_title",
      "application", "severity", "mandatory", "frequency",
      "activation_reason", "guidance", "should_include",
    ];
    const lines = [cols.join(",")];
    rows.forEach(r => {
      lines.push(cols.map(c => csvEscape(r[c])).join(","));
    });
    downloadFile(
      "aiuc-checklist-" + tsSuffix() + ".csv",
      "text/csv;charset=utf-8",
      lines.join("\n")
    );
  }

  function exportJSON() {
    const rows = exportRows();
    if (!rows.length) {
      alert("Submit the assessment first — there is nothing to export yet.");
      return;
    }
    const payload = {
      generated_at: new Date().toISOString(),
      assessment: {
        audience: state.audience || null,
        facing: state.facing || null,
        automation: !!state.automation,
        input_modalities: state.inputModalities || [],
        output_modalities: state.outputModalities || [],
        jurisdictions: state.jurisdictions || [],
        data_categories: state.dataCategories || [],
      },
      total_items: rows.length,
      completed_items: rows.filter(r => r.status === "done").length,
      items: rows,
    };
    downloadFile(
      "aiuc-checklist-" + tsSuffix() + ".json",
      "application/json;charset=utf-8",
      JSON.stringify(payload, null, 2)
    );
  }

  function tsSuffix() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate())
      + "-" + pad(d.getHours()) + pad(d.getMinutes());
  }

  // ---- public render entry point -------------------------------------
  function renderChecklist(force) {
    if (!document.getElementById("cm-checklist")) return;
    if (!force && _rendered && !_dirty) return;
    loadChecked();
    renderControls();
    renderList();
    _rendered = true;
    _dirty = false;
  }

  // ---- wiring ---------------------------------------------------------
  function init() {
    document.addEventListener("click", (e) => {
      const tab = e.target.closest && e.target.closest('[data-tab="checklist"]');
      if (tab) setTimeout(() => renderChecklist(true), 0);
    });

    const markDirty = () => {
      _dirty = true;
      const pane = document.querySelector('.cm-pane[data-pane="checklist"]');
      if (pane && pane.classList.contains("active")) renderChecklist(true);
    };
    document.getElementById("cm-submit")?.addEventListener("click", markDirty);
    document.getElementById("cm-form-card")?.addEventListener("submit", markDirty);

    const tab = document.getElementById("tab-checklist");
    if (tab && tab.classList.contains("active")) renderChecklist(true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
