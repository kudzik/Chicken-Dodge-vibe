# Backup i kontrola wersji


## Polityka tworzenia kopii zapasowych i odzyskiwania danych

### 1. Zakres danych podlegających backupowi

- Dane użytkowników i dane aplikacji (np. baza Firestore, konfiguracje, ustawienia).  
- Pliki konfiguracyjne i środowiskowe (np. środowiska produkcyjne i staging).  
- Repozytorium kodu źródłowego (GitHub/GitLab).  
- Systemy analityczne i logi (np. Firebase Analytics, Crashlytics).

***

### 2. Częstotliwość i harmonogram backupów

- Dane aplikacji (baza/serwisy): backup codzienny pełny, z możliwością przywrócenia do ostatnich 7 dni.  
- Backup inkrementalny co 4-6 godzin (jeśli możliwe, zależnie od implementacji hostingu).  
- Repozytorium kodu: wersjonowanie git jako podstawowa forma backupu, synchronizacja z centralnym serwerem (GitHub/GitLab) w czasie rzeczywistym.  
- Konfiguracje i pliki środowiskowe: kopiowane przy każdej ważnej zmianie (np. deployment).  
- Logi i analityka archiwizowane zgodnie z polityką dostawcy (np. Firebase).

***

### 3. Metody i technologie backupu

- Automatyczne snapshoty/firestore backupy dla baz NoSQL (np. Firebase Backup/Export).  
- Użycie chmury (np. Google Cloud Storage, AWS S3) do przechowywania kopii zapasowych z szyfrowaniem.  
- Backup konfiguracji w repozytorium oraz osobno (np. secrets manager).  
- Szyfrowanie danych w backupach podczas przesyłu i w spoczynku.  
- Monitorowanie powodzenia backupów i powiadomienia o błędach.

***

### 4. Procedura odzyskiwania danych (Disaster Recovery)

- 1. Ocena zakresu awarii i identyfikacja najbardziej krytycznych danych do odzyskania.  
- 2. Przywrócenie podstawowej infrastruktury i konfiguracji (w tym repozytorium kodu i środowiska hostingowe).  
- 3. Odtworzenie danych aplikacji z najnowszej dostępnej kopii zapasowej (pełna i/lub inkrementalna).  
- 4. Testy działania aplikacji i walidacja spójności danych.  
- 5. Komunikacja z zespołem, a w razie potrzeby też z użytkownikami o zaistniałej sytuacji i statusie przywracania.  
- 6. Udoskonalenie procedury po zakończeniu awarii (lessons learned).

***

### 5. Aspekty bezpieczeństwa danych

- Przechowywanie backupów w zabezpieczonych lokalizacjach z kontrolowanym dostępem.  
- Wykorzystanie silnych mechanizmów szyfrowania (np. AES-256) i bezpiecznego zarządzania kluczami (KMS).  
- Ograniczony dostęp do backupów tylko dla uprawnionych osób z zastosowaniem zasad najmniejszych uprawnień (principle of least privilege).  
- Regularne audyty dostępu i bezpieczeństwa backupów.  
- Zapewnienie zgodności z RODO/GDPR odnośnie przetwarzania i przechowywania danych osobowych.

***

### 6. Zarządzanie repozytorium kodu i systemem kontroli wersji

- Wymuszenie używania systemu kontroli wersji (git) dla całego kodu źródłowego i dokumentacji technicznej.  
- Regularne pushowanie zmian do centralnego repozytorium z zabezpieczeniem (MFA, uprawnienia).  
- Backup repozytorium poprzez hosting (GitHub, GitLab) oraz dodatkowe mirrorowanie w chmurze lub lokalnie.  
- Stosowanie branch protection rules, review procesu i automatycznego testowania przed scaleniem.  
- Archiwizacja tagów i releasów jako punktów przywracania.

***

### 7. Rekomendacje dodatkowe

- Dokumentacja procedur backupu i DR dostępna w centralnej wiki projektu.  
- Regularne testy odzyskiwania danych (rozwijanie scenariuszy DR) co najmniej raz na kwartał.  
- Szkolenia dla zespołu na temat procedur bezpieczeństwa i odzyskiwania.  
- Automatyczne alerty o stanie backupów i ewentualnych błędach w procesie.

***

