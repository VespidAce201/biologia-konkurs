(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t116-przeobrazenie', function () {
    var w = 640,
      h = 270;
    var inner = k.frameTitle(w, 'Przeobrażenie zupełne a niezupełne');

    // ===== RZĄD 1: przeobrażenie zupełne =====
    inner += k.text(w / 2, 48, 'PRZEOBRAŻENIE ZUPEŁNE — np. motyl', { anchor: 'middle', weight: 800, size: 12, fill: k.PALETTE.zielony });

    var etapy1 = ['Jajo', 'Larwa (gąsienica)', 'Poczwarka', 'Postać dorosła'];
    var boxW1 = 120,
      gap1 = 20,
      y1 = 60,
      boxH = 55;
    var totalW1 = etapy1.length * boxW1 + (etapy1.length - 1) * gap1;
    var startX1 = (w - totalW1) / 2;
    etapy1.forEach(function (nazwa, i) {
      var x = startX1 + i * (boxW1 + gap1);
      inner += k.rect(x, y1, boxW1, boxH, { fill: i === 2 ? k.PALETTE.zoltyC : k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
      inner += k.text(x + boxW1 / 2, y1 + boxH / 2 + 4, nazwa, { anchor: 'middle', weight: 700, size: 11 });
      if (i < etapy1.length - 1) {
        inner += k.line(x + boxW1, y1 + boxH / 2, x + boxW1 + gap1, y1 + boxH / 2, { arrow: true, strokeWidth: 2, stroke: k.PALETTE.zielony });
      }
    });

    // ===== RZĄD 2: przeobrażenie niezupełne =====
    inner += k.text(w / 2, 153, 'PRZEOBRAŻENIE NIEZUPEŁNE — np. konik polny', { anchor: 'middle', weight: 800, size: 12, fill: k.PALETTE.niebieski });

    var etapy2 = ['Jajo', 'Larwa (nimfa)', 'Postać dorosła'];
    var boxW2 = 150,
      gap2 = 30,
      y2 = 165;
    var totalW2 = etapy2.length * boxW2 + (etapy2.length - 1) * gap2;
    var startX2 = (w - totalW2) / 2;
    etapy2.forEach(function (nazwa, i) {
      var x = startX2 + i * (boxW2 + gap2);
      inner += k.rect(x, y2, boxW2, boxH, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
      inner += k.text(x + boxW2 / 2, y2 + boxH / 2 + 4, nazwa, { anchor: 'middle', weight: 700, size: 11 });
      if (i < etapy2.length - 1) {
        inner += k.line(x + boxW2, y2 + boxH / 2, x + boxW2 + gap2, y2 + boxH / 2, { arrow: true, strokeWidth: 2, stroke: k.PALETTE.niebieski });
      }
    });

    inner += k.text(w / 2, 250, 'Przeobrażenie niezupełne nie ma stadium poczwarki — nimfa stopniowo upodabnia się do postaci dorosłej.', {
      anchor: 'middle', size: 10.5, fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });
})();
