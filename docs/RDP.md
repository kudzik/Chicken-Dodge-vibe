# Product Requirements Document (PRD) – *Chicken Dodge* (roboczy tytuł)

## 1. Cel produktu

* **Rodzaj gry:** casual, hyper-casual arcade.
* **Cel:** „kill time” + viral/social (łatwe do podzielenia się wynikiem).
* **Czas sesji:** 1–2 min.
* **Model biznesowy:** free-to-play z reklamami.

---

## 2. Rdzeń rozgrywki

* **Sterowanie:** klawisze ← → (PC), dotyk (mobile).
* **Zasady:**

  * Gracz unika spadających kurczaków.
  * Za każdego unikniętego kurczaka otrzymuje punkty.
  * Za serię uników naliczany jest mnożnik.
  * Trafienie 1 kurczakiem = utrata 1 życia (3 życia na start).
* **Eskalacja trudności:**

  * Prędkość spadania i częstotliwość rosną z czasem.
* **Rodzaje kurczaków:**

  * Kurczak szybki (przyspieszenie).
  * Kurczak chaotyczny (zmiana kierunku w locie).
  * Kurczak mutant (zmienia rozmiar w trakcie).
* **Tryb gry:** endless – przeżyj jak najdłużej.

---

## 3. Progresja i meta

* Odblokowywane **skórki postaci** i **power-upy**.
* System **daily rewards** (np. skin, power-up boost, waluta).
* **Leaderboard** – globalny i/lub tygodniowy, dla virality i rywalizacji.
* **Krótka fabuła** – humorystyczna i nonsensowna (np. „Dlaczego kurczaki spadają?”).

---

## 4. UX/UI i feedback

* HUD: punkty, życie, mnożnik.
* Animacje/SFX/VFX:

  * Combo (iskry, błysk).
  * Trafienie (smieszny „squash\&stretch” + dźwięk).
  * Power-up (efekty świetlne, fanfary).
* Feedback gracza:

  * **Sukces:** dynamiczne combo teksty („Great!”, „Epic!”).
  * **Porażka:** humorystyczne animacje kurczaków (np. przygniatanie).

---

## 5. Styl

* Grafika: kreskówkowe 2D, urocze i śmieszne kurczaki.
* Muzyka: dynamiczna, tempo rośnie wraz z trudnością.
* Art style: unikalny, kolorowy, lekko absurdalny.

---

## 6. Unikalne cechy

* Mechanika z twistem – różne zachowania kurczaków.
* Humorystyczna mini-fabuła.
* Viral/social design (łatwe dzielenie się wynikami).

---

## 7. Monetizacja

* **Reklamy rewarded video** – za dodatkowe życie / retry.
* **Interstitial ads** – co kilka gier (nie częściej niż co 2–3 min).
* **IAP:**

  * Skórki (postacie i kurczaki).
  * Boosty/power-upy.
* Brak paywalli – progresja kosmetyczna i opcjonalne ułatwienia.

---

## 8. Segmentacja użytkowników

* **Target:** nastolatki (13–19) + casual mobile players (18–35).
* **Use case:** szybka rozrywka w przerwie, natychmiastowa satysfakcja.
* **Key potrzeby:**

  * prosta obsługa,
  * szybki reward loop,
  * zabawna atmosfera.

---

## 9. Analiza konkurencji (do wykonania)

* Najpopularniejsze, które odniosły sukces:

  * *Flappy Bird* (viral, prostota).
  * *Crossy Road* (humor, skórki, ads+IAP model).
  * *Subway Surfers* (endless runner + monetizacja).
  * *Chicken Invaders* (humor i kurczaki jako motyw).
* Porównanie: mechanika, UX, retention, monetyzacja.

---

## 10. Technologia

* **Frontend/game engine:** Phaser 3 (HTML5/Canvas) – lekki, wspiera mobile i desktop.
* Alternatywa: Unity WebGL, jeśli chcesz łatwiejszego portu na iOS/Android.
* **Hosting:** Netlify/Vercel (łatwe CI/CD).
* **Obsługa mobile:** responsive UI, sterowanie dotykowe.

---

## 11. QA, testy i dostępność

* **Testy jednostkowe:** logika gry (np. zliczanie punktów, żyć).
* **Testy integracyjne:** rozgrywka w przeglądarce (np. Cypress/Playwright).
* **Testy wydajności:** FPS stability (60fps target).
* **Mobile QA:** Android Chrome, iOS Safari (min. 2 ostatnie wersje).
* **Accessibility:** wysoki kontrast, proste sterowanie, brak migających efektów.

---

## 12. Analityka i KPI

* **KPI:**

  * DAU/WAU.
  * Średnia długość sesji (target 1,5 min).
  * Retention D1, D7.
  * Średnia liczba reklam obejrzanych/sesję.
* **Zdarzenia do śledzenia:**

  * Start gry.
  * Zdobycie X punktów.
  * Utrata życia.
  * Game over.
  * Obejrzana reklama.
  * Retry / Exit.
* **Analityka:** Firebase + GameAnalytics.

---

## 13. Marketing i launch plan

* **Soft launch:** 1–2 kraje (np. Polska, Kanada) do testów retencji i monetyzacji.
* **Global launch:** po dopracowaniu UX i monetizacji.
* **Kanały promocji:**

  * TikTok / YouTube Shorts (viral, memy z kurczakami).
  * Social share z gry (screen z wynikiem).
  * Reddit / Discord communities casual gaming.
* **Retention hooks:** daily rewards, leaderboard reset co tydzień.

---

## 14. Roadmapa / MVP

* **MVP:**

  * Core gameplay (unikaj kurczaków).
  * 3 typy kurczaków.
  * Punkty, życie, mnożnik.
  * Skórki (min. 3).
  * Reklamy rewarded video.
  * Leaderboard globalny.
* **Po MVP:**

  * Daily rewards.
  * Rozszerzenie power-upów.
  * Fabularne cut-scenki.
  * Eventy czasowe.

---

## 15. Ryzyka

* Powtarzalność rozgrywki → wymaga rotacji contentu (skórki, eventy).
* Zbyt agresywne reklamy → ryzyko utraty graczy.
* Target 13+ → konieczna zgodność z COPPA/RODO.

---

## 16. Zespół i role

samodzielny developer (Ty) – programowanie, design, marketing.

## Narzędzia programistyczne

Cursor AI (asystent kodu), GitHub (repozytorium), 