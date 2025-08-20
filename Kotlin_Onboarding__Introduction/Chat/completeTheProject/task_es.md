¡Es hora de completar el proyecto!

### Tarea

Imprime `<la respuesta de algún usuario> es genial! ¡Espero que completes con éxito este curso! ¡Cualquiera puede aprender a programar a cualquier edad!`, donde en lugar de `<la respuesta de algún usuario>`, necesitas imprimir la respuesta del usuario de la tarea anterior. Por ejemplo, si el usuario respondió `20`, el texto `20 es genial! ¡Espero que completes con éxito este curso! ¡Cualquiera puede aprender a programar a cualquier edad!` será impreso.

**Nota**: para evitar errores tipográficos, simplemente copia el texto de aquí y pégalo en tu código.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic aquí para ver el estado esperado del juego después de completar esta tarea">

El juego debería verse así:

![Ejemplo de chat](../../utils/src/main/resources/images/part1/chat/game.gif "Ejemplo de chat")

</div>

<div class="hint" title="Haz clic aquí para aprender qué funciones pueden ser útiles para resolver esta tarea">

Para imprimir la respuesta, puedes usar la función `println` de los pasos anteriores.

</div>

<div class="hint" title="Haz clic aquí para aprender cómo combinar texto y variables de cadena juntas">

Los literales de cadena pueden contener expresiones de plantilla: fragmentos de código que se evalúan y cuyos resultados se concatenan en la cadena.
[Una expresión de plantilla](https://kotlinlang.org/docs/strings.html#string-templates) empieza con un signo de dólar (`$`) y consiste en un nombre o una expresión entre llaves.

Para insertar algo en una cadena, puedes usar la siguiente construcción:
```kotlin
val age = readlnOrNull()
println("$age es genial!")
```
</div>