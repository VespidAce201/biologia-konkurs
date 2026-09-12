(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna dżdżownicy =====
  register.diagram('d-t206-pierscienice-budowa', function () {
    var w = 640,
      h = 300;
    var cx = 320,
      cy = 110;
    var bodyHalfLen = 230;
    var bodyR = 24;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna dżdżownicy (schemat)');

    // segmentowane ciało
    inner += k.ellipse(cx, cy, bodyHalfLen, bodyR, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });

    // linie segmentów
    var segCount = 16;
    for (var i = 1; i < segCount; i++) {
      var t = i / segCount;
      var x = cx - bodyHalfLen + t * (2 * bodyHalfLen);
      // wysokość linii segmentu zależna od kształtu elipsy (przybliżenie)
      var yHalf = bodyR * Math.sqrt(Math.max(0, 1 - Math.pow((x - cx) / bodyHalfLen, 2)));
      inner += k.line(x, cy - yHalf, x, cy + yHalf, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 1 });
    }

    // pasek (clitellum) - pogrubiony pas w przedniej jednej trzeciej ciała
    var pX1 = cx - bodyHalfLen + 0.58 * (2 * bodyHalfLen);
    var pX2 = cx - bodyHalfLen + 0.74 * (2 * bodyHalfLen);
    inner += k.rect(pX1, cy - bodyR - 6, pX2 - pX1, (bodyR + 6) * 2, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2, rx: 10 });

    // szczecinki - drobne kreski wzdłuż spodu ciała
    for (var s = 2; s < segCount - 1; s++) {
      var ts = s / segCount;
      var sx = cx - bodyHalfLen + ts * (2 * bodyHalfLen);
      var syHalf = bodyR * Math.sqrt(Math.max(0, 1 - Math.pow((sx - cx) / bodyHalfLen, 2)));
      inner += k.line(sx, cy + syHalf, sx, cy + syHalf + 8, { stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    }

    // otwór gębowy (przedni koniec) i odbytowy (tylny koniec)
    inner += k.circle(cx - bodyHalfLen, cy, 4, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    inner += k.circle(cx + bodyHalfLen, cy, 4, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });

    // numery
    inner += k.numberLabel(cx - bodyHalfLen, cy - 46, 1);
    inner += k.numberLabel(cx - 60, cy - 46, 2);
    inner += k.numberLabel((pX1 + pX2) / 2, cy - bodyR - 20, 3);
    inner += k.numberLabel(cx + 60, cy + 46, 4);
    inner += k.numberLabel(cx + bodyHalfLen, cy - 46, 5);

    var legendY = cy + 82;
    var opisy = [
      '1 — Otwór gębowy — przedni koniec ciała',
      '2 — Segmenty ciała (pierścienie) — powtarzalne odcinki, cecha rozpoznawcza pierścienic',
      '3 — Pasek (obrączka, clitellum) — wytwarza kokon, w którym rozwijają się jaja',
      '4 — Szczecinki — zakotwiczają ciało w podłożu podczas pełzania',
      '5 — Otwór odbytowy — tylny koniec ciała',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 18 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: zamknięty układ krwionośny (schemat uproszczony) =====
  register.diagram('d-t206-pierscienice-krwionosny', function () {
    var w = 640,
      h = 340;
    var cx = 320,
      cy = 130;
    var inner = k.frameTitle(w, 'Zamknięty układ krwionośny dżdżownicy (schemat uproszczony)');

    var left = cx - 220,
      right = cx + 220;
    var topY = cy - 40,
      botY = cy + 40;

    // zarys ciała
    inner += k.rect(left - 10, topY - 20, right - left + 20, botY - topY + 40, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, dash: '4 4' });

    // naczynie grzbietowe (górne) i brzuszne (dolne)
    inner += k.line(left, topY, right, topY, { stroke: k.PALETTE.czerwony, strokeWidth: 3 });
    inner += k.line(left, botY, right, botY, { stroke: k.PALETTE.niebieski, strokeWidth: 3 });

    // naczynia obrączkowate (serca boczne) w przedniej części
    var heartXs = [left + 40, left + 70, left + 100, left + 130];
    heartXs.forEach(function (hx) {
      inner += k.line(hx, topY, hx, botY, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 3, arrow: true });
    });

    // kierunek przepływu - strzałki wzdłuż naczyń
    inner += k.line(right - 60, topY, right - 20, topY, { stroke: k.PALETTE.czerwony, strokeWidth: 3, arrow: true });
    inner += k.line(left + 20, botY, left + 60, botY, { stroke: k.PALETTE.niebieski, strokeWidth: 3, arrow: true });

    // numery
    inner += k.numberLabel(cx + 120, topY - 14, 1);
    inner += k.numberLabel((heartXs[1] + heartXs[2]) / 2, (topY + botY) / 2, 2);
    inner += k.numberLabel(cx + 120, botY + 14, 3);

    var legendY = botY + 60;
    var opisy = [
      '1 — Naczynie grzbietowe — główny kierunek przepływu krwi ku przodowi ciała',
      '2 — Naczynia obrączkowate ("serca") — pulsując, pompują krew między naczyniami',
      '3 — Naczynie brzuszne — rozprowadza krew ku tyłowi ciała',
      'Krew płynie wyłącznie wewnątrz naczyń — to cecha zamkniętego układu krwionośnego',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 18 });

    return k.svg(w, h, inner);
  });
})();
