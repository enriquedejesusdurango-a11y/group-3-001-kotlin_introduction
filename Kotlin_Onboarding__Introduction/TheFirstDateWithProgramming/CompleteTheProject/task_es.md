### Tarea

Después de que el usuario haya respondido las preguntas simuladas implementadas en los pasos anteriores, imprime el texto `¡Ahora divirtámonos!`. Luego, imprime las preguntas reales junto con las respuestas anteriores del usuario. Las preguntas reales están almacenadas en las variables ya **predefinidas** `firstQuestion`, `secondQuestion`, y `thirdQuestion`.

_Predefinidas_ significa que puedes acceder a estas variables porque el creador del curso las puso en el proyecto y asignó los valores necesarios. Por ejemplo, puedes escribir `println(firstQuestion)` para imprimir el valor de la variable **predefinida** `firstQuestion`. Puedes encontrar todas estas variables en el archivo `RealQuestions.kt`.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para ver un ejemplo con la primera pregunta real">

Para imprimir la primera pregunta **predefinida** de la variable `firstQuestion` y la respuesta del usuario, puedes usar la función `println` de los pasos anteriores:

```kotlin
fun main() {
    println("¡Hola! Te haré varias preguntas.")
    println("¡Por favor responde todas y sé honesto conmigo!")
    println("¿Qué es TROTEN?")
    val firstUserAnswer = readlnOrNull()
    println("¿Cómo pasaste tu graduación?")
    val secondUserAnswer = readlnOrNull()
    println("¿Por qué una araña necesita ocho patas?")
    val thirdUserAnswer = readlnOrNull()
    println("¡Ahora divirtámonos!")
    println(firstQuestion)
    println(firstUserAnswer)
}
```

</div>

<div class="hint" title="Haz clic para ver el estado esperado del juego después de completar esta tarea">

El juego debería verse así:

![El ejemplo del juego](../../utils/src/main/resources/images/part1/first.date/game.gif "El ejemplo del juego")

</div>

<div class="hint" title="Haz clic para aprender cómo combinar texto con variables de cadena">

Los literales de cadena pueden contener expresiones de plantilla: fragmentos de código que se
evalúan y cuyos resultados se concatenan en la cadena.
[Una expresión de plantilla](https://kotlinlang.org/docs/strings.html#string-templates) comienza con un signo de dólar (`$`) y consiste en un nombre o una expresión entre llaves.

Para insertar algo en una cadena, puedes utilizar la siguiente construcción:
```kotlin
val a = 5
println("a = $a") // se imprimirá a = 5
```
</div>