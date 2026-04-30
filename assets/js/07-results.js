"use strict";

/* ============================================================
   RESULTS
   ============================================================ */

// ---- detail drawer (module-level so always defined, even before first renderResults) ----
function openDetailDrawer() {
  document.getElementById("cm-detail").classList.add("open");
  document.getElementById("cm-detail-backdrop").classList.add("open");
}
function closeDetailDrawer() {
  const detail = document.getElementById("cm-detail");
  const backdrop = document.getElementById("cm-detail-backdrop");
  if (detail) detail.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
  document.querySelectorAll(".cm-matrix-row .cell.selected").forEach(c => c.classList.remove("selected"));
}

// Attach once at script load (defer scripts run after DOM is fully parsed)
{
  const backdrop = document.getElementById("cm-detail-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeDetailDrawer);
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.getElementById("cm-detail")?.classList.contains("open")) {
    closeDetailDrawer();
  }
});

function renderResults() {
  const { reasons, buckets } = deriveActivations(state);
  const activated = Object.keys(reasons);
  const activatedSet = new Set(activated);
  const recs = recommendedSlugs(state);
  const triggeredSlugs = new Set(recs.map(r => r.slug));
  const triggerReason = Object.fromEntries(recs.map(r => [r.slug, r.why]));

  const total = Object.keys(REQUIREMENTS).length;
  const num = activated.length;
  const appLabel = state.appName.trim() || "Your application";

  // ============= results header =============
  const eyebrow = document.getElementById("cm-result-eyebrow");
  mount(eyebrow,
    el("span", { style: { display: "inline-block", width: "5px", height: "5px",
      borderRadius: "50%", background: "var(--coral)", verticalAlign: "middle",
      marginRight: "9px", transform: "translateY(-1px)" } }),
    "Framework scope · ",
    el("span", { style: { color: "var(--text)" }, text: appLabel }),
  );

  const title = document.getElementById("cm-result-title");
  mount(title,
    document.createTextNode(num + " "),
    el("em", { text: "of " + total }),
    document.createTextNode(" Requirements activated."),
  );

  const triggerCount = recs.length;
  const sub = document.getElementById("cm-result-sub");
  if (triggerCount) {
    mount(sub,
      "Your context triggers ",
      el("b", { style: { color: "var(--text)" }, text: String(triggerCount) }),
      " additional framework" + (triggerCount === 1 ? "" : "s") +
      ". Your selected framework already maps into " + (triggerCount === 1 ? "it" : "all of them") + ".",
    );
  } else {
    sub.textContent = "This mapping covers 17 frameworks. Browse them by tab.";
  }

  // ============= scorecard =============
  const statNum = document.getElementById("cm-stat-num");
  mount(statNum, String(num), el("span", { class: "of", text: " / " + total }));

  const totalActivated = num || 1;
  const segs = [
    { label: "Universal",       count: buckets.universal  || 0, color: "var(--text-dim)"  },
    { label: "Modality-driven", count: buckets.modality   || 0, color: "var(--coral)"     },
    { label: "Automation",      count: buckets.automation || 0, color: "var(--amber)"     },
    { label: "External-facing", count: buckets.external   || 0, color: "var(--teal)"      },
  ];
  const bar = document.getElementById("cm-stat-bar");
  clear(bar);
  segs.forEach(s => {
    if (!s.count) return;
    bar.appendChild(el("div", { style: {
      width: ((s.count / totalActivated) * 100) + "%",
      background: s.color,
    }}));
  });

  const legend = document.getElementById("cm-stat-legend");
  clear(legend);
  segs.forEach(s => {
    legend.appendChild(el("span", { class: "item" }, [
      el("span", { class: "sw", style: { background: s.color } }),
      document.createTextNode(s.label + " "),
      el("span", { style: { color: "var(--text)", marginLeft: "6px" }, text: String(s.count) }),
    ]));
  });

  const modalityList = [...new Set([...state.inputModalities, ...state.outputModalities])].join(" + ") || "your modalities";
  const lines = [
    { n: buckets.universal || 0, label: "Universal mandatories", suffix: " — baseline controls every application carries", tag: "ALWAYS" },
    { n: buckets.modality  || 0, label: "Modality-driven",       suffix: " — activated by " + modalityList, tag: "DERIVATION" },
  ];
  if (buckets.automation) lines.push({ n: buckets.automation, label: "Automation", suffix: " — tool calls / agentic actions", tag: "DERIVATION" });
  if (buckets.external)   lines.push({ n: buckets.external,   label: "External-facing", suffix: " — A007 (IP-violation exposure)", tag: "DERIVATION" });

  const breakdown = document.getElementById("cm-stat-breakdown");
  clear(breakdown);
  lines.forEach(row => {
    breakdown.appendChild(el("div", { class: "cm-bd-row" }, [
      el("div", { class: "n" + (row.n === 0 ? " zero" : ""), text: String(row.n) }),
      el("div", { class: "l" }, [
        el("b", { text: row.label }),
        document.createTextNode(row.suffix),
      ]),
      el("div", { class: "tag", text: row.tag }),
    ]));
  });

  // ============= crosswalk matrix =============
  // Compute per-(framework, principle) cell values for the user's scope.
  // Each cell.value = number of activated framework controls in that principle
  // that map into that framework. cell.total = total framework-side count.
  const matrixData = CROSSWALKS.map(cw => {
    const sources = CROSSWALK_SOURCES[cw.slug] || [];
    const dist = PRINCIPLE_DISTRIBUTION[cw.slug] || { A:0, B:0, C:0, D:0, E:0, F:0 };
    const activeByPrinciple = { A:0, B:0, C:0, D:0, E:0, F:0 };
    sources.forEach(src => {
      const p = src.charAt(0);
      if (activeByPrinciple[p] !== undefined && activatedSet.has(src)) {
        activeByPrinciple[p]++;
      }
    });
    const totalActive = Object.values(activeByPrinciple).reduce((a,b)=>a+b, 0);
    const totalCw    = Object.values(dist).reduce((a,b)=>a+b, 0);
    return {
      slug: cw.slug, title: cw.title, publisher: cw.publisher,
      blurb: cw.blurb, samples: cw.samples,
      counts: cw.counts,
      meta: FRAMEWORK_META[cw.slug] || { category: "standard", geo: "—", sourceUrl: "https://www.aiuc-1.com/crosswalks/" + cw.slug },
      dist, activeByPrinciple, totalActive, totalCw,
      triggered: triggeredSlugs.has(cw.slug),
      triggerReason: triggerReason[cw.slug] || null,
    };
  });

  // Sort: triggered first, then by total user-activated coverage descending.
  matrixData.sort((a, b) => {
    if (a.triggered !== b.triggered) return a.triggered ? -1 : 1;
    if (b.totalActive !== a.totalActive) return b.totalActive - a.totalActive;
    return b.totalCw - a.totalCw;
  });

  // Triggered frameworks only — the rest live on the Crosswalks tab.
  const activeMatrixData = matrixData.filter(m => m.triggered);

  const maxCellActive = Math.max(1, ...activeMatrixData.flatMap(m =>
    Object.values(m.activeByPrinciple)
  ));

  const matrix = document.getElementById("cm-matrix");
  clear(matrix);

  if (activeMatrixData.length === 0) {
    matrix.appendChild(el("div", { class: "cm-matrix-empty",
      text: "No frameworks triggered. Select jurisdictions in Step 3 to see your required coverage." }));
    document.getElementById("cm-matrix-meta").textContent = "0 triggered";
    return;
  }

  const table = el("div", { class: "cm-matrix-table" });

  // header — short principle names; full names on hover via title attribute
  const PRINCIPLE_SHORT = {
    A: "Data", B: "Security", C: "Safety",
    D: "Reliab.", E: "Acct.", F: "Society",
  };
  table.appendChild(el("div", { class: "cm-matrix-corner", text: "Framework" }));
  PRINCIPLES.forEach(p => {
    table.appendChild(el("div", {
      class: "cm-matrix-col-head",
      title: p.name,
    }, [
      el("span", { class: "pcode", text: p.code }),
      el("span", { class: "pname", text: PRINCIPLE_SHORT[p.code] || p.name.split(" & ")[0] }),
    ]));
  });
  table.appendChild(el("div", { class: "cm-matrix-total-head", text: "Activated" }));

  // rows — triggered-only filtered set
  activeMatrixData.forEach(m => {
    const row = el("div", {
      class: "cm-matrix-row" + (m.triggered ? " triggered" : ""),
      data: { slug: m.slug },
    });

    const label = el("div", { class: "row-label" }, [
      el("span", { class: "name", text: m.title }),
      el("span", { class: "meta",
        text: m.triggered ? "● Triggered · " + m.triggerReason : m.meta.geo + " · " + m.meta.category }),
    ]);
    label.addEventListener("click", () => selectMatrix(m.slug, null));
    row.appendChild(label);

    PRINCIPLES.forEach(p => {
      const active = m.activeByPrinciple[p.code] || 0;
      const cwTotal = m.dist[p.code] || 0;
      const cell = el("div", {
        class: "cell" + (cwTotal === 0 ? " zero" : ""),
        data: { slug: m.slug, principle: p.code },
        title: cwTotal
          ? `${m.title} → Principle ${p.code}: ${active} activated of ${cwTotal} mapped`
          : `${m.title} has no Principle ${p.code} mappings`,
      });
      const intensity = cwTotal === 0 ? 0 : 0.18 + 0.82 * (active / Math.max(1, maxCellActive));
      const square = el("div", {
        class: "square",
        style: { opacity: String(intensity) },
      });
      cell.appendChild(square);
      cell.appendChild(el("span", { class: "num",
        text: cwTotal === 0 ? "—" : String(active) }));
      cell.addEventListener("click", () => selectMatrix(m.slug, p.code));
      row.appendChild(cell);
    });

    const totalCell = el("div", { class: "row-total" }, [
      el("span", { text: String(m.totalActive) }),
      el("span", { class: "of", text: "/ " + m.totalCw }),
    ]);
    row.appendChild(totalCell);
    table.appendChild(row);
  });

  matrix.appendChild(table);

  // foot/legend
  const matrixFoot = el("div", { class: "cm-matrix-foot" }, [
    el("span", { text: "Coverage intensity" }),
    el("span", { class: "scale" }, [
      el("span", { class: "sw", style: { opacity: "0.18" } }),
      el("span", { class: "sw", style: { opacity: "0.4" } }),
      el("span", { class: "sw", style: { opacity: "0.7" } }),
      el("span", { class: "sw", style: { opacity: "1" } }),
    ]),
    el("span", { text: "Numbers are activated framework controls in scope" }),
  ]);
  matrix.appendChild(matrixFoot);

  document.getElementById("cm-matrix-meta").textContent =
    activeMatrixData.length + " triggered";

  // ============= matrix detail modal =============
  // A single centered modal opens for whichever matrix row/cell was clicked.
  // Inside the modal, principle groups are collapsable; default-expanded
  // for the principle the user clicked (or for triggered groups when no
  // principle filter is set), default-collapsed otherwise.

  function selectMatrix(slug, principleOrNull) {
    document
      .querySelectorAll(".cm-matrix-row .cell.selected")
      .forEach(c => c.classList.remove("selected"));
    if (principleOrNull) {
      const cell = document.querySelector(
        `.cm-matrix-row[data-slug="${slug}"] .cell[data-principle="${principleOrNull}"]`
      );
      if (cell) cell.classList.add("selected");
    }
    document
      .querySelectorAll(".cm-matrix-row.expanded")
      .forEach(r => r.classList.remove("expanded"));
    const row = document.querySelector(`.cm-matrix-row[data-slug="${slug}"]`);
    if (row) row.classList.add("expanded");

    renderMatrixDetail(slug, principleOrNull, matrixData);

    const modal = document.getElementById("cm-mx-modal");
    const back = document.getElementById("cm-mx-modal-backdrop");
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }
    if (back) back.classList.add("open");

    const content = document.getElementById("cm-mx-modal-content");
    if (content) content.scrollTop = 0;
  }

  function closeModal() {
    const modal = document.getElementById("cm-mx-modal");
    const back = document.getElementById("cm-mx-modal-backdrop");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
    if (back) back.classList.remove("open");
    document
      .querySelectorAll(".cm-matrix-row .cell.selected")
      .forEach(c => c.classList.remove("selected"));
    document
      .querySelectorAll(".cm-matrix-row.expanded")
      .forEach(r => r.classList.remove("expanded"));
  }

  document.getElementById("cm-mx-modal-backdrop")
    ?.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" &&
        document.getElementById("cm-mx-modal")?.classList.contains("open")) {
      closeModal();
    }
  });

  function buildMappingItem(mp) {
    const src = mp.source || "";
    const isActive = activatedSet.has(src);
    const rel = (mp.relationship || "").toString();
    const conf = (mp.confidence || "").toString();
    const tgt = mp.target == null ? "—" : String(mp.target);

    const item = el("div", {
      class: "cm-detail-cw cm-detail-cw--full" + (isActive ? " triggered" : ""),
    });

    item.appendChild(el("div", { class: "cm-detail-cw-src" }, [
      el("span", { class: "fw", text: src }),
      el("span", { class: "fw-title",
        text: REQUIREMENTS[src] ? " · " + REQUIREMENTS[src] : "" }),
    ]));
    item.appendChild(el("span", { class: "arrow", text: "→" }));
    const tgtCol = el("div", { class: "cm-detail-cw-tgt" }, [
      el("span", { class: "tg", text: tgt }),
    ]);
    if (mp.target_title) {
      tgtCol.appendChild(el("span", { class: "tg-sub", text: mp.target_title }));
    }
    item.appendChild(tgtCol);

    const pills = el("div", { class: "cm-detail-cw-pills" });
    if (rel) {
      const relLabel = (typeof RELATIONSHIP_LABELS !== "undefined" && RELATIONSHIP_LABELS[rel])
        || rel.replace(/_/g, " ");
      pills.appendChild(el("span", {
        class: "cm-detail-pill rel-" + rel.replace(/[^a-z0-9_-]/gi, "-").toLowerCase(),
        text: relLabel,
      }));
    }
    if (conf) {
      pills.appendChild(el("span", {
        class: "cm-detail-pill conf-" + conf.replace(/[^a-z0-9_-]/gi, "-").toLowerCase(),
        text: conf,
      }));
    }
    item.appendChild(pills);

    if (mp.notes) {
      item.appendChild(el("div", { class: "cm-detail-cw-notes", text: mp.notes }));
    }
    return item;
  }

  function renderMatrixDetail(slug, principle, dataAll) {
    const m = dataAll.find(x => x.slug === slug);
    if (!m) return;
    const content = document.getElementById("cm-mx-modal-content");
    if (!content) return;
    clear(content);

    // header — short category tag, framework title, triggered state, close btn
    const head = el("div", { class: "cm-mx-head" });
    head.appendChild(el("span", {
      class: "cm-detail-id",
      text: (m.meta.category || "framework").replace(/-/g, " "),
    }));
    head.appendChild(el("span", { class: "cm-detail-title", text: m.title }));
    if (m.triggered) {
      head.appendChild(el("span", { class: "cm-detail-state", text: "Triggered" }));
    }
    const closeBtn = el("button", {
      type: "button",
      class: "cm-mx-close",
      "aria-label": "Close",
      text: "Close ✕",
    });
    closeBtn.addEventListener("click", closeModal);
    head.appendChild(closeBtn);
    content.appendChild(head);

    // sub-context
    const subContext = principle
      ? "Principle " + principle + " · " + (PRINCIPLES.find(p => p.code === principle)?.name || "")
      : (m.meta.geo || "");
    if (subContext) {
      content.appendChild(el("div", { class: "cm-detail-sub", text: subContext }));
    }

    // intro from CROSSWALK_DETAILS
    const cwDetail = (typeof CROSSWALK_DETAILS !== "undefined" && CROSSWALK_DETAILS[slug]) || null;
    if (cwDetail && cwDetail.description) {
      content.appendChild(el("p", { class: "cm-detail-intro", text: cwDetail.description }));
    }

    // scope summary first (top of modal)
    const sideCol = el("div", { class: "cm-mx-side" });
    const sources = CROSSWALK_SOURCES[slug] || [];
    const inScope = principle
      ? sources.filter(s => s.charAt(0) === principle)
      : sources;
    const byActive = inScope.filter(s => activatedSet.has(s));

    sideCol.appendChild(el("div", { class: "cm-mx-section-eyebrow",
      text: principle ? "Scope · Principle " + principle : "Scope summary" }));
    sideCol.appendChild(el("div", { class: "cm-mx-stats" }, [
      el("div", { class: "cm-mx-stats-row" }, [
        el("span", { class: "l", text: "Activated" }),
        el("span", { class: "v", text: byActive.length + " controls" }),
      ]),
      el("div", { class: "cm-mx-stats-row" }, [
        el("span", { class: "l", text: "Mapped, out of scope" }),
        el("span", { class: "v", text: (inScope.length - byActive.length) + " controls" }),
      ]),
      el("div", { class: "cm-mx-stats-row" }, [
        el("span", { class: "l", text: "Total mappings" }),
        el("span", { class: "v", text: String(m.counts.total) }),
      ]),
      el("div", { class: "cm-mx-stats-row" }, [
        el("span", { class: "l", text: "Unique controls" }),
        el("span", { class: "v", text: String(m.counts.unique) }),
      ]),
    ]));

    if (cwDetail) {
      const footParts = [];
      if (cwDetail.target_version) footParts.push("v" + cwDetail.target_version);
      if (cwDetail.publisher) footParts.push(cwDetail.publisher);

      const foot = el("div", { class: "cm-mx-foot" });
      if (footParts.length) foot.appendChild(document.createTextNode(footParts.join(" · ")));
      const url = cwDetail.source_url || (m.meta && m.meta.sourceUrl);
      if (url) {
        if (footParts.length) foot.appendChild(document.createTextNode(" · "));
        foot.appendChild(el("a", {
          href: url, target: "_blank", rel: "noopener",
          text: "View source ↗",
        }));
      }
      if (foot.childNodes.length) sideCol.appendChild(foot);
    }
    content.appendChild(sideCol);

    const grid = el("div", { class: "cm-mx-grid" });

    // mappings column — collapsable principle groups
    const mappingsCol = el("div", { class: "cm-mx-mappings" });
    const allMappings = (cwDetail && Array.isArray(cwDetail.mappings)) ? cwDetail.mappings : [];

    mappingsCol.appendChild(el("div", { class: "cm-mx-section-eyebrow",
      text: "Mappings (" + allMappings.length + ")" }));

    if (!allMappings.length) {
      mappingsCol.appendChild(el("div", { class: "cm-detail-empty-cw",
        text: "No detailed mappings available for this framework." }));
    } else {
      const byP = { A: [], B: [], C: [], D: [], E: [], F: [] };
      allMappings.forEach(mp => {
        const c = (mp.source || "").charAt(0);
        if (byP[c]) byP[c].push(mp);
      });
      PRINCIPLES.forEach(p => {
        const items = byP[p.code];
        if (!items || !items.length) return;
        const inScopeCount = items.filter(mp => activatedSet.has(mp.source || "")).length;
        const isTriggered = inScopeCount > 0;

        const group = el("div", {
          class: "cm-mx-group" + (isTriggered ? " triggered" : ""),
          data: { principle: p.code },
        });
        const groupHead = el("button", {
          type: "button",
          class: "cm-mx-group-head",
        });
        groupHead.appendChild(el("span", { class: "cm-mx-group-code", text: p.code }));
        groupHead.appendChild(el("span", { class: "cm-mx-group-name", text: p.name }));
        groupHead.appendChild(el("span", { class: "cm-mx-group-count",
          text: items.length + " ref" + (items.length === 1 ? "" : "s") +
            (inScopeCount > 0 ? " · " + inScopeCount + " in scope" : "") }));
        groupHead.appendChild(el("span", { class: "cm-mx-group-arrow", text: "▾" }));
        groupHead.addEventListener("click", () => {
          group.classList.toggle("open");
        });
        group.appendChild(groupHead);

        const body = el("div", { class: "cm-mx-group-body" });
        const list = el("div", { class: "cm-detail-cw-list cm-detail-cw-list--full" });
        items.forEach(mp => list.appendChild(buildMappingItem(mp)));
        body.appendChild(list);
        group.appendChild(body);
        mappingsCol.appendChild(group);
      });
    }
    grid.appendChild(mappingsCol);

    content.appendChild(grid);
  }

  // ============= crosswalks glossary =============
  const glossState = { search: "", category: "all", sort: "triggered" };
  const glossControls = document.getElementById("cm-gloss-controls");
  clear(glossControls);

  // search
  const searchWrap = el("div", { class: "cm-gloss-search" });
  searchWrap.appendChild(el("span", { class: "icon", text: "⌕" }));
  const searchInput = el("input", {
    type: "text",
    placeholder: "Search frameworks, publishers, jurisdictions…",
  });
  searchInput.addEventListener("input", e => {
    glossState.search = e.target.value.toLowerCase();
    renderGlossList();
  });
  searchWrap.appendChild(searchInput);
  glossControls.appendChild(searchWrap);

  // category filter
  const filterGroup = el("div", { class: "cm-gloss-filter" });
  ["all", "regulation", "standard", "threat-model"].forEach(cat => {
    const btn = el("button", {
      type: "button",
      class: glossState.category === cat ? "active" : "",
      text: cat === "all" ? "All" : cat.replace("-", " "),
      data: { cat },
    });
    btn.addEventListener("click", () => {
      glossState.category = cat;
      filterGroup.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
      renderGlossList();
    });
    filterGroup.appendChild(btn);
  });
  glossControls.appendChild(filterGroup);

  // sort
  const sortWrap = el("div", { class: "cm-gloss-sort" });
  sortWrap.appendChild(el("span", { text: "Sort:" }));
  const sortSelect = el("select");
  [
    ["triggered", "Triggered first"],
    ["coverage",  "Coverage (high → low)"],
    ["alpha",     "Name (A → Z)"],
    ["category",  "Category"],
  ].forEach(([v, l]) => {
    const opt = el("option", { value: v, text: l });
    if (v === glossState.sort) opt.setAttribute("selected", "selected");
    sortSelect.appendChild(opt);
  });
  sortSelect.addEventListener("change", e => {
    glossState.sort = e.target.value;
    renderGlossList();
  });
  sortWrap.appendChild(sortSelect);
  glossControls.appendChild(sortWrap);

  const glossMeta = el("div", { class: "cm-gloss-meta", id: "cm-gloss-count" });
  glossControls.appendChild(glossMeta);

  function renderGlossList() {
    const list = document.getElementById("cm-glossary");
    clear(list);

    let entries = matrixData.slice();
    if (glossState.category !== "all") {
      entries = entries.filter(e => e.meta.category === glossState.category);
    }
    if (glossState.search) {
      const q = glossState.search;
      entries = entries.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.publisher.toLowerCase().includes(q) ||
        e.meta.geo.toLowerCase().includes(q) ||
        e.meta.category.includes(q)
      );
    }
    entries.sort((a, b) => {
      if (glossState.sort === "alpha") return a.title.localeCompare(b.title);
      if (glossState.sort === "category") return a.meta.category.localeCompare(b.meta.category) || b.counts.unique - a.counts.unique;
      if (glossState.sort === "coverage") return b.counts.unique - a.counts.unique;
      // triggered: triggered first, then by activated count
      if (a.triggered !== b.triggered) return a.triggered ? -1 : 1;
      if (b.totalActive !== a.totalActive) return b.totalActive - a.totalActive;
      return b.counts.unique - a.counts.unique;
    });

    const maxUnique = Math.max(...CROSSWALKS.map(c => c.counts.unique));
    entries.forEach(e => list.appendChild(renderGlossCard(e, maxUnique)));

    glossMeta.textContent = entries.length + " of " + CROSSWALKS.length + " shown";
  }

  function renderGlossCard(e, maxUnique) {
    const card = el("div", {
      class: "cm-gloss-entry" + (e.triggered ? " triggered" : ""),
      data: { slug: e.slug },
    });

    const row = el("div", { class: "cm-gloss-row" });
    const nameCol = el("div", { class: "cm-gloss-name" }, [
      el("div", { class: "title", text: e.title }),
      el("div", { class: "pub",
        text: (e.triggered ? "● Triggered · " : "") + e.publisher }),
    ]);
    if (e.triggered) {
      const rule = (typeof RECOMMENDATION_RULES_DETAIL !== "undefined")
        ? RECOMMENDATION_RULES_DETAIL.find(r => r.recommends && r.recommends.includes(e.slug))
        : null;
      const reasonText = (rule && rule.description) || e.triggerReason || "";
      if (reasonText) {
        nameCol.appendChild(el("div", { class: "cm-gloss-why-eyebrow", text: "● Why" }));
        nameCol.appendChild(el("div", { class: "cm-gloss-why", text: reasonText }));
      }
    }
    row.appendChild(nameCol);
    row.appendChild(el("div", { class: "cm-gloss-cat " + e.meta.category }, [
      el("span", { class: "tag", text: e.meta.category.replace("-", " ") }),
    ]));
    row.appendChild(el("div", { class: "cm-gloss-geo", text: e.meta.geo }));

    const dens = el("div", { class: "cm-gloss-density" });
    const barOuter = el("div", { class: "bar" });
    barOuter.appendChild(el("div", { style: { width: ((e.counts.unique / maxUnique) * 100) + "%" } }));
    dens.appendChild(barOuter);
    dens.appendChild(el("div", { class: "v" }, [
      el("b", { text: String(e.counts.unique) }),
      document.createTextNode(" controls · "),
      el("b", { text: String(e.counts.total) }),
      document.createTextNode(" mappings"),
    ]));
    row.appendChild(dens);

    row.appendChild(el("div", { class: "cm-gloss-action" }, [
      document.createTextNode("View"),
      el("span", { class: "arr", text: "›" }),
    ]));
    row.addEventListener("click", () => card.classList.toggle("expanded"));
    card.appendChild(row);

    // body (expanded)
    const body = el("div", { class: "cm-gloss-body" });
    body.appendChild(el("p", { class: "cm-gloss-blurb", text: e.blurb }));

    // per-principle bars
    const bars = el("div", { class: "cm-gloss-bars" });
    PRINCIPLES.forEach(p => {
      const total = e.dist[p.code] || 0;
      const active = e.activeByPrinciple[p.code] || 0;
      bars.appendChild(el("div", { class: "cm-gloss-bar" }, [
        el("div", { class: "pc", text: "P. " + p.code }),
        el("div", {
          class: "num" + (total === 0 ? " zero" : ""),
          text: total === 0 ? "—" : String(total),
        }),
        el("div", { class: "lbl", text: total === 0 ? "Not mapped" : (active + " activated") }),
      ]));
    });
    body.appendChild(bars);

    // sample mappings
    const grid = el("div", { class: "cm-gloss-mappings" });
    (e.samples || []).forEach(([s, t]) => {
      grid.appendChild(el("div", { class: "cm-mapping" }, [
        el("span", { class: "src", text: s }),
        el("span", { class: "arrow", text: "→" }),
        el("span", { class: "tgt", title: t, text: t }),
      ]));
    });
    body.appendChild(grid);

    body.appendChild(el("div", { class: "cm-gloss-foot" }, [
      el("span", { text: (e.samples || []).length + " of " + e.counts.total + " mappings shown" }),
      el("span", { text: "·" }),
      el("a", { class: "src-link", href: e.meta.sourceUrl, target: "_blank", rel: "noopener",
        text: "View source ↗" }),
    ]));
    card.appendChild(body);

    return card;
  }

  renderGlossList();
}

