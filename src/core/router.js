(function () {
  'use strict';

  var routes = [];
  var notFoundHandler = null;
  var currentUnmount = null;
  var rootEl = null;

  function register(pattern, handler) {
    var paramNames = [];
    var regexStr = pattern
      .replace(/\/:([a-zA-Z0-9_]+)/g, function (_, name) {
        paramNames.push(name);
        return '/([^/]+)';
      })
      .replace(/\//g, '\\/');
    var regex = new RegExp('^' + regexStr + '$');
    routes.push({ pattern: pattern, regex: regex, paramNames: paramNames, handler: handler });
  }

  function notFound(handler) {
    notFoundHandler = handler;
  }

  function parseHash() {
    var hash = window.location.hash || '#/';
    var path = hash.slice(1);
    var queryIndex = path.indexOf('?');
    var query = {};
    if (queryIndex >= 0) {
      var qs = path.slice(queryIndex + 1);
      path = path.slice(0, queryIndex);
      qs.split('&').forEach(function (pair) {
        if (!pair) return;
        var kv = pair.split('=');
        query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
      });
    }
    if (path === '') path = '/';
    return { path: path, query: query };
  }

  function resolve() {
    var parsed = parseHash();
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      var match = parsed.path.match(route.regex);
      if (match) {
        var params = {};
        route.paramNames.forEach(function (name, idx) {
          params[name] = decodeURIComponent(match[idx + 1]);
        });
        return { route: route, params: params, query: parsed.query };
      }
    }
    return null;
  }

  function render() {
    if (!rootEl) return;
    if (typeof currentUnmount === 'function') {
      try {
        currentUnmount();
      } catch (e) {
        console.error('Router unmount error', e);
      }
      currentUnmount = null;
    }
    var match = resolve();
    rootEl.innerHTML = '';
    window.scrollTo(0, 0);
    if (!match) {
      if (notFoundHandler) currentUnmount = notFoundHandler(rootEl) || null;
      return;
    }
    currentUnmount = match.route.handler(rootEl, match.params, match.query) || null;
    window.App.core.events.emit('route:changed', { path: parseHash().path, params: match.params });
  }

  function navigate(path) {
    if (window.location.hash === '#' + path) {
      render();
    } else {
      window.location.hash = path;
    }
  }

  function init(root) {
    rootEl = root;
    window.addEventListener('hashchange', render);
    render();
  }

  window.App.core.router = {
    register: register,
    notFound: notFound,
    navigate: navigate,
    init: init,
    parseHash: parseHash,
  };
})();
