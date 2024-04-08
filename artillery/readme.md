
# English Version


# Successes and Errors:

- **63 requests** were successfully processed (`http.codes.200`). This indicates that only a small portion of all sent requests (900) were properly handled by the server.
- **13 requests** returned an “Unprocessable Entity” error (`http.codes.422`), implying these were valid requests that the server could not process for some reason.
- **824 requests** were rejected due to exceeding the rate limit (`http.codes.429`). This shows that the server quickly reaches its processing limits, rejecting the majority of requests.

# Performance:

- The request rate was on average **17 per second** (`http.request_rate`).
- Response time varied from **36 milliseconds to 400 milliseconds** with an average time of **51.1 milliseconds** (`http.response_time`). Most requests were processed relatively quickly, but there were also instances of significantly slower responses.

# Load:

- A total of **900 requests** were made during the test (`http.requests`).
- **450 virtual users** were created (`vusers.created`), each of whom completed their session without any user failures reported (`vusers.failed: 0`).

# User Session Length:

- The length of user sessions ranged from **91.4 seconds to 513.4 seconds** (`vusers.session_length`).
- The average session length was **123.4 seconds**, indicating the average time a virtual user spent performing specific actions during the test.

# Summary

The majority of requests were rejected due to exceeding the rate limit, suggesting that the server was unable to handle such a high load. Nonetheless, the response time for most of the processed requests was acceptable. This indicates a need for server configuration optimization or resource augmentation to better cope with high load and avoid rejecting such a large number of requests.

**Note:** Screenshots related to this interpretation can be found in the `screenshots` folder.



# Polish Version


# Sukcesy i Błędy:

- **63 zapytania** zakończyły się sukcesem (`http.codes.200`). Oznacza to, że tylko niewielka część ze wszystkich wysłanych zapytań (900) została prawidłowo obsłużona przez serwer.
- **13 zapytań** zwróciło błąd „Nieprzetwarzalna jednostka” (`http.codes.422`), co oznacza, że były to prawidłowe zapytania, ale serwer nie mógł ich przetworzyć z jakiegoś powodu.
- **824 zapytania** zostały odrzucone z powodu przekroczenia limitu zapytań (`http.codes.429`). Wskazuje to, że serwer bardzo szybko osiąga swoje limity przetwarzania, odrzucając większość zapytań.

# Wydajność:

- Tempo zapytań wynosiło średnio **17 na sekundę** (`http.request_rate`).
- Czas odpowiedzi wahał się od **36 milisekund do 400 milisekund** ze średnim czasem **51.1 milisekundy** (`http.response_time`). Większość zapytań była przetwarzana dość szybko, ale były również przypadki znacznie wolniejszych odpowiedzi.

# Obciążenie:

- Zostało wykonane **900 zapytań** w trakcie testu (`http.requests`).
- **450 wirtualnych użytkowników** zostało stworzonych (`vusers.created`), z których każdy z nich zakończył swoją sesję, nie odnotowano żadnych błędów ze strony użytkowników (`vusers.failed: 0`).

# Długość Sesji Użytkowników:

- Długość sesji użytkowników wahała się od **91.4 sekundy do 513.4 sekund** (`vusers.session_length`).
- Średnia długość sesji wynosiła **123.4 sekundy**, co może wskazywać na przeciętny czas, jaki wirtualny użytkownik spędzał na wykonaniu określonych działań w ramach testu.

# Podsumowanie

Większość zapytań została odrzucona z powodu przekroczenia limitu zapytań, co sugeruje, że serwer nie był w stanie obsłużyć tak wielkiego obciążenia. Mimo to, czas odpowiedzi dla większości obsłużonych zapytań był akceptowalny. Wskazuje to na potrzebę optymalizacji konfiguracji.

**Uwaga:** Zrzuty ekranu związane z tą interpretacją można znaleźć w folderze `screenshots`.

