El objetivo de esta tarea es generar una palabra aleatoria para el juego.

### Tarea

Implementa la función `generateSecret`, que genera una palabra _aleatoria_ de la lista `words`.

<div class="hint" title="Haz clic para ver la nueva firma de la función generateSecret">

La firma de la función es:
```kotlin
fun generateSecret(): String
```
</div>

Este proyecto ya tiene una variable definida `words` con una lista de palabras que están disponibles para el juego.
Solo necesitas generar un elemento _aleatorio_ de esta lista.
Para verificar qué palabras están almacenadas en la lista `words`, puedes imprimir los elementos:
```kotlin
println(words) // [AREA, BABY, BACK, BALL, BAND, BANK, BASE, BODY, BOOK, ... ]
```