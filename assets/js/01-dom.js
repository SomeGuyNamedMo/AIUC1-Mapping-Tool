"use strict";

/* ============================================================
   Safe DOM helpers — build elements via createElement, never
   parse strings as HTML. Only text content from data goes in
   via textContent.
   ============================================================ */

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class")        node.className = v;
      else if (k === "text")    node.textContent = v;
      else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else if (k === "data" && typeof v === "object")
        for (const dk in v) node.dataset[dk] = v[dk];
      else node.setAttribute(k, v);
    }
  }
  if (children) {
    const list = Array.isArray(children) ? children : [children];
    for (const c of list) {
      if (c == null || c === false) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
  }
  return node;
}

function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function mount(node, ...children) {
  clear(node);
  for (const c of children) {
    if (c == null || c === false) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
}
