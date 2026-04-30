"use strict";

/* ============================================================
   ENGINE
   ============================================================ */

function deriveActivations(s) {
  const reasons = {};
  const buckets = { universal: 0, modality: 0, automation: 0, external: 0 };

  function addAct(reqId, reason, bucket) {
    if (!REQUIREMENTS[reqId]) return;
    if (!reasons[reqId]) {
      reasons[reqId] = [reason];
      buckets[bucket] = (buckets[bucket] || 0) + 1;
    } else if (!reasons[reqId].includes(reason)) {
      reasons[reqId].push(reason);
    }
  }

  UNIVERSAL.forEach(r => addAct(r, "Universal baseline", "universal"));

  if (s.facing === "external" || s.facing === "both") {
    EXTERNAL_ACTIVATIONS.forEach(r => addAct(r, "External-facing", "external"));
  }

  const allModalities = new Set([...(s.inputModalities||[]), ...(s.outputModalities||[])]);
  allModalities.forEach(m => {
    const acts = MODALITY_ACTIVATIONS[m];
    if (!acts) return;
    const label = m.charAt(0).toUpperCase() + m.slice(1) + " modality";
    acts.forEach(r => addAct(r, label, "modality"));
  });

  if (s.automation) {
    AUTOMATION_ACTIVATIONS.forEach(r => addAct(r, "Automation / tool calls", "automation"));
  }

  return { reasons, buckets };
}

function getAnswerValue(s, key) {
  const map = {
    q_jurisdictions: "jurisdictions",
    q_audience: "audience",
    q_data_categories: "dataCategories",
    q_facing: "facing",
    q_input_modalities: "inputModalities",
    q_output_modalities: "outputModalities",
    q_capability_automation: "automation",
  };
  return s[map[key] || key];
}

function conditionMatches(condition, s) {
  if (!condition) return true;
  if (condition.all) return condition.all.every(c => conditionMatches(c, s));
  if (condition.any) return condition.any.some(c => conditionMatches(c, s));

  return Object.entries(condition).every(([op, expected]) => {
    const match = op.match(/^(.+)_(includes|in|intersects)$/);
    if (!match) return false;

    const value = getAnswerValue(s, match[1]);
    const comparator = match[2];

    if (comparator === "includes") {
      return Array.isArray(value) && value.includes(expected);
    }
    if (comparator === "in") {
      return Array.isArray(expected) && expected.includes(value);
    }
    if (comparator === "intersects") {
      return Array.isArray(value) && Array.isArray(expected) && value.some(v => expected.includes(v));
    }
    return false;
  });
}

function recommendedSlugs(s) {
  const out = [];
  const seen = new Set();
  RECOMMENDATION_RULES.forEach(rule => {
    if (!conditionMatches(rule.when, s)) return;
    rule.recommends.forEach(slug => {
      if (CROSSWALKS_BY_SLUG[slug] && !seen.has(slug)) {
        seen.add(slug);
        out.push({ slug, why: rule.why });
      }
    });
  });
  return out;
}
