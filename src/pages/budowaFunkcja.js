(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var scoringEngine = window.App.modules.scoringEngine;
  var gamificationEngine = window.App.modules.gamificationEngine;
  var resultsRepo = window.App.db.resultsRepo;

  function renderChain(cecha, funkcja, korzysc, ujawnijFunkcje, ujawnijKorzysc) {
    return h(
      'div',
      { class: 'flex items-center flex-wrap gap-8', style: { margin: '16px 0' } },
      h('div', { class: 'card-flat', style: { flex: '1', minWidth: '150px', textAlign: 'center' } }, h('div', { class: 'text-faint', style: { fontSize: '0.75rem', fontWeight: '700' } }, 'CECHA BUDOWY'), h('div', { style: { fontWeight: '700' } }, cecha)),
      h('div', { html: icon('arrowRight', 22) }),
      h('div', { class: 'card-flat', style: { flex: '1', minWidth: '150px', textAlign: 'center', opacity: ujawnijFunkcje ? 1 : 0.35 } }, h('div', { class: 'text-faint', style: { fontSize: '0.75rem', fontWeight: '700' } }, 'FUNKCJA'), h('div', { style: { fontWeight: '700' } }, ujawnijFunkcje ? funkcja : '?')),
      h('div', { html: icon('arrowRight', 22) }),
      h('div', { class: 'card-flat', style: { flex: '1', minWidth: '150px', textAlign: 'center', opacity: ujawnijKorzysc ? 1 : 0.35 } }, h('div', { class: 'text-faint', style: { fontSize: '0.75rem', fontWeight: '700' } }, 'KORZYŚĆ DLA ORGANIZMU'), h('div', { style: { fontWeight: '700' } }, ujawnijKorzysc ? korzysc : '?'))
    );
  }

  function render(root, params, query) {
    var main = h('div', { class: 'app-main container-narrow' });
    root.appendChild(main);
    main.appendChild(h('h1', {}, 'Budowa → funkcja'));
    main.appendChild(h('p', { class: 'text-muted' }, 'Ćwicz rozumienie zależności: cecha budowy → jej funkcja → korzyść dla organizmu (przystosowanie do środowiska, sposobu odżywiania, ruchu, rozmnażania).'));

    var pula = window.App.core.utils.shuffle(queries.budowaFunkcjaLista());
    if (!pula.length) {
      main.appendChild(ui.emptyState('Moduł jest w przygotowaniu.'));
      return;
    }

    var indeks = 0;
    var poprawne = 0;
    var stage = h('div', {});
    main.appendChild(stage);

    function pokaz() {
      stage.innerHTML = '';
      if (indeks >= pula.length) {
        var procent = window.App.core.utils.percent(poprawne, pula.length);
        resultsRepo.dodajCzasNauki(2);
        stage.appendChild(
          h(
            'div',
            { class: 'card text-center' },
            h('h2', {}, 'Ćwiczenie ukończone!'),
            h('p', { class: 'text-muted' }, 'Wynik: ' + poprawne + ' / ' + pula.length + ' (' + procent + '%)'),
            ui.button('Zacznij od nowa', { onClick: function () { window.App.core.router.navigate('/budowa-funkcja'); indeks = 0; poprawne = 0; pokaz(); } })
          )
        );
        return;
      }
      var item = pula[indeks];
      stage.appendChild(h('div', { class: 'badge badge-neutral' }, indeks + 1 + ' / ' + pula.length));
      var card = h('div', { class: 'card' });
      card.appendChild(renderChain(item.cecha, item.funkcja, item.korzysc, false, false));
      card.appendChild(h('h3', {}, item.pytanie));
      var qr = window.App.components.questionRenderer.render({ typ: 'single', opcje: item.opcje, poprawna: item.poprawna }, { onChange: function () {} });
      card.appendChild(qr.node);
      card.appendChild(
        ui.button('Sprawdź', {
          block: true,
          onClick: function (e) {
            var odp = qr.getOdpowiedz();
            var check = scoringEngine.checkAnswer({ typ: 'single', poprawna: item.poprawna, punkty: 1 }, odp);
            if (check.poprawna) poprawne++;
            gamificationEngine.poOdpowiedzi(check.poprawna);
            card.innerHTML = '';
            card.appendChild(renderChain(item.cecha, item.funkcja, item.korzysc, true, true));
            card.appendChild(h('div', { class: 'badge ' + (check.poprawna ? 'badge-success' : 'badge-danger') }, check.poprawna ? 'Poprawnie!' : 'Niepoprawnie'));
            card.appendChild(h('p', { style: { marginTop: '8px' } }, item.wyjasnienie));
            card.appendChild(ui.button(indeks < pula.length - 1 ? 'Dalej' : 'Zakończ', { block: true, style: { marginTop: '12px' }, onClick: function () { indeks++; pokaz(); } }));
          },
        })
      );
      stage.appendChild(card);
    }
    pokaz();
  }

  window.App.pages.budowaFunkcja = { render: render };
})();