/* ============================================================
   COVERAGE: frameworks triggered card row
   Renders a full-width grid of cards under the scorecard, one per
   recommended framework, with the recommendation rule's description
   as the human reason. Hidden when nothing is triggered.
   ============================================================ */
function renderTriggeredSection(recs) {
  const section = document.getElementById("cm-triggered-section");
  const grid = document.getElementById("cm-triggered-grid");
  const meta = document.getElementById("cm-triggered-meta");
  if (!section || !grid) return;

  if (!recs || !recs.length) {
    section.classList.add("cm-hidden");
    return;
  }
  section.classList.remove("cm-hidden");

  clear(grid);
  recs.forEach(rec => {
    const cw = CROSSWALKS.find(c => c.slug === rec.slug);
    const fwTitle = (cw && cw.title) || rec.slug;
    const fwPub = cw ? cw.publisher : "";
    const fwMeta = (typeof FRAMEWORK_META !== "undefined" && FRAMEWORK_META[rec.slug]) || null;
    const rule = (typeof RECOMMENDATION_RULES_DETAIL !== "undefined")
      ? RECOMMENDATION_RULES_DETAIL.find(r => r.recommends && r.recommends.includes(rec.slug))
      : null;
    const reason = (rule && rule.description) || rec.why || "Recommended by your scope.";

    const card = el("div", { class: "cm-triggered-card" }, [
      el("div", { class: "cm-triggered-head" }, [
        el("span", { class: "cm-triggered-tag", text: "● Trigger" }),
        fwMeta && fwMeta.geo
          ? el("span", { class: "cm-triggered-geo", text: fwMeta.geo })
          : null,
      ].filter(Boolean)),
      el("div", { class: "cm-triggered-title", text: fwTitle }),
      fwPub ? el("div", { class: "cm-triggered-pub", text: fwPub }) : null,
      el("div", { class: "cm-triggered-reason" }, [
        el("span", { class: "cm-triggered-reason-eyebrow", text: "Why" }),
        document.createTextNode(reason),
      ]),
    ].filter(Boolean));
    grid.appendChild(card);
  });

  if (meta) {
    meta.textContent = recs.length + (recs.length === 1 ? " framework" : " frameworks");
  }
}

