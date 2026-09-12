(function () {
  'use strict';

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (key) {
      var value = attrs[key];
      if (value === null || value === undefined || value === false) return;
      if (key === 'class') node.className = value;
      else if (key === 'html') node.innerHTML = value;
      else if (key.indexOf('on') === 0 && typeof value === 'function') {
        node.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(node.style, value);
      } else if (value === true) {
        node.setAttribute(key, '');
      } else {
        node.setAttribute(key, value);
      }
    });
    (children || []).forEach(function (child) {
      if (child === null || child === undefined || child === false) return;
      if (typeof child === 'string' || typeof child === 'number') {
        node.appendChild(document.createTextNode(String(child)));
      } else {
        node.appendChild(child);
      }
    });
    return node;
  }

  function h(tag, attrs) {
    var children = [];
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (Array.isArray(c)) children = children.concat(c);
      else children.push(c);
    }
    return el(tag, attrs, children);
  }

  function fromHTML(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  }

  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function uid(prefix) {
    return (prefix || 'id') + '_' + Math.random().toString(36).slice(2, 10);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function formatTime(totalSeconds) {
    var s = Math.max(0, Math.round(totalSeconds));
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function formatDate(isoString) {
    if (!isoString) return '—';
    var d = new Date(isoString);
    if (isNaN(d.getTime())) return '—';
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    return dd + '.' + mm + '.' + d.getFullYear();
  }

  function todayISODate() {
    return new Date().toISOString().slice(0, 10);
  }

  function daysBetween(isoA, isoB) {
    var a = new Date(isoA);
    var b = new Date(isoB);
    return Math.round((b - a) / (1000 * 60 * 60 * 24));
  }

  function percent(part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 100);
  }

  function debounce(fn, wait) {
    var timer = null;
    return function () {
      var args = arguments;
      var ctx = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(ctx, args);
      }, wait);
    };
  }

  window.App.core.utils = {
    el: el,
    h: h,
    fromHTML: fromHTML,
    escapeHTML: escapeHTML,
    uid: uid,
    clamp: clamp,
    shuffle: shuffle,
    formatTime: formatTime,
    formatDate: formatDate,
    todayISODate: todayISODate,
    daysBetween: daysBetween,
    percent: percent,
    debounce: debounce,
  };
})();
