(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna ryby =====
  register.diagram('d-t206-ryby-budowa', function () {
    var w = 640,
      h = 460;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna ryby (na przykładzie karpia)');

    // Ciało
    inner += k.ellipse(300, 150, 140, 48, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });
    // Płetwa ogonowa
    inner += k.path('M438,150 L482,104 L456,150 L482,196 Z', { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    // Płetwa grzbietowa
    inner += k.path('M268,103 L298,58 L330,103 Z', { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    // Płetwa piersiowa
    inner += k.path('M213,182 L176,214 L246,193 Z', { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    // Płetwa brzuszna
    inner += k.path('M288,197 L298,226 L318,197 Z', { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    // Płetwa odbytowa
    inner += k.path('M378,195 L393,220 L413,195 Z', { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    // Oko
    inner += k.circle(178, 136, 7, { fill: '#ffffff', stroke: k.PALETTE.linia });
    inner += k.circle(178, 136, 3, { fill: k.PALETTE.linia });
    // Pysk
    inner += k.line(162, 148, 148, 151, { strokeWidth: 2 });
    // Pokrywa skrzelowa (łuk)
    inner += k.path('M206,116 Q222,150 206,184', { fill: 'none', stroke: k.PALETTE.linia });
    // Linia boczna (przerywana)
    inner += k.line(214, 150, 428, 150, { dash: '4,3' });

    // Numerowane odnośniki
    inner += k.leader(202, 138, 150, 78, 1);
    inner += k.leader(178, 136, 96, 136, 2);
    inner += k.leader(300, 74, 300, 40, 3);
    inner += k.leader(320, 152, 320, 248, 4);
    inner += k.leader(258, 178, 226, 248, 5);
    inner += k.leader(466, 138, 522, 108, 6);

    // Legenda opisowa
    var opisy = [
      '1 — Głowa z pokrywą skrzelową, która osłania skrzela',
      '2 — Oko',
      '3 — Płetwa grzbietowa (stabilizacja ciała podczas pływania)',
      '4 — Linia boczna — narząd zmysłu wykrywający drgania i prądy wody',
      '5 — Łuski pokryte śluzem — ochrona ciała, zmniejszenie tarcia o wodę',
      '6 — Płetwa ogonowa — główny napęd ryby',
    ];
    inner += k.multilineText(40, 300, opisy, { size: 13, lineHeight: 21 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: przepływ wody przez układ oddechowy ryby =====
  register.diagram('d-t206-ryby-oddychanie', function () {
    var etapy = [
      ['Woda wpływa', 'przez pysk'],
      ['Jama gębowo-', 'gardłowa'],
      ['Skrzela — wymiana', 'O₂ i CO₂ w blaszkach'],
      ['Woda wypływa spod', 'pokrywy skrzelowej'],
    ];
    var w = 640,
      h = 220;
    var boxW = 132,
      boxH = 74,
      gap = 22;
    var totalW = etapy.length * boxW + (etapy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 70;
    var inner = k.frameTitle(w, 'Przepływ wody przez układ oddechowy ryby');
    etapy.forEach(function (linie, i) {
      var x = startX + i * (boxW + gap);
      var fill = i === 2 ? k.PALETTE.niebieskiC : '#eef6f1';
      var stroke = i === 2 ? k.PALETTE.niebieski : k.PALETTE.zielony;
      inner += k.rect(x, y, boxW, boxH, { fill: fill, stroke: stroke });
      inner += k.multilineText(x + boxW / 2, y + 32, linie, { anchor: 'middle', weight: 700, size: 12, lineHeight: 16 });
      if (i < etapy.length - 1) {
        inner += k.line(x + boxW, y + boxH / 2, x + boxW + gap, y + boxH / 2, { arrow: true, strokeWidth: 2 });
      }
    });
    inner += k.text(w / 2, y + boxH + 40, 'Woda opłukuje bogato unaczynione blaszki skrzelowe — tam tlen przechodzi do krwi, a dwutlenek węgla jest usuwany.', {
      anchor: 'middle',
      size: 11.5,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
