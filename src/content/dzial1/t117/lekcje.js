(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t117-01',
    tematId: 't117',
    kolejnosc: 1,
    tytul: 'Reagowanie na bodźce i homeostaza',
    wprowadzenie:
      'Drażliwość (pobudliwość), czyli zdolność do odbierania bodźców z otoczenia i odpowiedniego reagowania na nie, to jedna z podstawowych cech odróżniających organizmy żywe od materii nieożywionej. Ściśle powiązana z nią jest homeostaza — zdolność organizmu do utrzymywania stałych warunków wewnętrznych mimo zmian zachodzących w środowisku zewnętrznym.',
    sekcje: [
      {
        naglowek: 'Bodźce i receptory',
        akapity: [
          'Bodziec to każdy czynnik (fizyczny lub chemiczny), zewnętrzny lub wewnętrzny, który wywołuje reakcję organizmu — np. światło, dźwięk, dotyk, temperatura, zapach czy zmiana stężenia substancji we krwi.',
          'Bodźce odbierane są przez receptory — wyspecjalizowane komórki lub narządy zmysłów, które zamieniają energię bodźca na impuls nerwowy. Przykładami receptorów są: oko (odbiera światło), ucho (odbiera dźwięk) oraz receptory czuciowe w skórze (odbierają dotyk i temperaturę).',
        ],
      },
      {
        naglowek: 'Łuk odruchowy',
        diagramId: 'd-t117-luk-odruchowy',
        akapity: [
          'Odruch to szybka, mimowolna (niezależna od naszej woli) reakcja organizmu na bodziec. Droga, jaką przebywa impuls nerwowy podczas odruchu, nazywana jest łukiem odruchowym: bodziec pobudza receptor, który wysyła impuls nerwowy do ośrodka nerwowego (np. rdzenia kręgowego), a stamtąd sygnał trafia do efektora — narządu wykonującego reakcję (np. mięśnia).',
          'Przykładem jest odruch cofnięcia ręki po dotknięciu gorącego przedmiotu: impuls z receptorów bólu w skórze dociera do rdzenia kręgowego i niemal natychmiast zostaje przekazany do mięśni ramienia, zanim jeszcze świadomie odczujemy ból — dzięki temu reakcja obronna jest bardzo szybka.',
        ],
      },
      {
        naglowek: 'Homeostaza',
        akapity: [
          'Homeostaza to zdolność organizmu do utrzymywania względnie stałych warunków środowiska wewnętrznego (np. temperatury ciała, stężenia glukozy we krwi, ilości wody w organizmie) niezależnie od zmian zachodzących w otoczeniu. Jest to proces ciągły, wymagający stałego monitorowania i korygowania odchyleń od normy.',
          'U zwierząt stałocieplnych ważnym mechanizmem homeostazy jest termoregulacja — np. pocenie się i rozszerzanie naczyń krwionośnych skóry w upale (oddawanie ciepła) lub dreszcze i zwężanie naczyń krwionośnych w chłodzie (ograniczanie utraty ciepła).',
          'Rośliny nie mają układu nerwowego, ale również reagują na bodźce środowiska — np. poprzez tropizmy, czyli ukierunkowany wzrost części rośliny w stronę bodźca lub w kierunku od niego (fototropizm — wzrost pędu w stronę światła).',
        ],
      },
    ],
    pojecia: [
      { termin: 'Drażliwość (pobudliwość)', definicja: 'Zdolność organizmu do odbierania bodźców z otoczenia i reagowania na nie.' },
      { termin: 'Bodziec', definicja: 'Czynnik fizyczny lub chemiczny, zewnętrzny lub wewnętrzny, wywołujący reakcję organizmu.' },
      { termin: 'Receptor', definicja: 'Komórka lub narząd zmysłu odbierający bodziec i zamieniający go na impuls nerwowy.' },
      { termin: 'Efektor', definicja: 'Narząd wykonawczy (np. mięsień lub gruczoł) realizujący reakcję organizmu na bodziec.' },
      { termin: 'Odruch', definicja: 'Szybka, mimowolna reakcja organizmu na bodziec, przebiegająca drogą łuku odruchowego.' },
      { termin: 'Łuk odruchowy', definicja: 'Droga przewodzenia impulsu nerwowego podczas odruchu: receptor → ośrodek nerwowy → efektor.' },
      { termin: 'Homeostaza', definicja: 'Zdolność organizmu do utrzymywania stałych warunków środowiska wewnętrznego niezależnie od zmian w otoczeniu.' },
      { termin: 'Termoregulacja', definicja: 'Mechanizm homeostazy polegający na utrzymywaniu stałej temperatury ciała.' },
      { termin: 'Tropizm', definicja: 'Ukierunkowany wzrost części rośliny w odpowiedzi na bodziec, np. światło (fototropizm) czy grawitację (geotropizm).' },
    ],
    zapamietajRoznice: [
      {
        a: 'Reakcja na bodziec',
        b: 'Homeostaza',
        roznica:
          'Reakcja na bodziec to zwykle pojedyncza, szybka odpowiedź organizmu na konkretny czynnik (np. cofnięcie ręki od gorącego przedmiotu, mrugnięcie okiem). Homeostaza to natomiast ciągły, długotrwały proces utrzymywania stałych warunków wewnętrznych organizmu (np. stałej temperatury ciała czy stężenia glukozy we krwi), realizowany przez nieustanne monitorowanie i korygowanie odchyleń od normy — nie jest jednorazowym zdarzeniem.',
      },
    ],
    uwazajNa: [
      'Nie każda reakcja na bodziec jest przejawem homeostazy — homeostazą nazywamy tylko te procesy, które służą utrzymaniu stałości środowiska wewnętrznego organizmu.',
      'Termoregulacja to tylko jeden z mechanizmów homeostazy — obejmuje ona również m.in. regulację poziomu wody, glukozy i innych substancji w organizmie.',
    ],
    musiszWiedziec: [
      'Utrzymanie homeostazy jest niezbędne dla prawidłowego funkcjonowania organizmu — nawet niewielkie, długotrwałe odchylenia od normy (np. temperatury ciała czy stężenia glukozy we krwi) mogą zaburzać przebieg procesów życiowych.',
    ],
    diagramy: ['d-t117-luk-odruchowy'],
    pytaniaKontrolne: ['p-t117-k1', 'p-t117-k2'],
  });
})();
