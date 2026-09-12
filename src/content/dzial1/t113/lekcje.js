(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t113-01',
    tematId: 't113',
    kolejnosc: 1,
    tytul: 'Fotosynteza',
    wprowadzenie:
      'Fotosynteza to jeden z najważniejszych procesów zachodzących na Ziemi — dzięki niej rośliny, glony i niektóre bakterie wytwarzają związki organiczne z prostych substancji nieorganicznych, wykorzystując energię światła. To fotosynteza jest źródłem tlenu w atmosferze i podstawą większości łańcuchów pokarmowych.',
    sekcje: [
      {
        naglowek: 'Przebieg i znaczenie fotosyntezy',
        diagramId: 'd-t113-schemat-fotosyntezy',
        akapity: [
          'Fotosyntezę można zapisać słownym równaniem: dwutlenek węgla + woda, w obecności energii świetlnej i chlorofilu, przekształcane są w glukozę i tlen. Tlen jest produktem ubocznym tego procesu, uwalnianym do atmosfery.',
          'Proces ten zachodzi w chloroplastach — organellach komórkowych zawierających zielony barwnik, chlorofil. Chlorofil pochłania głównie światło czerwone i niebieskie, a odbija światło zielone, dlatego rośliny wydają się nam zielone.',
          'Fotosynteza zachodzi przede wszystkim w zielonych częściach roślin, głównie w liściach, w komórkach tkanki miękiszowej zawierającej chloroplasty (miękiszu asymilacyjnym). Dwutlenek węgla dostaje się do liścia przez aparaty szparkowe, a woda dociera z korzeni tkanką przewodzącą.',
          'Fotosynteza ma ogromne znaczenie dla całej biosfery: dostarcza tlen niezbędny do oddychania większości organizmów oraz wytwarza materię organiczną (glukozę), która jest podstawowym źródłem energii dla producentów i — pośrednio, poprzez łańcuchy pokarmowe — dla wszystkich pozostałych organizmów.',
        ],
      },
      {
        naglowek: 'Czynniki wpływające na intensywność fotosyntezy',
        akapity: [
          'Natężenie światła — im więcej światła dociera do liścia (do pewnej granicy), tym intensywniej przebiega fotosynteza. Po przekroczeniu pewnego poziomu dalszy wzrost natężenia światła przestaje zwiększać intensywność fotosyntezy, ponieważ ograniczać ją zaczyna inny czynnik, np. stężenie dwutlenku węgla.',
          'Stężenie dwutlenku węgla w powietrzu — zwiększenie stężenia CO2 zwykle podnosi intensywność fotosyntezy, dopóki nie zacznie jej ograniczać inny czynnik, np. brak wystarczającej ilości światła.',
          'Temperatura — fotosynteza, podobnie jak inne procesy zależne od enzymów, ma swoje optimum temperaturowe; zbyt niska temperatura spowalnia reakcje, a zbyt wysoka może uszkodzić enzymy w niej uczestniczące.',
          'Zasada mówiąca, że tempo procesu jest ograniczane przez ten czynnik środowiskowy, który jest akurat najmniej dostępny (najbardziej deficytowy), nazywana jest prawem czynnika ograniczającego.',
        ],
      },
      {
        naglowek: 'Kiedy zachodzi fotosynteza',
        akapity: [
          'Fotosynteza może zachodzić wyłącznie w obecności światła — dlatego u roślin zielonych przebiega głównie w dzień. W nocy, przy braku światła, proces ten ustaje.',
          'Rośliny — w przeciwieństwie do fotosyntezy — oddychają komórkowo przez cały czas, także w nocy. W dzień intensywność fotosyntezy jest zwykle znacznie wyższa niż intensywność oddychania, dlatego w efekcie netto roślina w ciągu dnia pobiera dwutlenek węgla i wydziela tlen.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Fotosynteza', definicja: 'Proces wytwarzania glukozy z dwutlenku węgla i wody, zachodzący przy udziale energii świetlnej i chlorofilu, z wydzieleniem tlenu.' },
      { termin: 'Chlorofil', definicja: 'Zielony barwnik pochłaniający energię świetlną, niezbędny do przebiegu fotosyntezy.' },
      { termin: 'Chloroplast', definicja: 'Organellum komórkowe zawierające chlorofil, w którym zachodzi fotosynteza.' },
      { termin: 'Miękisz asymilacyjny', definicja: 'Tkanka roślinna zbudowana z komórek bogatych w chloroplasty, w której intensywnie zachodzi fotosynteza.' },
      { termin: 'Aparat szparkowy', definicja: 'Struktura w skórce liścia umożliwiająca wymianę gazową, m.in. pobieranie dwutlenku węgla potrzebnego do fotosyntezy.' },
      { termin: 'Czynnik ograniczający', definicja: 'Czynnik środowiskowy (np. światło, CO2, temperatura), który w danych warunkach najsilniej ogranicza tempo fotosyntezy.' },
      { termin: 'Producent', definicja: 'Organizm samożywny (np. roślina) wytwarzający materię organiczną w procesie fotosyntezy.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Fotosynteza',
        b: 'Oddychanie komórkowe',
        roznica: 'Fotosynteza zachodzi tylko w komórkach zawierających chloroplasty, wyłącznie w obecności światła, i polega na wytwarzaniu glukozy oraz tlenu z dwutlenku węgla i wody (pochłania energię). Oddychanie komórkowe zachodzi we wszystkich żywych komórkach, przez cały czas (dzień i noc), i polega na rozkładzie glukozy przy udziale tlenu do dwutlenku węgla i wody, z uwolnieniem energii.',
      },
    ],
    uwazajNa: [
      'Częsty błąd: rośliny nie oddychają „tylko w nocy” — oddychanie komórkowe zachodzi w ich komórkach nieprzerwanie, przez całą dobę. W dzień jedynie fotosynteza (silniejsza ilościowo) przeważa nad oddychaniem, dlatego efekt netto to pobieranie CO2 i wydzielanie O2.',
      'Fotosynteza i oddychanie komórkowe to procesy o odwrotnym kierunku przemian, ale nie są swoimi „przeciwieństwami” zachodzącymi w tym samym miejscu — fotosynteza zachodzi w chloroplastach, a oddychanie komórkowe głównie w mitochondriach (i częściowo w cytoplazmie) każdej żywej komórki, również tej niezawierającej chloroplastów.',
    ],
    musiszWiedziec: [
      'Słowne równanie fotosyntezy: dwutlenek węgla + woda → (w obecności światła i chlorofilu) → glukoza + tlen.',
      'Fotosynteza zachodzi tylko w świetle i tylko w komórkach zawierających chloroplasty, głównie w liściach roślin.',
    ],
    diagramy: ['d-t113-schemat-fotosyntezy'],
    pytaniaKontrolne: ['p-t113-01', 'p-t113-04'],
  });
})();
