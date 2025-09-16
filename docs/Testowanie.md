# Testowanie i iteracyjne doskonalenie aplikacji webowej

## Plan iteracyjnego testowania aplikacji

### 1. Testy A/B

- **Cel:** Porównanie dwóch lub więcej wariantów funkcjonalności, UI lub monetizacji pod kątem efektywności i satysfakcji użytkownika.  
- **Przykłady testów A/B:**  
  - Różne wersje interfejsu HUD (np. układ punktów i życia).  
  - Różne częstotliwości i formaty reklam rewarded.  
  - Warianty systemu nagród (np. daily rewards różnej wartości).  
- **Metody:**  
  - Losowe dzielenie użytkowników na grupy testowe.  
  - Monitorowanie KPI (retencja D1, D7, średni czas sesji, liczba obejrzanych reklam).  
- **Narzędzia:** Firebase A/B Testing, Optimizely, Google Optimize.

***

### 2. Beta testy

- **Cel:** Testowanie aplikacji w realnych warunkach przez wybraną grupę użytkowników przed pełnym launch’em.  
- **Zakres:**  
  - Testy funkcjonalne i UX na różnych urządzeniach i przeglądarkach.  
  - Testowanie skalowalności i stabilności serwisów backendowych.  
  - Zbieranie feedbacku dotyczącego grywalności, błędów, balansu trudności.  
- **Metody:**  
  - Rekrutacja beta testerów (np. poprzez social media, Discord).  
  - Udostępnienie aplikacji w fazie „early access”.  
  - Regularne zbieranie opinii (formularze, ankiety).  
- **Narzędzia:** TestFlight (iOS), Google Play Console Beta, Discord, Google Forms.

***

### 3. Zbieranie i analiza feedbacku użytkowników

- **Metody zbierania:**  
  - Wbudowane moduły feedbacku w aplikacji (formularze, szybkie ratingi po sesji).  
  - Monitorowanie opinii i ocen w sklepach App Store i Google Play.  
  - Analiza wpisów i dyskusji na kanałach social media i forach.  
  - Narzędzia do analizy zachowań użytkowników (heatmaps, click tracking).  
- **Analiza:**  
  - Klasyfikacja i priorytetyzacja zgłoszonych problemów i sugestii.  
  - Korelacja feedbacku z danymi analitycznymi (np. fluktuacje retention vs. zmiany w grze).  
- **Narzędzia:** Hotjar, Firebase Crashlytics, Mixpanel, Google Analytics.

***

### 4. Automatyzacja raportowania błędów

- **Integracja:**  
  - Wdrożenie automatycznego logowania błędów i crashów z poziomu aplikacji.  
  - Powiadamianie zespołu o krytycznych błędach w czasie rzeczywistym.  
- **Narzędzia:**  
  - Firebase Crashlytics — crash reporting i analiza stabilności.  
  - Sentry — wykrywanie błędów JS i monitorowanie problemów produkcyjnych.  
  - Slack/Email integracje do alertów.  

***

### 5. Monitorowanie jakości i satysfakcji użytkowników

- **Metryki do monitorowania:**  
  - Retention D1, D7, D30.  
  - Średnia długość sesji.  
  - Zaangażowanie w mechaniki (np. power-upy, skórki).  
  - Liczba obejrzanych reklam i konwersje IAP.  
  - Oceny i recenzje w sklepach.  
- **Narzędzia:**  
  - Firebase Analytics + GameAnalytics (grywalność).  
  - App Annie lub Sensor Tower (analiza rynku i recenzji).  

***

### 6. Inne testy warte rozważenia

- **Testy wydajnościowe (load testing)**  
  - Sprawdzanie zachowania backendu i serwisu leaderboard pod obciążeniem.  
  - Narzędzia: k6, Locust.  
- **Testy dostępności (accessibility testing)**  
  - Sprawdzanie kontrastów, obsługi klawiatury i czytników ekranu.  
  - Narzędzia: Axe, WAVE.  
- **Testy bezpieczeństwa (security testing)**  
  - Podstawowe oceny bezpieczeństwa aplikacji webowej, weryfikacja danych użytkownika.  
- **Testy regresyjne**  
  - Automatyczne uruchamianie testów jednostkowych i integracyjnych po każdej zmianie.

***

## Podsumowanie narzędzi

| Cel                           | Narzędzie                              |
| ----------------------------- | -------------------------------------- |
| Testy A/B                     | Firebase A/B Testing, Optimizely       |
| Beta testy                    | TestFlight, Google Play Beta, Discord  |
| Feedback i analiza zachowań   | Hotjar, Firebase Crashlytics, Mixpanel |
| Raportowanie błędów           | Firebase Crashlytics, Sentry           |
| Analityka jakości/satysfakcji | Firebase Analytics, GameAnalytics      |
| Testy wydajności              | k6, Locust                             |
| Testy dostępności             | Axe, WAVE                              |

***
