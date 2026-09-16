# Filter Todo List

Prosta aplikacja do zarządzania listą zadań stworzona w React z TypeScript oraz Vite. Umożliwia dodawanie, filtrowanie, oznaczanie jako wykonane i usuwanie zadań.

## Cel projektu

Aplikacja została przygotowana jako małe, czytelne narzędzie do organizacji codziennych obowiązków. Pozwala szybko zapisywać zadania, rozdzielać je na kategorie oraz kontrolować, które z nich są jeszcze w toku, a które zostały już wykonane.

## Główne funkcje

- dodawanie nowych zadań,
- wybór typu zadania: Work lub Personal,
- filtrowanie zadań po statusie:
  - Wszystkie,
  - W trakcie,
  - Ukończone,
- oznaczanie zadania jako wykonane lub niewykonane,
- usuwanie zadań z listy,
- przejrzysty interfejs z kolorowymi oznaczeniami kategorii.

## Stack technologiczny

- React 19
- TypeScript
- Vite
- react-icons
- CSS

## Wymagania

Aby uruchomić projekt lokalnie, potrzebujesz:

- Node.js w wersji 18 lub nowszej,
- menedżera pakietów npm.

## Uruchomienie projektu

1. Otwórz terminal w katalogu projektu.
2. Zainstaluj zależności:

```bash
npm install
```

3. Uruchom aplikację w trybie developerskim:

```bash
npm run dev
```

4. Po chwili w terminalu pojawi się adres lokalny, np.:

```bash
http://localhost:5173
```

5. Otwórz ten adres w przeglądarce, aby korzystać z aplikacji.

## Budowanie wersji produkcyjnej

Aby przygotować finalną wersję projektu:

```bash
npm run build
```

Wynik zostanie zapisany do katalogu `dist`.

Możesz też uruchomić podgląd zbudowanej wersji:

```bash
npm run preview
```

## Jak korzystać z aplikacji

### 1. Dodanie zadania

- wpisz treść zadania w pole tekstowe,
- wybierz kategorię: `Work` lub `Personal`,
- kliknij przycisk z ikoną plusa.

Zadanie pojawi się na liście od razu po dodaniu.

### 2. Oznaczenie zadania jako wykonane

- kliknij zieloną ikonę obok zadania,
- zadanie zostanie oznaczone jako ukończone,
- w widoku zadań ukończone są przekreślane i zmieniają kolor.

### 3. Filtrowanie listy

W sekcji `Filter by` możesz wybrać jeden z dostępnych filtrów:

- `All` — wszystkie zadania,
- `In Progress` — zadania jeszcze nieukończone,
- `Completed` — zadania wykonane.

### 4. Usuwanie zadania

- kliknij czerwoną ikonę z krzyżykiem obok zadania,
- zadanie zostanie usunięte z listy.

## Struktura projektu

```text
filter-todo-list/
├── public/
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

### Najważniejsze pliki

- `src/App.tsx` — logika aplikacji i renderowanie interfejsu,
- `src/App.css` — style widoku,
- `src/main.tsx` — punkt wejścia aplikacji,
- `package.json` — skrypty uruchomieniowe i zależności.

## Przykładowy flow pracy

```text
Wpisz zadanie -> wybierz typ -> dodaj -> obejrzyj listę -> oznacz wykonanie -> filtrowanie -> usuń, jeśli nie jest potrzebne
```

## Podsumowanie

To narzędzie jest świetnym przykładem prostego, ale praktycznego menedżera zadań w React. Jest lekkie, łatwe w obsłudze i dobrze nadaje się do nauki pracy z komponentami, stanem aplikacji oraz filtrowaniem danych.


