"use strict";
(() => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;
  const target = new URL(canonical.getAttribute("href"));
  const allowedPaths = new Set(["/", "/terms", "/privacy", "/security", "/support"]);
  if (target.origin !== "https://localshopops.com" || !allowedPaths.has(target.pathname)) return;
  const allowedFragments = target.pathname === "/support"
    ? new Set(["#disconnect", "#delete"])
    : target.pathname === "/" ? new Set(["#features", "#how-it-works", "#readiness"]) : new Set();
  if (allowedFragments.has(window.location.hash)) target.hash = window.location.hash;
  // Do not forward queries or arbitrary fragments from the legacy URL.
  window.location.replace(target.href);
})();