/* ============================================================
   COVERAGE: by-principle grid (6 cards)
   Renders one card per Principle (A-F). Each card shows the code,
   name, count of activated requirements in that principle, and the
   hand-written description from 02e-data-content.js.
   ============================================================ */
function renderPrincipleGrid(buckets, activatedSet) {
  const grid = document.getElementById("cm-principle-grid");
  const meta = document.getElementById("cm-principle-meta");
  if (!grid) return;

  // count activated requirements per principle by checking each slug's first letter
  const perPrinciple = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  let total = 0;
  Object.keys(REQUIREMENTS).forEach(slug => {
    const code = slug.charAt(0);
    if (perPrinciple[code] === undefined) return;
    total++;
    if (activatedSet.has(slug)) perPrinciple[code]++;
  });

  // count totals per principle (denominator)
  const totalsPerPrinciple = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  Object.keys(REQUIREMENTS).forEach(slug => {
    const code = slug.charAt(0);
    if (totalsPerPrinciple[code] !== undefined) totalsPerPrinciple[code]++;
  });

  clear(grid);
  PRINCIPLES.forEach(p => {
    const active = perPrinciple[p.code] || 0;
    const denom = totalsPerPrinciple[p.code] || 0;
    const pct = denom ? Math.round((active / denom) * 100) : 0;
    const desc = (typeof PRINCIPLE_DESCRIPTIONS !== "undefined" && PRINCIPLE_DESCRIPTIONS[p.code])
      || p.description || "";

    const card = el("div", {
      class: "cm-principle-card" + (active > 0 ? " active" : ""),
    }, [
      el("div", { class: "cm-principle-card-head" }, [
        el("span", { class: "cm-principle-code", text: p.code }),
        el("span", { class: "cm-principle-name", text: p.name }),
      ]),
      el("div", { class: "cm-principle-stat" }, [
        el("span", { class: "cm-principle-num" + (active === 0 ? " zero" : ""),
          text: String(active) }),
        el("span", { class: "cm-principle-of", text: " / " + denom }),
        el("span", { class: "cm-principle-pct", text: pct + "%" }),
      ]),
      el("div", { class: "cm-principle-bar" }, [
        el("div", { class: "cm-principle-bar-fill",
          style: { width: pct + "%" } }),
      ]),
      el("p", { class: "cm-principle-desc", text: desc }),
    ]);
    grid.appendChild(card);
  });

  if (meta) {
    const activatedTotal = Object.values(perPrinciple).reduce((a, b) => a + b, 0);
    meta.textContent = activatedTotal + " of " + total + " requirements in scope";
  }
}
