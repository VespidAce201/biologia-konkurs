# BioKonkurs

Kompleksowa aplikacja do przygotowania ucznia szkoły podstawowej do **I etapu (szkolnego) konkursu kuratoryjnego z biologii**.

## 🌐 Strona na żywo

**https://vespidace201.github.io/biologia-konkurs/**

Otwórz ten link w dowolnej przeglądarce (komputer, telefon, tablet) — działa od razu, bez instalacji. Na telefonie możesz dodatkowo dodać go do ekranu głównego (menu przeglądarki → „Zainstaluj aplikację" / „Dodaj do ekranu początkowego"), żeby otwierał się jak zwykła aplikacja, w pełnym ekranie.

Zakres merytoryczny: **Dział I — Organizacja i chemizm życia** oraz **Dział II — Różnorodność życia** (klasyfikacja organizmów, wirusy, bakterie, rośliny, grzyby, zwierzęta bezkręgowe i kręgowe), zgodnie z podstawą programową biologii dla szkoły podstawowej.

## Najważniejsze zasady projektu

- **Zero AI / zero API.** Aplikacja nie łączy się z żadnym zewnętrznym serwisem, nie wymaga kluczy API i nie generuje treści przez model językowy. Wszystkie lekcje, pytania, fiszki, wyjaśnienia i diagramy są przygotowane wcześniej i przechowywane lokalnie w kodzie źródłowym.
- **Zero instalacji.** Aplikacja to czysty HTML/CSS/JavaScript — **bez** Node.js, npm, bundlera, frameworka czy jakiegokolwiek kroku budowania.
- **Postęp lokalnie w przeglądarce.** Ukończone lekcje, wyniki quizów, fiszki, XP itd. zapisywane są w `localStorage` przeglądarki, na urządzeniu, z którego korzystasz — bez konta, bez chmury. Każda przeglądarka/urządzenie ma swój osobny postęp.

## Jak uruchomić aplikację

### Sposób 1 — strona internetowa (zalecane)

Wejdź na **https://vespidace201.github.io/biologia-konkurs/** — to wszystko, działa na każdym urządzeniu z przeglądarką.

### Sposób 2 — lokalnie, bez internetu

Jeśli wolisz mieć aplikację całkowicie offline (bez żadnego dostępu do sieci), można ją też uruchomić lokalnie z tego samego kodu:

Otwórz plik [`index.html`](index.html) bezpośrednio w przeglądarce (Chrome, Edge lub Firefox) — dwuklik w Eksploratorze Windows, albo przeciągnij plik na okno przeglądarki. Jeśli przeglądarka blokuje skrypty przy otwieraniu pliku z dysku, uruchom dołączony, w pełni lokalny serwer (nie wymaga Node.js ani Pythona — korzysta wyłącznie z wbudowanego w Windows PowerShell):

```powershell
powershell -ExecutionPolicy Bypass -File uruchom-serwer.ps1
```

Serwer wystartuje pod adresem `http://localhost:8877` i automatycznie otworzy przeglądarkę. Działa całkowicie lokalnie — nie wymaga internetu. Aby zatrzymać serwer, zamknij okno PowerShell lub wciśnij `Ctrl+C`.

## Instalacja jako aplikacja na telefonie (PWA)

Aplikację można zainstalować na telefonie jako samodzielną „appkę" — z ikoną na ekranie głównym i uruchamianiem w pełnym ekranie, bez paska adresu przeglądarki. To tzw. **PWA (Progressive Web App)** — nie ma jej w Google Play/App Store, ale instaluje się i działa jak zwykła aplikacja.

**Najprościej:** na telefonie wejdź na **https://vespidace201.github.io/biologia-konkurs/**, a potem:

- **Android (Chrome)**: dotknij menu (⋮) → **„Zainstaluj aplikację"** albo **„Dodaj do ekranu głównego"**.
- **iPhone (Safari)**: dotknij ikonę udostępniania (□↑) → **„Dodaj do ekranu początkowego"**.

Ponieważ to prawdziwa strona internetowa, działa to z dowolnego miejsca (nie tylko w domowym Wi-Fi) i nie wymaga włączonego komputera. Aplikacja zawiera też mechanizm (service worker) buforujący treść po pierwszym wczytaniu, dzięki czemu nauka, quizy i zapisywanie postępu działają dalej nawet bez internetu — internet jest potrzebny tylko za pierwszym razem, żeby ją wczytać.

### Alternatywa: instalacja z wersji lokalnej (bez internetu w ogóle)

