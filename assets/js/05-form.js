"use strict";

/* ============================================================
   FORM WIZARD
   ============================================================ */

let currentStep = 1;
const TOTAL_STEPS = 3;

function renderForm() {
  restoreState();
  renderStep1();
  renderStep2();
  renderStep3();
  showStep(currentStep, /*direction*/ 0);
  syncJurisdictionUI();
}

function renderStep1() {
  const root = document.getElementById("cm-step-1");
  clear(root);

  const head = el("div", { class: "cm-step-head" });
  head.appendChild(el("div", { class: "lhs" }, [
    el("div", { class: "ey", text: "Step 01 · About" }),
    el("h2", { class: "ti" }, [
      document.createTextNode("About "),
      el("em", { text: "your app." }),
    ]),
    el("div", { class: "sub", text: "App basics and data scope. Name and description are optional — used only as a memory aid." }),
  ]));
  root.appendChild(head);

  const grid = el("div", { class: "cm-step-grid" });

  // name
  const qName = buildQuestion("Q1", "What's the application called?",
    "Optional", null,
    (() => {
      const inp = el("input", {
        class: "cm-input",
        type: "text",
        placeholder: "e.g. Atlas — customer-support agent",
        maxlength: "80",
      });
      inp.value = state.appName;
      inp.addEventListener("input", e => { state.appName = e.target.value; });
      return inp;
    })());
  grid.appendChild(qName);

  // deployment
  const qFacing = buildQuestion("Q2", "How is it deployed?",
    "External-facing systems pick up A007 (IP-violation exposure).",
    "Required",
    buildSegmented("facing", [
      { val: "internal", label: "Internal" },
      { val: "external", label: "External" },
      { val: "both",     label: "Both" },
    ]));
  grid.appendChild(qFacing);

  // description (full row)
  const qDesc = buildQuestion("Q3", "Briefly describe what it does.",
    "Optional — not analyzed, just a memory aid.",
    null,
    (() => {
      const ta = el("textarea", {
        class: "cm-textarea",
        placeholder: "A voice + text agent that handles tier-1 customer support: order lookups, returns, refund eligibility…",
        maxlength: "500",
      });
      ta.value = state.description;
      ta.addEventListener("input", e => { state.description = e.target.value; });
      return ta;
    })());
  qDesc.classList.add("full");
  grid.appendChild(qDesc);

  // automation (full row)
  const qAuto = buildQuestion("Q4", "Does it call tools or take actions on behalf of users?",
    "Activates B006, D003, D004, F001 — agentic-action Requirements.",
    null,
    buildToggle());
  qAuto.classList.add("full");
  grid.appendChild(qAuto);

  // audience + data categories — side by side (full-row grid cols each)
  const qAudience = buildQuestion("Q5", "Who interacts with it?", null, "Required",
    buildChips("audience", AUDIENCE.map(a => ({ id: a, label: a })), syncInferredDataCategories));
  grid.appendChild(qAudience);

  const qData = buildQuestion("Q6", "What data categories does it handle?",
    "PHI triggers HIPAA, financial data triggers FCRA + FTC, housing triggers FHA.",
    null,
    buildChips("dataCategories", DATA_CATEGORIES.map(d => ({ id: d, label: d }))));
  grid.appendChild(qData);

  root.appendChild(grid);
  syncInferredDataCategories();
}

function renderStep2() {
  const root = document.getElementById("cm-step-2");
  clear(root);

  const head = el("div", { class: "cm-step-head" });
  const lhs = el("div", { class: "lhs" });
  lhs.appendChild(el("div", { class: "ey", text: "Step 02 · Modalities" }));
  const ti = el("h2", { class: "ti" });
  ti.appendChild(document.createTextNode("How does it "));
  ti.appendChild(el("em", { text: "talk & listen?" }));
  lhs.appendChild(ti);
  lhs.appendChild(el("div", { class: "sub", text: "Each modality activates its own control set. Text and voice carry the densest activations; image and video carry visual-output controls." }));
  head.appendChild(lhs);
  root.appendChild(head);

  const grid = el("div", { class: "cm-step-grid" });

  const qModels = buildQuestion("Q7", "Which models or LLMs does it use?",
    "Optional — helps identify provider-specific obligations.",
    null,
    buildModelPicker());
  qModels.classList.add("full");
  grid.appendChild(qModels);

  const qIn  = buildQuestion("Q8", "Input modalities", null, "Required",
    buildChips("inputModalities", MODALITIES));
  const qOut = buildQuestion("Q9", "Output modalities", null, "Required",
    buildChips("outputModalities", MODALITIES));

  grid.appendChild(qIn);
  grid.appendChild(qOut);

  root.appendChild(grid);
}

