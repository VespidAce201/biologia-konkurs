(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t204-tkanki-zestawienie', function () {
    var typy = [
      { nazwa: 'Tkanka twórcza', opis: ['(merystematyczna)', 'dzieli się —', 'umożliwia wzrost'], fill: k.PALETTE.zielonyC, border: k.PALETTE.zielony },
      { nazwa: 'Tkanka okrywająca', opis: ['pokrywa roślinę,', 'chroni,', 'aparaty szparkowe'], fill: k.PALETTE.zoltyC, border: k.PALETTE.zolty },
      { nazwa: 'Tkanka miękiszowa', opis: ['wypełnia wnętrze,', 'fotosynteza,', 'magazynowanie'], fill: k.PALETTE.niebieskiC, border: k.PALETTE.niebieski },
      { nazwa: 'Tkanka przewodząca', opis: ['drewno i łyko —', 'transport wody', 'i pokarmu'], fill: k.PALETTE.pomaranczowyC, border: k.PALETTE.pomaranczowy },
      { nazwa: 'Tkanka wzmacniająca', opis: ['usztywnia', 'i wzmacnia', 'organy rośliny'], fill: k.PALETTE.fioletC, border: k.PALETTE.fiolet },
    ];
    var w = 700, h = 220;
    var boxW = 126, boxH = 140, gap = 8;
    var totalW = typy.length * boxW + (typy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 45;
    var inner = k.frameTitle(w, 'Główne typy tkanek roślinnych');
    typy.forEach(function (t, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: t.fill, stroke: t.border, strokeWidth: 1.8 });
      inner += k.multilineText(x + boxW / 2, y + 26, [t.nazwa], { anchor: 'middle', weight: 800, size: 12.5 });
      inner += k.multilineText(x + boxW / 2, y + 60, t.opis, { anchor: 'middle', size: 11, lineHeight: 16 });
    });
    inner += k.text(w / 2, y + boxH + 30, 'Wszystkie tkanki stałe powstają z różnicowania komórek tkanki twórczej.', { anchor: 'middle', size: 11.5, fill: k.PALETTE.szary });
    return k.svg(w, h, inner);
  });

  register.diagram('d-t204-tkanki-przekroj', function () {
    var pasma = [
      { n: 1, nazwa: 'Skórka', w: 40, fill: k.PALETTE.zoltyC },
      { n: 2, nazwa: 'Kora', w: 90, fill: k.PALETTE.zielonyC },
      { n: 3, nazwa: 'Łyko', w: 55, fill: k.PALETTE.pomaranczowyC },
      { n: 4, nazwa: 'Drewno', w: 100, fill: k.PALETTE.niebieskiC },
      { n: 5, nazwa: 'Rdzeń', w: 90, fill: k.PALETTE.fioletC },
    ];
    var w = 660, h = 230;
    var totalW = pasma.reduce(function (s, p) { return s + p.w; }, 0);
    var startX = (w - totalW) / 2;
    var y = 70, bandH = 90;
    var inner = k.frameTitle(w, 'Przekrój poprzeczny łodygi (schemat uproszczony)');
    var x = startX;
    pasma.forEach(function (p) {
      inner += k.rect(x, y, p.w, bandH, { fill: p.fill, stroke: k.PALETTE.linia, rx: 2 });
      inner += k.line(x + p.w / 2, y - 20, x + p.w / 2, y, { strokeWidth: 1 });
      inner += k.numberLabel(x + p.w / 2, y - 28, p.n, {});
      x += p.w;
    });
    inner += k.text(w / 2, y + bandH + 25, '1 skórka (epiderma) · 2 kora (miękisz) · 3 łyko (floem) · 4 drewno (ksylem) · 5 rdzeń (miękisz)', { anchor: 'middle', size: 11 });
    inner += k.text(w / 2, y + bandH + 45, 'Kierunek od zewnątrz (lewa strona) do środka łodygi (prawa strona).', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });
    return k.svg(w, h, inner);
  });
})();
