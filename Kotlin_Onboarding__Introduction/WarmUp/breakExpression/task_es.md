Si estás trabajando con un bucle (ya sea `for` o `while`), puedes detenerlo antes con una expresión especial [`break`](https://kotlinlang.org/docs/returns.html):
```kotlin
while (x > 0) {
    // para hacer algo
    if (x == 10) {
        break // romper el bucle
    }
}
```