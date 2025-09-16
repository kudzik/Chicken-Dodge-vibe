# Zasady pisania kodu dla AI – Najlepsze praktyki (dla Cursor AI i projektów webowych)

## Styl kodu

* Stosuj spójny styl formatowania – automatycznie (Prettier, ESLint, Black dla Pythona).
* Przestrzegaj konwencji społecznościowych (np. PEP8 w Pythonie, Airbnb ESLint w JS/TS).
* Nazwy zmiennych, funkcji i komponentów powinny być opisowe i zgodne z konwencjami:

  * `camelCase` – zmienne i funkcje
  * `PascalCase` – komponenty React, klasy
  * `SCREAMING_SNAKE_CASE` – stałe
* Unikaj nadmiernych skrótów i ogólnych nazw.

## Struktura kodu

* W React – trzymaj logikę, komponenty i style w osobnych folderach (`components/`, `hooks/`, `services/`, `styles/`).
* Dziel kod na małe, jednozadaniowe moduły i komponenty.
* Backend – trzymaj się podziału na `routes`, `controllers`, `services`, `models`.
* Oddzielaj konfigurację (`.env`, `config/`) od logiki aplikacji.

## Komentarze i dokumentacja

* Komentuj nietrywialne fragmenty, wyjaśniając *dlaczego*, a nie *co* kod robi.
* W Pythonie – docstringi, w JS/TS – JSDoc/TSDoc.
* README.md – zawsze dodaj instrukcję uruchomienia (`npm install && npm run dev`) oraz przykłady użycia API.
* W API – dokumentuj endpointy (np. OpenAPI/Swagger).

## Obsługa błędów

* W JS/TS używaj `try/catch` i obsługuj błędy globalnym middleware (Express/NestJS).
* Zawsze loguj krytyczne błędy (np. `winston`, `pino`).
* W React – obsługuj błędy komponentów ErrorBoundary.
* W Pythonie – nie zostawiaj pustych `except`.

## Wydajność i optymalizacja

* Frontend – używaj memoizacji (`React.memo`, `useMemo`, `useCallback`).
* Backend – stosuj cache (np. Redis) i paginację dla dużych danych.
* Optymalizuj dopiero po potwierdzeniu problemu (profilery: Lighthouse, Node Profiler).

## Testowalność

* Dodawaj testy jednostkowe (Jest, Vitest, Pytest).
* Dla UI – używaj `React Testing Library` + `Playwright/Cypress` do testów e2e.
* Każda funkcja biznesowa powinna być testowalna bez UI.
* W CI/CD (GitHub Actions, GitLab CI) – automatycznie uruchamiaj testy i linting przy każdym pushu.

## Bezpieczeństwo

* Nigdy nie commituj haseł, tokenów ani kluczy API (używaj `.env`, GitHub Secrets).
* Waliduj wszystkie dane wejściowe (`zod`, `Joi`, `pydantic`).
* Aktualizuj zależności i używaj narzędzi bezpieczeństwa (`npm audit`, `safety check`).
* Stosuj nagłówki bezpieczeństwa (CORS, Helmet w Express).

## Przykłady i konwencje

* Korzystaj ze wzorców typowych dla stosu:

  * React: hooks, custom hooks, atomic design
  * Node: MVC, service layer
  * Python: FastAPI/Flask – rozdzielenie routerów i usług
* Zamiast magicznych wartości stosuj stałe lub enumy.

## Git i historia zmian

* Commituj logiczne zmiany osobno (1 commit = 1 funkcja/feature/fix).
* Konwencja commitów: [Conventional Commits](https://www.conventionalcommits.org/)

  * `feat:` – nowa funkcja
  * `fix:` – poprawka błędu
  * `docs:` – dokumentacja
  * `chore:` – techniczne zmiany
* Każda zmiana powinna być zapisana w `History/Timeline.log` w formacie:

```
[YYYY-MM-DD HH:MM:SS] [Dodano|Zmieniono] plik <nazwa_pliku> - <krótki opis zmiany>
```

## Plik README.md

* Instrukcja instalacji i uruchomienia (`npm run dev`, `docker-compose up`, itp.).
* Opis API (jeśli istnieje).
* Przykłady użycia.
* Informacje o testach (`npm test`).

## TODO

* Jeśli istnieje `TODO.md` – aktualizuj zadania i odznaczaj wykonane.
* Dodawaj nowe, jeśli pojawiają się w trakcie pracy.

## Dodatkowe wskazówki

* Pisz kod tak, aby był zrozumiały dla ludzi i AI (czytelny, modularny, bez „hacków”).
* Usuwaj martwy kod zamiast go zakomentowywać.
* Oznaczaj fragmenty eksperymentalne jako `// EXPERIMENTAL`.
* Refaktoryzuj stopniowo, małymi krokami.
* Na końcu zmian – proponuj przykładowy commit zgodny z zasadami.

---
