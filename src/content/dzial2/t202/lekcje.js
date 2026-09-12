(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t202-01',
    tematId: 't202',
    kolejnosc: 1,
    tytul: 'Wirusy — bezkomórkowe formy materii',
    wprowadzenie:
      'Wirusy to twory na granicy materii ożywionej i nieożywionej. Nie mają budowy komórkowej, nie oddychają, nie pobierają pokarmu i nie mogą się rozmnażać samodzielnie — a mimo to potrafią wywoływać groźne choroby u ludzi, zwierząt i roślin. Poznanie ich budowy i sposobu namnażania pozwala zrozumieć, dlaczego zwalczanie chorób wirusowych jest tak trudne.',
    sekcje: [
      {
        naglowek: 'Budowa wirusa',
        diagramId: 'd-t202-budowa-wirusa',
        akapity: [
          'Wirus nie jest komórką — nie ma cytoplazmy, błony komórkowej, rybosomów ani żadnych organelli. Jego budowa jest bardzo uproszczona: składa się właściwie tylko z materiału genetycznego i otaczającego go płaszcza białkowego.',
          'Materiałem genetycznym wirusa jest kwas nukleinowy — DNA albo RNA (nigdy oba naraz), który niesie informację potrzebną do namnożenia wirusa.',
          'Kwas nukleinowy otoczony jest kapsydem — płaszczem zbudowanym z białek, który chroni materiał genetyczny przed uszkodzeniem.',
          'Niektóre wirusy (np. wirus grypy) mają dodatkowo otoczkę lipidową z osadzonymi w niej białkami powierzchniowymi (tzw. kolcami), które umożliwiają rozpoznanie i związanie się z komórką gospodarza. Inne wirusy (np. wirusy roślinne) takiej otoczki nie posiadają.',
        ],
      },
      {
        naglowek: 'Namnażanie wirusa — konieczna komórka gospodarza',
        akapity: [
          'Wirus nie ma własnego metabolizmu ani rybosomów, więc nie potrafi sam wytworzyć nowych kopii siebie. Aby się namnożyć, musi wniknąć do żywej komórki (komórki gospodarza) i wykorzystać jej aparat do produkcji białek oraz kopiowania kwasów nukleinowych.',
          'Uproszczony przebieg namnażania wirusa: wirus przyłącza się do powierzchni komórki gospodarza → wprowadza do niej swój materiał genetyczny → komórka gospodarza, "oszukana", zaczyna wytwarzać kopie kwasu nukleinowego i białek wirusa → z tych elementów powstają nowe cząstki wirusa → komórka gospodarza pęka (ulega zniszczeniu), a uwolnione wirusy atakują kolejne komórki.',
          'Poza komórką gospodarza wirus nie wykazuje żadnych cech życia — nie rośnie, nie oddycha, nie reaguje na bodźce. Dlatego wielu biologów uważa wirusy za formy materii na pograniczu życia, a nie za w pełni żywe organizmy.',
        ],
      },
      {
        naglowek: 'Wirusy chorobotwórcze i ich znaczenie',
        akapity: [
          'Wirusy wywołują wiele chorób człowieka, np. grypę, przeziębienie, odrę, ospę wietrzną, świnkę oraz COVID-19. Atakują też zwierzęta (np. wścieklizna) i rośliny (np. mozaika tytoniowa liści).',
          'Ponieważ wirus wykorzystuje do namnażania mechanizmy komórki gospodarza, trudno zniszczyć go lekiem, nie szkodząc jednocześnie samej komórce. Dlatego skutecznych leków przeciwwirusowych jest znacznie mniej niż antybiotyków zwalczających bakterie.',
          'Najskuteczniejszą metodą ochrony przed wieloma chorobami wirusowymi są szczepienia — uczą one układ odpornościowy rozpoznawania danego wirusa, zanim dojdzie do prawdziwego zakażenia.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Wirus', definicja: 'Bezkomórkowa forma materii zbudowana z kwasu nukleinowego (DNA lub RNA) otoczonego płaszczem białkowym, zdolna do namnażania się wyłącznie wewnątrz żywej komórki gospodarza.' },
      { termin: 'Kapsyd', definicja: 'Płaszcz białkowy otaczający i chroniący kwas nukleinowy wirusa.' },
      { termin: 'Otoczka lipidowa', definicja: 'Dodatkowa błona zewnętrzna występująca u niektórych wirusów (np. wirusa grypy), zawierająca białka powierzchniowe ułatwiające wnikanie do komórki gospodarza.' },
      { termin: 'Komórka gospodarza', definicja: 'Żywa komórka, którą wirus zaatakował i której aparat wykorzystuje do wytworzenia swoich kopii.' },
      { termin: 'Kwas nukleinowy wirusa', definicja: 'Materiał genetyczny wirusa — DNA albo RNA — niosący informację potrzebną do namnożenia wirusa.' },
      { termin: 'Szczepionka', definicja: 'Preparat uczący układ odpornościowy rozpoznawania konkretnego wirusa (lub innego patogenu) bez wywoływania choroby, dzięki czemu organizm szybciej się broni przy prawdziwym zakażeniu.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Wirus',
        b: 'Bakteria',
        roznica: 'Wirus nie ma budowy komórkowej — to tylko kwas nukleinowy w płaszczu białkowym, niezdolny do samodzielnego namnażania. Bakteria jest w pełni żywą komórką (ma cytoplazmę, błonę komórkową, rybosomy, DNA) i potrafi rozmnażać się samodzielnie, bez konieczności wnikania do innej komórki.',
      },
    ],
    uwazajNa: [
      'Antybiotyki niszczą struktury typowe dla komórek bakteryjnych (np. ścianę komórkową, rybosomy bakteryjne) — wirus takich struktur nie posiada, dlatego antybiotyki są wobec wirusów całkowicie nieskuteczne. Antybiotykami nie leczy się grypy ani przeziębienia.',
      'Nie każdy wirus ma otoczkę lipidową — jest to cecha dodatkowa, występująca tylko u części wirusów. Każdy wirus ma natomiast kapsyd i kwas nukleinowy.',
    ],
    musiszWiedziec: [
      'Wirus namnaża się wyłącznie wewnątrz żywej komórki gospodarza, wykorzystując jej aparat do produkcji białek i kopiowania materiału genetycznego.',
      'Podstawowa budowa wirusa to: kwas nukleinowy (DNA lub RNA) + kapsyd białkowy, a u niektórych wirusów dodatkowo otoczka lipidowa z białkami powierzchniowymi.',
    ],
    diagramy: ['d-t202-budowa-wirusa'],
    pytaniaKontrolne: ['p-t202-01', 'p-t202-02'],
  });
})();