function renderStep3() {
  const root = document.getElementById("cm-step-3");
  clear(root);

  const head = el("div", { class: "cm-step-head" });
  const lhs = el("div", { class: "lhs" });
  lhs.appendChild(el("div", { class: "ey", text: "Step 03 · Jurisdiction" }));
  const ti = el("h2", { class: "ti" });
  ti.appendChild(document.createTextNode("Where does it "));
  ti.appendChild(el("em", { text: "operate?" }));
  lhs.appendChild(ti);
  lhs.appendChild(el("div", { class: "sub", text: "Drives jurisdiction-specific crosswalk recommendations into EU AI Act, NYC LL 144, Colorado AI Act, SB 53, and FTC AI guidance." }));
  head.appendChild(lhs);
  root.appendChild(head);

  // Region checkboxes
  const regionQ = buildQuestion("Q10", "Where are your users?", null, null,
    buildRegionPicker());
  regionQ.classList.add("full");
  root.appendChild(regionQ);
}

/* ============================================================
   STEP NAVIGATION
   ============================================================ */

function showStep(n, direction) {
  saveState(); // persist whenever user moves between steps
  currentStep = n;
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const pane = document.getElementById("cm-step-" + i);
    if (i === n) {
      pane.classList.toggle("from-back", direction < 0);
      pane.classList.add("active");
      // restart animation
      pane.style.animation = "none";
      pane.offsetHeight;
      pane.style.animation = "";
    } else {
      pane.classList.remove("active", "from-back");
    }
  }
  document.querySelectorAll(".cm-step").forEach(s => {
    const idx = parseInt(s.dataset.step, 10);
    s.classList.toggle("active", idx === n);
    s.classList.toggle("done", idx < n);
  });
  updateNav();
}

function stepComplete(step) {
  if (step === 1) return !!state.facing && state.audience.length > 0;
  if (step === 2) return state.inputModalities.length > 0 && state.outputModalities.length > 0;
  if (step === 3) return true;
  return false;
}

const REASSURE_DEFAULT = "Runs entirely in your browser. Nothing is sent or stored.";
function updateNav() {
  const back = document.getElementById("btn-back");
  const next = document.getElementById("btn-next");
  const submit = document.getElementById("cm-submit");
  const reassure = document.getElementById("cm-reassure");

  back.classList.toggle("cm-hidden", currentStep === 1);

  if (currentStep === TOTAL_STEPS) {
    next.classList.add("cm-hidden");
    submit.classList.remove("cm-hidden");
    const ready = stepComplete(1) && stepComplete(2);
    submit.disabled = !ready;
    if (reassure) {
      if (!ready) {
        const missing = !stepComplete(1) ? "01" : "02";
        reassure.textContent = `Step ${missing} needs an answer first.`;
      } else {
        reassure.textContent = REASSURE_DEFAULT;
      }
    }
  } else {
    next.classList.remove("cm-hidden");
    submit.classList.add("cm-hidden");
    next.disabled = !stepComplete(currentStep);
    if (reassure) reassure.textContent = REASSURE_DEFAULT;
  }

  // Keep stepper lock state synced with the current form state, so future
  // steps update from "locked" to "reachable" the moment prereqs are met.
  document.querySelectorAll(".cm-step").forEach(s => {
    const idx = parseInt(s.dataset.step, 10);
    let reachable = idx <= currentStep;
    for (let i = currentStep; i < idx; i++) if (!stepComplete(i)) { reachable = false; break; }
    s.classList.toggle("locked", !reachable);
    s.setAttribute("aria-disabled", reachable ? "false" : "true");
  });
}

