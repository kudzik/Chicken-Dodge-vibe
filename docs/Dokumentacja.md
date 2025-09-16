# Dokumentacja projektu Chicken Dodge

## Plan tworzenia i aktualizacji dokumentacji

### 1. Rodzaje dokumentacji

- **Dokumentacja techniczna**  
  Opis architektury, wzorców projektowych, konfiguracji środowiska, instrukcji obsługi narzędzi developerskich i procesów.  
- **Dokumentacja API**  
  Szczegółowy opis endpointów, metod, formatów danych, przykładów zapytań i odpowiedzi, zasad autoryzacji.  
- **Instrukcja użytkownika**  
  Przewodnik po funkcjonalnościach aplikacji, FAQ, poradniki startowe i rozwiązywanie problemów.

***

### 2. Cykl życia dokumentacji

- Dokumentacja tworzona równolegle z rozwojem funkcjonalności (dokumentacja „live”).  
- Regularne przeglądy i aktualizacje co sprint lub co miesiąc.  
- Aktualizacje po wydaniu ważnych wersji lub aktualizacji aplikacji.  
- Feedback od zespołu i użytkowników (dokumentacja użytkownika).

***

### 3. Narzędzia i metody zarządzania wiedzą

- **Wiki zespołowe:**  
  - GitHub Wiki / GitLab Wiki – łatwa integracja z repozytoriami kodu, wersjonowanie zmian.  
  - Confluence – bardziej rozbudowane możliwości i integracja z JIRA.  
- **Wersjonowanie dokumentów:**  
  - Dokumentacja techniczna i API w repozytorium git (Markdown lub AsciiDoc).  
  - Każda zmiana dokumentacji co-reviewowana i zatwierdzana przez członka zespołu.  
- **Automatyzacja i publikacja API:**  
  - Swagger / OpenAPI do tworzenia i wersjonowania dokumentacji API wraz z możliwością jej interaktywnego testowania.  
- **Współpraca zespołowa:**  
  - Narzędzia typu Slack lub Microsoft Teams do szybkiej komunikacji i dyskusji o dokumentach.  
  - Code review integrujący także przegląd dokumentacji w PR.  
- **Przechowywanie i dostęp:**  
  - Centralny punkt dostępu – wszystkie dokumenty dostępne online (wiki lub portal).  
  - Tagowanie i indeksowanie dokumentów dla łatwego wyszukiwania.

***

### 4. Role i odpowiedzialności

- **Twórca funkcji:** dokumentuje zmiany techniczne i API podczas rozwoju.  
- **Technical Writer / Dev Lead:** przegląd, standaryzacja i korekta dokumentów.  
- **Product Owner:** aktualizacja instrukcji użytkownika zgodnie z roadmapą i feedbackiem.  
- **Wszyscy członkowie zespołu:** aktywny udział w aktualizacji i poprawianiu dokumentacji.

***

### 5. Praktyki i standardy

- **Jasny i spójny styl:** stosowanie wytycznych dotyczących pisania (np. Microsoft Style Guide).  
- **Uniwersalność:** używanie języka zrozumiałego zarówno dla developerów, testerów, jak i użytkowników biznesowych.  
- **Fragmentaryczność:** unikanie długich monolitów – dzielenie dokumentów na moduły i sekcje.  
- **Szablony:** stosowanie szablonów dla API, instrukcji krok po kroku, changelogów.  
- **Linkowanie:** powiązanie dokumentacji technicznej z przykładami kodu i issues.

***

### 6. Harmonogram aktualizacji

| Częstotliwość              | Działania                                                                    |
| -------------------------- | ---------------------------------------------------------------------------- |
| Codziennie / przy zmianach | Dokumentacja w repozytorium aktualizowana wraz z kodem (wersjonowanie Git).  |
| Co sprint (2-4 tygodnie)   | Przegląd i korekta dokumentacji, aktualizacja wiki i instrukcji użytkownika. |
| Po każdej większej wersji  | Kompletna aktualizacja changelogów i instrukcji użytkownika.                 |
| Co kwartał                 | Audyt kompletności i spójności dokumentacji, szkolenie zespołu.              |

***
