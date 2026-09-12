(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t107-01',
    tematId: 't107',
    kolejnosc: 1,
    tytul: 'Budowa komórki: prokariotyczna i eukariotyczna',
    wprowadzenie:
      'Wszystkie komórki mają wspólne elementy budowy — błonę komórkową, cytoplazmę, materiał genetyczny (DNA) i rybosomy. Jednak ze względu na sposób organizacji tych elementów wyróżniamy dwa zasadniczo różne typy komórek: prokariotyczną i eukariotyczną. To rozróżnienie jest jednym z najważniejszych podziałów w całej biologii.',
    sekcje: [
      {
        naglowek: 'Cechy wspólne wszystkich komórek',
        akapity: [
          'Niezależnie od typu, każda komórka posiada błonę komórkową (błonę plazmatyczną) oddzielającą jej wnętrze od otoczenia i kontrolującą wymianę substancji. Wewnątrz błony znajduje się cytoplazma — półpłynne środowisko, w którym zachodzi większość procesów życiowych komórki.',
          'Każda komórka zawiera materiał genetyczny w postaci DNA, który niesie informację o budowie i funkcjonowaniu komórki, oraz rybosomy — struktury odpowiedzialne za syntezę (produkcję) białek.',
          'To, co odróżnia komórkę prokariotyczną od eukariotycznej, to przede wszystkim sposób, w jaki zorganizowany jest materiał genetyczny, oraz obecność (lub brak) wewnętrznych organelli otoczonych błonami.',
        ],
      },
      {
        naglowek: 'Komórka prokariotyczna',
        akapity: [
          'Komórka prokariotyczna jest zbudowana prosto: nie ma w niej jądra komórkowego otoczonego błoną ani większości organelli błonowych. Materiał genetyczny (pojedyncza, kolista cząsteczka DNA) znajduje się bezpośrednio w cytoplazmie, w obszarze zwanym nukleoidem — DNA nie jest tu oddzielone od reszty komórki żadną błoną.',
          'Komórki prokariotyczne są zazwyczaj bardzo małe (najczęściej 1–10 mikrometrów). Wiele z nich posiada na zewnątrz błony komórkowej dodatkową, sztywną ścianę komórkową, która nadaje komórce kształt i chroni ją, a czasem także otoczkę śluzową lub wici umożliwiające ruch.',
          'Budowę prokariotyczną mają wszystkie bakterie oraz archeony (archebakterie) — organizmy jednokomórkowe, które nie mają jądra komórkowego.',
        ],
      },
      {
        naglowek: 'Komórka eukariotyczna',
        akapity: [
          'Komórka eukariotyczna jest zbudowana znacznie bardziej złożenie. Jej materiał genetyczny (DNA w postaci chromatyny, a podczas podziału — chromosomów) znajduje się wewnątrz jądra komórkowego, wyraźnie odgraniczonego od cytoplazmy podwójną błoną zwaną otoczką jądrową.',
          'Oprócz jądra komórka eukariotyczna zawiera liczne organelle otoczone błonami, np. mitochondria, siateczkę śródplazmatyczną czy aparat Golgiego — każde z nich pełni odrębną, wyspecjalizowaną funkcję (szczegółowo poznasz je w kolejnym temacie).',
          'Komórki eukariotyczne są zwykle znacznie większe od prokariotycznych (najczęściej 10–100 mikrometrów). Budowę eukariotyczną mają komórki protistów, grzybów, roślin i zwierząt.',
        ],
        diagramId: 'd-t107-prokariota-eukariota',
      },
    ],
    pojecia: [
      { termin: 'Komórka prokariotyczna', definicja: 'Komórka pozbawiona jądra komórkowego otoczonego błoną — jej DNA znajduje się swobodnie w cytoplazmie, w obszarze zwanym nukleoidem. Charakterystyczna dla bakterii i archeonów.' },
      { termin: 'Komórka eukariotyczna', definicja: 'Komórka posiadająca jądro komórkowe otoczone otoczką jądrową oraz liczne organelle błonowe. Charakterystyczna dla protistów, grzybów, roślin i zwierząt.' },
      { termin: 'Nukleoid', definicja: 'Obszar cytoplazmy komórki prokariotycznej, w którym znajduje się pojedyncza, kolista cząsteczka DNA, nieotoczona błoną.' },
      { termin: 'Jądro komórkowe', definicja: 'Organellum komórki eukariotycznej otoczone otoczką jądrową, zawierające materiał genetyczny (DNA) w postaci chromatyny lub chromosomów.' },
      { termin: 'Otoczka jądrowa', definicja: 'Podwójna błona otaczająca jądro komórkowe, oddzielająca jego wnętrze od cytoplazmy.' },
      { termin: 'Ściana komórkowa', definicja: 'Sztywna warstwa na zewnątrz błony komórkowej, nadająca komórce kształt i ochronę; występuje m.in. u bakterii, grzybów i roślin (ma inny skład chemiczny u każdej z tych grup).' },
      { termin: 'Błona komórkowa', definicja: 'Cienka, elastyczna błona otaczająca każdą komórkę, oddzielająca jej wnętrze od środowiska zewnętrznego i kontrolująca transport substancji.' },
      { termin: 'Cytoplazma', definicja: 'Półpłynne środowisko wewnątrz komórki, w którym zawieszone są organelle i zachodzi wiele procesów metabolicznych.' },
      { termin: 'Rybosom', definicja: 'Drobna struktura zbudowana z RNA i białek, odpowiedzialna za syntezę białek; występuje zarówno w komórkach prokariotycznych, jak i eukariotycznych.' },
      { termin: 'Chromatyna', definicja: 'Forma, w jakiej DNA wraz z białkami występuje w jądrze komórkowym komórki niedzielącej się.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Komórka prokariotyczna',
        b: 'Komórka eukariotyczna',
        roznica:
          'Prokariotyczna: brak jądra otoczonego błoną (DNA jako nukleoid w cytoplazmie), zwykle brak organelli błonowych, mniejsze rozmiary (1–10 µm), np. bakterie. Eukariotyczna: DNA w jądrze otoczonym otoczką jądrową, liczne organelle błonowe, większe rozmiary (10–100 µm), np. komórki roślin, grzybów i zwierząt.',
      },
    ],
    uwazajNa: [
      'Brak jądra otoczonego błoną nie oznacza braku DNA! Bakterie mają materiał genetyczny — tylko nie jest on odgraniczony błoną od reszty komórki.',
      'Rybosomy występują w OBU typach komórek — to częsty błąd, by uznać je za cechę wyłącznie eukariotyczną.',
      'Wirusy nie są ani komórkami prokariotycznymi, ani eukariotycznymi — nie mają w ogóle budowy komórkowej, więc ten podział ich nie dotyczy.',
    ],
    musiszWiedziec: [
      'Podstawowe kryterium podziału komórek na prokariotyczne i eukariotyczne to obecność (eukariota) lub brak (prokariota) jądra komórkowego otoczonego błoną.',
      'Bakterie i archeony to jedyne organizmy o budowie prokariotycznej; wszystkie pozostałe organizmy komórkowe (protisty, grzyby, rośliny, zwierzęta) są eukariotyczne.',
    ],
    diagramy: ['d-t107-prokariota-eukariota'],
    pytaniaKontrolne: ['p-t107-01', 'p-t107-14'],
  });
})();