function nextStep() {
  if (currentStep < TOTAL_STEPS && stepComplete(currentStep)) {
    showStep(currentStep + 1, +1);
  }
}
function prevStep() {
  if (currentStep > 1) showStep(currentStep - 1, -1);
}
function jumpToStep(target) {
  if (target === currentStep) return;
  if (target < currentStep) { showStep(target, -1); return; }
  // forward: only allow if all intermediate steps are complete
  for (let i = currentStep; i < target; i++) if (!stepComplete(i)) return;
  showStep(target, +1);
}

/* ============================================================
   REGION MAP
   ============================================================ */

const MAP_REGIONS = [
  { id: "EU",        label: "EU" },
  { id: "UK",        label: "UK" },
  { id: "US",        label: "US" },
  { id: "Canada",    label: "Canada" },
  { id: "Brazil",    label: "Brazil" },
  { id: "India",     label: "India" },
  { id: "Japan",     label: "Japan" },
  { id: "Singapore", label: "Singapore" },
];

function buildRegionPicker() {
  const wrap = el("div", { class: "cm-region" });

  // top-level regions as chips (consistent with the other multi-select steps)
  const chips = el("div", { class: "cm-chips cm-region-chips" });
  MAP_REGIONS.forEach(r => chips.appendChild(buildJurChip(r.id, r.label)));
  wrap.appendChild(chips);

  // US state/city jurisdictions — revealed only when US is selected
  const subs = el("div", { class: "cm-region-subs" }, [
    el("span", { class: "cm-region-subs-label", text: "United States — narrow to:" }),
    el("div", { class: "cm-chips" },
      US_SUB_JURISDICTIONS.map(id => buildJurChip(id, US_SUB_LABELS[id] || id))),
  ]);
  wrap.appendChild(subs);

  return wrap;
}

function buildJurChip(id, label) {
  const chip = el("span", {
    class: "cm-chip" + (state.jurisdictions.includes(id) ? " on" : ""),
    data: { jurisdiction: id },
  }, [
    el("span", { text: label }),
    el("span", { class: "check", text: "✓" }),
  ]);
  chip.addEventListener("click", () => toggleJurisdiction(id));
  return chip;
}

const US_SUB_JURISDICTIONS = ["US-California", "US-Colorado", "US-NYC"];
const US_SUB_LABELS = {
  "US-California": "California (SB 53)",
  "US-Colorado": "Colorado (AI Act)",
  "US-NYC": "NYC (LL 144)",
};

function toggleJurisdiction(id) {
  const ix = state.jurisdictions.indexOf(id);
  if (ix >= 0) {
    state.jurisdictions.splice(ix, 1);
    // de-selecting US clears its sub-jurisdictions — a state/city can't be in
    // scope without the US umbrella
    if (id === "US") {
      US_SUB_JURISDICTIONS.forEach(sub => {
        const si = state.jurisdictions.indexOf(sub);
        if (si >= 0) state.jurisdictions.splice(si, 1);
      });
    }
  } else {
    state.jurisdictions.push(id);
    // selecting a US sub-jurisdiction implies the US umbrella
    if (US_SUB_JURISDICTIONS.includes(id) && !state.jurisdictions.includes("US")) {
      state.jurisdictions.push("US");
    }
  }
  syncJurisdictionUI();
}

function syncJurisdictionUI() {
  document.querySelectorAll(".cm-region [data-jurisdiction]").forEach(c => {
    c.classList.toggle("on", state.jurisdictions.includes(c.dataset.jurisdiction));
  });
  // reveal US sub-jurisdictions only when the US umbrella is selected
  const subs = document.querySelector(".cm-region-subs");
  if (subs) subs.classList.toggle("show", state.jurisdictions.includes("US"));
}

