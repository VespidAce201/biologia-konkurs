(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t203-01',
    tematId: 't203',
    kolejnosc: 1,
    tytul: 'Bakterie — organizmy jednokomórkowe',
    wprowadzenie:
      'Bakterie to najmniejsze i najliczniejsze organizmy komórkowe na Ziemi. Choć zbudowane są tylko z jednej, bardzo prostej komórki, odgrywają ogromną rolę w przyrodzie — rozkładają materię organiczną, użyźniają glebę, a niektóre z nich wywołują choroby. Poznanie ich budowy pozwala zrozumieć, czym różni się komórka prokariotyczna od komórki organizmów, które mają już jądro komórkowe.',
    sekcje: [
      {
        naglowek: 'Budowa komórki bakteryjnej',
        diagramId: 'd-t203-budowa-bakterii',
        akapity: [
          'Bakteria jest organizmem jednokomórkowym o budowie prokariotycznej — jej materiał genetyczny (DNA) nie jest otoczony błoną jądrową i znajduje się bezpośrednio w cytoplazmie, w miejscu zwanym nukleoidem. Bakteria nie ma więc prawdziwego jądra komórkowego.',
          'Komórkę bakteryjną otacza ściana komórkowa, która nadaje jej kształt i chroni przed uszkodzeniami, a pod nią leży błona komórkowa, kontrolująca wymianę substancji między komórką a jej otoczeniem.',
          'Wnętrze komórki wypełnia cytoplazma, w której — oprócz nukleoidu — znajdują się liczne rybosomy odpowiedzialne za produkcję białek.',
          'Niektóre bakterie mają dodatkowo otoczkę śluzową (chroniącą przed wysychaniem i działaniem układu odpornościowego gospodarza) oraz jedną lub więcej wici, dzięki którym mogą aktywnie się poruszać.',
        ],
      },
      {
        naglowek: 'Kształty i sposoby odżywiania się bakterii',
        akapity: [
          'Ze względu na kształt komórki bakterie dzieli się m.in. na: ziarniaki (kuliste), pałeczki (podłużne, wydłużone) oraz krętki (spiralnie skręcone).',
          'Bakterie różnią się sposobem zdobywania pokarmu. Bakterie samożywne (autotroficzne) same wytwarzają związki organiczne, np. w procesie fotosyntezy lub chemosyntezy. Bakterie cudzożywne (heterotroficzne) pobierają gotowe związki organiczne z otoczenia — mogą to być bakterie saprotroficzne (odżywiające się martwą materią organiczną) lub pasożytnicze (żerujące na żywym organizmie i wywołujące choroby).',
        ],
      },
      {
        naglowek: 'Znaczenie bakterii w przyrodzie i dla człowieka',
        akapity: [
          'Bakterie saprotroficzne rozkładają obumarłe szczątki roślin i zwierząt na proste związki, które wracają do środowiska — dzięki temu w przyrodzie zachodzi krążenie materii, a gleba jest użyźniana.',
          'Bakterie brodawkowe żyją w symbiozie z korzeniami roślin motylkowych (np. koniczyny, grochu) i wiążą azot z powietrza, wzbogacając glebę w związki azotowe niezbędne roślinom do wzrostu.',
          'Człowiek wykorzystuje bakterie gospodarczo, np. do produkcji jogurtów i serów (bakterie fermentacji mlekowej) czy oczyszczania ścieków.',
          'Niektóre bakterie są chorobotwórcze — wywołują np. anginę bakteryjną, gruźlicę czy salmonellozę. Choroby bakteryjne leczy się antybiotykami, które niszczą struktury typowe dla komórki bakteryjnej (np. ścianę komórkową), nieszkodliwe dla komórek człowieka.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Bakteria', definicja: 'Jednokomórkowy organizm o budowie prokariotycznej — jego DNA nie jest otoczone błoną jądrową.' },
      { termin: 'Komórka prokariotyczna', definicja: 'Komórka pozbawiona jądra komórkowego otoczonego błoną — materiał genetyczny znajduje się luźno w cytoplazmie, w nukleoidzie.' },
      { termin: 'Nukleoid', definicja: 'Miejsce w cytoplazmie komórki bakteryjnej, w którym znajduje się DNA, nieotoczone błoną jądrową.' },
      { termin: 'Ściana komórkowa (bakterii)', definicja: 'Sztywna zewnętrzna warstwa nadająca komórce bakteryjnej kształt i chroniąca ją przed uszkodzeniami.' },
      { termin: 'Bakterie samożywne', definicja: 'Bakterie zdolne do samodzielnego wytwarzania związków organicznych, np. w procesie fotosyntezy lub chemosyntezy.' },
      { termin: 'Bakterie cudzożywne', definicja: 'Bakterie pobierające gotowe związki organiczne z otoczenia — saprotroficzne (z martwej materii) lub pasożytnicze (z organizmu żywiciela).' },
      { termin: 'Bakterie brodawkowe', definicja: 'Bakterie żyjące w symbiozie z korzeniami roślin motylkowych, wiążące azot z powietrza i użyźniające glebę.' },
      { termin: 'Antybiotyk', definicja: 'Lek niszczący struktury typowe dla komórki bakteryjnej (np. ścianę komórkową), stosowany w leczeniu chorób bakteryjnych.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Komórka bakteryjna (prokariotyczna)',
        b: 'Komórka eukariotyczna (np. roślinna, zwierzęca)',
        roznica: 'Komórka bakteryjna nie ma jądra komórkowego otoczonego błoną — jej DNA leży luźno w cytoplazmie w nukleoidzie. Komórka eukariotyczna ma prawdziwe jądro komórkowe z otoczką jądrową oraz inne organelle otoczone błonami (np. mitochondria), których bakteria nie posiada.',
      },
    ],
    uwazajNa: [
      'Nukleoid to NIE jest jądro komórkowe — to tylko obszar w cytoplazmie, gdzie znajduje się DNA bakterii, bez żadnej otoczki błonowej. Mylenie tych dwóch pojęć to częsty błąd.',
      'Nie każda bakteria ma wić czy otoczkę śluzową — to cechy dodatkowe, występujące tylko u niektórych gatunków. Elementami obecnymi u każdej bakterii są: ściana komórkowa, błona komórkowa, cytoplazma, nukleoid i rybosomy.',
      'Antybiotyki działają tylko na bakterie (niszczą struktury typowe dla komórki bakteryjnej) — są całkowicie nieskuteczne wobec wirusów, które nie mają budowy komórkowej.',
    ],
    musiszWiedziec: [
      'Bakteria jest organizmem jednokomórkowym o budowie prokariotycznej — nie ma jądra komórkowego otoczonego błoną, jej DNA znajduje się w nukleoidzie.',
      'Bakterie pełnią kluczową rolę w przyrodzie jako rozkładające materię organiczną (saprotrofy) oraz jako bakterie brodawkowe wiążące azot z powietrza.',
    ],
    diagramy: ['d-t203-budowa-bakterii'],
    pytaniaKontrolne: ['p-t203-01', 'p-t203-02'],
  });
})();
