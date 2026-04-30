"use strict";

/* ============================================================
   RESULTS TAB NAVIGATION
   ============================================================ */

function switchTab(tab) {
  document.querySelectorAll(".cm-tab").forEach(t => {
    const isActive = t.dataset.tab === tab;
    t.classList.toggle("active", isActive);
    t.setAttribute("aria-selected", isActive ? "true" : "false");
    t.setAttribute("tabindex", isActive ? "0" : "-1");
  });
  document.querySelectorAll(".cm-pane").forEach(p => {
    p.classList.toggle("active", p.dataset.pane === tab);
  });

  // Restart eye-catching animations when entering specific tabs
  if (tab === "coverage") {
    document.querySelectorAll("#cm-stat-bar > div").forEach(d => {
      const w = d.style.width;
      d.style.width = "0";
      void d.offsetHeight;
      d.style.width = w;
    });
    document.querySelectorAll("#cm-matrix .cell .square").forEach((s, i) => {
      const target = s.style.opacity;
      s.style.transition = "none";
      s.style.opacity = "0";
      void s.offsetHeight;
      s.style.transition = "";
      setTimeout(() => { s.style.opacity = target; }, Math.min(i, 60) * 8);
    });
  }

  // In the viewport-locked layout, the tab bar is always visible — no scroll needed.
}