function buildQuestion(num, label, help, requiredTag, control) {
  // q-head + q-help are wrapped in .q-top so side-by-side questions in
  // .cm-step-grid can share a subgrid header row and align their controls.
  return el("div", { class: "cm-question" }, [
    el("div", { class: "q-top" }, [
      el("div", { class: "q-head" }, [
        el("span", { class: "q-num", text: num }),
        el("span", { class: "q-label", text: label }),
        requiredTag && el("span", { class: "q-required", text: requiredTag }),
      ]),
      help && el("div", { class: "q-help", text: help }),
    ]),
    control,
  ]);
}

function buildSegmented(field, options) {
  const wrap = el("div", { class: "cm-seg", data: { field } });
  options.forEach(o => {
    const btn = el("button", {
      type: "button",
      class: state[field] === o.val ? "active" : "",
      data: { val: o.val },
      text: o.label,
      onclick: () => {
        state[field] = o.val;
        wrap.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === btn));
        updateNav();
        saveState();
      },
    });
    wrap.appendChild(btn);
  });
  return wrap;
}

/* ---- audience → data-category inference ---- */
const AUDIENCE_IMPLIES = {
  "children (under 13)": ["children's data"],
  "healthcare patients": ["PHI"],
  "employees":           ["employment records"],
  "finance customers":   ["financial data"],
  "students":            ["education records"],
};

function syncInferredDataCategories() {
  const inferred = new Set();
  state.audience.forEach(a => {
    (AUDIENCE_IMPLIES[a] || []).forEach(d => inferred.add(d));
  });
  // Auto-add any implied category not yet selected
  inferred.forEach(d => {
    if (!state.dataCategories.includes(d)) state.dataCategories.push(d);
  });
  // Sync chip visuals for data categories
  const dataCatWrap = document.querySelector('.cm-chips[data-field="dataCategories"]');
  if (!dataCatWrap) return;
  dataCatWrap.querySelectorAll(".cm-chip").forEach(chip => {
    const id = chip.dataset.id;
    chip.classList.toggle("on", state.dataCategories.includes(id));
    chip.classList.toggle("inferred", inferred.has(id) && state.dataCategories.includes(id));
  });
}

function buildChips(field, items, onToggle) {
  const wrap = el("div", { class: "cm-chips", data: { field } });
  items.forEach(it => {
    const isOn = () => state[field].includes(it.id);
    const chip = el("span", {
      class: "cm-chip" + (isOn() ? " on" : ""),
      data: { id: it.id },
    }, [
      el("span", { text: it.label }),
      el("span", { class: "check", text: "✓" }),
    ]);
    chip.addEventListener("click", () => {
      const ix = state[field].indexOf(it.id);
      if (ix >= 0) state[field].splice(ix, 1); else state[field].push(it.id);
      chip.classList.toggle("on", isOn());
      if (onToggle) onToggle();
      updateNav();
      saveState();
    });
    wrap.appendChild(chip);
  });
  return wrap;
}

function buildModelPicker() {
  const wrap = el("div", { class: "cm-model-picker" });
  const pillsWrap = el("div", { class: "cm-model-pills" });

  function renderPills() {
    clear(pillsWrap);
    state.models.forEach(m => {
      const pill = el("span", { class: "cm-model-pill" }, [
        el("span", { text: m }),
        el("button", {
          type: "button",
          class: "cm-model-pill-remove",
          "aria-label": "Remove " + m,
          text: "×",
        }),
      ]);
      pill.querySelector(".cm-model-pill-remove").addEventListener("click", () => {
        state.models = state.models.filter(x => x !== m);
        renderPills();
        saveState();
      });
      pillsWrap.appendChild(pill);
    });
  }

  function addModel(name) {
    const trimmed = name.trim();
    if (!trimmed || state.models.includes(trimmed)) return;
    state.models.push(trimmed);
    renderPills();
    saveState();
  }

  // dropdown
  const select = el("select", { class: "cm-select" });
  select.appendChild(el("option", { value: "", text: "Add a model…" }));
  LLM_MODELS.forEach(group => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.group;
    group.models.forEach(m => optgroup.appendChild(el("option", { value: m, text: m })));
    select.appendChild(optgroup);
  });
  select.appendChild(el("option", { value: "__other__", text: "Other…" }));

  // "Other" free-text row (comma-separated)
  const otherWrap = el("div", { class: "cm-model-other cm-hidden" });
  const otherInput = el("input", {
    class: "cm-input",
    type: "text",
    placeholder: "e.g. Falcon-7B, Phi-3, my-fine-tuned-model",
  });
  const otherBtn = el("button", { type: "button", class: "btn", text: "Add" });

  function addFromOther() {
    otherInput.value.split(",").forEach(part => addModel(part));
    otherInput.value = "";
  }
  otherBtn.addEventListener("click", addFromOther);
  otherInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); addFromOther(); }
  });
  otherWrap.appendChild(otherInput);
  otherWrap.appendChild(otherBtn);

  select.addEventListener("change", () => {
    const val = select.value;
    if (val === "__other__") {
      otherWrap.classList.remove("cm-hidden");
      otherInput.focus();
      select.value = "";
    } else if (val) {
      addModel(val);
      select.value = "";
    }
  });

  renderPills();
  wrap.appendChild(pillsWrap);
  wrap.appendChild(el("div", { class: "cm-model-controls" }, [select, otherWrap]));
  return wrap;
}

