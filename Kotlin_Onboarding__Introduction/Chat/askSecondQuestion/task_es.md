¡En esta tarea, responderás al usuario y luego harás la siguiente pregunta!

### Tarea

Primero, imprime `¡Encantado de conocerte, <la respuesta del usuario>! ¡Mi nombre es Kotlin Bot! Soy un lenguaje de programación joven creado en 2010. ¿Cuántos años tienes?`,
donde reemplazas `<la respuesta del usuario>` con la respuesta del usuario de la tarea anterior. Por ejemplo, si el usuario respondió `Juan`, se imprimirá el texto `¡Encantado de conocerte, Juan! ¡Mi nombre es Kotlin Bot! Soy un lenguaje de programación joven creado en 2010. ¿Cuántos años tienes?`.

Después de eso, lee la segunda respuesta del usuario en una variable (puedes usar cualquier nombre de variable que desees).

**Nota**: para evitar errores tipográficos, simplemente copia el texto de aquí y pégalo en tu código.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para aprender qué funciones pueden ayudarte a resolver esta tarea">

Para imprimir la respuesta, puedes utilizar la función `println` de los pasos anteriores.
Luego, para leer la entrada del usuario en una variable, puedes usar la función `readlnOrNull`.

</div>

<div class="hint" title="Haz clic para aprender a combinar texto y variables de cadena juntos">

Los literales de cadena pueden contener expresiones de plantilla: piezas de código que se evalúan y cuyos resultados se concatenan en la cadena.
[Una expresión de plantilla](https://kotlinlang.org/docs/strings.html#string-templates) comienza con un signo de dólar (`$`) y consiste en un nombre o en una expresión entre llaves.

Para insertar algo en una cadena, puedes usar la siguiente construcción:
```kotlin
val name = readlnOrNull()
println("¡Encantado de conocerte, $name!")
```
</div>