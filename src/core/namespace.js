/**
 * Global application namespace. The app is built as classic (non-module) scripts
 * loaded in dependency order from index.html, so every file attaches its exports
 * to `window.App.<area>` instead of using ES import/export. This lets the whole
 * app run by double-clicking index.html (file:// origin) with zero build step and
 * zero installed runtime (no Node, no bundler, no server).
 */
window.App = window.App || {
  core: {},
  db: {},
  content: {},
  modules: {},
  components: {},
  pages: {},
};
