// The ONLY place `site` and `base` are set.
// User site (repository Xeakaes.github.io): site below, base '/'.
// Project site (repository e.g. "portfolio"): base '/portfolio/'.
// Both can be overridden by environment variables (used by CI and tests).
export const SITE_URL = process.env.SITE_URL || 'https://xeakaes.github.io';
export const BASE_PATH = process.env.BASE_PATH || '/';
