(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t110-tkanki-roslinne', function () {
    var typy = ['Twórcza', 'Okrywająca', 'Miękiszowa', 'Przewodząca', 'Wzmacniająca'];
    var w = 640,
      h = 190;
    var boxW = 108,
      gap = 15;
    var totalW = typy.length * boxW + (typy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 55;
    var inner = k.frameTitle(w, 'Tkanki roślinne');
    typy.forEach(function (nazwa, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, 60, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
      inner += k.text(x + boxW / 2, y + 34, nazwa, { anchor: 'middle', weight: 700, size: 11.5 });
    });
    inner += k.text(w / 2, y + 95, 'Każda z tkanek pełni w roślinie inną, wyspecjalizowaną funkcję.', { anchor: 'middle', size: 11.5, fill: k.PALETTE.szary });
    return k.svg(w, h, inner);
  });

  register.diagram('d-t110-tkanki-zwierzece', function () {
    var typy = ['Nabłonkowa', 'Łączna', 'Mięśniowa', 'Nerwowa'];
    var w = 620,
      h = 190;
    var boxW = 130,
      gap = 20;
    var totalW = typy.length * boxW + (typy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 55;
    var inner = k.frameTitle(w, 'Tkanki zwierzęce (na przykładzie człowieka)');
    typy.forEach(function (nazwa, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, 60, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
      inner += k.text(x + boxW / 2, y + 34, nazwa, { anchor: 'middle', weight: 700, size: 12 });
    });
    inner += k.text(w / 2, y + 95, 'Wszystkie narządy zwierząt zbudowane są z tych czterech podstawowych tkanek.', { anchor: 'middle', size: 11.5, fill: k.PALETTE.szary });
    return k.svg(w, h, inner);
  });
})();
