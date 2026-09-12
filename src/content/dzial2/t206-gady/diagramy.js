(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna gada =====
  register.diagram('d-t206-gady-budowa', function () {
    var w = 640,
      h = 460;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna gada (na przykładzie jaszczurki)');

    // Tułów wydłużony
    inner += k.ellipse(300, 190, 130, 42, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    // Ogon długi, zwężający się
    inner += k.path('M420,190 L520,196 L560,204', { fill: 'none', stroke: k.PALETTE.pomaranczowy, strokeWidth: 10 });
    // Głowa trójkątna
    inner += k.path('M182,190 L140,168 L128,190 L140,212 Z', { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    // Oko
    inner += k.circle(150, 182, 5, { fill: k.PALETTE.linia });
    // Łuski schematyczne na tułowiu (siatka)
    for (var i = 0; i < 6; i++) {
      inner += k.path('M' + (200 + i * 32) + ',158 q16,32 0,64', { stroke: k.PALETTE.linia, strokeWidth: 1 });
    }
    // Kończyna przednia (krótka, rozstawiona bocznie)
    inner += k.path('M232,222 L206,252 L188,278', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 4 });
    // Kończyna tylna
    inner += k.path('M372,224 L400,256 L414,286', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 5 });
    // Pazury (kreski)
    inner += k.path('M188,278 L178,286 M188,278 L192,290', { stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    inner += k.path('M414,286 L404,296 M414,286 L420,298', { stroke: k.PALETTE.linia, strokeWidth: 1.5 });

    // Numerowane odnośniki
    inner += k.leader(230, 178, 176, 130, 1);
    inner += k.leader(260, 158, 232, 108, 2);
    inner += k.leader(500, 198, 552, 156, 3);
    inner += k.leader(206, 252, 138, 280, 4);
    inner += k.leader(150, 182, 96, 158, 5);

    var opisy = [
      '1 — Suche, rogowe łuski pokrywające ciało — ograniczają parowanie wody',
      '2 — Sucha, nieprzepuszczalna skóra bez gruczołów śluzowych',
      '3 — Długi ogon (u wielu gatunków zdolny do autotomii — odrzucenia w obronie)',
      '4 — Krótkie kończyny rozstawione po bokach ciała, zakończone pazurami',
      '5 — Oko z ruchomą powieką',
    ];
    inner += k.multilineText(40, 320, opisy, { size: 12.5, lineHeight: 22 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: jajo owodniowe gada — przystosowanie do rozrodu na lądzie =====
  register.diagram('d-t206-gady-jajo', function () {
    var w = 640,
      h = 330;
    var inner = k.frameTitle(w, 'Jajo owodniowe gada — rozród niezależny od wody');

    var cx = 300,
      cy = 190;
    inner += k.ellipse(cx, cy, 170, 100, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2.5 });
    inner += k.ellipse(cx, cy, 135, 76, { fill: '#fbf6e6', stroke: k.PALETTE.zolty, strokeWidth: 1, dash: '3,3' });
    inner += k.ellipse(cx - 15, cy + 8, 55, 38, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    inner += k.circle(cx - 20, cy + 8, 16, { fill: '#eef6f1', stroke: k.PALETTE.zielony, strokeWidth: 1.5 });

    inner += k.leader(cx - 170 + 30, cy - 60, cx - 190, cy - 118, 1);
    inner += k.leader(cx - 100, cy - 40, cx - 120, cy + 130, 2);
    inner += k.leader(cx - 35, cy + 10, cx + 40, cy + 150, 3);
    inner += k.leader(cx - 20, cy + 8, cx + 110, cy - 90, 4);

    var opisy = [
      '1 — Elastyczna lub wapienna skorupa — chroni wnętrze jaja przed wysychaniem i urazami',
      '2 — Błony płodowe (owodnia i inne) — otaczają zarodek płynem, zastępując środowisko wodne',
      '3 — Duży zapas żółtka — pokarm dla rozwijającego się zarodka aż do wyklucia',
      '4 — Zarodek rozwija się bezpośrednio w formę podobną do dorosłej (bez stadium larwalnego)',
    ];
    inner += k.multilineText(40, 250, opisy, { size: 12, lineHeight: 20 });

    return k.svg(w, h, inner);
  });
})();
