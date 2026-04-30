"use strict";

/* ============================================================
   BOOT
   ============================================================ */

const brand = document.getElementById("brand");
if (brand) {
  brand.addEventListener("click", () => {
    if (document.body.dataset.page === "assessment") window.location.href = "index.html";
    else resetToLanding();
  });
}

const startCta = document.getElementById("cta-start");
if (startCta && startCta.tagName !== "A") {
  startCta.addEventListener("click", () => {
    revealQuestionnaire();
  });
}

// stepper clicks
document.querySelectorAll(".cm-step").forEach(s => {
  s.addEventListener("click", () => jumpToStep(parseInt(s.dataset.step, 10)));
});

// wizard nav
document.getElementById("btn-back")?.addEventListener("click", prevStep);
document.getElementById("btn-next")?.addEventListener("click", nextStep);
document.getElementById("btn-reset")?.addEventListener("click", resetForm);
document.getElementById("btn-restart")?.addEventListener("click", resetToForm);
document.getElementById("cm-submit")?.addEventListener("click", submitForm);
document.getElementById("cm-form-card")?.addEventListener("submit", e => {
  e.preventDefault();
  submitForm();
});

// keyboard: Enter on step 1/2 advances, on 3 submits
document.getElementById("cm-form-card")?.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
    e.preventDefault();
    if (currentStep < TOTAL_STEPS) nextStep();
    else submitForm();
  }
});

// tabs
document.querySelectorAll(".cm-tab").forEach(t => {
  t.addEventListener("click", () => switchTab(t.dataset.tab));
});
document.getElementById("cm-tabs")?.addEventListener("keydown", (e) => {
  const tabs = Array.from(document.querySelectorAll(".cm-tab"));
  const idx = tabs.findIndex(t => t.classList.contains("active"));
  let target = -1;
  if (e.key === "ArrowRight") target = (idx + 1) % tabs.length;
  else if (e.key === "ArrowLeft") target = (idx - 1 + tabs.length) % tabs.length;
  else if (e.key === "Home") target = 0;
  else if (e.key === "End") target = tabs.length - 1;
  if (target >= 0) {
    e.preventDefault();
    switchTab(tabs[target].dataset.tab);
    tabs[target].focus();
  }
});

if (document.getElementById("cm-form-card")) {
  renderForm();
  syncJurisdictionUI();
}
