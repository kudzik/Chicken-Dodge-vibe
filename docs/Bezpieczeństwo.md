# Bezpieczeństwo aplikacji webowej z grą 2D/3D

***

## 1. Zgodność z RODO/GDPR

- Implementacja jasnych polityk prywatności i zarządzania zgodą użytkownika.
- Szyfrowanie danych osobowych i lokalizacyjnych w tranzycie i w spoczynku.
- Minimalizacja zbieranych danych oraz ich anonimizacja tam gdzie możliwe.
- Regularne audyty i szkolenia zespołu dotyczące ochrony danych.
- Mechanizmy pozwalające użytkownikowi wycofać zgodę i zarządzać swoimi danymi.

***

## 2. Stack technologiczny

| Element           | Technologia/Opis                            |
| ----------------- | ------------------------------------------- |
| Frontend          | Phaser 3 (HTML5/Canvas) lub Unity WebGL     |
| Backend           | Serverless (Firebase Functions lub Node.js) |
| Baza danych       | Firebase Firestore lub inna NoSQL           |
| Hosting           | Netlify lub Vercel                          |
| CI/CD             | GitHub Actions / GitLab CI / CircleCI       |
| System operacyjny | Linux (serwery CI/CD i hosting)             |

***

## 3. Ryzyka związane z dostępem zdalnym przez RDP

- **Kradzież poświadczeń:** podatność na ataki brute-force, phishing, keyloggery.
- **Brak widoczności sesji:** możliwość ukrytych działań atakującego bez monitoringu.
- **Ruch lateralny w sieci:** po udanym ataku możliwe rozprzestrzenianie się zagrożenia po sieci wewnętrznej.
- **Nieautoryzowany dostęp do zasobów:** wynikający z błędnej konfiguracji, braku segmentacji sieci.

***

## 4. Środki zaradcze i narzędzia do ochrony sesji RDP

- Monitoring i kontrola sesji za pomocą:  
  - Fudo PAM, Devolutions, RDPGuard, osquery, Elastic SIEM.
- Wdrożenie wieloskładnikowego uwierzytelniania (MFA) i VPN.
- Segmentacja sieci minimalizująca ruch lateralny.
- Nagrywanie sesji RDP oraz ustawienie limitów czasowych na sesje.
- Alerty behawioralne wykrywające nietypowe działania.

***

## 5. Lista testów bezpieczeństwa

- Analiza konfiguracji RDP pod kątem słabych punktów.
- Testy brute-force na konta i poświadczenia.
- Analiza i korelacja logów sesji użytkowników.
- Wykrywanie przejęcia lub podmiany sesji RDP.
- Sprawdzenie zgodności konfiguracji i działań z politykami bezpieczeństwa.

***

## 6. Narzędzia open-source i komercyjne

- **Fudo PAM** – zaawansowane zarządzanie dostępem uprzywilejowanym.  
- **Devolutions** – PAM i zarządzanie poświadczeniami.  
- **RDPGuard** – ochrona przed atakami brute-force na RDP.  
- **osquery** – monitoring i zapytania do endpointów.  
- **Elastic SIEM** – zbieranie i analiza logów, korelacja zdarzeń.

***

## 7. Polityki dostępu uprzywilejowanego (PAM)

- Wdrożenie PAM z rotacją poświadczeń i ścisłą kontrolą dostępu.
- Regularna zmiana haseł i kluczy dostępowych.
- Nagrywanie wszystkich sesji RDP z możliwością przeglądu i audytu.
- System alertów behawioralnych wykrywający anomalie.

***

## 8. Podsumowanie audytu

| Obszar                       | Ryzyko                        | Narzędzie                       | Test                            | Status       |
| ---------------------------- | ----------------------------- | ------------------------------- | ------------------------------- | ------------ |
| RDP - kradzież poświadczeń   | Włamanie i kompromitacja kont | RDPGuard, MFA                   | Test brute-force, analiza logów | Do wykonania |
| RDP - brak widoczności sesji | Ukryte działania atakującego  | Fudo PAM, nagrywanie sesji      | Analiza sesji i alerty          | Do wykonania |
| RDP - ruch lateralny         | Rozprzestrzenianie ataku      | Segmentacja sieci, Elastic SIEM | Monitorowanie ruchu sieciowego  | Do wykonania |
| Zgodność RODO/GDPR           | Kary prawne, utrata reputacji | Mechanizmy zgody i anonimizacja | Audyt polityk prywatności       | Do wykonania |

***

## Plan działania krok po kroku

1. Analiza środowiska IT i dokładna inwentaryzacja zasobów.
2. Ocena zgodności aplikacji i procesów z RODO oraz wdrożenie mechanizmów zarządzania zgodą.
3. Przeprowadzenie audytu konfiguracji RDP, w tym wdrożenie wieloskładnikowego uwierzytelniania (MFA).
4. Implementacja narzędzi do monitorowania i nagrywania sesji RDP.
5. Realizacja testów penetracyjnych i symulacji ataków brute-force.
6. Analiza logów i wdrożenie alertów behawioralnych.
7. Szkolenia zespołu dotyczące bezpieczeństwa i ochrony danych.
8. Wdrażanie regularnych przeglądów i aktualizacji polityk bezpieczeństwa.

***