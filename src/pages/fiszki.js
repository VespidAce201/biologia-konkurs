(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var srsRepo = window.App.db.srsRepo;
  var gamificationEngine = window.App.modules.gamificationEngine;

  function render(root, params, query) {
    var main = h('div', { class: 'app-main container-narrow' });
    root.appendChild(main);

    var tematId = query.temat || '';
    var pulaFiszek = tematId ? queries.fiszkiTematu(tematId) : queries.wszystkieFiszki();
    var temat = tematId ? queries.temat(tematId) : null;

    main.appendChild(h('h1', {}, 'Fiszki' + (temat ? ' — ' + temat.nazwa : '')));

    var wszystkieIds = pulaFiszek.map(function (f) { return f.id; });
    var statystyki = srsRepo.statystykiFiszek(wszystkieIds);

    main.appendChild(
      h(
        'div',
        { class: 'grid grid-4', style: { marginBottom: '20px' } },
        ui.statTile('Razem', statystyki.razem, 'cards'),
        ui.statTile('Nowe', statystyki.nowe, 'star'),
        ui.statTile('W nauce', statystyki.ucze, 'refresh'),
        ui.statTile('Opanowane', statystyki.opanowane, 'check')
      )
    );

    var doPowtorkiIds = srsRepo.fiszkiDoPowtorki(wszystkieIds);
    if (!doPowtorkiIds.length) {
      main.appendChild(ui.emptyState('Brak fiszek do powtórki 🎉', 'Wróć jutro albo wybierz inny temat.'));
      return;
    }

    var kolejka = window.App.core.utils.shuffle(doPowtorkiIds);
    var indeks = 0;
    var sesjaCard = h('div', {});
    main.appendChild(sesjaCard);

    function pokaz() {
      sesjaCard.innerHTML = '';
      if (indeks >= kolejka.length) {
        sesjaCard.appendChild(
          h(
            'div',
            { class: 'card text-center' },
            h('div', { style: { color: 'var(--color-success)' }, html: icon('check', 40) }),
            h('h2', {}, 'Sesja ukończona!'),
            h('p', { class: 'text-muted' }, 'Przejrzano ' + kolejka.length + ' fiszek.'),
            ui.button('Wróć do panelu', { onClick: function () { window.App.core.router.navigate('/'); } })
          )
        );
        return;
      }
      var fiszka = queries.fiszka(kolejka[indeks]);
      sesjaCard.appendChild(h('p', { class: 'text-faint', style: { fontSize: '0.85rem' } }, 'Fiszka ' + (indeks + 1) + ' / ' + kolejka.length));

      var flipped = false;
      var flashcard = h(
        'div',
        { class: 'flashcard' },
        h('div', { class: 'flashcard-face front' }, fiszka.przod),
        h('div', { class: 'flashcard-face back' }, fiszka.tyl)
      );
      flashcard.addEventListener('click', function () {
        flipped = !flipped;
        flashcard.classList.toggle('flipped', flipped);
        ratingRow.style.display = flipped ? 'flex' : 'none';
      });
      var stage = h('div', { class: 'flashcard-stage' }, flashcard);
      sesjaCard.appendChild(stage);
      sesjaCard.appendChild(h('p', { class: 'text-center text-faint', style: { fontSize: '0.82rem' } }, 'Kliknij kartę, aby zobaczyć odpowiedź'));

      var ratingRow = h(
        'div',
        { class: 'flex gap-12 justify-between', style: { marginTop: '18px', display: 'none' } },
        ui.button('Nie umiem', { variant: 'secondary', block: true, onClick: function () { ocen(0); } }),
        ui.button('Trudne', { variant: 'secondary', block: true, onClick: function () { ocen(1); } }),
        ui.button('Umiem', { block: true, onClick: function () { ocen(2); } })
      );
      sesjaCard.appendChild(ratingRow);

      function ocen(ocena) {
        srsRepo.ocenFiszke(fiszka.id, ocena);
        gamificationEngine.poFiszce();
        indeks++;
        pokaz();
      }
    }

    pokaz();
  }

  window.App.pages.fiszki = { render: render };
})();
