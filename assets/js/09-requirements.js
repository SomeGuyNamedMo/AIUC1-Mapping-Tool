"use strict";

/* ============================================================
   REQUIREMENTS TAB
   Renders the full AIUC-1 requirement catalog grouped by
   Principle, with a right-side detail drawer mirroring the
   matrix drawer aesthetic.
   ============================================================ */

(function () {
  // ---- module state ---------------------------------------------------
  let _rendered = false;
  let _dirty = true;
  let _filterScope = "all";   // "all" | "in-scope" | "out-of-scope"
  let _filterApp = "all";     // "all" | "core" | "supplemental"
  let _query = "";
  let _selectedSlug = null;

  // ---- helpers --------------------------------------------------------
  function activatedSet() {
    const { reasons } = deriveActivations(state);
    return new Set(Object.keys(reasons));
  }

  function principleOf(slug) {
    return (slug || "").charAt(0);
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

  // ---- mappings filter -----------------------------------------------
  // For a given requirement id (e.g. "B005"), produce a map keyed by
  // crosswalk slug containing { meta, mappings: [...] } where mappings
  // are the entries whose `source` matches the requirement id.
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
          renderList();
        },
      }),
    ]);

    function chip(label, key, group) {
      const isActive = (group === "scope" ? _filterScope : _filterApp) === key;
      return el("button", {
        type: "button",
        class: "cm-req-chip" + (isActive ? " active" : ""),
        onclick: () => {
          if (group === "scope") _filterScope = key; else _filterApp = key;
          renderControls();
          renderList();
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

    const meta = el("div", { class: "cm-req-meta", id: "cm-req-meta" }, [
      String(total) + " requirements",
    ]);

    mount(root, search, scopeFilter, appFilter, meta);
  }

  // ---- main list ------------------------------------------------------
  function rowMatchesFilters(slug, detail, activated) {
    if (_filterScope === "in-scope" && !activated.has(slug)) return false;
    if (_filterScope === "out-of-scope" && activated.has(slug)) return false;
    if (_filterApp !== "all") {
      const apps = (detail.sub_controls || []).map(s => s.application);
      if (!apps.includes(_filterApp)) return false;
    }
    if (_query) {
      const hay = (
        slug + " " +
        (REQUIREMENTS[slug] || "") + " " +
        (detail.description || "") + " " +
        (detail.sub_controls || []).map(s => (s.title || "") + " " + (s.guidance || "")).join(" ")
      ).toLowerCase();
      if (!hay.includes(_query)) return false;
    }
    return true;
  }

  function severityForRow(detail) {
    const subs = detail.sub_controls || [];
    if (subs.some(s => s.severity === "high")) return "high";
    if (subs.some(s => s.severity === "medium")) return "medium";
    if (subs.some(s => s.severity === "low")) return "low";
    return null;
  }

  function buildRow(slug, detail, activated) {
    const isActive = activated.has(slug);
    const sev = severityForRow(detail);

    const code = el("span", { class: "cm-req-code", text: slug });

    const titleWrap = el("div", { class: "cm-req-title-wrap" }, [
      el("span", { class: "cm-req-title", text: REQUIREMENTS[slug] || slug }),
      el("span", { class: "cm-req-sub-meta",
        text: (detail.sub_controls || []).length + " sub-control"
          + ((detail.sub_controls || []).length === 1 ? "" : "s")
          + " · " + frequencyLabel(detail.frequency) }),
    ]);

    const pills = el("div", { class: "cm-req-pills" });
    if (detail.mandatory) {
      pills.appendChild(el("span", { class: "cm-req-pill mandatory", text: "Mandatory" }));
    } else {
      pills.appendChild(el("span", { class: "cm-req-pill optional", text: "Optional" }));
    }
    if (sev) {
      pills.appendChild(el("span", { class: "cm-req-pill sev sev-" + sev, text: sev }));
    }

    const dot = el("span", {
      class: "cm-req-dot" + (isActive ? " on" : ""),
      title: isActive ? "In scope" : "Out of scope",
    });

    const arrow = el("span", { class: "cm-req-arrow", text: "›" });

    const row = el("div", {
      class: "cm-req-row" + (isActive ? " triggered" : "") + (_selectedSlug === slug ? " selected" : ""),
      role: "button",
      tabindex: "0",
      data: { reqSlug: slug },
      onclick: () => openDetail(slug),
      onkeydown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetail(slug);
        }
      },
    }, [code, titleWrap, pills, dot, arrow]);

    return row;
  }

  function renderList() {
    const root = document.getElementById("cm-requirements");
    if (!root) return;
    clear(root);

    const activated = activatedSet();
    const groups = {};
    PRINCIPLES.forEach(p => { groups[p.code] = []; });

    const slugs = Object.keys(REQUIREMENTS_DETAIL || {}).sort();
    let visible = 0;

    slugs.forEach(slug => {
      const detail = REQUIREMENTS_DETAIL[slug];
      if (!detail) return;
      if (!rowMatchesFilters(slug, detail, activated)) return;
      const code = principleOf(slug);
      if (!groups[code]) groups[code] = [];
      groups[code].push({ slug, detail });
      visible++;
    });

    const meta = document.getElementById("cm-req-meta");
    if (meta) {
      const total = Object.keys(REQUIREMENTS_DETAIL || {}).length;
      meta.textContent = (visible === total)
        ? (total + " requirements")
        : (visible + " / " + total + " requirements");
    }

    if (visible === 0) {
      root.appendChild(el("div", { class: "cm-req-empty",
        text: "No requirements match the current filters." }));
      return;
    }

    PRINCIPLES.forEach(p => {
      const items = groups[p.code] || [];
      if (!items.length) return;

      const head = el("div", { class: "cm-req-group-head" }, [
        el("span", { class: "cm-req-group-code", text: p.code }),
        el("span", { class: "cm-req-group-name", text: p.name }),
        el("span", { class: "cm-req-group-count", text: items.length + " req" + (items.length === 1 ? "" : "s") }),
      ]);
      root.appendChild(head);

      const list = el("div", { class: "cm-req-group-list" });
      items.forEach(({ slug, detail }) => {
        list.appendChild(buildRow(slug, detail, activated));
        list.appendChild(el("div", { class: "cm-req-expansion", data: { reqSlug: slug } }));
      });
      root.appendChild(list);
    });
  }

  // ---- inline expansion ----------------------------------------------
  // Each row has a paired .cm-req-expansion sibling (added by renderList).
  // Click a row → render full detail into that row's expansion and toggle
  // open. Click the same row again → collapse. Multiple rows may stay
  // open simultaneously for cross-requirement comparison.

  function openDetail(slug) {
    const detail = REQUIREMENTS_DETAIL[slug];
    if (!detail) return;

    const row = document.querySelector(
      `#cm-requirements .cm-req-row[data-req-slug="${slug}"]`
    );
    const expansion = document.querySelector(
      `#cm-requirements .cm-req-expansion[data-req-slug="${slug}"]`
    );
    if (!row || !expansion) return;

    if (expansion.classList.contains("open")) {
      closeDetail(slug);
      return;
    }

    renderDetail(slug, detail, expansion);
    expansion.classList.add("open");
    row.classList.add("expanded");

    setTimeout(() => {
      expansion.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  }

  function closeDetail(slug) {
    if (slug) {
      const row = document.querySelector(
        `#cm-requirements .cm-req-row[data-req-slug="${slug}"]`
      );
      const expansion = document.querySelector(
        `#cm-requirements .cm-req-expansion[data-req-slug="${slug}"]`
      );
      if (row) row.classList.remove("expanded");
      if (expansion) expansion.classList.remove("open");
      return;
    }
    // No slug → close all
    document
      .querySelectorAll("#cm-requirements .cm-req-expansion.open")
      .forEach(e => e.classList.remove("open"));
    document
      .querySelectorAll("#cm-requirements .cm-req-row.expanded")
      .forEach(r => r.classList.remove("expanded"));
  }

  function renderDetail(slug, detail, container) {
    if (!container) return;
    const activated = activatedSet();
    const isActive = activated.has(slug);

    clear(container);
    container.classList.toggle("triggered", isActive);

    const inner = el("div", { class: "cm-req-expansion-inner" });

    // header
    const head = el("div", { class: "cm-mx-head" });
    head.appendChild(el("span", { class: "cm-detail-id", text: slug }));
    head.appendChild(el("span", {
      class: "cm-detail-title",
      text: REQUIREMENTS[slug] || slug,
    }));
    head.appendChild(el("span", {
      class: "cm-detail-state",
      text: isActive ? "In scope" : "Out of scope",
    }));
    head.appendChild(el("button", {
      type: "button",
      class: "cm-mx-close",
      text: "Collapse ↑",
      onclick: () => closeDetail(slug),
    }));
    inner.appendChild(head);

    // status pills (mandatory/optional + capabilities + cadence)
    const metaPills = el("div", { class: "cm-detail-pills cm-req-status-pills" });
    metaPills.appendChild(el("span", {
      class: "cm-detail-pill " + (detail.mandatory ? "modality" : ""),
      text: detail.mandatory ? "Mandatory" : "Optional",
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

    // 2-column body: sub-controls | crosswalk refs (stacks at narrow widths)
    const grid = el("div", { class: "cm-mx-grid" });

    const subs = detail.sub_controls || [];
    const subsCol = el("div", { class: "cm-req-subs-col" });
    subsCol.appendChild(el("div", { class: "cm-mx-section-eyebrow",
      text: "Sub-controls (" + subs.length + ")" }));
    const subWrap = el("div", { class: "cm-req-subs" });
    if (subs.length) {
      subs.forEach(sub => subWrap.appendChild(buildSubControl(sub)));
    } else {
      subWrap.appendChild(el("div", { class: "cm-detail-empty-cw",
        text: "No sub-controls listed." }));
    }
    subsCol.appendChild(subWrap);
    grid.appendChild(subsCol);

    const cwCol = el("div", { class: "cm-req-cw-col" });
    const groups = mappingsForRequirement(slug);
    cwCol.appendChild(el("div", { class: "cm-mx-section-eyebrow",
      text: "Crosswalk refs (" + groups.length + ")" }));
    const cwBody = el("div", { class: "cm-req-cw-body" });
    if (!groups.length) {
      cwBody.appendChild(el("div", { class: "cm-detail-empty-cw",
        text: "No framework mappings reference this requirement." }));
    } else {
      groups.forEach(g => cwBody.appendChild(buildCrosswalkGroup(g)));
    }
    cwCol.appendChild(cwBody);
    grid.appendChild(cwCol);

    inner.appendChild(grid);
    container.appendChild(inner);
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

    if (Array.isArray(sub.should_include) && sub.should_include.length) {
      const checklist = el("ul", { class: "cm-req-checklist" });
      sub.should_include.forEach(item => {
        checklist.appendChild(el("li", { class: "cm-req-check-item" }, [
          el("span", { class: "cm-req-check-mark", text: "✓" }),
          el("span", { class: "cm-req-check-text", text: item }),
        ]));
      });
      card.appendChild(el("div", { class: "cm-req-checklist-label",
        text: "Should include" }));
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
    renderList();
    _rendered = true;
    _dirty = false;
  }

  // ---- wiring ---------------------------------------------------------
  function init() {
    // Lazy + state-aware: re-render every time the requirements tab is
    // activated. Cheap to do (~50 DOM rows) and avoids needing to hook
    // submitForm — a stale view is impossible because the user must
    // click into the tab to see it.
    document.addEventListener("click", (e) => {
      const tab = e.target.closest && e.target.closest('[data-tab="requirements"]');
      if (tab) {
        // Allow switchTab to update visibility first, then render fresh.
        setTimeout(() => renderRequirements(true), 0);
      }
    });

    // Reset flag on form re-submission so list reflects new activations
    // even if the user lingers on the requirements tab when a re-render
    // is triggered later. Listen to the submit button + form submit.
    const markDirty = () => {
      _dirty = true;
      const reqPane = document.querySelector('.cm-pane[data-pane="requirements"]');
      if (reqPane && reqPane.classList.contains("active")) {
        renderRequirements(true);
      }
    };
    document.getElementById("cm-submit")?.addEventListener("click", markDirty);
    document.getElementById("cm-form-card")?.addEventListener("submit", markDirty);

    // Esc closes any open expansion(s).
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const anyOpen = document.querySelector("#cm-requirements .cm-req-expansion.open");
      if (anyOpen) closeDetail();
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

  // expose
  window.renderRequirements = renderRequirements;
})();
