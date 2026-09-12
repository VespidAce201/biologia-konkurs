(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var progressRepo = window.App.db.progressRepo;
  var gamificationEngine = window.App.modules.gamificationEngine;

  function renderSekcja(sekcja) {
    var wrap = h('div', { class: 'section' });
    if (sekcja.naglowek) wrap.appendChild(h('h2', {}, sekcja.naglowek));
    if (sekcja.diagramId) {
      wrap.appendChild(h('div', { class: 'card-flat', style: { textAlign: 'center', margin: '14px 0' }, html: queries.diagram(sekcja.diagramId) }));
    }
    (sekcja.akapity || []).forEach(function (akapit) {
      wrap.appendChild(h('p', {}, akapit));
    });
    return wrap;
  }

  function renderCallout(typ, tytul, tresc) {
    var iconName = typ === 'uwaga' ? 'alert' : typ === 'roznica' ? 'layers' : 'lightbulb';
    return h('div', { class: 'callout callout-' + typ }, h('div', { class: 'callout-title', html: icon(iconName, 18) + ' <span>' + tytul + '</span>' }), h('p', { style: { margin: 0 } }, tresc));
  }

  function renderPytanieKontrolne(pytanie, index) {
    var container = h('div', { class: 'card-flat', style: { marginBottom: '14px' } });
    container.appendChild(h('p', { style: { fontWeight: '700', marginBottom: '10px' } }, index + 1 + '. ' + pytanie.tresc));
    var qr = window.App.components.questionRenderer.render(pytanie, {
      onChange: function () {},
    });
    container.appendChild(qr.node);
    var feedback = h('div', { style: { marginTop: '10px' } });
    var sprawdzBtn = ui.button('Sprawdź odpowiedź', {
      variant: 'secondary',
      size: 'sm',
      onClick: function () {
        var odp = qr.getOdpowiedz();
        var check = window.App.modules.scoringEngine.checkAnswer(pytanie, odp);
        feedback.innerHTML = '';
        feedback.appendChild(
          h(
            'div',
            { class: 'badge ' + (check.poprawna ? 'badge-success' : 'badge-danger'), style: { marginBottom: '6px' } },
            check.poprawna ? 'Poprawnie!' : 'Niepoprawnie'
          )
        );
        feedback.appendChild(h('p', { class: 'text-muted', style: { margin: 0 } }, pytanie.wyjasnienie));
        gamificationEngine.poOdpowiedzi(check.poprawna);
        sprawdzBtn.disabled = true;
      },
    });
    container.appendChild(sprawdzBtn);
    container.appendChild(feedback);
    return container;
  }

  function render(root, lekcjaId) {
    var lekcja = queries.lekcja(lekcjaId);
    var main = h('div', { class: 'app-main container-narrow' });
    if (!lekcja) {
      main.appendChild(ui.emptyState('Nie znaleziono lekcji.'));
      root.appendChild(main);
      return;
    }
    var temat = queries.temat(lekcja.tematId);
    progressRepo.markLekcjaOdslona(lekcjaId);

    main.appendChild(h('a', { href: '#/tematy/' + lekcja.tematId, class: 'text-muted', style: { fontSize: '0.85rem' } }, '← ' + (temat ? temat.nazwa : 'Wróć')));
    main.appendChild(h('h1', {}, lekcja.tytul));
    main.appendChild(h('p', { class: 'text-muted', style: { fontSize: '1.02rem' } }, lekcja.wprowadzenie));

    (lekcja.sekcje || []).forEach(function (sekcja) {
      main.appendChild(renderSekcja(sekcja));
      if (sekcja.typ === 'uwaga') main.appendChild(renderCallout('uwaga', 'Uważaj na...', sekcja.uwagaTresc || ''));
    });

    if (lekcja.zapamietajRoznice && lekcja.zapamietajRoznice.length) {
      main.appendChild(h('h2', {}, 'Zapamiętaj różnicę'));
      lekcja.zapamietajRoznice.forEach(function (r) {
        main.appendChild(renderCallout('roznica', r.a + ' a ' + r.b, r.roznica));
      });
    }

    if (lekcja.uwazajNa && lekcja.uwazajNa.length) {
      main.appendChild(h('h2', {}, 'Uważaj na...'));
      lekcja.uwazajNa.forEach(function (u) {
        main.appendChild(renderCallout('uwaga', 'Częsty błąd', typeof u === 'string' ? u : u.tresc));
      });
    }

    if (lekcja.pojecia && lekcja.pojecia.length) {
      main.appendChild(h('h2', {}, 'Kluczowe pojęcia'));
      var pojeciaCard = h('div', { class: 'card' });
      lekcja.pojecia.forEach(function (p) {
        pojeciaCard.appendChild(h('div', { class: 'pojecie-item' }, h('div', { class: 'pojecie-termin' }, p.termin), h('div', { class: 'text-muted' }, p.definicja)));
      });
      main.appendChild(pojeciaCard);
    }

    if (lekcja.musiszWiedziec && lekcja.musiszWiedziec.length) {
      main.appendChild(renderCallout('wazne', 'Musisz wiedzieć', lekcja.musiszWiedziec.join(' ')));
    }

    var pytaniaKontrolne = queries.pytaniaByIds(lekcja.pytaniaKontrolne || []);
    if (pytaniaKontrolne.length) {
      main.appendChild(h('h2', { style: { marginTop: '32px' } }, 'Pytania kontrolne'));
      pytaniaKontrolne.forEach(function (p, i) {
        main.appendChild(renderPytanieKontrolne(p, i));
      });
    }

    var ukonczona = progressRepo.isLekcjaUkonczona(lekcjaId);
    var completeBtn = ui.button(ukonczona ? 'Lekcja ukończona' : 'Oznacz jako ukończoną', {
      icon: 'check',
      block: true,
      disabled: ukonczona,
      onClick: function () {
        progressRepo.markLekcjaUkonczona(lekcjaId);
        gamificationEngine.poLekcjiUkonczonej();
        ui.toast('Lekcja ukończona! +' + gamificationEngine.XP.LEKCJA_UKONCZONA + ' XP', 'success');
        completeBtn.disabled = true;
        completeBtn.textContent = '';
        completeBtn.appendChild(h('span', { html: icon('check', 18) }));
        completeBtn.appendChild(document.createTextNode('Lekcja ukończona'));
      },
    });
    main.appendChild(h('div', { style: { marginTop: '30px' } }, completeBtn));

    root.appendChild(main);
  }

  window.App.pages.lekcja = { render: render };
})();
