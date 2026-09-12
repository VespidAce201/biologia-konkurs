(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var esc = window.App.core.utils.escapeHTML;
  var icon = window.App.components.icons.icon;

  function progressBar(percentValue, opts) {
    opts = opts || {};
    var cls = 'progress-track' + (opts.thin ? ' thin' : '') + (opts.thick ? ' thick' : '');
    var fillCls = 'progress-fill' + (opts.variant ? ' ' + opts.variant : '');
    return h(
      'div',
      { class: cls },
      h('div', { class: fillCls, style: { width: window.App.core.utils.clamp(percentValue, 0, 100) + '%' } })
    );
  }

  function badge(text, variant) {
    return h('span', { class: 'badge badge-' + (variant || 'neutral') }, text);
  }

  function poziomBadge(poziom) {
    var map = { latwy: 'success', sredni: 'info', trudny: 'warning', konkursowy: 'danger' };
    var labels = window.App.content.POZIOMY_LABELS;
    return badge(labels[poziom] || poziom, map[poziom] || 'neutral');
  }

  function button(label, opts) {
    opts = opts || {};
    var cls = 'btn btn-' + (opts.variant || 'primary') + (opts.size ? ' btn-' + opts.size : '') + (opts.block ? ' btn-block' : '');
    var children = [];
    if (opts.icon) children.push(h('span', { html: icon(opts.icon, 18) }));
    children.push(document.createTextNode(label));
    var btn = h('button', { class: cls, type: 'button', onClick: opts.onClick, disabled: opts.disabled }, children);
    return btn;
  }

  function statTile(label, value, iconName) {
    return h(
      'div',
      { class: 'stat-tile' },
      h(
        'div',
        { class: 'flex items-center gap-8' },
        iconName ? h('span', { style: { color: 'var(--color-primary)' }, html: icon(iconName, 20) }) : null,
        h('div', {}, h('div', { class: 'stat-value' }, String(value)), h('div', { class: 'stat-label' }, label))
      )
    );
  }

  function emptyState(message, sub) {
    return h(
      'div',
      { class: 'empty-state' },
      h('div', { html: icon('search', 32) }),
      h('p', { class: 'mt-0' }, message),
      sub ? h('p', { class: 'text-faint' }, sub) : null
    );
  }

  function tabs(items, activeId, onSelect) {
    return h(
      'div',
      { class: 'tabs' },
      items.map(function (item) {
        return h(
          'button',
          {
            class: 'tab-btn' + (item.id === activeId ? ' active' : ''),
            onClick: function () {
              onSelect(item.id);
            },
          },
          item.label
        );
      })
    );
  }

  var modalRoot = null;
  function ensureModalRoot() {
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
    return modalRoot;
  }

  function openModal(contentNode, opts) {
    opts = opts || {};
    var root = ensureModalRoot();
    var overlay = h('div', { class: 'modal-overlay' });
    var box = h('div', { class: 'modal-box' }, contentNode);
    overlay.appendChild(box);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay && opts.closable !== false) close();
    });
    function close() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (opts.onClose) opts.onClose();
    }
    root.appendChild(overlay);
    return close;
  }

  var toastRoot = null;
  function toast(message, variant) {
    if (!toastRoot) {
      toastRoot = document.createElement('div');
      toastRoot.className = 'toast-stack';
      document.body.appendChild(toastRoot);
    }
    var node = h('div', { class: 'toast' }, message);
    if (variant) node.style.borderLeft = '4px solid var(--color-' + variant + ')';
    toastRoot.appendChild(node);
    setTimeout(function () {
      node.style.transition = 'opacity 0.3s ease';
      node.style.opacity = '0';
      setTimeout(function () {
        if (node.parentNode) node.parentNode.removeChild(node);
      }, 300);
    }, 2600);
  }

  function card(children, opts) {
    opts = opts || {};
    return h('div', { class: 'card' + (opts.hover ? ' card-hover' : ''), onClick: opts.onClick }, children);
  }

  window.App.components.ui = {
    progressBar: progressBar,
    badge: badge,
    poziomBadge: poziomBadge,
    button: button,
    statTile: statTile,
    emptyState: emptyState,
    tabs: tabs,
    openModal: openModal,
    toast: toast,
    card: card,
  };
})();
