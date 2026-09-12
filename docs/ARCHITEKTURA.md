# Architektura aplikacji BioKonkurs

## Wybór technologii — dlaczego tak

Środowisko docelowe (komputer ucznia) nie może wymagać instalacji Node.js, Pythona ani żadnego innego runtime'u — priorytetem jest **prostota uruchomienia lokalnego** i **działanie offline**. Dlatego aplikacja jest napisana jako:

- **Czysty HTML/CSS/JavaScript**, bez TypeScriptu, bez JSX, bez bundlera (Webpack/Vite/itp.).
- **Skrypty klasyczne (`<script src="...">`), nie moduły ES.** Moduły ES (`type="module"`) ładowane z `file://` bywają blokowane przez przeglądarki (CORS na poziomie protokołu pliku). Klasyczne skrypty nie mają tego ograniczenia i działają identycznie z dysku i z serwera.
- **Globalny namespace `window.App`.** Każdy plik „dołącza” swój fragment funkcjonalności do `App.<obszar>.<nazwa>` zamiast używać `import`/`export`. Kolejność wczytywania skryptów w `index.html` odpowiada kolejności zależności.
- **`localStorage` jako baza danych** postępu ucznia — prosta, synchroniczna, w pełni lokalna, działa pod `file://` we wszystkich głównych przeglądarkach (w przeciwieństwie do `IndexedDB`, które bywa niedostępne pod `file://` w niektórych przeglądarkach).
- **Router oparty o hash (`#/...`)** — nie wymaga konfiguracji serwera (żadnych „rewrite rules”), działa identycznie z pliku i z serwera.

## Warstwy aplikacji

```
index.html                 ← punkt wejścia, lista <script> w kolejności zależności
assets/css/                ← zmienne motywu (jasny/ciemny), reset, komponenty CSS
src/
  core/                    ← rdzeń: namespace, narzędzia DOM (h/el), router, event emitter
  db/                      ← warstwa trwałości (localStorage) + repozytoria domenowe
  content/                 ← WARSTWA DANYCH: cała wiedza merytoryczna (patrz niżej)
  modules/                 ← WARSTWA LOGIKI: silniki biznesowe (patrz niżej)
  components/              ← WARSTWA UI: komponenty wielokrotnego użytku
  pages/                   ← WARSTWA UI: strony/widoki podpięte pod trasy routera
  app.js                   ← rejestracja tras i bootstrap aplikacji
```

Zasada rozdziału: **dane treściowe (`content/`) nie znają logiki biznesowej (`modules/`), a logika biznesowa nie zna UI (`components/`, `pages/`).** Strony (`pages/`) łączą wszystko w jedną całość. Dzięki temu nowe lekcje/pytania/fiszki można dodawać bez dotykania kodu aplikacji (patrz [`DODAWANIE_TRESCI.md`](DODAWANIE_TRESCI.md)).

### `src/core/` — rdzeń

- `namespace.js` — inicjalizuje `window.App` z podnamespace'ami.
- `utils.js` — funkcje pomocnicze: `h()`/`el()` (budowanie DOM bez frameworka), `shuffle`, `formatTime`, `formatDate`, `percent`, `debounce` itd.
- `events.js` — minimalny event emitter (`on`/`emit`) używany m.in. przez router i storage.
- `router.js` — router oparty na `location.hash`, obsługuje parametry (`/tematy/:id`) i query string (`?temat=...`).

### `src/db/` — trwałość danych (localStorage)

- `storage.js` — niskopoziomowy wrapper nad `localStorage` (get/set/update/export/import/clear), z prefiksem klucza i fallbackiem do pamięci procesu, gdyby `localStorage` był niedostępny.
- `progressRepo.js` — postęp lekcji i skuteczność pytań per temat.
- `srsRepo.js` — stan powtórek fiszek (uproszczony algorytm typu SM-2) oraz kolejka powtórki błędnie rozwiązanych pytań.
- `resultsRepo.js` — historia wyników quizów/egzaminów oraz log czasu nauki.
- `gamificationRepo.js` — XP, poziom, seria dni, odznaki, cele dzienne/tygodniowe.
- `settingsRepo.js` — ustawienia użytkownika (motyw).

Każde repozytorium eksponuje wyłącznie funkcje domenowe (np. `markLekcjaUkonczona(id)`), nigdy surowego dostępu do `localStorage` — dzięki temu format zapisu można zmienić w jednym miejscu.

### `src/content/` — warstwa danych merytorycznych

To serce projektu — patrz [`DODAWANIE_TRESCI.md`](DODAWANIE_TRESCI.md) po pełny opis struktury i sposobu rozszerzania.

- `types.js` — kontrakt danych (kształty obiektów Dzial/Temat/Lekcja/Pytanie/Fiszka) jako komentarze JSDoc + stałe (typy pytań, poziomy trudności).
- `registry.js` — globalny rejestr treści (`App.content.register.*`) — każdy plik z treścią „zgłasza się” do rejestru przy wczytaniu.
- `queries.js` — warstwa zapytań nad rejestrem (`App.content.queries.*`) — pobieranie działów/tematów/lekcji/pytań z filtrowaniem, używana przez strony.
- `diagramy/svgKit.js` — prymitywy do rysowania prostych, czytelnych diagramów SVG (bez zewnętrznych bibliotek, bez plików graficznych).
- `struktura/` — drzewo działów i tematów (jedyne miejsce definiujące hierarchię nauczania).
- `dzial1/`, `dzial2/` — właściwa treść, jeden folder na temat, każdy z plikami `lekcje.js`, `pytania.js`, `fiszki.js`, `diagramy.js`.
- `moduly/` — treść modułów ćwiczeniowych: doświadczenia biologiczne, analiza danych, budowa→funkcja.
- `egzaminy/` — gotowe zestawy egzaminacyjne (próbne i symulacja konkursu).

