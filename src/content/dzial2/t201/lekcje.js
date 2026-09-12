(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t201-01',
    tematId: 't201',
    kolejnosc: 1,
    tytul: 'Klasyfikacja organizmów',
    wprowadzenie:
      'Na Ziemi żyją miliony różnych gatunków organizmów. Aby móc się w tej różnorodności odnaleźć, porozumiewać się jednoznacznie i badać pokrewieństwa między organizmami, biolodzy porządkują je w uporządkowany system grup — od najmniejszej po największą.',
    sekcje: [
      {
        naglowek: 'Systematyka — nauka o klasyfikowaniu organizmów',
        akapity: [
          'Systematyka (taksonomia) to dział biologii zajmujący się opisywaniem, nazywaniem i porządkowaniem organizmów w grupy zwane jednostkami systematycznymi (taksonami), na podstawie ich podobieństwa budowy i pokrewieństwa.',
          'Podstawy współczesnej systematyki stworzył w XVIII wieku szwedzki przyrodnik Karol Linneusz. Wprowadził on m.in. zasadę dwuczłonowego nazewnictwa gatunkowego, którą stosujemy do dziś.',
          'Dzięki jednolitemu systemowi klasyfikacji naukowcy na całym świecie — niezależnie od języka, jakim się posługują — wiedzą, o jakim dokładnie organizmie mowa.',
        ],
      },
      {
        naglowek: 'Jednostki systematyczne — od gatunku do królestwa',
        diagramId: 'd-t201-hierarchia',
        akapity: [
          'Podstawową jednostką systematyczną jest gatunek — grupa organizmów o podobnej budowie, zdolnych do krzyżowania się między sobą w warunkach naturalnych i wydawania płodnego potomstwa.',
          'Gatunki o zbliżonej budowie łączy się w rodzaje, rodzaje o wspólnych cechach — w rodziny, rodziny — w rzędy, rzędy — w gromady (klasy), gromady — w typy, a typy — w królestwa.',
          'System ten ma charakter hierarchiczny i zagnieżdżony: każda jednostka niższego rzędu w całości mieści się w jednostce wyższego rzędu. Im wyżej w hierarchii, tym więcej organizmów obejmuje dana grupa, ale tym mniej cech wspólnych mają zaliczane do niej gatunki.',
        ],
      },
      {
        naglowek: 'Dwuczłonowe nazewnictwo gatunkowe',
        akapity: [
          'Każdy gatunek ma naukową nazwę łacińską złożoną z dwóch członów: pierwszy to nazwa rodzaju (pisana wielką literą), a drugi to epitet gatunkowy (pisany małą literą). Nazwę zapisuje się kursywą, np. Homo sapiens (człowiek rozumny) lub Canis lupus (wilk szary).',
          'Taki zapis pozwala jednoznacznie zidentyfikować gatunek na całym świecie, niezależnie od tego, jak nazywa się go potocznie w różnych językach — nazwy zwyczajowe (np. "stokrotka", "daisy", "Gänseblümchen") różnią się między krajami, a nazwa łacińska jest zawsze taka sama.',
        ],
      },
      {
        naglowek: 'Pięć królestw organizmów',
        diagramId: 'd-t201-piec-krolestw',
        akapity: [
          'W klasycznym podziale nauczanym w szkole wyróżnia się pięć królestw organizmów: Monera (bakterie i organizmy o budowie prokariotycznej), Protisty (m.in. glony jednokomórkowe, pierwotniaki), Grzyby, Rośliny oraz Zwierzęta.',
          'Wirusy nie są zaliczane do żadnego z tych królestw, ponieważ nie mają budowy komórkowej — stanowią odrębną, bezkomórkową formę materii.',
          'Do rozpoznawania przynależności systematycznej konkretnego organizmu (np. rośliny znalezionej na łące) biolodzy wykorzystują klucze do oznaczania — zestawy pytań o cechy budowy, które krok po kroku prowadzą do ustalenia gatunku.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Systematyka (taksonomia)', definicja: 'Dział biologii zajmujący się opisywaniem, nazywaniem i klasyfikowaniem organizmów w uporządkowane grupy.' },
      { termin: 'Takson', definicja: 'Grupa organizmów wyodrębniona w systemie klasyfikacji na podstawie wspólnych cech i pokrewieństwa (np. gatunek, rodzaj, typ).' },
      { termin: 'Gatunek', definicja: 'Podstawowa jednostka systematyczna — grupa organizmów o podobnej budowie, zdolnych do krzyżowania się i wydawania płodnego potomstwa w warunkach naturalnych.' },
      { termin: 'Rodzaj (jednostka systematyczna)', definicja: 'Jednostka systematyczna wyższa od gatunku, obejmująca gatunki o zbliżonej budowie i bliskim pokrewieństwie.' },
      { termin: 'Królestwo', definicja: 'Najwyższa, najszersza jednostka systematyczna w klasycznym podziale (np. Monera, Protisty, Grzyby, Rośliny, Zwierzęta).' },
      { termin: 'Dwuczłonowe nazewnictwo', definicja: 'Zasada nadawania organizmom nazw naukowych złożonych z nazwy rodzaju i epitetu gatunkowego, np. Homo sapiens.' },
      { termin: 'Klucz do oznaczania organizmów', definicja: 'Narzędzie w postaci pytań o cechy budowy, umożliwiające ustalenie przynależności systematycznej (np. gatunku) danego organizmu.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Gatunek',
        b: 'Rodzaj',
        roznica: 'Gatunek to podstawowa, najwęższa jednostka systematyczna — organizmy tego samego gatunku mogą się krzyżować i wydawać płodne potomstwo (np. Homo sapiens). Rodzaj to jednostka szersza, obejmująca kilka spokrewnionych gatunków o podobnej budowie (np. rodzaj Canis obejmuje wilka, szakala i psa).',
      },
    ],
    uwazajNa: [
      'Kolejność jednostek systematycznych jest zawsze taka sama i nie można jej zmieniać ani pomijać jej szczebli: gatunek → rodzaj → rodzina → rząd → gromada (klasa) → typ → królestwo.',
      'Nazwa rodzajowa w nazwie dwuczłonowej zawsze zaczyna się wielką literą, a epitet gatunkowy — małą literą (Homo sapiens, nie: homo Sapiens).',
    ],
    musiszWiedziec: [
      'System klasyfikacji jest hierarchiczny i zagnieżdżony — każda mniejsza jednostka systematyczna w całości mieści się w jednostce bezpośrednio wyższej.',
      'Wirusy nie mieszczą się w klasycznym podziale na pięć królestw, ponieważ nie mają budowy komórkowej.',
    ],
    diagramy: ['d-t201-hierarchia', 'd-t201-piec-krolestw'],
    pytaniaKontrolne: ['p-t201-01', 'p-t201-07'],
  });
})();
