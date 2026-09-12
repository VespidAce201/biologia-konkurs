(function () {
  'use strict';

  var PREFIX = 'bio_konkurs_v1__';

  function isAvailable() {
    try {
      var testKey = PREFIX + '__test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  var memoryFallback = {};
  var available = isAvailable();

  function get(key, defaultValue) {
    try {
      var raw = available ? window.localStorage.getItem(PREFIX + key) : memoryFallback[key];
      if (raw === null || raw === undefined) return defaultValue;
      return JSON.parse(raw);
    } catch (e) {
      console.error('Storage.get error for key', key, e);
      return defaultValue;
    }
  }

  function set(key, value) {
    try {
      var raw = JSON.stringify(value);
      if (available) {
        window.localStorage.setItem(PREFIX + key, raw);
      } else {
        memoryFallback[key] = raw;
      }
      window.App.core.events.emit('storage:changed', { key: key, value: value });
      return true;
    } catch (e) {
      console.error('Storage.set error for key', key, e);
      return false;
    }
  }

  function remove(key) {
    if (available) window.localStorage.removeItem(PREFIX + key);
    else delete memoryFallback[key];
  }

  function update(key, defaultValue, updaterFn) {
    var current = get(key, defaultValue);
    var next = updaterFn(current);
    set(key, next);
    return next;
  }

  function exportAll() {
    var out = {};
    if (available) {
      for (var i = 0; i < window.localStorage.length; i++) {
        var k = window.localStorage.key(i);
        if (k.indexOf(PREFIX) === 0) {
          out[k.slice(PREFIX.length)] = JSON.parse(window.localStorage.getItem(k));
        }
      }
    } else {
      Object.keys(memoryFallback).forEach(function (k) {
        out[k] = JSON.parse(memoryFallback[k]);
      });
    }
    return out;
  }

  function importAll(data) {
    Object.keys(data).forEach(function (k) {
      set(k, data[k]);
    });
  }

  function clearAll() {
    if (available) {
      var toRemove = [];
      for (var i = 0; i < window.localStorage.length; i++) {
        var k = window.localStorage.key(i);
        if (k.indexOf(PREFIX) === 0) toRemove.push(k);
      }
      toRemove.forEach(function (k) {
        window.localStorage.removeItem(k);
      });
    } else {
      memoryFallback = {};
    }
    window.App.core.events.emit('storage:cleared', {});
  }

  window.App.db.storage = {
    isAvailable: available,
    get: get,
    set: set,
    remove: remove,
    update: update,
    exportAll: exportAll,
    importAll: importAll,
    clearAll: clearAll,
  };
})();
