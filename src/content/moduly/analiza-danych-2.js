(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===================================================================
  // DIAGRAMY (svgKit) — używane przez ćwiczenia typu 'diagram' poniżej.
  // ===================================================================

  // Prosta sieć pokarmowa łąki: producent -> konsumenci I rzędu -> konsumenci
  // II rzędu -> konsument III rzędu (drapieżnik szczytowy). Strzałki pokazują
  // kierunek przepływu energii (od organizmu zjadanego do zjadającego).
  register.diagram('d-ad-siec-pokarmowa', function () {
    var w = 660,
      h = 340;
    var inner = k.frameTitle(w, 'Sieć pokarmowa łąki');

    var boxW = 110,
      boxH = 54;
    var trawa = { x: 20, y: 143, w: boxW, h: boxH, label: 'Trawa\n(producent)' };
    var konik = { x: 190, y: 58, w: boxW, h: boxH, label: 'Konik polny' };
    var mysz = { x: 190, y: 228, w: boxW, h: boxH, label: 'Mysz' };
    var zaba = { x: 360, y: 58, w: boxW, h: boxH, label: 'Żaba' };
    var waz = { x: 360, y: 228, w: boxW, h: boxH, label: 'Wąż' };
    var jastrzab = { x: 520, y: 145, w: boxW, h: 60, label: 'Jastrząb' };

    function box(b, fill, stroke) {
      var out = k.rect(b.x, b.y, b.w, b.h, { fill: fill, stroke: stroke, strokeWidth: 1.8 });
      var lines = b.label.split('\n');
      var cy = b.y + b.h / 2 - (lines.length - 1) * 7 + 4;
      lines.forEach(function (line, i) {
        out += k.text(b.x + b.w / 2, cy + i * 14, line, { anchor: 'middle', weight: 700, size: 11.5 });
      });
      return out;
    }

    inner += box(trawa, k.PALETTE.zielonyC, k.PALETTE.zielony);
    inner += box(konik, k.PALETTE.zoltyC, k.PALETTE.zolty);
    inner += box(mysz, k.PALETTE.zoltyC, k.PALETTE.zolty);
    inner += box(zaba, k.PALETTE.niebieskiC, k.PALETTE.niebieski);
    inner += box(waz, k.PALETTE.niebieskiC, k.PALETTE.niebieski);
    inner += box(jastrzab, k.PALETTE.czerwonyC, k.PALETTE.czerwony);

    // Strzałki = kierunek przepływu energii (od zjadanego do zjadającego).
    inner += k.line(trawa.x + trawa.w, trawa.y + trawa.h / 2, konik.x, konik.y + konik.h / 2, { arrow: true, strokeWidth: 2 });
    inner += k.line(trawa.x + trawa.w, trawa.y + trawa.h / 2, mysz.x, mysz.y + mysz.h / 2, { arrow: true, strokeWidth: 2 });
    inner += k.line(konik.x + konik.w, konik.y + konik.h / 2, zaba.x, zaba.y + zaba.h / 2, { arrow: true, strokeWidth: 2 });
    inner += k.line(mysz.x + mysz.w, mysz.y + mysz.h / 2, waz.x, waz.y + waz.h / 2, { arrow: true, strokeWidth: 2 });
    inner += k.line(zaba.x + zaba.w, zaba.y + zaba.h / 2, jastrzab.x, jastrzab.y + jastrzab.h / 2, { arrow: true, strokeWidth: 2 });
    inner += k.line(waz.x + waz.w, waz.y + waz.h / 2, jastrzab.x, jastrzab.y + jastrzab.h / 2, { arrow: true, strokeWidth: 2 });

    inner += k.text(w / 2, 315, 'Strzałki pokazują kierunek przepływu energii i materii — od organizmu zjadanego do zjadającego.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });

  // Obieg wody w przyrodzie — cztery główne etapy ułożone w zamknięty cykl.
  register.diagram('d-ad-obieg-wody', function () {
    var w = 620,
      h = 360;
    var inner = k.frameTitle(w, 'Obieg wody w przyrodzie');

    var top = { x: 220, y: 30, w: 180, h: 65, label: 'Kondensacja\n(tworzenie się chmur)' };
    var right = { x: 420, y: 150, w: 180, h: 65, label: 'Opady atmosferyczne\n(deszcz, śnieg)' };
    var bottom = { x: 220, y: 270, w: 180, h: 65, label: 'Spływ powierzchniowy\ni wsiąkanie w glebę' };
    var left = { x: 20, y: 150, w: 180, h: 65, label: 'Parowanie\n(z oceanów, rzek, jezior)' };

    function box(b, fill, stroke) {
      var out = k.rect(b.x, b.y, b.w, b.h, { fill: fill, stroke: stroke, strokeWidth: 1.8 });
      var lines = b.label.split('\n');
      var cy = b.y + b.h / 2 - (lines.length - 1) * 7 + 4;
      lines.forEach(function (line, i) {
        out += k.text(b.x + b.w / 2, cy + i * 14, line, { anchor: 'middle', weight: 700, size: 11.5 });
      });
      return out;
    }

    inner += box(top, k.PALETTE.niebieskiC, k.PALETTE.niebieski);
    inner += box(right, k.PALETTE.niebieskiC, k.PALETTE.niebieski);
    inner += box(bottom, k.PALETTE.zielonyC, k.PALETTE.zielony);
    inner += box(left, k.PALETTE.zoltyC, k.PALETTE.zolty);

    // Cykl zamknięty, zgodny z ruchem wskazówek zegara.
    inner += k.line(top.x + top.w, top.y + top.h - 5, right.x, right.y + 15, { arrow: true, strokeWidth: 2 });
    inner += k.line(right.x + right.w / 2, right.y + right.h, bottom.x + bottom.w, bottom.y + 15, { arrow: true, strokeWidth: 2 });
    inner += k.line(bottom.x, bottom.y + 20, left.x + left.w, left.y + left.h - 10, { arrow: true, strokeWidth: 2 });
    inner += k.line(left.x + left.w / 2, left.y, top.x, top.y + top.h - 15, { arrow: true, strokeWidth: 2 });

    inner += k.text(w / 2, 345, 'Ta sama woda krąży wielokrotnie między atmosferą, lądem i zbiornikami wodnymi.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });

  // ===================================================================
  // ĆWICZENIA — 15 nowych pozycji modułu "Analiza danych"
  // ===================================================================

  // 1) WYKRES — wzrost populacji bakterii (faza wykładnicza)
  register.analizaDanych({
    id: 'ad-bakterie-wzrost',
    typ: 'wykres',
    tytul: 'Wzrost liczebności populacji bakterii w hodowli',
    kontekst: 'W sprzyjających warunkach (dostęp do pokarmu, brak konkurencji i drapieżników) bakterie namnażają się przez podział komórkowy. Co godzinę liczono komórki bakterii E. coli hodowanych w pożywce.',
    wykres: {
      typ: 'liniowy',
      tytul: 'Liczba bakterii w hodowli',
      jednostka: 'tys. komórek/ml',
      dane: [
        { etykieta: '0 h', wartosc: 100 },
        { etykieta: '1 h', wartosc: 200 },
        { etykieta: '2 h', wartosc: 400 },
        { etykieta: '3 h', wartosc: 800 },
        { etykieta: '4 h', wartosc: 1600 },
      ],
    },
    pytania: [
      {
        tresc: 'Ile razy zwiększyła się liczba bakterii między 0. a 3. godziną hodowli?',
        opcje: ['2 razy', '4 razy', '8 razy', '16 razy'],
        poprawna: 2,
        wyjasnienie: '800 : 100 = 8, więc liczba bakterii wzrosła 8-krotnie. Wynika to z tego, że liczba komórek podwaja się w każdej kolejnej godzinie (2³ = 8).',
        punkty: 1,
      },
      {
        tresc: 'Jak nazywa się typ wzrostu liczebności populacji widoczny na wykresie, w którym liczba osobników podwaja się w równych odstępach czasu?',
        opcje: ['Wzrost liniowy', 'Wzrost wykładniczy (geometryczny)', 'Wzrost malejący', 'Wzrost zerowy'],
        poprawna: 1,
        wyjasnienie: 'To wzrost wykładniczy — charakterystyczny dla populacji bakterii na wczesnym etapie hodowli, gdy zasoby są nieograniczone. W naturze taki wzrost szybko zwalnia, gdy zaczyna brakować pokarmu lub przestrzeni (populacja osiąga pojemność środowiska).',
        punkty: 2,
      },
    ],
  });

  // 2) WYKRES — aktywność enzymu (katalaza) a temperatura
  register.analizaDanych({
    id: 'ad-katalaza-temperatura',
    typ: 'wykres',
    tytul: 'Wpływ temperatury na aktywność enzymu katalazy',
    kontekst: 'Zbadano szybkość rozkładu nadtlenku wodoru (H2O2) przez enzym katalazę w różnych temperaturach. Aktywność enzymu wyrażono w jednostkach względnych.',
    wykres: {
      typ: 'liniowy',
      tytul: 'Aktywność katalazy',
      jednostka: 'j. wzgl.',
      dane: [
        { etykieta: '10°C', wartosc: 20 },
        { etykieta: '20°C', wartosc: 45 },
        { etykieta: '37°C', wartosc: 100 },
        { etykieta: '50°C', wartosc: 55 },
        { etykieta: '70°C', wartosc: 5 },
      ],
    },
    pytania: [
      {
        tresc: 'W jakiej temperaturze katalaza wykazywała najwyższą aktywność?',
        opcje: ['10°C', '20°C', '37°C', '70°C'],
        poprawna: 2,
        wyjasnienie: 'Maksimum aktywności przypada na 37°C — to temperatura zbliżona do temperatury ciała człowieka, przy której enzymy ludzkie działają najwydajniej (temperatura optymalna).',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego aktywność enzymu gwałtownie spadła w temperaturze 70°C?',
        opcje: [
          'Enzym "zamarzł" i przestał reagować z substratem',
          'Wysoka temperatura spowodowała denaturację (zniszczenie przestrzennej struktury) białka enzymu',
          'Zabrakło nadtlenku wodoru jako substratu',
          'Enzym zmienił się chemicznie w nadtlenek wodoru',
        ],
        poprawna: 1,
        wyjasnienie: 'Enzymy to białka o ściśle określonej budowie przestrzennej. Wysoka temperatura niszczy tę strukturę (denaturacja), przez co enzym traci zdolność łączenia się z substratem — zjawisko to jest zwykle nieodwracalne.',
        punkty: 2,
      },
    ],
  });

  // 3) WYKRES — aktywność enzymu a pH
  register.analizaDanych({
    id: 'ad-enzym-ph',
    typ: 'wykres',
    tytul: 'Wpływ pH na aktywność pepsyny — enzymu trawiennego żołądka',
    kontekst: 'Pepsyna to enzym trawienny wydzielany w żołądku, rozkładający białka. Zbadano jej aktywność w roztworach o różnym odczynie (pH).',
    wykres: {
      typ: 'liniowy',
      tytul: 'Aktywność pepsyny',
      jednostka: 'j. wzgl.',
      dane: [
        { etykieta: 'pH 1', wartosc: 70 },
        { etykieta: 'pH 2', wartosc: 100 },
        { etykieta: 'pH 4', wartosc: 40 },
        { etykieta: 'pH 7', wartosc: 5 },
        { etykieta: 'pH 9', wartosc: 2 },
      ],
    },
    pytania: [
      {
        tresc: 'Przy jakim pH pepsyna działa najskuteczniej?',
        opcje: ['pH 1', 'pH 2', 'pH 4', 'pH 7'],
        poprawna: 1,
        wyjasnienie: 'Optymalne pH pepsyny wynosi ok. 2, czyli jest silnie kwaśne — zgodne ze środowiskiem żołądka, które zakwasza kwas solny (HCl) wydzielany przez komórki błony śluzowej żołądka.',
        punkty: 1,
      },
      {
        tresc: 'Co stanie się z aktywnością pepsyny, gdy treść pokarmowa trafi z żołądka do jelita cienkiego, gdzie środowisko jest lekko zasadowe (ok. pH 8)?',
        opcje: [
          'Aktywność wzrośnie jeszcze bardziej',
          'Aktywność pepsyny znacznie spadnie i przestanie ona skutecznie trawić białka',
          'Aktywność pozostanie bez zmian',
          'Pepsyna zacznie trawić tłuszcze zamiast białek',
        ],
        poprawna: 1,
        wyjasnienie: 'Każdy enzym ma wąski zakres optymalnego pH — poza nim jego aktywność gwałtownie maleje. Dlatego w jelicie cienkim białka trawią inne enzymy (np. trypsyna), przystosowane do zasadowego środowiska.',
        punkty: 2,
      },
    ],
  });

  // 4) WYKRES — piramida energii w łańcuchu pokarmowym
  register.analizaDanych({
    id: 'ad-piramida-energii',
    typ: 'wykres',
    tytul: 'Piramida energii w łańcuchu pokarmowym',
    kontekst: 'W łańcuchu pokarmowym trawa → konik polny → żaba → wąż zmierzono ilość energii dostępnej na kolejnych poziomach troficznych (w przeliczeniu na jednostkę powierzchni w ciągu roku).',
    wykres: {
      typ: 'slupkowy',
      tytul: 'Energia na poziomach troficznych',
      jednostka: 'kcal/m²/rok',
      dane: [
        { etykieta: 'Producenci (trawa)', wartosc: 10000 },
        { etykieta: 'Roślinożercy (konik polny)', wartosc: 1000 },
        { etykieta: 'Drapieżniki I rzędu (żaba)', wartosc: 100 },
        { etykieta: 'Drapieżniki II rzędu (wąż)', wartosc: 10 },
      ],
    },
    pytania: [
      {
        tresc: 'Jaki procent energii zgromadzonej u producentów trafia do roślinożerców (konika polnego)?',
        opcje: ['1%', '10%', '50%', '90%'],
        poprawna: 1,
        wyjasnienie: '1000 : 10000 = 10%. Zgodnie z tzw. regułą 10% w łańcuchu pokarmowym na każdy kolejny poziom troficzny przechodzi zwykle jedynie ok. 10% energii — reszta jest zużywana na procesy życiowe i tracona głównie jako ciepło.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego łańcuchy pokarmowe rzadko liczą więcej niż 4-5 ogniw?',
        opcje: [
          'Bo drapieżniki nie potrafią polować więcej niż na 5 gatunków',
          'Bo na każdym poziomie troficznym tracona jest większość energii, więc na szczycie łańcucha zostaje jej za mało, by wyżywić kolejny poziom konsumentów',
          'Bo rośliny produkują ograniczoną liczbę gatunków pokarmu',
          'Bo dłuższe łańcuchy powodowałyby wymieranie producentów',
        ],
        poprawna: 1,
        wyjasnienie: 'Ponieważ przy każdym przejściu energii na kolejny poziom traci się ok. 90% (na oddychanie, ruch, ciepło), po kilku ogniwach ilość dostępnej energii staje się zbyt mała, by utrzymać populację kolejnych drapieżników.',
        punkty: 2,
      },
    ],
  });

  // 5) WYKRES — tempo oddychania a wysiłek fizyczny
  register.analizaDanych({
    id: 'ad-oddechy-wysilek',
    typ: 'wykres',
    tytul: 'Liczba oddechów na minutę w zależności od wysiłku fizycznego',
    kontekst: 'Zmierzono liczbę oddechów na minutę u ucznia w spoczynku oraz podczas różnych rodzajów aktywności fizycznej.',
    wykres: {
      typ: 'slupkowy',
      tytul: 'Liczba oddechów [/min]',
      jednostka: 'oddechy/min',
      dane: [
        { etykieta: 'Spoczynek', wartosc: 16 },
        { etykieta: 'Marsz', wartosc: 22 },
        { etykieta: 'Rower', wartosc: 30 },
        { etykieta: 'Bieg', wartosc: 40 },
        { etykieta: 'Sprint', wartosc: 48 },
      ],
    },
    pytania: [
      {
        tresc: 'O ile wzrosła liczba oddechów na minutę między spoczynkiem a sprintem?',
        opcje: ['16', '32', '40', '48'],
        poprawna: 1,
        wyjasnienie: '48 − 16 = 32 oddechy na minutę więcej podczas sprintu niż w spoczynku.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego podczas intensywnego wysiłku fizycznego wzrasta częstość oddechów?',
        opcje: [
          'Bo pracujące mięśnie potrzebują więcej tlenu do oddychania komórkowego i wytwarzają więcej dwutlenku węgla, który trzeba usunąć',
          'Bo płuca kurczą się podczas wysiłku i mieszczą mniej powietrza',
          'Bo serce przestaje wtedy pompować krew do płuc',
          'Bo temperatura ciała gwałtownie spada podczas wysiłku',
        ],
        poprawna: 0,
        wyjasnienie: 'Intensywna praca mięśni zwiększa zapotrzebowanie na tlen (potrzebny do oddychania komórkowego, czyli uwalniania energii z pokarmu) oraz zwiększa produkcję CO2 jako produktu ubocznego — organizm reaguje przyspieszeniem i pogłębieniem oddechu.',
        punkty: 2,
      },
    ],
  });

  // 6) WYKRES — tempo wzrostu rośliny w świetle
  register.analizaDanych({
    id: 'ad-wzrost-rosliny-swiatlo',
    typ: 'wykres',
    tytul: 'Tempo wzrostu siewki fasoli w pełnym świetle słonecznym',
    kontekst: 'Codziennie o tej samej porze mierzono wysokość siewki fasoli rosnącej w dobrze nasłonecznionym miejscu.',
    wykres: {
      typ: 'liniowy',
      tytul: 'Wysokość siewki fasoli',
      jednostka: 'cm',
      dane: [
        { etykieta: 'Dzień 0', wartosc: 2 },
        { etykieta: 'Dzień 3', wartosc: 5 },
        { etykieta: 'Dzień 6', wartosc: 9 },
        { etykieta: 'Dzień 9', wartosc: 14 },
        { etykieta: 'Dzień 12', wartosc: 18 },
      ],
    },
    pytania: [
      {
        tresc: 'O ile centymetrów urosła roślina między 6. a 12. dniem pomiaru?',
        opcje: ['4 cm', '5 cm', '9 cm', '18 cm'],
        poprawna: 2,
        wyjasnienie: '18 cm − 9 cm = 9 cm. Odczytujemy różnicę wysokości między dwoma punktami na wykresie.',
        punkty: 1,
      },
      {
        tresc: 'Taka sama odmiana fasoli hodowana w głębokim cieniu, bez dostępu do światła słonecznego, rosłaby prawdopodobnie:',
        opcje: [
          'Szybciej niż na świetle, bo oszczędzałaby energię',
          'Wolniej i byłaby osłabiona, ponieważ światło jest niezbędne do fotosyntezy — głównego źródła energii i budulca dla wzrostu rośliny',
          'Dokładnie tak samo jak roślina rosnąca na świetle',
          'Zmieniłaby kolor liści na czerwony i rosła szybciej',
        ],
        poprawna: 1,
        wyjasnienie: 'Rośliny zielone potrzebują światła do fotosyntezy, w której wytwarzają organiczne związki odżywcze (m.in. glukozę) będące źródłem energii i budulca. Bez odpowiedniej ilości światła tempo wzrostu wyraźnie spada, a roślina jest wątła i wybladła (etiolacja).',
        punkty: 2,
      },
    ],
  });

  // 7) TABELA — temperatura ciała stało- i zmiennocieplnych
  register.analizaDanych({
    id: 'ad-cieploty-zwierzat',
    typ: 'tabela',
    tytul: 'Temperatura ciała zwierząt stało- i zmiennocieplnych a temperatura otoczenia',
    kontekst: 'Zmierzono temperaturę ciała psa (ssak — zwierzę stałocieplne) i jaszczurki (gad — zwierzę zmiennocieplne) w różnych temperaturach otoczenia.',
    tabela: {
      tytul: 'Temperatura ciała [°C]',
      kolumny: ['Temperatura otoczenia', 'Pies (stałocieplny)', 'Jaszczurka (zmiennocieplna)'],
      wiersze: [
        ['5°C', '38,0', '6'],
        ['15°C', '38,0', '15'],
        ['25°C', '38,5', '25'],
        ['35°C', '39,0', '35'],
      ],
    },
    pytania: [
      {
        tresc: 'Jak zmienia się temperatura ciała jaszczurki wraz ze wzrostem temperatury otoczenia?',
        opcje: [
          'Pozostaje niemal stała',
          'Zmienia się wraz z temperaturą otoczenia — rośnie, gdy jest cieplej',
          'Zawsze jest wyższa niż temperatura otoczenia o 10°C',
          'Maleje, gdy temperatura otoczenia rośnie',
        ],
        poprawna: 1,
        wyjasnienie: 'Jaszczurka jest zwierzęciem zmiennocieplnym (ektotermicznym) — nie wytwarza i nie reguluje aktywnie ciepła wewnątrz organizmu, dlatego temperatura jej ciała jest zbliżona do temperatury otoczenia.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego temperatura ciała psa pozostaje niemal stała niezależnie od temperatury otoczenia?',
        opcje: [
          'Pies nie ma receptorów temperatury w skórze',
          'Pies jest zwierzęciem stałocieplnym — jego organizm aktywnie reguluje temperaturę ciała, np. przez dyszenie, pocenie się przez łapy czy drżenie mięśni',
          'Pies zawsze przebywa w klimatyzowanych pomieszczeniach',
          'Sierść psa całkowicie izoluje go od otoczenia niezależnie od warunków',
        ],
        poprawna: 1,
        wyjasnienie: 'Ssaki i ptaki to zwierzęta stałocieplne (endotermiczne) — wytwarzają ciepło w procesach metabolicznych i posiadają mechanizmy termoregulacji utrzymujące stałą temperaturę ciała niezależnie od otoczenia, co daje im przewagę np. w chłodnym klimacie.',
        punkty: 2,
      },
    ],
  });

  // 8) TABELA — tętno spoczynkowe zwierząt
  register.analizaDanych({
    id: 'ad-tetno-zwierzat',
    typ: 'tabela',
    tytul: 'Tętno spoczynkowe różnych zwierząt',
    kontekst: 'W tabeli podano przybliżoną liczbę uderzeń serca na minutę w spoczynku u różnych zwierząt oraz ich orientacyjną masę ciała.',
    tabela: {
      tytul: 'Tętno spoczynkowe',
      kolumny: ['Zwierzę', 'Tętno spoczynkowe [ud./min]', 'Przybliżona masa ciała'],
      wiersze: [
        ['Mysz', '600', 'ok. 20 g'],
        ['Wróbel', '450', 'ok. 30 g'],
        ['Człowiek', '70', 'ok. 70 kg'],
        ['Słoń', '28', 'ok. 5000 kg'],
      ],
    },
    pytania: [
      {
        tresc: 'Które zwierzę z tabeli ma najwyższe tętno spoczynkowe?',
        opcje: ['Słoń', 'Człowiek', 'Wróbel', 'Mysz'],
        poprawna: 3,
        wyjasnienie: 'Mysz ma najwyższe tętno spoczynkowe — ok. 600 uderzeń na minutę, czyli dziesięciokrotnie więcej niż człowiek.',
        punkty: 1,
      },
      {
        tresc: 'Jaką zależność między masą ciała a tętnem można zauważyć na podstawie danych z tabeli?',
        opcje: [
          'Im większe zwierzę, tym wyższe tętno',
          'Im mniejsze zwierzę, tym wyższe tętno — małe zwierzęta mają szybszy metabolizm, a ich serce musi bić szybciej',
          'Tętno w ogóle nie zależy od wielkości zwierzęcia',
          'Wszystkie zwierzęta mają niemal identyczne tętno',
        ],
        poprawna: 1,
        wyjasnienie: 'Małe zwierzęta mają wyższy stosunek powierzchni ciała do jego objętości, przez co szybciej tracą ciepło i muszą utrzymywać bardziej intensywny metabolizm — ich serce bije wtedy znacznie szybciej niż u dużych zwierząt.',
        punkty: 2,
      },
    ],
  });

  // 9) TABELA — bioróżnorodność: las liściasty vs pole uprawne
  register.analizaDanych({
    id: 'ad-bioroznorodnosc-ekosystemy',
    typ: 'tabela',
    tytul: 'Bioróżnorodność lasu liściastego i pola uprawnego',
    kontekst: 'Porównano przybliżoną liczbę gatunków organizmów stwierdzonych na tej samej powierzchni w naturalnym lesie liściastym i na sąsiednim polu uprawnym obsianym jednym gatunkiem zboża (monokultura).',
    tabela: {
      tytul: 'Liczba gatunków na porównywalnej powierzchni',
      kolumny: ['Grupa organizmów', 'Las liściasty', 'Pole uprawne'],
      wiersze: [
        ['Gatunki roślin', '35', '2'],
        ['Gatunki owadów', '60', '8'],
        ['Gatunki ptaków', '22', '4'],
        ['Gatunki ssaków', '12', '3'],
      ],
    },
    pytania: [
      {
        tresc: 'O ile więcej gatunków owadów stwierdzono w lesie niż na polu uprawnym?',
        opcje: ['8', '52', '60', '68'],
        poprawna: 1,
        wyjasnienie: '60 − 8 = 52 gatunki więcej owadów odnotowano w lesie niż na polu uprawnym.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego bioróżnorodność pola uprawnego (monokultury) jest znacznie niższa niż lasu liściastego?',
        opcje: [
          'Bo na polach jest głośniej niż w lesie',
          'Bo uprawa jednego gatunku rośliny, regularne koszenie i stosowanie środków ochrony roślin ograniczają liczbę dostępnych siedlisk i źródeł pokarmu dla innych organizmów',
          'Bo pola uprawne mają zawsze mniejszą powierzchnię niż lasy',
          'Bo w lesie nie występują żadne drapieżniki',
        ],
        poprawna: 1,
        wyjasnienie: 'Las liściasty ma złożoną, wielowarstwową strukturę (dno lasu, runo, podszyt, korony drzew) i wiele gatunków roślin, co tworzy różnorodne siedliska. Monokultura pola uprawnego oferuje jeden rodzaj pokarmu i schronienia, co znacznie ogranicza liczbę gatunków, jakie mogą tam żyć.',
        punkty: 2,
      },
    ],
  });

  // 10) TABELA — liczba erytrocytów a wysokość n.p.m.
  register.analizaDanych({
    id: 'ad-erytrocyty-wysokosc',
    typ: 'tabela',
    tytul: 'Liczba erytrocytów we krwi a wysokość nad poziomem morza',
    kontekst: 'U osób mieszkających na różnych wysokościach nad poziomem morza zmierzono przeciętną liczbę erytrocytów (krwinek czerwonych) we krwi. Wraz z wysokością maleje ciśnienie parcjalne tlenu w powietrzu.',
    tabela: {
      tytul: 'Liczba erytrocytów a wysokość n.p.m.',
      kolumny: ['Wysokość n.p.m.', 'Liczba erytrocytów [mln/mm³ krwi]'],
      wiersze: [
        ['0 m (poziom morza)', '5,0'],
        ['1500 m', '5,4'],
        ['3000 m', '5,9'],
        ['4500 m', '6,5'],
      ],
    },
    pytania: [
      {
        tresc: 'Jak zmienia się liczba erytrocytów we krwi wraz ze wzrostem wysokości n.p.m.?',
        opcje: ['Maleje', 'Rośnie', 'Pozostaje bez zmian', 'Najpierw rośnie, a potem gwałtownie spada'],
        poprawna: 1,
        wyjasnienie: 'Wraz ze wzrostem wysokości liczba erytrocytów systematycznie rośnie — z 5,0 mln/mm³ na poziomie morza do 6,5 mln/mm³ na wysokości 4500 m.',
        punkty: 1,
      },
      {
        tresc: 'Jakie jest biologiczne wyjaśnienie tej zależności?',
        opcje: [
          'Na dużych wysokościach jest mniej tlenu w powietrzu, więc organizm produkuje więcej erytrocytów zawierających hemoglobinę, aby skuteczniej transportować tlen do tkanek',
          'Na dużych wysokościach jest zimniej, co przyspiesza krzepnięcie krwi',
          'Duża wysokość zwiększa ciśnienie krwi, co bezpośrednio wytwarza nowe krwinki',
          'To przypadkowa zależność, niemająca związku przyczynowo-skutkowego',
        ],
        poprawna: 0,
        wyjasnienie: 'Na dużych wysokościach ciśnienie parcjalne tlenu jest niższe, co utrudnia jego pobieranie w płucach. W odpowiedzi organizm zwiększa produkcję erytrocytów (i zawartej w nich hemoglobiny), by mimo niedoboru tlenu w powietrzu skuteczniej zaopatrywać w niego tkanki — to przykład adaptacji fizjologicznej.',
        punkty: 2,
      },
    ],
  });

  // 11) TABELA — skład powietrza wdychanego i wydychanego
  register.analizaDanych({
    id: 'ad-gazy-oddechowe',
    typ: 'tabela',
    tytul: 'Skład procentowy powietrza wdychanego i wydychanego',
    kontekst: 'Porównano przybliżony skład procentowy głównych gazów w powietrzu wdychanym (atmosferycznym) i wydychanym przez człowieka.',
    tabela: {
      tytul: 'Skład powietrza [%]',
      kolumny: ['Gaz', 'Powietrze wdychane', 'Powietrze wydychane'],
      wiersze: [
        ['Azot (N2)', '78%', '78%'],
        ['Tlen (O2)', '21%', '16%'],
        ['Dwutlenek węgla (CO2)', '0,04%', '4%'],
        ['Para wodna i inne gazy', 'ok. 1%', 'ok. 2%'],
      ],
    },
    pytania: [
      {
        tresc: 'O ile w przybliżeniu zmniejsza się procentowa zawartość tlenu w powietrzu wydychanym w porównaniu do wdychanego?',
        opcje: ['Ok. 5 punktów procentowych (z 21% do 16%)', 'Ok. 21 punktów procentowych', 'Nie zmienia się wcale', 'Zwiększa się o 5 punktów procentowych'],
        poprawna: 0,
        wyjasnienie: '21% − 16% = 5 punktów procentowych. Część wdychanego tlenu zostaje pobrana przez krew w płucach i zużyta przez komórki organizmu.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego zawartość dwutlenku węgla w powietrzu wydychanym jest wyraźnie wyższa niż we wdychanym?',
        opcje: [
          'Bo płuca same wytwarzają azot',
          'CO2 jest produktem ubocznym oddychania komórkowego zachodzącego w komórkach całego ciała i jest usuwany z organizmu wraz z wydychanym powietrzem',
          'Bo powietrze wdychane w ogóle nie zawiera CO2',
          'Bo wysoka temperatura ciała zamienia tlen w dwutlenek węgla',
        ],
        poprawna: 1,
        wyjasnienie: 'W procesie oddychania komórkowego komórki zużywają tlen do uwalniania energii z pokarmu, a jako produkt uboczny powstaje dwutlenek węgla. Trafia on do krwi, jest transportowany do płuc i usuwany z organizmu podczas wydechu — dlatego jego stężenie w powietrzu wydychanym jest znacznie wyższe.',
        punkty: 2,
      },
    ],
  });

  // 12) DIAGRAM — sieć pokarmowa (kierunek przepływu energii)
  register.analizaDanych({
    id: 'ad-diagram-siec-pokarmowa',
    typ: 'diagram',
    tytul: 'Sieć pokarmowa łąki — kierunek przepływu energii',
    kontekst: 'Na schemacie przedstawiono uproszczoną sieć pokarmową łąki. Strzałki łączące organizmy pokazują kierunek przepływu energii — od organizmu zjadanego do organizmu, który go zjada.',
    diagramId: 'd-ad-siec-pokarmowa',
    pytania: [
      {
        tresc: 'W którym kierunku przepływa energia w przedstawionej sieci pokarmowej?',
        opcje: [
          'Od drapieżników do producentów',
          'Od producentów (rośliny), przez kolejne organizmy zjadane przez inne — zgodnie z kierunkiem strzałek',
          'Energia krąży jednocześnie w obie strony',
          'Energia w ogóle nie przepływa, przemieszcza się tylko materia',
        ],
        poprawna: 1,
        wyjasnienie: 'Energia wprowadzana jest do ekosystemu przez producentów (rośliny w procesie fotosyntezy), a następnie przepływa jednokierunkowo przez kolejne poziomy troficzne, gdy jeden organizm zostaje zjedzony przez drugiego — dokładnie tak, jak pokazują strzałki na schemacie.',
        punkty: 1,
      },
      {
        tresc: 'Co najprawdopodobniej stanie się z liczebnością żab, jeśli z jakiegoś powodu drastycznie zmniejszy się liczba koników polnych na łące?',
        opcje: [
          'Liczba żab wzrośnie, bo będą miały mniej konkurentów o przestrzeń',
          'Liczba żab prawdopodobnie zmniejszy się z powodu niewystarczającej ilości pokarmu',
          'Liczba żab nie zmieni się, bo żaby odżywiają się wyłącznie wężami',
          'Wąż zacznie odżywiać się trawą zamiast żabami',
        ],
        poprawna: 1,
        wyjasnienie: 'Zgodnie ze schematem żaby żywią się konikami polnymi. Spadek liczebności koników polnych oznacza mniej dostępnego pokarmu dla żab, co zwykle prowadzi do zmniejszenia się ich populacji — to przykład powiązań (zależności) w sieci pokarmowej: zmiana liczebności jednego gatunku wpływa na inne.',
        punkty: 2,
      },
    ],
  });

  // 13) DIAGRAM — obieg wody w przyrodzie
  register.analizaDanych({
    id: 'ad-diagram-obieg-wody',
    typ: 'diagram',
    tytul: 'Obieg wody w przyrodzie',
    kontekst: 'Na schemacie przedstawiono cztery główne etapy obiegu wody w przyrodzie, tworzące zamknięty cykl: parowanie, kondensację, opady atmosferyczne oraz spływ powierzchniowy i wsiąkanie wody w glebę.',
    diagramId: 'd-ad-obieg-wody',
    pytania: [
      {
        tresc: 'Jaki proces zachodzi bezpośrednio po skropleniu pary wodnej w chmurach (kondensacji)?',
        opcje: ['Parowanie', 'Opady atmosferyczne (deszcz, śnieg)', 'Spływ powierzchniowy', 'Fotosynteza'],
        poprawna: 1,
        wyjasnienie: 'Po kondensacji drobne kropelki wody w chmurach łączą się w coraz większe, aż staną się na tyle ciężkie, by opaść w postaci deszczu, śniegu lub gradu — to właśnie opady atmosferyczne.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego obieg wody w przyrodzie nazywany jest cyklem zamkniętym?',
        opcje: [
          'Bo woda znika bezpowrotnie po każdym parowaniu',
          'Bo poszczególne etapy (parowanie, kondensacja, opady, spływ) powtarzają się w kółko, a ta sama woda krąży wielokrotnie między atmosferą, lądem i zbiornikami wodnymi',
          'Bo proces ten zachodzi tylko raz w roku, zawsze wiosną',
          'Bo dotyczy wyłącznie wody morskiej, a nie słodkiej',
        ],
        poprawna: 1,
        wyjasnienie: 'Woda nieustannie zmienia stan skupienia i miejsce występowania (ocean → para wodna → chmura → opad → rzeka/grunt → ocean), ale jej całkowita ilość w przyrodzie pozostaje w przybliżeniu stała — dlatego mówimy o cyklu (obiegu) zamkniętym.',
        punkty: 2,
      },
    ],
  });

  // 14) DANE LICZBOWE — długość życia organizmów
  register.analizaDanych({
    id: 'ad-dlugosc-zycia-organizmow',
    typ: 'dane-liczbowe',
    tytul: 'Przeciętna długość życia wybranych organizmów',
    kontekst: 'W tabeli zestawiono przybliżoną maksymalną długość życia różnych organizmów obserwowaną w warunkach naturalnych. Dane są uproszczone i mają charakter poglądowy.',
    tabela: {
      tytul: 'Przeciętna maksymalna długość życia',
      kolumny: ['Organizm', 'Przeciętna maks. długość życia'],
      wiersze: [
        ['Dżdżownica', 'ok. 4-8 lat'],
        ['Mysz domowa', 'ok. 1-2 lata'],
        ['Pies domowy', 'ok. 10-13 lat'],
        ['Żółw słoniowy', 'ponad 100 lat'],
        ['Człowiek', 'ok. 70-90 lat'],
      ],
    },
    pytania: [
      {
        tresc: 'Który z wymienionych organizmów żyje przeciętnie najdłużej?',
        opcje: ['Mysz domowa', 'Pies domowy', 'Żółw słoniowy', 'Dżdżownica'],
        poprawna: 2,
        wyjasnienie: 'Żółw słoniowy może żyć ponad 100 lat — to zdecydowanie najdłużej żyjący organizm z zestawienia.',
        punkty: 1,
      },
      {
        tresc: 'Jaką ogólną zależność między tempem metabolizmu zwierzęcia a długością jego życia sugerują dane z tabeli (pamiętając, że to tendencja, a nie sztywna reguła — istnieje wiele wyjątków, np. wśród ptaków)?',
        opcje: [
          'Nie ma żadnego związku między wielkością zwierzęcia a długością jego życia',
          'Zwierzęta o szybkim metabolizmie i krótkim czasie generacji (np. mysz) zwykle żyją krócej niż zwierzęta o wolniejszym metabolizmie (np. żółw) — choć zdarza się wiele wyjątków',
          'Wszystkie zwierzęta żyją dokładnie tyle samo, niezależnie od gatunku',
          'Zwierzęta zmiennocieplne zawsze żyją krócej niż stałocieplne',
        ],
        poprawna: 1,
        wyjasnienie: 'W biologii często obserwuje się tendencję, że organizmy o wysokim tempie metabolizmu i szybkim rozmnażaniu (np. drobne gryzonie) żyją krócej niż organizmy o wolniejszym metabolizmie (np. żółwie). To jednak uproszczona prawidłowość — istnieje wiele wyjątków (np. niektóre małe ptaki żyją stosunkowo długo), dlatego długość życia zależy od wielu czynników, nie tylko od tempa metabolizmu.',
        punkty: 2,
      },
    ],
  });

  // 15) DANE LICZBOWE — tempo metabolizmu a masa ciała
  register.analizaDanych({
    id: 'ad-metabolizm-masa-ciala',
    typ: 'dane-liczbowe',
    tytul: 'Tempo metabolizmu w przeliczeniu na kilogram masy ciała',
    kontekst: 'Zmierzono przybliżone dobowe zapotrzebowanie energetyczne różnych zwierząt w przeliczeniu na kilogram masy ciała. Dane ilustrują ogólną zależność między wielkością zwierzęcia a intensywnością jego przemiany materii.',
    tabela: {
      tytul: 'Zapotrzebowanie energetyczne na kg masy ciała',
      kolumny: ['Zwierzę', 'Masa ciała', 'Zapotrzebowanie energetyczne [kcal/kg/dobę]'],
      wiersze: [
        ['Mysz', 'ok. 0,02 kg', 'ok. 200'],
        ['Kot', 'ok. 4 kg', 'ok. 70'],
        ['Człowiek', 'ok. 70 kg', 'ok. 30'],
        ['Słoń', 'ok. 5000 kg', 'ok. 10'],
      ],
    },
    pytania: [
      {
        tresc: 'Które zwierzę zużywa najwięcej energii w przeliczeniu na kilogram masy ciała na dobę?',
        opcje: ['Słoń', 'Człowiek', 'Kot', 'Mysz'],
        poprawna: 3,
        wyjasnienie: 'Mysz zużywa ok. 200 kcal/kg/dobę — to zdecydowanie najwięcej spośród porównywanych zwierząt, mimo że jej całkowite (a nie względne) zapotrzebowanie energetyczne jest oczywiście znacznie mniejsze niż słonia.',
        punkty: 1,
      },
      {
        tresc: 'Dlaczego małe zwierzęta, takie jak mysz, mają dużo wyższe zapotrzebowanie energetyczne na kilogram masy ciała niż duże zwierzęta, np. słoń?',
        opcje: [
          'Bo małe zwierzęta jedzą smaczniejszy i bardziej kaloryczny pokarm',
          'Małe zwierzęta mają większy stosunek powierzchni ciała do jego objętości, przez co szybciej tracą ciepło do otoczenia i muszą je intensywniej wytwarzać w procesie metabolizmu',
          'Bo duże zwierzęta, takie jak słoń, w ogóle nie potrzebują energii do życia',
          'Bo mysz porusza się znacznie wolniej niż słoń',
        ],
        poprawna: 1,
        wyjasnienie: 'Wraz ze zmniejszaniem się rozmiarów ciała rośnie stosunek powierzchni ciała do jego objętości. Małe zwierzęta oddają więc relatywnie więcej ciepła do otoczenia i muszą utrzymywać znacznie intensywniejszy metabolizm, aby zrekompensować te straty — dlatego ich zapotrzebowanie energetyczne na kilogram masy ciała jest dużo wyższe niż u dużych zwierząt.',
        punkty: 2,
      },
    ],
  });
})();
