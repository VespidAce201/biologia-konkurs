(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t112-01',
    tematId: 't112',
    kolejnosc: 1,
    tytul: 'Odżywianie się organizmów',
    wprowadzenie:
      'Wszystkie organizmy potrzebują związków organicznych jako źródła energii i budulca dla własnych komórek. To, w jaki sposób je zdobywają, dzieli świat żywy na dwie zasadnicze grupy: organizmy samożywne i cudzożywne.',
    sekcje: [
      {
        naglowek: 'Samożywność (autotrofizm)',
        akapity: [
          'Organizmy samożywne (autotroficzne) samodzielnie wytwarzają związki organiczne z prostych związków nieorganicznych, wykorzystując zewnętrzne źródło energii. Należą do nich rośliny, glony oraz niektóre bakterie.',
          'Najważniejszym sposobem samożywności jest fotosynteza — proces, w którym z dwutlenku węgla i wody, przy udziale energii świetlnej i chlorofilu, powstaje glukoza. Organizmy prowadzące fotosyntezę nazywamy producentami, ponieważ to one wytwarzają materię organiczną wykorzystywaną następnie przez inne organizmy.',
          'Rzadszym sposobem samożywności jest chemosynteza, występująca u niektórych bakterii (np. bakterii nitryfikacyjnych czy siarkowych) — zamiast energii świetlnej wykorzystują one energię uwalnianą w reakcjach chemicznych utleniania prostych związków nieorganicznych.',
        ],
      },
      {
        naglowek: 'Cudzożywność (heterotrofizm)',
        diagramId: 'd-t112-sposoby-odzywiania',
        akapity: [
          'Organizmy cudzożywne (heterotroficzne) nie potrafią samodzielnie wytwarzać związków organicznych — muszą pobierać gotowy pokarm z otoczenia. Należą do nich wszystkie zwierzęta, grzyby oraz wiele gatunków bakterii i protistów.',
          'Wśród zwierząt cudzożywność przyjmuje różne formy: roślinożerność (pokarmem są rośliny), mięsożerność (pokarmem są inne zwierzęta) oraz wszystkożerność (pokarmem są zarówno rośliny, jak i zwierzęta).',
          'Szczególnymi formami cudzożywności są: pasożytnictwo, w którym organizm (pasożyt) pobiera pokarm z ciała żywego żywiciela, zwykle mu szkodząc, oraz saprotrofizm, polegający na rozkładaniu materii organicznej martwych organizmów i pobieraniu z niej składników odżywczych — prowadzą go m.in. grzyby i wiele bakterii.',
          'Organizmy cudzożywne odżywiające się innymi organizmami nazywamy konsumentami, a te rozkładające martwą materię organiczną — destruentami (reducentami). Destruenci odgrywają kluczową rolę w przyrodzie, umożliwiając krążenie materii.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Samożywność (autotrofizm)', definicja: 'Sposób odżywiania polegający na samodzielnym wytwarzaniu związków organicznych z prostych związków nieorganicznych.' },
      { termin: 'Cudzożywność (heterotrofizm)', definicja: 'Sposób odżywiania polegający na pobieraniu gotowych związków organicznych z otoczenia (z pokarmu).' },
      { termin: 'Fotosynteza', definicja: 'Proces wytwarzania glukozy z dwutlenku węgla i wody przy udziale energii świetlnej i chlorofilu.' },
      { termin: 'Chemosynteza', definicja: 'Proces wytwarzania związków organicznych z wykorzystaniem energii uwalnianej w reakcjach chemicznych, bez udziału światła.' },
      { termin: 'Producent', definicja: 'Organizm samożywny wytwarzający materię organiczną, stanowiącą podstawę łańcucha pokarmowego.' },
      { termin: 'Konsument', definicja: 'Organizm cudzożywny odżywiający się innymi organizmami (roślinami lub zwierzętami).' },
      { termin: 'Destruent (reducent)', definicja: 'Organizm cudzożywny rozkładający martwą materię organiczną, np. grzyby i wiele bakterii.' },
      { termin: 'Pasożytnictwo', definicja: 'Forma cudzożywności, w której organizm pobiera pokarm z ciała żywego żywiciela, zwykle mu szkodząc.' },
      { termin: 'Saprotrofizm', definicja: 'Forma cudzożywności polegająca na rozkładaniu martwej materii organicznej i pobieraniu z niej składników odżywczych.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Samożywność (autotrofizm)',
        b: 'Cudzożywność (heterotrofizm)',
        roznica: 'Organizmy samożywne wytwarzają związki organiczne same, z prostych substancji nieorganicznych i energii zewnętrznej (np. rośliny w fotosyntezie). Organizmy cudzożywne nie potrafią tego robić i muszą pobierać gotowe związki organiczne z pokarmu (np. zwierzęta, grzyby).',
      },
    ],
    uwazajNa: [
      'Grzyby, mimo że często kojarzą się z roślinami i są nieruchome, są organizmami cudzożywnymi — nie mają chlorofilu i nie prowadzą fotosyntezy; odżywiają się jako saprotrofy lub pasożyty.',
      'Nie każdy organizm samożywny prowadzi fotosyntezę — niektóre bakterie są samożywne dzięki chemosyntezie, czyli wykorzystaniu energii z reakcji chemicznych zamiast światła.',
    ],
    musiszWiedziec: [
      'Producentami w przyrodzie są niemal wyłącznie organizmy samożywne — to one wprowadzają materię organiczną do łańcuchów pokarmowych.',
      'Destruenci (np. grzyby i bakterie saprotroficzne) umożliwiają rozkład martwej materii organicznej i krążenie pierwiastków w przyrodzie.',
    ],
    diagramy: ['d-t112-sposoby-odzywiania'],
    pytaniaKontrolne: ['p-t112-01', 'p-t112-03'],
  });
})();