Jeśli wolisz korzystać z lokalnie uruchomionej wersji (Sposób 2 wyżej) zamiast strony internetowej, telefon i komputer muszą być w tej samej sieci — albo w tym samym Wi-Fi, albo połączone przez prywatny VPN (np. [Tailscale](https://tailscale.com)), jeśli chcesz mieć do niej dostęp spoza domu. W takim wypadku instalujesz PWA z adresu, pod którym działa lokalny serwer (np. `http://192.168.x.x:8877/` albo adres Tailscale), a nie z adresu powyżej.

## "Budowanie wersji produkcyjnej"

Ponieważ aplikacja nie ma kroku kompilacji/bundlowania, **cały folder projektu JEST już gotową wersją produkcyjną**. Aby przekazać aplikację uczniowi:

1. Skopiuj cały folder `biologia-konkurs` (np. na pendrive, dysk sieciowy albo do chmury plikowej).
2. Odbiorca otwiera `index.html` — to wszystko. Żadnej instalacji, kompilacji ani dostępu do internetu.

Folder można też opcjonalnie spakować do `.zip` przed przekazaniem — po rozpakowaniu działa tak samo.

## Postęp i dane ucznia

Postęp (ukończone lekcje, wyniki quizów i egzaminów, stan fiszek, punkty XP, odznaki) jest zapisywany w `localStorage` przeglądarki, osobno dla każdej przeglądarki/profilu użytkownika na danym komputerze. Nie ma kont ani synchronizacji — to celowe, zgodne z zasadą działania w pełni lokalnego. Wyczyszczenie danych przeglądarki (historii/danych stron) usunie też postęp w aplikacji.

## Dokumentacja

- [`docs/ARCHITEKTURA.md`](docs/ARCHITEKTURA.md) — architektura aplikacji, warstwy, przepływ danych
- [`docs/DODAWANIE_TRESCI.md`](docs/DODAWANIE_TRESCI.md) — jak dodać nowe lekcje, pytania, fiszki i grafiki/diagramy
- [`docs/TESTOWANIE.md`](docs/TESTOWANIE.md) — zakres wykonanych testów

## Zakres treści (stan obecny)

- **37 pełnych lekcji** (wszystkie tematy Działu I i Działu II z podstawy programowej) z pojęciami, sekcjami „Uważaj na…”/„Zapamiętaj różnicę” i pytaniami kontrolnymi.
- **586 pytań** obejmujących 10 typów zadań i wszystkie 4 poziomy trudności.
- **391 fiszek** z lokalnym systemem powtórek.
- **61 ręcznie rysowanych diagramów/schematów SVG** (budowa komórek, tkanek, organizmów, cykle rozwojowe, drzewa klasyfikacyjne).
- **9 scenariuszy doświadczeń biologicznych**, **17 ćwiczeń analizy danych** (wykresy/tabele/diagramy) i **20 ćwiczeń „budowa → funkcja”**.
- **6 gotowych egzaminów**: 5 zestawów próbnych o różnym poziomie trudności i zakresie oraz pełna symulacja I etapu konkursu (40 punktów / 60 minut).
- **17 zdefiniowanych odznak** w systemie gamifikacji.

## Funkcje aplikacji

- **Nauka z lekcji** — pełny materiał teoretyczny podzielony na działy/tematy, z pojęciami, sekcjami „Uważaj na…” i „Zapamiętaj różnicę”, diagramami i pytaniami kontrolnymi.
- **Fiszki** z lokalnym systemem powtórek (uproszczony algorytm typu spaced repetition).
- **Quiz** z konfigurowalnym zakresem (dział/temat/poziom trudności), obsługujący 10 typów pytań: jednokrotny wybór, wielokrotny wybór, prawda/fałsz, dopasowywanie, uzupełnianie luk, ustalanie kolejności, rozpoznawanie na ilustracji/diagramie, analiza tabeli, analiza wykresu.
- **Moduł doświadczeń biologicznych** — trening formułowania problemu badawczego, hipotezy, doboru prób kontrolnej/badawczej, zmiennych, przewidywania i analizy wyników oraz wykrywania błędów metodologicznych.
- **Moduł analizy danych** — trening czytania wykresów, tabel, diagramów i danych liczbowych.
- **Moduł „Budowa → funkcja”** — trening rozumowania: cecha budowy → jej funkcja → korzyść dla organizmu.
- **Egzaminy próbne** oraz **pełna symulacja konkursu** (40 punktów / 60 minut) z licznikiem czasu, nawigacją między pytaniami, oznaczaniem pytań flagą oraz szczegółową analizą wyniku po zakończeniu.
- **System powtórek błędów** — nietrafione pytania trafiają do kolejki powtórek.
- **Statystyki i postępy** — postęp ogólny i per dział, skuteczność, słabe/mocne tematy, czas nauki, historia wyników.
- **Gamifikacja** — punkty XP, poziomy, odznaki, seria dni nauki, cele dzienne/tygodniowe.
- **System rekomendacji oparty na regułach** (bez AI) — podpowiada, co powtórzyć na podstawie wyników.
- **Jasny/ciemny motyw** (podąża też za ustawieniem systemowym).
- **Instalacja jako aplikacja na telefonie (PWA)** — ikona na ekranie głównym, pełny ekran, działanie offline po pierwszym wczytaniu (zobacz sekcję „Instalacja jako aplikacja na telefonie" wyżej).

## Wymagania

Dowolna nowoczesna przeglądarka (Chrome, Edge, Firefox). Brak wymagań co do systemu operacyjnego, Node.js, Pythona czy internetu.
