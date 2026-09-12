/**
 * Uniwersalny renderer pytań wszystkich typów (single, multiple, truefalse, matching,
 * gapfill, ordering, image, diagram, table, chart). Zwraca obiekt { node, getOdpowiedz }.
 * opts: { odpowiedzPoczatkowa, zablokowane: bool, onChange: fn(odpowiedz) }
 */
(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var shuffle = window.App.core.utils.shuffle;
  var queries = window.App.content.queries;

  function renderMedia(pytanie) {
    if (pytanie.diagramId) {
      return h('div', { class: 'card-flat', style: { margin: '0 0 16px', textAlign: 'center' }, html: queries.diagram(pytanie.diagramId) });
    }
    if (pytanie.wykres) {
      return h('div', { class: 'card-flat', style: { margin: '0 0 16px' }, html: window.App.components.chart.render(pytanie.wykres) });
    }
    if (pytanie.tabela) {
      return h('div', { class: 'card-flat', style: { margin: '0 0 16px' }, html: window.App.components.dataTable.render(pytanie.tabela) });
    }
    return null;
  }

  function renderChoice(pytanie, odpowiedz, opts, container) {
    var wielokrotny = Array.isArray(pytanie.poprawna);
    var current = odpowiedz !== undefined ? odpowiedz : wielokrotny ? [] : null;

    pytanie.opcje.forEach(function (opcjaTekst, idx) {
      var row = h(
        'div',
        { class: 'option-row', tabindex: 0 },
        h('div', { class: 'option-marker' }, wielokrotny ? '' : String.fromCharCode(65 + idx)),
        h('div', {}, opcjaTekst)
      );

      function refreshVisual() {
        var zaznaczone = wielokrotny ? current.indexOf(idx) !== -1 : current === idx;
        row.classList.toggle('selected', zaznaczone);
        if (opts.pokazWynikTeraz) {
          var jestPoprawna = wielokrotny ? pytanie.poprawna.indexOf(idx) !== -1 : pytanie.poprawna === idx;
          row.classList.remove('correct', 'incorrect');
          if (jestPoprawna) row.classList.add('correct');
          else if (zaznaczone && !jestPoprawna) row.classList.add('incorrect');
        }
      }

      row.addEventListener('click', function () {
        if (opts.zablokowane) return;
        if (wielokrotny) {
          var pos = current.indexOf(idx);
          if (pos === -1) current.push(idx);
          else current.splice(pos, 1);
        } else {
          current = idx;
        }
        opts.onChange(current);
        Array.prototype.forEach.call(container.querySelectorAll('.option-row'), function (r, i) {
          var sel = wielokrotny ? current.indexOf(i) !== -1 : current === i;
          r.classList.toggle('selected', sel);
        });
      });

      refreshVisual();
      container.appendChild(row);
    });

    return { getOdpowiedz: function () { return current; } };
  }

  function renderMatching(pytanie, odpowiedz, opts, container) {
    var lewa = pytanie.dopasowanie.lewa;
    var prawa = pytanie.dopasowanie.prawa;
    var current = odpowiedz || lewa.map(function () { return null; });

    lewa.forEach(function (lewyTekst, i) {
      var select = h(
        'select',
        {
          onChange: function (e) {
            current[i] = e.target.value === '' ? null : parseInt(e.target.value, 10);
            opts.onChange(current.slice());
          },
          disabled: opts.zablokowane,
        },
        [h('option', { value: '' }, '— wybierz —')].concat(
          prawa.map(function (p, j) {
            return h('option', { value: String(j), selected: current[i] === j }, p);
          })
        )
      );
      var row = h(
        'div',
        { class: 'flex items-center gap-12', style: { marginBottom: '10px' } },
        h('div', { style: { minWidth: '42%', fontWeight: '600' } }, lewyTekst),
        h('div', { html: '→' }),
        h('div', { style: { flex: '1' } }, select)
      );
      if (opts.pokazWynikTeraz) {
        var poprawny = pytanie.dopasowanie.pary[i] === current[i];
        row.style.background = poprawny ? 'var(--color-success-bg)' : 'var(--color-danger-bg)';
        row.style.padding = '6px 8px';
        row.style.borderRadius = 'var(--radius-sm)';
      }
      container.appendChild(row);
    });

    return { getOdpowiedz: function () { return current; } };
  }

  function renderGapfill(pytanie, odpowiedz, opts, container) {
    var current = odpowiedz || {};
    var parts = pytanie.tekstZLuka.split(/(\{\{[a-zA-Z0-9_]+\}\})/g);
    var p = h('p', { style: { fontSize: '1.05rem', lineHeight: '2.2' } });
    parts.forEach(function (part) {
      var match = part.match(/^\{\{([a-zA-Z0-9_]+)\}\}$/);
      if (match) {
        var key = match[1];
        var input = h('input', {
          type: 'text',
          style: { display: 'inline-block', width: '140px', margin: '0 4px' },
          value: current[key] || '',
          disabled: opts.zablokowane,
          onInput: function (e) {
            current[key] = e.target.value;
            opts.onChange(Object.assign({}, current));
          },
        });
        if (opts.pokazWynikTeraz) {
          var oczekiwana = pytanie.odpowiedziLuk[key];
          var lista = Array.isArray(oczekiwana) ? oczekiwana : [oczekiwana];
          var ok = lista.some(function (v) { return window.App.modules.scoringEngine.normalizeText(v) === window.App.modules.scoringEngine.normalizeText(current[key] || ''); });
          input.style.borderColor = ok ? 'var(--color-success)' : 'var(--color-danger)';
        }
        p.appendChild(input);
      } else {
        p.appendChild(document.createTextNode(part));
      }
    });
    container.appendChild(p);
    return { getOdpowiedz: function () { return current; } };
  }

  function renderOrdering(pytanie, odpowiedz, opts, container) {
    var n = pytanie.elementy.length;
    var current = odpowiedz || shuffle(pytanie.elementy.map(function (_, i) { return i; }));
    var list = h('div', {});

    function draw() {
      list.innerHTML = '';
      current.forEach(function (origIdx, pos) {
        var row = h(
          'div',
          { class: 'card-flat flex items-center justify-between', style: { marginBottom: '8px', padding: '10px 14px' } },
          h('div', { class: 'flex items-center gap-12' }, h('span', { class: 'badge badge-neutral' }, String(pos + 1)), h('span', {}, pytanie.elementy[origIdx])),
          h(
            'div',
            { class: 'flex gap-8' },
            h('button', {
              class: 'icon-btn',
              html: window.App.components.icons.icon('chevronDown', 16),
              style: { transform: 'rotate(180deg)' },
              disabled: opts.zablokowane || pos === 0,
              onClick: function () {
                var tmp = current[pos - 1];
                current[pos - 1] = current[pos];
                current[pos] = tmp;
                opts.onChange(current.slice());
                draw();
              },
            }),
            h('button', {
              class: 'icon-btn',
              html: window.App.components.icons.icon('chevronDown', 16),
              disabled: opts.zablokowane || pos === n - 1,
              onClick: function () {
                var tmp = current[pos + 1];
                current[pos + 1] = current[pos];
                current[pos] = tmp;
                opts.onChange(current.slice());
                draw();
              },
            })
          )
        );
        list.appendChild(row);
      });
    }
    draw();
    container.appendChild(list);
    opts.onChange(current.slice());
    return { getOdpowiedz: function () { return current; } };
  }

  function render(pytanie, opts) {
    opts = opts || {};
    opts.onChange = opts.onChange || function () {};
    var container = h('div', { class: 'question-body' });

    var media = renderMedia(pytanie);
    if (media) container.appendChild(media);

    var interactionArea = h('div', {});
    container.appendChild(interactionArea);

    var handle;
    if (pytanie.typ === 'matching') {
      handle = renderMatching(pytanie, opts.odpowiedzPoczatkowa, opts, interactionArea);
    } else if (pytanie.typ === 'gapfill') {
      handle = renderGapfill(pytanie, opts.odpowiedzPoczatkowa, opts, interactionArea);
    } else if (pytanie.typ === 'ordering') {
      handle = renderOrdering(pytanie, opts.odpowiedzPoczatkowa, opts, interactionArea);
    } else {
      handle = renderChoice(pytanie, opts.odpowiedzPoczatkowa, opts, interactionArea);
    }

    return { node: container, getOdpowiedz: handle.getOdpowiedz };
  }

  window.App.components.questionRenderer = { render: render };
})();
