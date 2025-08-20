En esta tarea, harás tres preguntas al usuario y guardarás sus respuestas.

### Tarea

Hazle al usuario tres preguntas y añade las respuestas a las variables _firstUserAnswer_, _secondUserAnswer_ y _thirdUserAnswer_ respectivamente. Las preguntas son:

```text
¿Qué es TROTEN?

¿Cómo pasaste tu graduación?

¿Por qué una araña necesita ocho patas?
```

Debes hacer las preguntas y registrar las respuestas secuencialmente, 
es decir, primero haz la primera pregunta (_imprímela_ en la consola), 
luego registra la respuesta en la variable _firstUserAnswer_. 
Luego haz lo mismo con la segunda pregunta y la variable _secondUserAnswer_, 
y finalmente con la tercera pregunta y la variable _thirdUserAnswer_.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para ver un ejemplo con la primera pregunta">

Para imprimir una pregunta, puedes usar la función `println` de los pasos anteriores.
Luego, para leer la entrada del usuario, puedes usar la función `readlnOrNull`:

```kotlin
fun main() {
    println("¡Hola! Te haré varias preguntas.")
    println("¡Por favor responde a todas y sé honesto conmigo!")
    println("¿Qué es TROTEN?")
    val firstUserAnswer = readlnOrNull()
    // Necesitas hacer dos preguntas más a continuación
    val secondUserAnswer = ""
    val thirdUserAnswer = ""
}
```

</div>

<div class="hint" title="Haz clic para ver el estado esperado de la aplicación después de completar esta tarea">

Como resultado, la interacción del usuario con el juego se verá de la siguiente manera:

![Ejemplo de interacción del usuario](../../utils/src/main/resources/images/part1/first.date/user_input.gif "Ejemplo de interacción del usuario")

</div>