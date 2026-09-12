(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Zestawienie czterech głównych typów tkanek zwierzęcych u człowieka:
  // podpisane pola z krótką funkcją i przykładem każdej tkanki.
  register.diagram('d-t206-4typy', function () {
    var w = 560,
      h = 320;
    var inner = k.frameTitle(w, 'Cztery podstawowe typy tkanek zwierzęcych');

    var boxW = 250,
      boxH = 110;
    var boxes = [
      {
        x: 30,
        y: 55,
        title: 'Tkanka nabłonkowa',
        fill: k.PALETTE.niebieskiC,
        stroke: k.PALETTE.niebieski,
        lines: ['Funkcja: ochrona, wchłanianie', 'i wydzielanie substancji', 'Przykład: naskórek, nabłonek', 'jelita, gruczoły'],
      },
      {
        x: 300,
        y: 55,
        title: 'Tkanka łączna',
        fill: k.PALETTE.zoltyC,
        stroke: k.PALETTE.zolty,
        lines: ['Funkcja: podpora, łączenie,', 'odżywianie i obrona organizmu', 'Przykład: kość, chrząstka,', 'tkanka tłuszczowa, krew'],
      },
      {
        x: 30,
        y: 185,
        title: 'Tkanka mięśniowa',
        fill: k.PALETTE.czerwonyC,
        stroke: k.PALETTE.czerwony,
        lines: ['Funkcja: kurczliwość —', 'umożliwia wykonywanie ruchu', 'Przykład: mięśnie szkieletowe,', 'mięsień sercowy'],
      },
      {
        x: 300,
        y: 185,
        title: 'Tkanka nerwowa',
        fill: k.PALETTE.fioletC,
        stroke: k.PALETTE.fiolet,
        lines: ['Funkcja: odbiera i przewodzi', 'impulsy nerwowe', 'Przykład: mózg, rdzeń', 'kręgowy, nerwy'],
      },
    ];

    boxes.forEach(function (b) {
      inner += k.rect(b.x, b.y, boxW, boxH, { fill: b.fill, stroke: b.stroke, strokeWidth: 1.5 });
      inner += k.text(b.x + boxW / 2, b.y + 22, b.title, { anchor: 'middle', weight: 800, size: 13.5 });
      inner += k.multilineText(b.x + 14, b.y + 46, b.lines, { size: 11.5, lineHeight: 16 });
    });

    return k.svg(w, h, inner);
  });
})();
