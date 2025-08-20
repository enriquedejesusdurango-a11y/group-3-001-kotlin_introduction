¡Es hora de aplicar las funciones implementadas y terminar el juego!

### Tarea

Reemplaza la función `safeReadLine` dentro de la función `playGame` con la función `safeUserInput` implementada en el paso anterior. Dado que la función `safeUserInput` requiere un argumento `alphabet: String`, no olvides actualizar la firma de la función `playGame`.

<div class="hint" title="Haz clic para ver la nueva firma de la función playGame">

La firma de la función es:
```kotlin
fun playGame(secret: String, wordLength: Int, maxAttemptsCount: Int, alphabet: String): Unit
```
</div>

Finalmente, no olvides usar el argumento `alphabet` dentro de la función principal cuando llames a la función `playGame`.

¡Buena suerte!

<div class="hint" title="Haz clic para ver la versión final del juego">

![El ejemplo del juego](../../utils/src/main/resources/images/part1/warmup/game.gif "El ejemplo del juego")

</div>