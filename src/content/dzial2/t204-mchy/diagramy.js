(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t204-mchy-cykl', function () {
    var w = 560, h = 340;
    var boxW = 180, boxH = 80;
    var TLx = 40, TLy = 60;
    var TRx = 340, TRy = 60;
    var BRx = 340, BRy = 240;
    var BLx = 40, BLy = 240;

    var inner = k.frameTitle(w, 'Cykl rozwojowy mchu (przemiana pokoleń)');

    // boxes
    inner += k.rect(TLx, TLy, boxW, boxH, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 1.8 });
    inner += k.multilineText(TLx + boxW / 2, TLy + 24, ['1. Gametofit (mech)'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(TLx + boxW / 2, TLy + 46, ['dorosła roślina,', 'wytwarza plemnie i rodnie'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(TRx, TRy, boxW, boxH, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.8 });
    inner += k.multilineText(TRx + boxW / 2, TRy + 24, ['2. Zygota → sporofit'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(TRx + boxW / 2, TRy + 46, ['zarodnia na nóżce', 'osadzona na gametofitcie'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(BRx, BRy, boxW, boxH, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.8 });
    inner += k.multilineText(BRx + boxW / 2, BRy + 24, ['3. Zarodniki'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(BRx + boxW / 2, BRy + 46, ['powstają w zarodni', 'w wyniku mejozy'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    inner += k.rect(BLx, BLy, boxW, boxH, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 1.8 });
    inner += k.multilineText(BLx + boxW / 2, BLy + 24, ['4. Protonema → gametofit'], { anchor: 'middle', weight: 800, size: 12 });
    inner += k.multilineText(BLx + boxW / 2, BLy + 46, ['kiełkujący zarodnik', 'tworzy nowy mech'], { anchor: 'middle', size: 10.5, lineHeight: 15 });

    // arrows (clockwise loop)
    inner += k.line(TLx + boxW, TLy + boxH / 2, TRx, TLy + boxH / 2, { arrow: true, strokeWidth: 2 });
    inner += k.text((TLx + boxW + TRx) / 2, TLy + boxH / 2 - 8, 'zapłodnienie (w wodzie)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(TRx + boxW / 2, TRy + boxH, BRx + boxW / 2, BRy, { arrow: true, strokeWidth: 2 });
    inner += k.text(TRx + boxW / 2 + 8, (TRy + boxH + BRy) / 2, 'mejoza w zarodni', { anchor: 'start', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(BRx, BRy + boxH / 2, BLx + boxW, BRy + boxH / 2, { arrow: true, strokeWidth: 2 });
    inner += k.text((BRx + BLx + boxW) / 2, BRy + boxH / 2 + 20, 'rozsiewanie zarodników', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    inner += k.line(BLx + boxW / 2, BLy, TLx + boxW / 2, TLy + boxH, { arrow: true, strokeWidth: 2 });
    inner += k.text(BLx + boxW / 2 - 8, (BLy + TLy + boxH) / 2, 'kiełkowanie', { anchor: 'end', size: 10.5, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
