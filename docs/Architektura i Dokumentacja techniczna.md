# Dokumentacja techniczna gry "Chicken Run"
***

## Architektura aplikacji

### Warstwy wg Clean Architecture z MVVM na froncie

- **Warstwa domeny (Domain Layer)**  
  - Encje: reprezentacja podstawowych obiektów gry (gracz, kurczaki, power-upy, punkty).  
  - Use Cases / Interactors: logika biznesowa rozgrywki (np. obliczanie punktów, mnożników, zarządzanie życiami).  
  - Model niezależny od frameworków.

- **Warstwa aplikacji (Application Layer)**  
  - Serwisy wsparcia (np. zarządzanie leaderboardem, integracja analityki, system nagród).  
  - Logika koordynująca przypadki użycia.

- **Warstwa prezentacji (Presentation Layer)**  
  - Wzorzec MVVM:  
    - **Model**: dane i stan UI.  
    - **ViewModel**: logika reagująca na zdarzenia użytkownika, przygotowująca dane do wyświetlenia oraz zarządzająca stanem.  
    - **View**: warstwa interfejsu (HTML5/Canvas w Phaser 3), czysta i dumb, reagująca na ViewModel.  
  - Zapewnienie responsywnego UI i obsługi zdarzeń klawiatura/dotyk.

- **Warstwa infrastruktury (Infrastructure Layer)**  
  - Integracje z zewnętrznymi systemami (Firebase, GameAnalytics, usługi reklamowe).  
  - Mechanizmy zapisu/stanu (np. localStorage, backend leaderboard).

### Modularność i rozszerzalność

- Moduły funkcjonalne (np. moduł sterowania, moduł logiki kurczaków, moduł UI, moduł reklam) jako samodzielne komponenty z jasno zdefiniowanymi interfejsami.  
- Korzystanie z Dependency Injection do separacji zależności (np. wstrzykiwanie serwisów analitycznych albo UI).  
- Możliwość łatwej wymiany lub rozbudowy modułów bez wpływu na resztę aplikacji.

***

## Plan CI/CD

- **Repozytorium:** GitHub z główną gałęzią `main` i rozwojową `develop`.  
- **Pipeline CI:** (np. GitHub Actions, GitLab CI, CircleCI)  
  - Po commitcie na `develop`:  
    - Budowanie aplikacji (Phaser 3 / Unity WebGL).  
    - Uruchamianie testów jednostkowych.  
    - Uruchamianie testów integracyjnych (np. Cypress, Playwright na headless browserze).  
    - Statyczna analiza kodu (ESLint, Prettier dla JS).  
  - Po zatwierdzeniu PR do `main`:  
    - Budowanie produkcyjne.  
    - Deployment na staging (Netlify, Vercel).  
    - Dodatkowe testy wydajności i dymne (smoke tests).  
- **Pipeline CD:**  
  - Po akceptacji na staging, automatyczny lub manualny release do produkcji (Netlify / Vercel).  
  - Deployment musi być atomiczny i rollbackowalny.

***

## Strategia automatyzacji testów

- **Testy jednostkowe:**  
  - Logika rozgrywki, zarządzania punktami, mnożnikami, życia itp.  
  - Framework: Jest, Mocha lub Jasmine.  
- **Testy integracyjne:**  
  - Interakcja UI i warstwy logiki (komunikacja ViewModel z UI).  
  - Cypress lub Playwright do emulacji zachowań użytkownika (klikanie, dotyk).  
- **Testy end-to-end:**  
  - Scenariusze rozgrywki, reklam, leaderboarda.  
  - Automatyczne testy na różnych przeglądarkach i urządzeniach.  
- **Testy wydajności:**  
  - Monitorowanie FPS i responsywności na urządzeniach mobilnych.  
  - Google Lighthouse, WebPageTest.  
- **Testy regresji i statyczna analiza:**  
  - ESLint, Prettier oraz narzędzia do analizy bezpieczeństwa i błędów (np. Snyk).

***

## Narzędzia do wdrażania i monitoringu

- **Hosting i deployment:**  
  - Netlify lub Vercel – automatyczny CI/CD, hosting frontendu, łatwa integracja z repozytorium.  
- **Monitorowanie błędów i wydajności:**  
  - Sentry – monitorowanie błędów JavaScript.  
  - Firebase Performance Monitoring – wydajność i stabilność na device’ach użytkowników.  
- **Analityka rozgrywki:**  
  - Firebase Analytics + GameAnalytics – śledzenie KPI, zdarzeń, retention.  
- **Monitoring reklam:**  
  - Narzędzia dostawcy reklam rewardowanych z dashboardem.  
- **Logowanie i alertowanie:**  
  - Integracja Sentry z alertami na Slack lub e-mail.  
- **Środowiska testowe:**  
  - Staging i produkcja z oddzielnym backendem i konfigiem.

***