### `src/modules/` — silniki logiki biznesowej

- `scoringEngine.js` — sprawdzanie poprawności odpowiedzi dla każdego typu pytania (w tym częściowa punktacja dla dopasowywania/luk/kolejności).
- `examEngine.js` — sesja egzaminu/quizu: nawigacja między pytaniami, limit czasu z odliczaniem, oznaczanie flagą, wyliczanie wyniku końcowego. Używany zarówno przez quizy, jak i egzaminy próbne oraz symulację konkursu.
- `srsRepo.js` (w `db/`) dostarcza dane, a algorytm interwałów powtórek jest tam zaimplementowany bezpośrednio.
- `gamificationEngine.js` — reguły przyznawania XP i odznak po każdej akcji użytkownika (ukończona lekcja, quiz, fiszka, egzamin, doświadczenie, ćwiczenie analizy danych) + definicje wszystkich odznak.
- `recommendationEngine.js` — **klasyczny system rekomendacji oparty na regułach (bez AI)**: skuteczność tematu < 60% → poleć lekcję; 60–80% → poleć quiz; > 80% → poleć trudniejsze pytania; powtarzające się błędy → temat trafia do priorytetowych powtórek.
- `statsEngine.js` — agregacja danych z repozytoriów do postaci gotowej dla panelu statystyk.

### `src/components/` — komponenty UI wielokrotnego użytku

- `ui/` — podstawowe elementy interfejsu (przyciski, karty, odznaki, pasek postępu, zakładki, modal, toast, ikony SVG).
- `layout/header.js` — nagłówek z nawigacją i przełącznikiem motywu.
- `diagrams/chart.js` — generyczny renderer wykresów (słupkowy/liniowy/kołowy) na podstawie surowych danych liczbowych.
- `diagrams/dataTable.js` — generyczny renderer tabel danych.
- `quiz/questionRenderer.js` — **uniwersalny renderer wszystkich 10 typów pytań** (single/multiple/truefalse/matching/gapfill/ordering/image/diagram/table/chart) — jeden komponent używany w lekcjach, quizach, egzaminach, module doświadczeń i module analizy danych.

### `src/pages/` — strony aplikacji

Każda strona to funkcja `render(root, params, query)`, którą router wywołuje po dopasowaniu trasy. Strony korzystają z `content/queries.js` (dane), `modules/*` (logika) i `components/*` (UI), same nie zawierając logiki biznesowej ani treści.

## Przepływ danych — przykład (quiz)

1. Użytkownik wybiera parametry quizu na stronie `pages/quiz.js`.
2. Strona woła `content/queries.filtrujPytania(filter)`, żeby pobrać pulę pytań z rejestru treści.
3. Dla każdego pytania `components/quiz/questionRenderer.render()` buduje interfejs odpowiedniego typu.
4. Po odpowiedzi `modules/scoringEngine.checkAnswer()` ocenia poprawność.
5. Wynik trafia do `db/progressRepo` (skuteczność tematu), `db/srsRepo` (błędne pytania do powtórki) i `db/resultsRepo` (historia wyników).
6. `modules/gamificationEngine` nalicza XP i sprawdza, czy odblokować odznakę.
7. Po zakończeniu `pages/quiz.js` pokazuje podsumowanie, korzystając z tych samych danych.

Ten sam wzorzec (dane → logika → UI → zapis → gamifikacja) powtarza się we wszystkich trybach nauki.

## Warstwa PWA (instalacja na telefonie)

- `manifest.webmanifest` — nazwa, ikony, kolor motywu, `display: standalone` (uruchamianie bez paska przeglądarki).
- `assets/icons/*.png` — ikony aplikacji wygenerowane programowo (SVG → canvas → PNG), bez zewnętrznych narzędzi graficznych.
- `sw.js` — service worker o strategii cache-first; listę plików do zbuforowania wylicza automatycznie, parsując tagi `<script>`/`<link>` z `index.html`, więc nie wymaga ręcznej aktualizacji przy dodawaniu nowej treści.
- `uruchom-serwer.ps1` nasłuchuje na wszystkich interfejsach sieciowych (surowe gniazdo TCP obsługiwane w puli wątków, nie `System.Net.HttpListener`, żeby uniknąć wymogu uprawnień administratora) — dzięki temu telefon w tej samej sieci Wi-Fi może otworzyć aplikację pod adresem IP komputera i zainstalować ją jako PWA. Wymaga to jednorazowo dodania reguły w Zaporze Windows (patrz README) — to jedyny krok wymagający uprawnień administratora, celowo pozostawiony do wykonania przez użytkownika.

## Dlaczego nie IndexedDB / nie framework?

- **IndexedDB** bywa niedostępne lub kapryśne pod `file://` w niektórych przeglądarkach (unikalne, nietrwałe originy dla lokalnych plików) — `localStorage` jest tu znacznie bardziej przewidywalny, a ilość przechowywanych danych (postęp, wyniki, stan fiszek) jest rzędu pojedynczych megabajtów, czyli dobrze mieści się w limicie `localStorage`.
- **Framework (React/Vue itp.)** wymagałby bundlera (Webpack/Vite) do sensownej pracy z wieloma plikami — a to oznacza konieczność instalacji Node.js, czego środowisko docelowe nie gwarantuje. Prosty, ręcznie pisany DOM (`core/utils.h()`) w zupełności wystarcza do potrzeb tej aplikacji i eliminuje tę zależność.