function buildToggle() {
  // Use <button role="switch"> — semantically correct for AT, no wrapping <input> needed
  const btn = el("button", {
    type: "button",
    class: "cm-toggle" + (state.automation ? " on" : ""),
  });
  btn.setAttribute("role", "switch");
  btn.setAttribute("aria-checked", state.automation ? "true" : "false");
  const track = el("span", { class: "track" });
  const lbl = el("span", { class: "lbl",
    text: state.automation ? "Yes — agentic actions enabled" : "No — read-only / no tool use" });
  btn.appendChild(track);
  btn.appendChild(lbl);
  function toggle() {
    state.automation = !state.automation;
    btn.classList.toggle("on", state.automation);
    btn.setAttribute("aria-checked", state.automation ? "true" : "false");
    lbl.textContent = state.automation ? "Yes — agentic actions enabled" : "No — read-only / no tool use";
    updateNav();
    saveState();
  }
  btn.addEventListener("click", toggle);
  return btn;
}

/* ============================================================
   STATE PERSISTENCE  (sessionStorage so progress survives
   accidental navigation without cluttering the URL)
   ============================================================ */

const STATE_KEY = "cm_assessment_state";

function saveState() {
  try { sessionStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (_) {}
}

function restoreState() {
  try {
    const raw = sessionStorage.getItem(STATE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    // Only restore primitive/array fields; ignore anything unexpected
    const safe = ["appName","description","facing","inputModalities","outputModalities","automation","models","jurisdictions","audience","dataCategories"];
    safe.forEach(k => { if (k in s) state[k] = s[k]; });
  } catch (_) {}
}

function clearPersistedState() {
  try { sessionStorage.removeItem(STATE_KEY); } catch (_) {}
}

function resetForm() {
  Object.assign(state, {
    appName: "", description: "", facing: null,
    inputModalities: [], outputModalities: [], automation: false,
    models: [], jurisdictions: [], audience: [], dataCategories: [],
  });
  clearPersistedState();
  currentStep = 1;
  // Always switch back to the form view (handles call from results page)
  const resultsView = document.getElementById("view-results");
  const formView = document.getElementById("view-form");
  if (resultsView) resultsView.classList.add("cm-hidden");
  if (formView) formView.classList.remove("cm-hidden");
  renderForm();
}

function revealQuestionnaire() {
  // In the viewport-locked layout the questionnaire is always visible;
  // nothing to scroll or reveal.
  const questionnaire = document.getElementById("questionnaire");
  if (questionnaire) questionnaire.classList.remove("cm-hidden");
}

function resetToForm() {
  resetForm();
}

function resetToLanding() {
  resetForm();
}

function submitForm() {
  if (!stepComplete(1) || !stepComplete(2)) return;
  saveState();
  renderResults();
  document.getElementById("view-form").classList.add("cm-hidden");
  document.getElementById("view-results").classList.remove("cm-hidden");
  switchTab("coverage");
}
