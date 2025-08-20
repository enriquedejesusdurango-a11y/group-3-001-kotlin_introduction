¡Es hora de practicar! Comencemos con una función simple.

### Tarea

Implementa la función `isComplete`, que acepta dos argumentos de tipo cadena - `secret` y `currentGuess`, y verifica si el juego está completo. El juego está completo solo si `secret` y `currentGuess` son iguales.

<div class="hint" title="Haz clic para ver la nueva firma de la función isComplete">

La firma de la función es:
```kotlin
fun isComplete(secret: String, currentGuess: String): Boolean
```
</div>

**Nota** que `currentGuess` contiene espacios entre letras. Por lo tanto, no es suficiente simplemente comparar `secret` y `currentGuess`. Primero, necesitarás eliminar todos los espacios de `currentGuess`.

También puedes usar la variable ya definida `separator`, que almacena un espacio:
```kotlin
println("Este es el valor de la variable separator: $separator.") // Este es el valor de la variable separator:  .
```

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para ver ejemplos de cómo funciona la función isComplete">

Aquí hay varios ejemplos del trabajo de la función _isComplete_:

- secret = "ABC", currentGuess = "A B C", result = true;
- secret = "ABC", currentGuess = "A B B", result = false;
- secret = "ABC", currentGuess = "A A A", result = false;
</div>

<div class="Hint" title="Haz clic para aprender cómo eliminar el separador en la conjetura actual del usuario">

La forma más sencilla de eliminar `separator` en `currentGuess` es usar la función incorporada [`replace`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/replace.html):
```kotlin
println("aabbccdd".replace("a", "e")) // eebbccdd
```
En esta tarea, puedes simplemente reemplazar `separator` con una cadena vacía `"""`.
</div>