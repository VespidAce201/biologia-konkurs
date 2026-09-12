(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-poziomy-organizacji', function () {
    var etapy = ['Komórka', 'Tkanka', 'Narząd', 'Układ narządów', 'Organizm'];
    var w = 620,
      h = 170;
    var boxW = 96,
      gap = 26;
    var totalW = etapy.length * boxW + (etapy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 60;
    var inner = k.frameTitle(w, 'Poziomy organizacji życia');
    etapy.forEach(function (nazwa, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, 60, { fill: i === 0 ? k.PALETTE.zielonyC : '#eef6f1', stroke: k.PALETTE.zielony });
      inner += k.text(x + boxW / 2, y + 35, nazwa, { anchor: 'middle', weight: 700, size: 12 });
      if (i < etapy.length - 1) {
        inner += k.line(x + boxW, y + 30, x + boxW + gap, y + 30, { arrow: true, strokeWidth: 2 });
      }
    });
    inner += k.text(w / 2, y + 100, 'Każdy wyższy poziom zbudowany jest z elementów poziomu niższego.', { anchor: 'middle', size: 11.5, fill: k.PALETTE.szary });
    return k.svg(w, h, inner);
  });
})();
