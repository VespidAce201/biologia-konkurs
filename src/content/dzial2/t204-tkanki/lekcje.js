(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t204-tkanki-01',
    tematId: 't204-tkanki',
    kolejnosc: 1,
    tytul: 'Tkanki roślinne',
    wprowadzenie:
      'Rośliny wielokomórkowe, podobnie jak zwierzęta, zbudowane są z tkanek — zespołów komórek o podobnej budowie i wspólnej funkcji. U roślin okrytonasiennych wyróżniamy pięć podstawowych typów tkanek: twórczą, okrywającą, miękiszową, przewodzącą i wzmacniającą. Ich współdziałanie umożliwia roślinie wzrost, ochronę, odżywianie i transport substancji.',
    sekcje: [
      {
        naglowek: 'Tkanka twórcza (merystematyczna)',
        diagramId: 'd-t204-tkanki-zestawienie',
        akapity: [
          'Tkanka twórcza to jedyna tkanka roślinna zdolna do intensywnych i częstych podziałów komórkowych. Jej komórki są małe, mają cienkie ściany i duże jądro komórkowe, a dzięki podziałom umożliwiają wzrost rośliny.',
          'Merystemy wierzchołkowe znajdują się na szczytach pędów i korzeni i odpowiadają za wzrost rośliny na długość. Merystemy boczne (np. kambium) leżą wewnątrz łodygi i korzenia i odpowiadają za przyrost na grubość.',
          'Wszystkie pozostałe tkanki roślinne — okrywająca, miękiszowa, przewodząca i wzmacniająca — powstają w wyniku różnicowania (specjalizacji) komórek pochodzących z tkanki twórczej i tracą zdolność do dalszych podziałów.',
        ],
      },
      {
        naglowek: 'Tkanka okrywająca',
        akapity: [
          'Tkanka okrywająca (epiderma, czyli skórka) pokrywa całą powierzchnię młodej rośliny — łodygi, liście, korzenie — i chroni ją przed nadmiernym parowaniem wody, urazami mechanicznymi oraz wnikaniem drobnoustrojów chorobotwórczych.',
          'W skład epidermy liści i zielonych łodyg wchodzą aparaty szparkowe, zbudowane z dwóch komórek szparkowych otaczających niewielki otwór — szparkę. Umożliwiają one wymianę gazową (pobieranie dwutlenku węgla, uwalnianie tlenu i pary wodnej) i mogą się zamykać, ograniczając utratę wody.',
          'U roślin drzewiastych epidermę z czasem zastępuje korek — wtórna tkanka okrywająca zbudowana z martwych, nieprzepuszczających wody komórek, tworząca zewnętrzną warstwę kory pnia.',
        ],
      },
      {
        naglowek: 'Tkanka miękiszowa (miąższowa)',
        akapity: [
          'Tkanka miękiszowa buduje większość objętości ciała rośliny i wypełnia przestrzenie między innymi tkankami. Jej komórki mają cienkie ściany i często zachowują zdolność do dalszych przekształceń.',
          'Miękisz asymilacyjny, bogaty w chloroplasty, znajduje się głównie w liściach i jest głównym miejscem zachodzenia fotosyntezy. Miękisz spichrzowy magazynuje substancje zapasowe, np. skrobię, w korzeniach, bulwach i nasionach.',
        ],
      },
      {
        naglowek: 'Tkanki przewodzące i wzmacniające',
        diagramId: 'd-t204-tkanki-przekroj',
        akapity: [
          'Tkanka przewodząca transportuje wodę, sole mineralne i substancje odżywcze. Drewno (ksylem) przewodzi wodę i sole mineralne od korzeni do liści, a łyko (floem) rozprowadza produkty fotosyntezy (asymilaty) do wszystkich części rośliny.',
          'Tkanka wzmacniająca (kolenchyma i sklerenchyma) usztywnia organy rośliny i pozwala jej utrzymać kształt oraz wznosić się ponad podłoże, co jest szczególnie ważne u dużych roślin lądowych.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Merystem (tkanka twórcza)', definicja: 'Tkanka zbudowana z małych, intensywnie dzielących się komórek, umożliwiająca wzrost rośliny; jedyna tkanka roślinna zdolna do podziałów.' },
      { termin: 'Epiderma (skórka)', definicja: 'Pierwotna tkanka okrywająca pokrywająca powierzchnię młodej rośliny, chroniąca ją przed parowaniem i urazami.' },
      { termin: 'Aparat szparkowy', definicja: 'Struktura w epidermie zbudowana z dwóch komórek szparkowych otaczających szparkę, umożliwiająca wymianę gazową i regulację transpiracji.' },
      { termin: 'Miękisz asymilacyjny', definicja: 'Tkanka miękiszowa bogata w chloroplasty, prowadząca fotosyntezę, występująca głównie w liściach.' },
      { termin: 'Ksylem (drewno)', definicja: 'Tkanka przewodząca zbudowana głównie z martwych komórek, transportująca wodę i sole mineralne od korzeni do liści.' },
      { termin: 'Floem (łyko)', definicja: 'Tkanka przewodząca zbudowana z żywych komórek, transportująca produkty fotosyntezy do różnych części rośliny.' },
      { termin: 'Kolenchyma', definicja: 'Żywa tkanka wzmacniająca o nierównomiernie pogrubionych ścianach komórkowych, występująca m.in. w młodych łodygach i ogonkach liściowych.' },
      { termin: 'Sklerenchyma', definicja: 'Tkanka wzmacniająca zbudowana z martwych komórek o zdrewniałych, równomiernie pogrubionych ścianach, nadająca organom rośliny sztywność.' },
      { termin: 'Korek (peryderma)', definicja: 'Wtórna tkanka okrywająca zbudowana z martwych komórek, zastępująca epidermę u roślin drzewiastych.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Ksylem (drewno)',
        b: 'Floem (łyko)',
        roznica: 'Ksylem transportuje wodę i sole mineralne od korzeni w górę do liści i zbudowany jest głównie z martwych komórek. Floem transportuje substancje odżywcze (produkty fotosyntezy) do różnych części rośliny i zbudowany jest z żywych komórek.',
      },
    ],
    uwazajNa: [
      'Tkanka twórcza to jedyna tkanka zdolna do podziałów komórkowych — pozostałe tkanki są tkankami stałymi (trwałymi), powstałymi w wyniku różnicowania komórek merystematycznych i zwykle niedzielącymi się dalej.',
    ],
    musiszWiedziec: [
      'Roślina okrytonasienna zbudowana jest z pięciu podstawowych typów tkanek: twórczej, okrywającej, miękiszowej, przewodzącej i wzmacniającej — każda z nich pełni inną, ściśle określoną funkcję.',
    ],
    diagramy: ['d-t204-tkanki-zestawienie', 'd-t204-tkanki-przekroj'],
    pytaniaKontrolne: ['p-t204-tkanki-01', 'p-t204-tkanki-11'],
  });
})();
