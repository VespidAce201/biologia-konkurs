(function () {
  'use strict';
  var storage = window.App.db.storage;
  var KEY = 'ustawienia';

  function defaults() {
    return { motyw: 'system', dzwiekiWlaczone: false };
  }

  function get() {
    return storage.get(KEY, defaults());
  }

  function setMotyw(motyw) {
    return storage.update(KEY, defaults(), function (s) {
      s.motyw = motyw;
      return s;
    });
  }

  window.App.db.settingsRepo = { get: get, setMotyw: setMotyw };
})();
