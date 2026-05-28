"use strict";

/* ============================================================
   REQUIREMENTS TAB
   A clean, report-style single-column view:
   - A sortable / searchable / filterable TABLE of the 49
     requirements (one row each).
   - Clicking a row expands it inline: a detail block is inserted
     directly beneath the row showing its description, status,
     sub-controls and crosswalk refs. Only one row is expanded at
     a time; clicking it again (or the close button) collapses it.
   - Both the filter card and the column-header row pin together
     via a single sticky wrapper.
   ============================================================ */

(function () {
  // ---- module state ---------------------------------------------------
  let _rendered = false;
  let _dirty = true;
  let _filterScope = "all";     // "all" | "in-scope" | "out-of-scope"
  let _filterApp = "all";       // "all" | "core" | "supplemental"
  // multi-select: empty Set means "All" (no constraint); otherwise OR-match.
  const _filterPrinciples = new Set(); // "A" | "B" | ...
  const _filterSeverities = new Set();  // "critical" | "high" | "medium" | "low"
  let _query = "";
  let _selectedSlug = null;
  let _sortKey = "id";        // id | principle | scope | type | severity | subs | refs
  let _sortDir = 1;           // 1 asc, -1 desc

  // critical > high > medium > low. (Data has no "low", but kept for safety.)
  const SEV_RANK = { critical: 4, high: 3, medium: 2, low: 1, "": 0, null: 0 };

  // ---- helpers --------------------------------------------------------
  function activatedSet() {
    const { reasons } = deriveActivations(state);
    return new Set(Object.keys(reasons));
  }

  function principleOf(slug) {
    return (slug || "").charAt(0);
  }

  function principleName(code) {
    const p = (PRINCIPLES || []).find(x => x.code === code);
    return p ? p.name : code;
  }

  function frequencyLabel(f) {
    if (!f) return "";
    return String(f).replace(/-/g, " ");
  }

  function formatCapability(c) {
    return String(c || "").replace(/-/g, " ");
  }

  function relationshipLabel(rel) {
    return String(rel || "").replace(/_/g, " ");
  }

  function severityForRow(detail) {
    const subs = detail.sub_controls || [];
    if (subs.some(s => s.severity === "critical")) return "critical";
    if (subs.some(s => s.severity === "high")) return "high";
    if (subs.some(s => s.severity === "medium")) return "medium";
    if (subs.some(s => s.severity === "low")) return "low";
    return null;
  }

  // ---- mappings filter -----------------------------------------------
  // For a given requirement id (e.g. "B005"), produce groups keyed by
  // crosswalk slug, each containing the entries whose `source` matches.
  function mappingsForRequirement(reqId) {
    const out = [];
    if (typeof CROSSWALK_DETAILS !== "object" || !CROSSWALK_DETAILS) return out;
    Object.keys(CROSSWALK_DETAILS).forEach(slug => {
      const cw = CROSSWALK_DETAILS[slug];
      if (!cw || !Array.isArray(cw.mappings)) return;
      const matches = cw.mappings.filter(m => m.source === reqId);
      if (!matches.length) return;
      out.push({
        slug,
        name: cw.target_framework_name || slug,
        publisher: cw.publisher || "",
        mappings: matches,
      });
    });
    out.sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }

  function refCountForRequirement(reqId) {
    let n = 0;
    if (typeof CROSSWALK_DETAILS !== "object" || !CROSSWALK_DETAILS) return 0;
    Object.keys(CROSSWALK_DETAILS).forEach(slug => {
      const cw = CROSSWALK_DETAILS[slug];
      if (!cw || !Array.isArray(cw.mappings)) return;
      n += cw.mappings.filter(m => m.source === reqId).length;
    });
    return n;
  }

  // ---- controls bar ---------------------------------------------------
  function renderControls() {
    const root = document.getElementById("cm-req-controls");
    if (!root) return;
    clear(root);

    const total = Object.keys(REQUIREMENTS_DETAIL || {}).length;

    const search = el("div", { class: "cm-req-search" }, [
      el("span", { class: "icon", text: "⌕" }),
      el("input", {
        type: "search",
        placeholder: "Search requirements…",
        value: _query,
        oninput: (e) => {
          _query = (e.target.value || "").toLowerCase().trim();
          renderTable();
        },
      }),
    ]);

    // scope/app are single-select presets; principle/severity are
    // multi-select sets where the "all" chip clears the set.
    function isChipActive(group, key) {
      switch (group) {
        case "scope":     return _filterScope === key;
        case "app":       return _filterApp === key;
        case "principle": return key === "all" ? _filterPrinciples.size === 0 : _filterPrinciples.has(key);
        case "severity":  return key === "all" ? _filterSeverities.size === 0 : _filterSeverities.has(key);
        default:          return false;
      }
    }

    function toggleInSet(set, key) {
      if (key === "all") set.clear();
      else if (set.has(key)) set.delete(key);
      else set.add(key);
    }

    function chip(label, key, group) {
      const isActive = isChipActive(group, key);
      return el("button", {
        type: "button",
        class: "cm-req-chip" + (isActive ? " active" : ""),
        "aria-pressed": isActive ? "true" : "false",
        onclick: () => {
          if (group === "scope") _filterScope = key;
          else if (group === "app") _filterApp = key;
          else if (group === "principle") toggleInSet(_filterPrinciples, key);
          else if (group === "severity") toggleInSet(_filterSeverities, key);
          renderControls();
          renderTable();
        },
      }, [label]);
    }

    const scopeFilter = el("div", { class: "cm-req-filter" }, [
      chip("All", "all", "scope"),
      chip("In scope", "in-scope", "scope"),
      chip("Out of scope", "out-of-scope", "scope"),
    ]);

    const appFilter = el("div", { class: "cm-req-filter" }, [
      chip("Core + Supp.", "all", "app"),
      chip("Core only", "core", "app"),
      chip("Supplemental", "supplemental", "app"),
    ]);

    const principleChips = [chip("All P.", "all", "principle")];
    (PRINCIPLES || []).forEach(p => {
      principleChips.push(chip(p.code, p.code, "principle"));
    });
    const principleFilter = el("div", { class: "cm-req-filter" }, principleChips);

    // Only severity levels that exist in the data (no "low").
    const severityFilter = el("div", { class: "cm-req-filter" }, [
      chip("All Sev.", "all", "severity"),
      chip("Critical", "critical", "severity"),
      chip("High", "high", "severity"),
      chip("Medium", "medium", "severity"),
    ]);

    const meta = el("div", { class: "cm-req-meta", id: "cm-req-meta" }, [
      String(total) + " requirements",
    ]);

    mount(root, search, scopeFilter, appFilter, principleFilter, severityFilter, meta);
  }

  // ---- row model + filtering -----------------------------------------
  function buildRowModel(activated) {
    const slugs = Object.keys(REQUIREMENTS_DETAIL || {});
    return slugs.map(slug => {
      const detail = REQUIREMENTS_DETAIL[slug] || {};
      return {
        slug,
        detail,
        title: REQUIREMENTS[slug] || slug,
        principle: principleOf(slug),
        inScope: activated.has(slug),
        mandatory: !!detail.mandatory,
        severity: severityForRow(detail),
        subs: (detail.sub_controls || []).length,
        refs: refCountForRequirement(slug),
      };
    });
  }

  function rowMatchesFilters(m) {
    if (_filterScope === "in-scope" && !m.inScope) return false;
    if (_filterScope === "out-of-scope" && m.inScope) return false;
    if (_filterApp !== "all") {
      const apps = (m.detail.sub_controls || []).map(s => s.application);
      if (!apps.includes(_filterApp)) return false;
    }
    if (_filterPrinciples.size && !_filterPrinciples.has(m.principle)) return false;
    // Filter on the exact rolled-up value the Severity column displays.
    if (_filterSeverities.size && !_filterSeverities.has(m.severity)) return false;
    if (_query) {
      const hay = (
        m.slug + " " +
        m.title + " " +
        (m.detail.description || "") + " " +
        (m.detail.sub_controls || [])
          .map(s => (s.title || "") + " " + (s.guidance || "")).join(" ")
      ).toLowerCase();
      if (!hay.includes(_query)) return false;
    }
    return true;
  }

  function sortRows(rows) {
    const dir = _sortDir;
    rows.sort((a, b) => {
      let r = 0;
      switch (_sortKey) {
        case "principle":
          r = a.principle.localeCompare(b.principle) || a.slug.localeCompare(b.slug);
          break;
        case "scope":
          r = (a.inScope === b.inScope) ? 0 : (a.inScope ? -1 : 1);
          if (r === 0) r = a.slug.localeCompare(b.slug);
          break;
        case "type":
          r = (a.mandatory === b.mandatory) ? 0 : (a.mandatory ? -1 : 1);
          if (r === 0) r = a.slug.localeCompare(b.slug);
          break;
        case "severity":
          r = SEV_RANK[b.severity] - SEV_RANK[a.severity];
          if (r === 0) r = a.slug.localeCompare(b.slug);
          break;
        case "subs":
          r = b.subs - a.subs;
          if (r === 0) r = a.slug.localeCompare(b.slug);
          break;
        case "refs":
          r = b.refs - a.refs;
          if (r === 0) r = a.slug.localeCompare(b.slug);
          break;
        case "id":
        default:
          r = a.slug.localeCompare(b.slug);
          break;
      }
      return r * dir;
    });
    return rows;
  }

  // ---- the table ------------------------------------------------------
  const COLUMNS = [
    { key: "id",        label: "Requirement", cls: "col-req" },
    { key: "principle", label: "Principle",   cls: "col-prin" },
    { key: "scope",     label: "In scope",    cls: "col-scope" },
    { key: "type",      label: "Type",        cls: "col-type" },
    { key: "severity",  label: "Severity",    cls: "col-sev" },
    { key: "subs",      label: "Subs",        cls: "col-num col-subs" },
    { key: "refs",      label: "Refs",        cls: "col-num col-refs" },
  ];

  function setSort(key) {
    if (_sortKey === key) {
      _sortDir = -_sortDir;
    } else {
      _sortKey = key;
      _sortDir = 1;
    }
    renderTable();
  }

  function buildHeader() {
    const head = el("div", { class: "cm-req-thead", role: "row" });
    COLUMNS.forEach(c => {
      const isSorted = _sortKey === c.key;
      const arrow = isSorted ? (_sortDir === 1 ? "▲" : "▼") : "";
      const cell = el("button", {
        type: "button",
        class: "cm-req-th " + c.cls + (isSorted ? " sorted" : ""),
        role: "columnheader",
        "aria-sort": isSorted ? (_sortDir === 1 ? "ascending" : "descending") : "none",
        onclick: () => setSort(c.key),
      }, [
        el("span", { class: "th-label", text: c.label }),
        el("span", { class: "th-arrow", text: arrow }),
      ]);
      head.appendChild(cell);
    });
    return head;
  }

  function buildBodyRow(m) {
    const cells = [];

    // Requirement: id chip + title
    cells.push(el("div", { class: "cm-req-td col-req" }, [
      el("span", { class: "cm-req-code", text: m.slug }),
      el("div", { class: "cm-req-title-wrap" }, [
        el("span", { class: "cm-req-title", text: m.title }),
      ]),
    ]));

    // Principle: code + short name
    cells.push(el("div", { class: "cm-req-td col-prin" }, [
      el("span", { class: "cm-req-prin-code", text: m.principle }),
      el("span", { class: "cm-req-prin-name", text: principleName(m.principle) }),
    ]));

    // In scope: dot + word
    cells.push(el("div", { class: "cm-req-td col-scope" }, [
      el("span", {
        class: "cm-req-dot" + (m.inScope ? " on" : ""),
        title: m.inScope ? "In scope" : "Out of scope",
      }),
      el("span", { class: "cm-req-scope-label", text: m.inScope ? "Yes" : "No" }),
    ]));

    // Type
    cells.push(el("div", { class: "cm-req-td col-type" }, [
      el("span", {
        class: "cm-req-pill " + (m.mandatory ? "mandatory" : "optional"),
        text: m.mandatory ? "Mandatory" : "Optional",
      }),
    ]));

    // Severity
    cells.push(el("div", { class: "cm-req-td col-sev" }, [
      m.severity
        ? el("span", { class: "cm-req-pill sev-" + m.severity, text: m.severity })
        : el("span", { class: "cm-req-dash", text: "—" }),
    ]));

    // Subs count
    cells.push(el("div", { class: "cm-req-td col-num col-subs", text: String(m.subs) }));

    // Refs count
    cells.push(el("div", { class: "cm-req-td col-num col-refs" }, [
      m.refs
        ? el("span", { text: String(m.refs) })
        : el("span", { class: "cm-req-dash", text: "—" }),
    ]));

    return el("div", {
      class: "cm-req-tr"
        + (m.inScope ? " triggered" : "")
        + (_selectedSlug === m.slug ? " selected" : ""),
      role: "row",
      tabindex: "0",
      data: { reqSlug: m.slug },
      onclick: () => selectRequirement(m.slug),
      onkeydown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectRequirement(m.slug);
        }
      },
    }, cells);
  }

  function renderTable() {
    const root = document.getElementById("cm-requirements");
    if (!root) return;
    clear(root);

    const activated = activatedSet();
    const all = buildRowModel(activated);
    const total = all.length;

    let rows = all.filter(rowMatchesFilters);
    sortRows(rows);
    const visible = rows.length;

    const meta = document.getElementById("cm-req-meta");
    if (meta) {
      meta.textContent = (visible === total)
        ? (total + " requirements")
        : (visible + " / " + total + " requirements");
    }

    // Column-header row lives in the sticky head (above the layout) so it
    // pins with the filter card. Its sub-grid template matches the rows
    // below, so columns align without any pixel measurement.
    const theadSlot = document.getElementById("cm-req-thead-slot");
    if (theadSlot) {
      clear(theadSlot);
      theadSlot.appendChild(buildHeader());
    }

    // Single-column body. Clicking a row inserts the detail inline as a
    // block sibling immediately after it (handled in selectRequirement).
    const layout = el("div", { class: "cm-req-layout" });
    const tableWrap = el("div", { class: "cm-req-table-wrap" });
    const table = el("div", { class: "cm-req-table", role: "table" });

    const body = el("div", { class: "cm-req-tbody", role: "rowgroup" });
    if (visible === 0) {
      body.appendChild(el("div", { class: "cm-req-empty",
        text: "No requirements match the current filters." }));
      // selection no longer valid in this filtered view
    } else {
      rows.forEach(m => body.appendChild(buildBodyRow(m)));
    }
    table.appendChild(body);
    tableWrap.appendChild(table);
    layout.appendChild(tableWrap);

    root.appendChild(layout);

    // If the previously selected requirement is still in the filtered view,
    // re-expand it inline; otherwise drop selection silently.
    if (_selectedSlug && rows.some(r => r.slug === _selectedSlug)) {
      openInlineDetail(_selectedSlug, activated);
    } else {
      _selectedSlug = null;
    }
  }

  // ---- inline detail (row expansion) ----------------------------------
  function collapseDetail() {
    _selectedSlug = null;
    document.querySelectorAll("#cm-requirements .cm-req-tr.selected")
      .forEach(r => r.classList.remove("selected"));
    const existing = document.getElementById("cm-req-detail");
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
  }

  function openInlineDetail(slug, activated) {
    collapseDetail();
    const row = document.querySelector(
      `#cm-requirements .cm-req-tr[data-req-slug="${slug}"]`
    );
    if (!row) return;
    _selectedSlug = slug;
    row.classList.add("selected");
    const panel = el("div", { class: "cm-req-detail", id: "cm-req-detail" });
    row.parentNode.insertBefore(panel, row.nextSibling);
    renderDetail(slug, activated || activatedSet());
  }

  function selectRequirement(slug) {
    if (_selectedSlug === slug) {
      // toggle off when clicking the active row again
      collapseDetail();
      return;
    }
    openInlineDetail(slug);
  }

  function closeDetail() { collapseDetail(); }

  function renderDetail(slug, activated) {
    const panel = document.getElementById("cm-req-detail");
    if (!panel) return;
    const detail = REQUIREMENTS_DETAIL[slug];
    if (!detail) { collapseDetail(); return; }

    const isActive = activated.has(slug);
    clear(panel);
    // out-of-scope rows get a dashed left rail (vs. the solid coral default).
    panel.classList.toggle("oos", !isActive);

    const inner = el("div", { class: "cm-req-detail-inner" });

    // header (reuses matrix detail head conventions)
    const head = el("div", { class: "cm-mx-head" }, [
      el("span", { class: "cm-detail-id", text: slug }),
      el("span", { class: "cm-detail-title", text: REQUIREMENTS[slug] || slug }),
      el("span", { class: "cm-detail-state", text: isActive ? "In scope" : "Out of scope" }),
      el("button", {
        type: "button",
        class: "cm-mx-close",
        text: "Close ✕",
        onclick: () => closeDetail(),
      }),
    ]);
    inner.appendChild(head);

    // status pills: mandatory/optional + capabilities + cadence
    const metaPills = el("div", { class: "cm-detail-pills cm-req-status-pills" });
    metaPills.appendChild(el("span", {
      class: "cm-detail-pill " + (detail.mandatory ? "modality" : ""),
      text: detail.mandatory ? "Mandatory" : "Optional",
    }));
    metaPills.appendChild(el("span", {
      class: "cm-detail-pill",
      text: "Principle " + principleOf(slug) + " · " + principleName(principleOf(slug)),
    }));
    (detail.capabilities || []).forEach(cap => {
      metaPills.appendChild(el("span", {
        class: "cm-detail-pill" + (cap === "universal" ? " universal" : ""),
        text: formatCapability(cap),
      }));
    });
    if (detail.frequency) {
      metaPills.appendChild(el("span", {
        class: "cm-detail-pill",
        text: "Cadence: " + frequencyLabel(detail.frequency),
      }));
    }
    inner.appendChild(metaPills);

    // description
    if (detail.description) {
      inner.appendChild(el("p", { class: "cm-detail-intro", text: detail.description }));
    }

    // sub-controls
    const subs = detail.sub_controls || [];
    inner.appendChild(el("div", { class: "cm-mx-section-eyebrow",
      text: "Sub-controls (" + subs.length + ")" }));
    const subWrap = el("div", { class: "cm-req-subs" });
    if (subs.length) {
      subs.forEach(sub => subWrap.appendChild(buildSubControl(sub)));
    } else {
      subWrap.appendChild(el("div", { class: "cm-detail-empty-cw",
        text: "No sub-controls listed." }));
    }
    inner.appendChild(subWrap);

    // Crosswalk refs — collapsed by default to keep the row expansion compact.
    // Native <details> handles toggle + keyboard + a11y for free; no JS state.
    const groups = mappingsForRequirement(slug);
    const cwDetails = el("details", { class: "cm-req-cw-details" });
    cwDetails.appendChild(el("summary", {
      class: "cm-mx-section-eyebrow cm-req-cw-summary",
      text: "Crosswalk refs (" + groups.length + ")",
    }));
    const cwBody = el("div", { class: "cm-req-cw-body" });
    if (!groups.length) {
      cwBody.appendChild(el("div", { class: "cm-detail-empty-cw",
        text: "No framework mappings reference this requirement." }));
    } else {
      groups.forEach(g => cwBody.appendChild(buildCrosswalkGroup(g)));
    }
    cwDetails.appendChild(cwBody);
    inner.appendChild(cwDetails);

    panel.appendChild(inner);
  }

  function buildSubControl(sub) {
    const card = el("div", { class: "cm-req-sub" });

    const head = el("div", { class: "cm-req-sub-head" }, [
      el("span", { class: "cm-req-sub-id", text: sub.id || "" }),
      el("span", { class: "cm-req-sub-title", text: sub.title || "" }),
    ]);
    card.appendChild(head);

    const pills = el("div", { class: "cm-req-sub-pills" });
    if (sub.application) {
      pills.appendChild(el("span", {
        class: "cm-detail-pill app-" + sub.application,
        text: sub.application,
      }));
    }
    if (sub.severity) {
      pills.appendChild(el("span", {
        class: "cm-detail-pill sev-" + sub.severity,
        text: "severity: " + sub.severity,
      }));
    }
    pills.appendChild(el("span", {
      class: "cm-detail-pill" + (sub.mandatory ? " modality" : ""),
      text: sub.mandatory ? "Mandatory" : "Optional",
    }));
    card.appendChild(pills);

    if (sub.guidance) {
      card.appendChild(el("p", { class: "cm-req-sub-guidance", text: sub.guidance }));
    }

    // should_include: render INLINE and ONLY when present, so its absence
    // is never a labeled-but-empty section. (Only ~1/127 sub-controls have
    // this field — treat absence as the normal case.)
    if (Array.isArray(sub.should_include) && sub.should_include.length) {
      const checklist = el("ul", { class: "cm-req-checklist" });
      checklist.appendChild(el("li", { class: "cm-req-check-lead", text: "Should include" }));
      sub.should_include.forEach(item => {
        checklist.appendChild(el("li", { class: "cm-req-check-item" }, [
          el("span", { class: "cm-req-check-mark", text: "✓" }),
          el("span", { class: "cm-req-check-text", text: item }),
        ]));
      });
      card.appendChild(checklist);
    }

    return card;
  }

  function buildCrosswalkGroup(g) {
    const wrap = el("div", { class: "cm-req-cw-group" });

    wrap.appendChild(el("div", { class: "cm-req-cw-group-head" }, [
      el("span", { class: "cm-req-cw-group-name", text: g.name }),
      el("span", { class: "cm-req-cw-group-count",
        text: g.mappings.length + " ref" + (g.mappings.length === 1 ? "" : "s") }),
    ]));

    const list = el("div", { class: "cm-detail-cw-list" });
    g.mappings.forEach(m => {
      const row = el("div", { class: "cm-detail-cw cm-req-cw" });
      const tgtCol = el("div", { class: "cm-req-cw-tgt" }, [
        el("span", { class: "tg", text: String(m.target == null ? "" : m.target) }),
        m.target_title
          ? el("span", { class: "cm-req-cw-tgt-title", text: m.target_title })
          : null,
      ]);
      const pills = el("div", { class: "cm-req-cw-pills" }, [
        m.relationship
          ? el("span", { class: "cm-detail-pill", text: relationshipLabel(m.relationship) })
          : null,
        m.confidence
          ? el("span", { class: "cm-detail-pill conf-" + m.confidence,
              text: m.confidence + " conf" })
          : null,
      ]);
      row.appendChild(tgtCol);
      row.appendChild(pills);
      list.appendChild(row);
      if (m.notes) {
        list.appendChild(el("div", { class: "cm-req-cw-notes", text: m.notes }));
      }
    });
    wrap.appendChild(list);

    return wrap;
  }

  // ---- public render entry point -------------------------------------
  function renderRequirements(force) {
    if (!document.getElementById("cm-requirements")) return;
    if (!force && _rendered && !_dirty) return;
    renderControls();
    renderTable();
    _rendered = true;
    _dirty = false;
  }

  // ---- wiring ---------------------------------------------------------
  function init() {
    // Re-render every time the requirements tab is activated.
    document.addEventListener("click", (e) => {
      const tab = e.target.closest && e.target.closest('[data-tab="requirements"]');
      if (tab) {
        setTimeout(() => renderRequirements(true), 0);
      }
    });

    // Reset flag on form re-submission so the table reflects new activations.
    const markDirty = () => {
      _dirty = true;
      _selectedSlug = null;
      const reqPane = document.querySelector('.cm-pane[data-pane="requirements"]');
      if (reqPane && reqPane.classList.contains("active")) {
        renderRequirements(true);
      }
    };
    document.getElementById("cm-submit")?.addEventListener("click", markDirty);
    document.getElementById("cm-form-card")?.addEventListener("submit", markDirty);

    // Esc collapses the currently-expanded inline detail.
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (_selectedSlug) closeDetail();
    });

    // If the page loads with the requirements tab already active, render.
    const reqTab = document.getElementById("tab-requirements");
    if (reqTab && reqTab.classList.contains("active")) {
      renderRequirements(true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
