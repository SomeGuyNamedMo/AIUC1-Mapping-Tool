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

// ---- centered matrix/requirement modal (shared #cm-mx-modal) ----
// Module-level so both the framework (matrix) modal and the requirement modal
// open/close the SAME element interchangeably. close() just toggles classes,
// identical to the in-renderResults closeModal() so they never conflict.
function cmCloseMxModal() {
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

// Wire backdrop-click + Escape ONCE at module load (guard against duplicates).
if (!window.__cmMxModalWired) {
  window.__cmMxModalWired = true;
  document.getElementById("cm-mx-modal-backdrop")
    ?.addEventListener("click", cmCloseMxModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" &&
        document.getElementById("cm-mx-modal")?.classList.contains("open")) {
      cmCloseMxModal();
    }
  });
}

// Open the shared centered modal showing a single requirement's full detail.
// Mirrors the Requirements-tab renderDetail/buildSubControl/buildCrosswalkGroup
// structure + classes so it looks native, but stays on the Coverage tab.
function cmOpenRequirementModal(slug) {
  if (typeof REQUIREMENTS_DETAIL === "undefined" || !REQUIREMENTS_DETAIL) return;
  const detail = REQUIREMENTS_DETAIL[slug];
  if (!detail) return;

  const content = document.getElementById("cm-mx-modal-content");
  if (!content) return;

  const { reasons } = deriveActivations(state);
  const inScopeSet = new Set(Object.keys(reasons));
  const isActive = inScopeSet.has(slug);

  const principle = (slug || "").charAt(0);
  const principleName = (PRINCIPLES.find(p => p.code === principle) || {}).name || principle;
  const fmt = s => String(s || "").replace(/-/g, " ");

  clear(content);

  // header — id, title, in/out scope state, close btn (same classes as matrix modal)
  const head = el("div", { class: "cm-mx-head" }, [
    el("span", { class: "cm-detail-id", text: slug }),
    el("span", { class: "cm-detail-title", text: REQUIREMENTS[slug] || slug }),
    el("span", { class: "cm-detail-state", text: isActive ? "In scope" : "Out of scope" }),
  ]);
  const closeBtn = el("button", {
    type: "button",
    class: "cm-mx-close",
    "aria-label": "Close",
    text: "Close ✕",
  });
  closeBtn.addEventListener("click", cmCloseMxModal);
  head.appendChild(closeBtn);
  content.appendChild(head);

  // status pills: mandatory/optional + principle + capabilities + cadence
  const pills = el("div", { class: "cm-detail-pills cm-req-status-pills" });
  pills.appendChild(el("span", {
    class: "cm-detail-pill " + (detail.mandatory ? "modality" : ""),
    text: detail.mandatory ? "Mandatory" : "Optional",
  }));
  pills.appendChild(el("span", {
    class: "cm-detail-pill",
    text: "Principle " + principle + " · " + principleName,
  }));
  (detail.capabilities || []).forEach(cap => {
    pills.appendChild(el("span", {
      class: "cm-detail-pill" + (cap === "universal" ? " universal" : ""),
      text: fmt(cap),
    }));
  });
  if (detail.frequency) {
    pills.appendChild(el("span", {
      class: "cm-detail-pill",
      text: "Cadence: " + fmt(detail.frequency),
    }));
  }
  content.appendChild(pills);

  // description
  if (detail.description) {
    content.appendChild(el("p", { class: "cm-detail-intro", text: detail.description }));
  }

  // sub-controls
  const subs = Array.isArray(detail.sub_controls) ? detail.sub_controls : [];
  content.appendChild(el("div", { class: "cm-mx-section-eyebrow",
    text: "Sub-controls (" + subs.length + ")" }));
  const subWrap = el("div", { class: "cm-req-subs" });
  if (subs.length) {
    subs.forEach(sub => {
      const card = el("div", { class: "cm-req-sub" });
      card.appendChild(el("div", { class: "cm-req-sub-head" }, [
        el("span", { class: "cm-req-sub-id", text: sub.id || "" }),
        el("span", { class: "cm-req-sub-title", text: sub.title || "" }),
      ]));
      const subPills = el("div", { class: "cm-req-sub-pills" });
      if (sub.application) {
        subPills.appendChild(el("span", {
          class: "cm-detail-pill app-" + sub.application,
          text: sub.application,
        }));
      }
      if (sub.severity) {
        subPills.appendChild(el("span", {
          class: "cm-detail-pill sev-" + sub.severity,
          text: "severity: " + sub.severity,
        }));
      }
      subPills.appendChild(el("span", {
        class: "cm-detail-pill" + (sub.mandatory ? " modality" : ""),
        text: sub.mandatory ? "Mandatory" : "Optional",
      }));
      card.appendChild(subPills);
      if (sub.guidance) {
        card.appendChild(el("p", { class: "cm-req-sub-guidance", text: sub.guidance }));
      }
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
      subWrap.appendChild(card);
    });
  } else {
    subWrap.appendChild(el("div", { class: "cm-detail-empty-cw",
      text: "No sub-controls listed." }));
  }
  content.appendChild(subWrap);

  // crosswalk refs — grouped by framework, computed from CROSSWALK_DETAILS
  const groups = [];
  if (typeof CROSSWALK_DETAILS === "object" && CROSSWALK_DETAILS) {
    Object.keys(CROSSWALK_DETAILS).forEach(cwSlug => {
      const cw = CROSSWALK_DETAILS[cwSlug];
      if (!cw || !Array.isArray(cw.mappings)) return;
      const matches = cw.mappings.filter(m => m.source === slug);
      if (!matches.length) return;
      groups.push({
        name: cw.target_framework_name || cwSlug,
        mappings: matches,
      });
    });
    groups.sort((a, b) => a.name.localeCompare(b.name));
  }

  content.appendChild(el("div", { class: "cm-mx-section-eyebrow cm-req-cw-eyebrow",
    text: "Crosswalk refs (" + groups.length + ")" }));
  const cwBody = el("div", { class: "cm-req-cw-body" });
  if (!groups.length) {
    cwBody.appendChild(el("div", { class: "cm-detail-empty-cw",
      text: "No framework mappings reference this requirement." }));
  } else {
    groups.forEach(g => {
      const wrap = el("div", { class: "cm-req-cw-group" });
      wrap.appendChild(el("div", { class: "cm-req-cw-group-head" }, [
        el("span", { class: "cm-req-cw-group-name", text: g.name }),
        el("span", { class: "cm-req-cw-group-count",
          text: g.mappings.length + " ref" + (g.mappings.length === 1 ? "" : "s") }),
      ]));
      const list = el("div", { class: "cm-detail-cw-list" });
      g.mappings.forEach(m => {
        const row = el("div", { class: "cm-detail-cw cm-req-cw" });
        row.appendChild(el("div", { class: "cm-req-cw-tgt" }, [
          el("span", { class: "tg", text: String(m.target == null ? "" : m.target) }),
          m.target_title
            ? el("span", { class: "cm-req-cw-tgt-title", text: m.target_title })
            : null,
        ].filter(Boolean)));
        row.appendChild(el("div", { class: "cm-req-cw-pills" }, [
          m.relationship
            ? el("span", { class: "cm-detail-pill", text: String(m.relationship).replace(/_/g, " ") })
            : null,
          m.confidence
            ? el("span", { class: "cm-detail-pill conf-" + m.confidence, text: m.confidence + " conf" })
            : null,
        ].filter(Boolean)));
        list.appendChild(row);
        if (m.notes) {
          list.appendChild(el("div", { class: "cm-req-cw-notes", text: m.notes }));
        }
      });
      wrap.appendChild(list);
      cwBody.appendChild(wrap);
    });
  }
  content.appendChild(cwBody);

  // open the shared modal
  const modal = document.getElementById("cm-mx-modal");
  const back = document.getElementById("cm-mx-modal-backdrop");
  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  if (back) back.classList.add("open");
  content.scrollTop = 0;
}

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

  // ============= executive summary (risk) =============
  renderRiskSummary(activatedSet);

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
   COVERAGE: executive risk summary
   Three blocks rendered above the crosswalk matrix:
     1. Risk snapshot — tally of in-scope sub-controls by severity
     2. Per-principle risk bars — segmented by severity, worst on top
     3. Top 5 areas to resolve — highest-risk in-scope requirements
   Only IN-SCOPE (activated) requirements are counted. Severity has
   four-ish levels but the data only uses: critical / high / medium.
   critical is weighted highest everywhere.
   ============================================================ */

