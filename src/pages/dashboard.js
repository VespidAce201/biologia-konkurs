(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var statsEngine = window.App.modules.statsEngine;
  var recommendationEngine = window.App.modules.recommendationEngine;
  var gamificationRepo = window.App.db.gamificationRepo;
  var srsRepo = window.App.db.srsRepo;
  var resultsRepo = window.App.db.resultsRepo;

  function render(root) {
    var main = h('div', { class: 'app-main' });
    root.appendChild(main);

    var dane = statsEngine.pelnePodsumowanie();
    var poziomInfo = gamificationRepo.poziomZXp(dane.gamifikacja.xp);

    main.appendChild(
      h(
        'div',
        { class: 'flex items-center justify-between flex-wrap gap-16', style: { marginBottom: '20px' } },
        h('div', {}, h('h1', { class: 'mb-0' }, 'Cześć! 👋'), h('p', { class: 'text-muted mb-0' }, 'Oto Twój panel nauki do konkursu z biologii.')),
        h(
          'div',
          { class: 'flex items-center gap-12' },
          h('div', { class: 'avatar-level' }, String(poziomInfo.poziom)),
          h('div', {}, h('div', { style: { fontWeight: '700' } }, 'Poziom ' + poziomInfo.poziom), h('div', { class: 'text-faint', style: { fontSize: '0.78rem' } }, poziomInfo.xpWPoziomie + '/' + poziomInfo.xpDoNastepnego + ' XP'))
        )
      )
    );

    main.appendChild(
      h(
        'div',
        { class: 'grid grid-4', style: { marginBottom: '24px' } },
        ui.statTile('Postęp materiału', dane.ogolny.procent + '%', 'target'),
        ui.statTile('Seria dni nauki', dane.gamifikacja.seriaDni, 'flame'),
        ui.statTile('Fiszki do powtórki', srsRepo.fiszkiDoPowtorki(queries.wszystkieFiszki().map(function (f) { return f.id; })).length, 'cards'),
        ui.statTile('Czas nauki dziś', resultsRepo.czasNaukiDzisiaj() + ' min', 'clock')
      )
    );

    main.appendChild(
      h(
        'div',
        { class: 'grid grid-4', style: { marginBottom: '30px' } },
        ui.button('Rozpocznij naukę', { icon: 'book', block: true, onClick: function () { window.App.core.router.navigate('/dzialy'); } }),
        ui.button('Quiz', { icon: 'quiz', variant: 'secondary', block: true, onClick: function () { window.App.core.router.navigate('/quiz'); } }),
        ui.button('Egzamin próbny', { icon: 'clock', variant: 'secondary', block: true, onClick: function () { window.App.core.router.navigate('/egzaminy'); } }),
        ui.button('Symulacja konkursu', { icon: 'trophy', variant: 'secondary', block: true, onClick: function () { window.App.core.router.navigate('/konkurs'); } })
      )
    );

    var rekomendacje = recommendationEngine.globalneRekomendacje();
    if (rekomendacje.length) {
      main.appendChild(h('h2', {}, 'Rekomendowane powtórki'));
      var recGrid = h('div', { class: 'grid grid-2' });
      rekomendacje.forEach(function (r) {
        recGrid.appendChild(
          h(
            'div',
            { class: 'card-flat flex items-center gap-12' },
            h('span', { style: { color: 'var(--color-warning)' }, html: icon('lightbulb', 20) }),
            h('span', { style: { fontSize: '0.9rem' } }, r.tekst)
          )
        );
      });
      main.appendChild(recGrid);
    }

    main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Postęp działów'));
    var dzGrid = h('div', { class: 'grid grid-2' });
    dane.dzialy.forEach(function (d) {
      dzGrid.appendChild(
        ui.card(
          [
            h('div', { class: 'flex items-center justify-between' }, h('strong', {}, d.dzial.nazwa), h('span', {}, d.procentLekcji + '%')),
            ui.progressBar(d.procentLekcji, { thin: true }),
          ],
          { hover: true, onClick: function () { window.App.core.router.navigate('/dzialy/' + d.dzial.id); } }
        )
      );
    });
    main.appendChild(dzGrid);

    var ostatnieQuizy = dane.quizy.liczbaQuizow ? window.App.db.resultsRepo.wynikiQuizow().slice(0, 5) : [];
    if (ostatnieQuizy.length) {
      main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Ostatnie wyniki'));
      var lista = h('div', { class: 'card' });
      ostatnieQuizy.forEach(function (w) {
        lista.appendChild(
          h(
            'div',
            { class: 'flex items-center justify-between', style: { padding: '8px 0', borderBottom: '1px solid var(--color-border)' } },
            h('span', { class: 'text-muted', style: { fontSize: '0.85rem' } }, window.App.core.utils.formatDate(w.data)),
            h('span', {}, w.poprawne + '/' + w.liczbaPytan + ' (' + w.procent + '%)')
          )
        );
      });
      main.appendChild(lista);
    }
  }

  window.App.pages.dashboard = { render: render };
})();
