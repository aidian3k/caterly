Dla developu odpalajcie `compose-postgres` żeby zbudować bazę danych - nie ma ładowania volumes, za każdym razem jak odpalicie zrobi się migracja z podstawowymi danymi przez Flyway.

Ze względu na konfigurację API Gateway, endpointy dla klienta powinny zaczynać się od `/client/`, a dla firmy `/company/`.

Jeśli odpalicie backend full, to dostęp do poszczególnych serwisów jest tylko przez API Gateway na porcie 8080.

W buildzie jest SpotBugs do statycznej analizy kodu i Checkstyle do sprawdzania formatowania - akcje na Githubie sprawdzają oba, przed pushem polecam odpalić przez Gradle odpowiednie taski (zarówno dla main, jak i dla test).

Dajcie znać, jeśli rulesy Checkstyle'a są za restrykcyjne/kłócą się z dobrymi praktykami kodu w Spring.

Controllery obok maina zostawiam dla testów dla mnie, jakby musiał coś poprawić. Dopóki nie będzie konfliktu nazw w implementacji, to je zostawcie. Usunie się przy oddawaniu projektu klientowi.