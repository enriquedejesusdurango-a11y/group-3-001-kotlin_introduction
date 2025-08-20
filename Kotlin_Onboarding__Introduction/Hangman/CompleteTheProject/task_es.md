¡Es hora de aplicar las funciones implementadas y finalizar el juego!

### Tarea

Implementa la función `playGame`, la cual acepta un string `secret` - el secreto del juego actual, `maxAttemptsCount` - el número de intentos que tiene el usuario en el juego. Esta función debe implementar la función principal del juego.

<div class="hint" title="Haz clic para ver la nueva firma de la función playGame">

La firma de la función es:
```kotlin
fun playGame(secret: String, maxAttemptsCount: Int): Unit
```
</div>

Al final del juego, el usuario debe ser informado sobre los resultados:
- si el usuario perdió: `¡Lo siento, perdiste! Mi palabra es <secret>`
- si el usuario adivinó la palabra: `¡Felicidades! ¡Lo adivinaste!`

**Nota**: para evitar errores tipográficos, simplemente copia el texto desde aquí y pégalo en tu código.

Luego, solo llama a la función ya implementada `playGame` con dos argumentos: `secret`, `maxAttemptsCount` dentro de la función `main` e imprime su salida:
```kotlin
println(playGame(generateSecret(), maxAttemptsCount))
```

<div class="hint" title="Haz clic para ver el ejemplo del juego">

![El ejemplo del juego](../../utils/src/main/resources/images/part1/hangman/game.gif "El ejemplo del juego")

</div>