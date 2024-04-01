## Opis

Ten projekt zawiera testy automatyczne wykonane przy użyciu Cypressa dla procesu logowania na stronie GoIT. Testy pokrywają podstawowy scenariusz logowania i nawigację po menu.

## Scenariusz testowy

Blok testów numer 1 `Wpisz email user888` wykonuje następujące kroki:

1. Otwiera stronę logowania  GoIT.
2. Wpisuje adres email `user888@gmail.com` i hasło `1234567890`.
3. Klika przycisk logowania.
4. Otwiera menu nawigacyjne poprzez kliknięcie w odpowiedni przycisk.
5. Przewija stronę w dół, aby znaleźć przycisk wylogowania.
6. Klika przycisk wylogowania, co kończy sesję użytkownika i przekierowuje go z powrotem na stronę logowania.

Po wykonaniu powyższych kroków, użytkownik zostaje wylogowany z aplikacji. 

Blok testów numer 2 `Wpisz email testowyqa` wykonuje następujące kroki:

1. Otwiera stronę logowania  GoIT.
2. Wpisuje adres email `testowyqa@qa.team` i hasło `QA!automation-1`.
3. Klika przycisk logowania.
4. Otwiera menu nawigacyjne poprzez kliknięcie w odpowiedni przycisk.
5. Przewija stronę w dół, aby znaleźć przycisk wylogowania.
6. Klika przycisk wylogowania, co kończy sesję użytkownika i przekierowuje go z powrotem na stronę logowania.

Po wykonaniu powyższych kroków, użytkownik zostaje wylogowany z aplikacji. 

# Projekt Testowy API z Użyciem Cypress

## Opis Projektu
Projekt zawiera serię testów API dla publicznego interfejsu API dostępnego pod adresem `https://httpbin.org`. Testy obejmują różne metody HTTP, wysyłanie i weryfikację nagłówków oraz parametrów zapytania, a także sprawdzanie treści odpowiedzi i czasu trwania wniosków.