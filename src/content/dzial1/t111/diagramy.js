(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t111-model-klucz-zamek', function () {
    var w = 640,
      h = 250;
    var inner = k.frameTitle(w, 'Model „klucz–zamek” działania enzymu');

    // Krok 1: substrat + enzym osobno
    inner += k.text(90, 55, '1. Enzym i substrat', { anchor: 'middle', weight: 700, size: 12 });
    inner += k.rect(40, 70, 100, 55, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 14 });
    inner += k.text(90, 102, 'Enzym', { anchor: 'middle', weight: 700, size: 11.5 });
    inner += k.text(90, 116, '(miejsce aktywne)', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    inner += k.rect(60, 145, 60, 30, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, rx: 6 });
    inner += k.text(90, 164, 'Substrat', { anchor: 'middle', size: 10.5 });

    inner += k.line(160, 130, 210, 130, { arrow: true, strokeWidth: 2 });

    // Krok 2: kompleks enzym-substrat
    inner += k.text(320, 55, '2. Kompleks enzym–substrat', { anchor: 'middle', weight: 700, size: 12 });
    inner += k.rect(260, 70, 120, 90, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 14 });
    inner += k.rect(295, 100, 50, 28, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, rx: 6 });
    inner += k.text(320, 150, 'Substrat pasuje do miejsca', { anchor: 'middle', size: 9, fill: k.PALETTE.szary });
    inner += k.text(320, 161, 'aktywnego jak klucz do zamka', { anchor: 'middle', size: 9, fill: k.PALETTE.szary });

    inner += k.line(390, 130, 440, 130, { arrow: true, strokeWidth: 2 });

    // Krok 3: produkt + enzym uwolniony
    inner += k.text(550, 55, '3. Produkt i enzym', { anchor: 'middle', weight: 700, size: 12 });
    inner += k.rect(500, 70, 100, 55, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 14 });
    inner += k.text(550, 102, 'Enzym', { anchor: 'middle', weight: 700, size: 11.5 });
    inner += k.text(550, 116, '(niezmieniony)', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    inner += k.rect(520, 145, 60, 30, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, rx: 6 });
    inner += k.text(550, 164, 'Produkt', { anchor: 'middle', size: 10.5 });

    inner += k.text(w / 2, 205, 'Enzym łączy się z substratem, przyspiesza reakcję, po czym uwalnia się w niezmienionej postaci.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    inner += k.text(w / 2, 222, 'Dzięki temu jedna cząsteczka enzymu może wielokrotnie katalizować tę samą reakcję.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