// Severity weights — critical is the strongest. No "low" in the data.
const CM_SEVERITY_WEIGHT = { critical: 4, high: 3, medium: 2 };
// Plain-count weight used by the principle bars / snapshot (visual order).
const CM_SEVERITY_ORDER = ["critical", "high", "medium"];
// Shared severity palette — must match the Requirements/Checklist pills
// (sev-critical/high/medium) so a severity reads as one color across tabs.
const CM_SEVERITY_COLOR = {
  critical: "var(--critical)",
  high: "var(--crimson)",
  medium: "var(--amber)",
};

// Count crosswalk refs (frameworks-side mappings) that reference a requirement.
function cmRefCount(reqId) {
  if (typeof CROSSWALK_DETAILS !== "object" || !CROSSWALK_DETAILS) return 0;
  let n = 0;
  Object.keys(CROSSWALK_DETAILS).forEach(slug => {
    const cw = CROSSWALK_DETAILS[slug];
    if (!cw || !Array.isArray(cw.mappings)) return;
    n += cw.mappings.filter(m => m.source === reqId).length;
  });
  return n;
}

function renderRiskSummary(activatedSet) {
  const snapshot = document.getElementById("cm-risk-snapshot");
  const barsWrap = document.getElementById("cm-risk-bars");
  const top5 = document.getElementById("cm-top5");
  const meta = document.getElementById("cm-risk-snapshot-meta");
  if (!snapshot || !barsWrap || !top5) return;

  if (typeof REQUIREMENTS_DETAIL === "undefined" || !REQUIREMENTS_DETAIL) return;

  clear(snapshot);
  clear(barsWrap);
  clear(top5);

  // ---- Walk in-scope requirements, gather per-requirement risk data ----
  const totalSev = { critical: 0, high: 0, medium: 0 };
  const perPrinciple = {}; // code -> { sev:{...}, reqCount, weight }
  PRINCIPLES.forEach(p => {
    perPrinciple[p.code] = { sev: { critical: 0, high: 0, medium: 0 }, reqCount: 0, weight: 0 };
  });
  const reqRisks = []; // { slug, title, principle, sev, mandatoryHits, score, refs }

  Object.keys(REQUIREMENTS).forEach(slug => {
    if (!activatedSet.has(slug)) return;
    const code = slug.charAt(0);
    const detail = REQUIREMENTS_DETAIL[slug];
    const subs = (detail && Array.isArray(detail.sub_controls)) ? detail.sub_controls : [];
    if (!perPrinciple[code]) return;
    // Suppress universal baseline requirements — the summary highlights
    // context-specific risk, not the controls every application carries.
    if (detail && (detail.capabilities || []).includes("universal")) return;

    const sev = { critical: 0, high: 0, medium: 0 };
    let score = 0;
    let mandatoryHits = 0;
    subs.forEach(sc => {
      const s = sc.severity;
      if (sev[s] === undefined) return; // ignore unknown severities defensively
      sev[s]++;
      let w = CM_SEVERITY_WEIGHT[s];
      if (sc.mandatory) { w *= 1.5; mandatoryHits++; }
      score += w;
      totalSev[s]++;
      perPrinciple[code].sev[s]++;
      perPrinciple[code].weight += CM_SEVERITY_WEIGHT[s];
    });
    perPrinciple[code].reqCount++;

    reqRisks.push({
      slug,
      title: REQUIREMENTS[slug] || slug,
      principle: code,
      sev,
      mandatory: !!(detail && detail.mandatory) || mandatoryHits > 0,
      score,
      refs: cmRefCount(slug),
    });
  });

  const inScopeCount = reqRisks.length;
  const totalSubs = totalSev.critical + totalSev.high + totalSev.medium;
  // Distinguish "nothing submitted" from "only universal baseline in scope".
  const onlyUniversal = inScopeCount === 0 && activatedSet.size > 0;

  if (meta) {
    meta.textContent = inScopeCount
      ? totalSubs + " sub-control" + (totalSubs === 1 ? "" : "s") + " in scope · excludes universal baseline"
      : (onlyUniversal ? "Universal baseline only" : "Nothing in scope yet");
  }

  // ---- Empty state ----
  if (!inScopeCount || !totalSubs) {
    snapshot.appendChild(el("div", { class: "cm-risk-empty",
      text: onlyUniversal
        ? "Only universal baseline requirements are in scope — no context-specific risk areas to highlight."
        : "Nothing in scope yet — submit the assessment to see where your compliance risk concentrates." }));
    return;
  }

  // ===== Block 1: Risk snapshot chips =====
  CM_SEVERITY_ORDER.forEach(s => {
    const n = totalSev[s];
    snapshot.appendChild(el("div", {
      class: "cm-risk-chip cm-risk-chip--" + s + (n === 0 ? " zero" : ""),
    }, [
      el("span", { class: "cm-risk-chip-dot" }),
      el("span", { class: "cm-risk-chip-num", text: String(n) }),
      el("span", { class: "cm-risk-chip-label", text: s }),
    ]));
  });

  // ===== Block 2: Per-principle risk bars (worst on top by total weight) =====
  const barEyebrow = el("div", { class: "cm-risk-bars-eyebrow", text: "Risk by principle" });
  barsWrap.appendChild(barEyebrow);

  const principleRows = PRINCIPLES.map(p => ({
    code: p.code,
    name: p.name,
    data: perPrinciple[p.code],
  }));
  // Order by total risk weight descending (worst hotspot on top); tie-break by code.
  principleRows.sort((a, b) => b.data.weight - a.data.weight || a.code.localeCompare(b.code));

  const maxWeight = Math.max(1, ...principleRows.map(r => r.data.weight));

  principleRows.forEach(r => {
    const d = r.data;
    const total = d.sev.critical + d.sev.high + d.sev.medium;
    const row = el("div", { class: "cm-risk-bar-row" + (total === 0 ? " empty" : "") });

    row.appendChild(el("div", { class: "cm-risk-bar-label" }, [
      el("span", { class: "code", text: r.code }),
      el("span", { class: "name", text: r.name }),
    ]));

    // The bar fills proportionally to this principle's weight vs. the max,
    // and within that fill the segments split by severity count.
    const track = el("div", { class: "cm-risk-bar-track" });
    const fill = el("div", { class: "cm-risk-bar-fill",
      style: { width: ((d.weight / maxWeight) * 100) + "%" } });
    if (total > 0) {
      CM_SEVERITY_ORDER.forEach(s => {
        const c = d.sev[s];
        if (!c) return;
        fill.appendChild(el("div", {
          class: "seg seg--" + s,
          style: { flex: String(c), background: CM_SEVERITY_COLOR[s] },
          title: c + " " + s,
        }));
      });
    }
    track.appendChild(fill);
    row.appendChild(track);

    row.appendChild(el("div", { class: "cm-risk-bar-count" }, [
      el("b", { text: String(d.reqCount) }),
      document.createTextNode(" req" + (d.reqCount === 1 ? "" : "s")),
    ]));
    barsWrap.appendChild(row);
  });

  // legend
  const legend = el("div", { class: "cm-risk-bar-legend" });
  CM_SEVERITY_ORDER.forEach(s => {
    legend.appendChild(el("span", { class: "item" }, [
      el("span", { class: "sw", style: { background: CM_SEVERITY_COLOR[s] } }),
      document.createTextNode(s),
    ]));
  });
  barsWrap.appendChild(legend);

  // ===== Block 3: Top 5 areas to resolve =====
  const ranked = reqRisks.slice().sort((a, b) =>
    b.score - a.score || b.refs - a.refs || a.slug.localeCompare(b.slug)
  ).slice(0, 5);

  top5.appendChild(el("div", { class: "cm-top5-eyebrow", text: "Top areas to resolve" }));

  const list = el("ol", { class: "cm-top5-list" });
  ranked.forEach((r, i) => {
    const pname = (PRINCIPLES.find(p => p.code === r.principle)?.name) || r.principle;

    // "why" drivers
    const drivers = [];
    CM_SEVERITY_ORDER.forEach(s => {
      if (r.sev[s]) drivers.push(r.sev[s] + " " + s);
    });
    const whyParts = [];
    if (drivers.length) whyParts.push(drivers.join(" + "));
    if (r.mandatory) whyParts.push("mandatory");
    if (r.refs) whyParts.push(r.refs + " framework" + (r.refs === 1 ? "" : "s"));

    const item = el("li", {
      class: "cm-top5-item",
      role: "button",
      tabindex: "0",
      data: { slug: r.slug },
    }, [
      el("span", { class: "cm-top5-rank", text: String(i + 1) }),
      el("div", { class: "cm-top5-body" }, [
        el("div", { class: "cm-top5-title" }, [
          el("span", { class: "cm-top5-id", text: r.slug }),
          el("span", { class: "cm-top5-name", text: r.title }),
        ]),
        el("div", { class: "cm-top5-meta" }, [
          el("span", { class: "cm-top5-principle", text: "Principle " + r.principle + " · " + pname }),
          whyParts.length
            ? el("span", { class: "cm-top5-why", text: whyParts.join(" · ") })
            : null,
        ].filter(Boolean)),
      ]),
      el("span", { class: "cm-top5-arrow", text: "›" }),
    ]);
    item.addEventListener("click", () => cmOpenRequirementModal(r.slug));
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        cmOpenRequirementModal(r.slug);
      }
    });
    list.appendChild(item);
  });
  top5.appendChild(list);
}
