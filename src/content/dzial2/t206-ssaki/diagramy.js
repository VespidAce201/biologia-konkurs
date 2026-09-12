(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna ssaka =====
  register.diagram('d-t206-ssaki-budowa', function () {
    var w = 640,
      h = 440;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna ssaka (na przykładzie psa)');

    // Tułów
    inner += k.ellipse(320, 210, 130, 62, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
    // Głowa
    inner += k.ellipse(178, 190, 52, 42, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
    // Uszy
    inner += k.path('M150,155 L138,118 L168,148 Z', { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet });
    // Oko
    inner += k.circle(168, 182, 5, { fill: k.PALETTE.linia });
    // Pysk
    inner += k.path('M130,196 L108,202 L130,210', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 2 });
    // Ogon
    inner += k.path('M446,196 L500,168 L512,150', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 5 });
    // Sierść — kreseczki na tułowiu
    for (var i = 0; i < 10; i++) {
      inner += k.line(230 + i * 20, 156, 226 + i * 20, 140, { strokeWidth: 1 });
    }
    // Kończyny (pod tułowiem, nie po bokach jak u gadów)
    inner += k.line(250, 260, 250, 320, { strokeWidth: 5 });
    inner += k.line(392, 260, 392, 320, { strokeWidth: 5 });
    // Gruczoł mlekowy (schematyczny, u samicy)
    inner += k.circle(300, 250, 8, { fill: '#fbe8e6', stroke: k.PALETTE.czerwony, strokeWidth: 1.5 });
    inner += k.circle(330, 250, 8, { fill: '#fbe8e6', stroke: k.PALETTE.czerwony, strokeWidth: 1.5 });

    // Numerowane odnośniki
    inner += k.leader(240, 150, 250, 100, 1);
    inner += k.leader(300, 250, 220, 270, 2);
    inner += k.leader(250, 300, 190, 340, 3);
    inner += k.leader(480, 158, 540, 122, 4);

    var opisy = [
      '1 — Ciało pokryte sierścią (włosami) — izolacja cieplna',
      '2 — Gruczoły mlekowe (u samic) — wytwarzają mleko do karmienia młodych',
      '3 — Kończyny umieszczone pod tułowiem — sprawny chód i bieg',
      '4 — Ogon',
    ];
    inner += k.multilineText(40, 320, opisy, { size: 12.5, lineHeight: 22 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: sposoby rozrodu ssaków =====
  register.diagram('d-t206-ssaki-rozrod', function () {
    var w = 640,
      h = 320;
    var inner = k.frameTitle(w, 'Sposoby rozrodu ssaków');

    var grupy = [
      ['Stekowce', '(dziobak, kolczatka)', 'Jajorodne — składają jaja,', 'młode wykluwają się z jaj'],
      ['Torbacze', '(kangur, koala)', 'Rodzą bardzo niedojrzałe młode,', 'które dojrzewają w torbie, ssąc mleko'],
      ['Łożyskowce', '(pies, człowiek, wieloryb)', 'Żyworodne — zarodek rozwija się', 'w macicy, odżywiany przez łożysko'],
    ];
    var boxW = 190,
      boxH = 130,
      gap = 20;
    var totalW = grupy.length * boxW + (grupy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 60;
    grupy.forEach(function (g, i) {
      var x = startX + i * (boxW + gap);
      var fill = i === 0 ? k.PALETTE.zoltyC : i === 1 ? k.PALETTE.pomaranczowyC : k.PALETTE.zielonyC;
      var stroke = i === 0 ? k.PALETTE.zolty : i === 1 ? k.PALETTE.pomaranczowy : k.PALETTE.zielony;
      inner += k.rect(x, y, boxW, boxH, { fill: fill, stroke: stroke, strokeWidth: 2 });
      inner += k.text(x + boxW / 2, y + 24, g[0], { anchor: 'middle', weight: 800, size: 13.5 });
      inner += k.text(x + boxW / 2, y + 42, g[1], { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
      inner += k.multilineText(x + 12, y + 68, [g[2], g[3]], { size: 10.5, lineHeight: 15 });
    });
    inner += k.text(w / 2, y + boxH + 40, 'Wszystkie ssaki karmią młode mlekiem matki — nawet stekowce, mimo że składają jaja.', {
      anchor: 'middle', size: 11.5, fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });
})();
