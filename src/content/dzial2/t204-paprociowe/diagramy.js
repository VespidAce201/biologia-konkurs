(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t204-paprociowe-budowa', function () {
    var w = 560, h = 300;
    var inner = k.frameTitle(w, 'Budowa paproci (schemat)');

    // poziom gruntu
    inner += k.line(40, 200, 520, 200, { stroke: k.PALETTE.szary, strokeWidth: 1, dash: '4,3' });
    inner += k.text(480, 194, 'poziom gruntu', { size: 10, fill: k.PALETTE.szary });

    // rachis (główny szypułka liścia) i listki (pinnae)
    inner += k.line(300, 205, 300, 42, { stroke: k.PALETTE.zielony, strokeWidth: 2 });
    var pinnaePos = [];
    for (var i = 0; i < 7; i++) {
      var y = 172 - i * 20;
      var side = i % 2 === 0 ? 1 : -1;
      var x = 300 + side * 32;
      pinnaePos.push({ x: x, y: y });
      inner += k.ellipse(x, y, 22, 9, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 1.3 });
    }

    // sorusy na spodzie jednego listka (pinnaePos[3])
    var sp = pinnaePos[3];
    inner += k.circle(sp.x - 8, sp.y + 8, 2.5, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy });
    inner += k.circle(sp.x, sp.y + 9, 2.5, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy });
    inner += k.circle(sp.x + 8, sp.y + 8, 2.5, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy });

    // kłącze (podziemna łodyga)
    inner += k.rect(250, 202, 100, 20, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, rx: 8 });

    // korzenie przybyszowe
    var rootsX = [258, 278, 300, 322, 342];
    rootsX.forEach(function (rx) {
      var dx = (rx - 300) * 0.6;
      inner += k.path('M' + rx + ',222 Q' + (rx + dx) + ',250 ' + (rx + dx * 1.5) + ',282', { stroke: k.PALETTE.zielony, strokeWidth: 1.4 });
    });

    // numerowane objaśnienia
    inner += k.leader(300, 44, 300, 22, 1, {});
    inner += k.leader(sp.x - 2, sp.y + 10, 400, 96, 2, {});
    inner += k.leader(320, 212, 420, 212, 3, {});
    inner += k.leader(310, 260, 420, 268, 4, {});

    inner += k.legend(30, 245, [
      { label: '1 liść (blaszka pierzasta)', fill: k.PALETTE.zielonyC },
      { label: '2 sorusy (na spodzie liścia)', fill: k.PALETTE.pomaranczowyC },
      { label: '3 kłącze (łodyga)', fill: k.PALETTE.zielonyC },
      { label: '4 korzenie przybyszowe', fill: k.PALETTE.jasny },
    ]);

    return k.svg(w, h, inner);
  });

  register.diagram('d-t204-paprociowe-cykl', function () {
    var w = 560, h = 340;
    var boxW = 180, boxH = 80;
    var TLx = 40, TLy = 60;
    var TRx = 340, TRy = 60;
    var BRx = 340, BRy = 240;
    var BLx = 40, BLy = 240;

    var inner = k.frameTitle(w, 'Cykl rozwojowy paproci (przemiana pokoleń)');

    inner += k.rect(TLx, TLy, boxW, boxH, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 1.8 });
    inner += k.multilineText(TLx + boxW / 2, TLy + 24, ['1. Sporofit (paproć)'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(TLx + boxW / 2, TLy + 46, ['dojrzała roślina,', 'wytwarza sorusy z zarodniami'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(TRx, TRy, boxW, boxH, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.8 });
    inner += k.multilineText(TRx + boxW / 2, TRy + 24, ['2. Zarodniki'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(TRx + boxW / 2, TRy + 46, ['powstają w zarodniach', 'w wyniku mejozy'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(BRx, BRy, boxW, boxH, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 1.8 });
    inner += k.multilineText(BRx + boxW / 2, BRy + 24, ['3. Gametofit (przedrośle)'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(BRx + boxW / 2, BRy + 46, ['małe, sercowate,', 'wytwarza plemnie i rodnie'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(BLx, BLy, boxW, boxH, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.8 });
    inner += k.multilineText(BLx + boxW / 2, BLy + 24, ['4. Zygota → nowy sporofit'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(BLx + boxW / 2, BLy + 46, ['zapłodnienie w wodzie,', 'wzrost młodej paproci'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    // strzałki (pętla zgodnie z ruchem wskazówek zegara)
    inner += k.line(TLx + boxW, TLy + boxH / 2, TRx, TLy + boxH / 2, { arrow: true, strokeWidth: 2 });
    inner += k.text((TLx + boxW + TRx) / 2, TLy + boxH / 2 - 8, 'mejoza w zarodniach', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(TRx + boxW / 2, TRy + boxH, BRx + boxW / 2, BRy, { arrow: true, strokeWidth: 2 });
    inner += k.text(TRx + boxW / 2 + 8, (TRy + boxH + BRy) / 2, 'kiełkowanie', { anchor: 'start', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(BRx, BRy + boxH / 2, BLx + boxW, BRy + boxH / 2, { arrow: true, strokeWidth: 2 });
    inner += k.text((BRx + BLx + boxW) / 2, BRy + boxH / 2 + 20, 'zapłodnienie (w wodzie)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(BLx + boxW / 2, BLy, TLx + boxW / 2, TLy + boxH, { arrow: true, strokeWidth: 2 });
    inner += k.text(BLx + boxW / 2 - 8, (BLy + TLy + boxH) / 2, 'wzrost', { anchor: 'end', size: 10.5, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
