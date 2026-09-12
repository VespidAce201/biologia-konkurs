(function () {
  'use strict';

  function createEmitter() {
    var listeners = {};
    return {
      on: function (event, fn) {
        (listeners[event] = listeners[event] || []).push(fn);
        return function off() {
          listeners[event] = (listeners[event] || []).filter(function (f) {
            return f !== fn;
          });
        };
      },
      emit: function (event, payload) {
        (listeners[event] || []).slice().forEach(function (fn) {
          fn(payload);
        });
      },
    };
  }

  window.App.core.events = createEmitter();
  window.App.core.createEmitter = createEmitter;
})();
