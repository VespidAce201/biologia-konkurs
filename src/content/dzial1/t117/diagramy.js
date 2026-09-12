(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t117-luk-odruchowy', function () {
    var w = 640,
      h = 195;
    var inner = k.frameTitle(w, 'Łuk odruchowy');

    var etapy = [
      { nazwa: 'Bodziec', w: 90, fill: k.PALETTE.szaryC, stroke: k.PALETTE.szary },
      { nazwa: 'Receptor', w: 90, fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony },
      { nazwa: 'Ośrodek nerwowy', w: 140, fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet },
      { nazwa: 'Efektor', w: 90, fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski },
      { nazwa: 'Reakcja', w: 90, fill: k.PALETTE.szaryC, stroke: k.PALETTE.szary },
    ];
    var gap = 20,
      y = 60,
      boxH = 60;
    var totalW = etapy.reduce(function (sum, e) { return sum + e.w; }, 0) + (etapy.length - 1) * gap;
    var x = (w - totalW) / 2;

    etapy.forEach(function (e, i) {
      inner += k.rect(x, y, e.w, boxH, { fill: e.fill, stroke: e.stroke });
      inner += k.text(x + e.w / 2, y + boxH / 2 + 4, e.nazwa, { anchor: 'middle', weight: 700, size: 11.5 });
      if (i < etapy.length - 1) {
        inner += k.line(x + e.w, y + boxH / 2, x + e.w + gap, y + boxH / 2, { arrow: true, strokeWidth: 2 });
      }
      x += e.w + gap;
    });

    inner += k.multilineText(
      w / 2,
      145,
      [
        'Bodziec pobudza receptor, który wysyła impuls nerwowy do ośrodka nerwowego.',
        'Stamtąd sygnał dociera do efektora, wywołując reakcję organizmu.',
      ],
      { anchor: 'middle', size: 11, fill: k.PALETTE.szary, lineHeight: 16 }
    );

    return k.svg(w, h, inner);
  });
})();
