En los siguientes pasos, implementaremos algunas funciones auxiliares para crear la aplicación.

### Tarea

Implementa la función `fillPatternRow`, que acepta un `patternRow` (una imagen del patrón) y `patternWidth` y añade el `separator` a la fila para extender la línea al tamaño de `patternWidth`.

<div class="hint" title="Haz clic para ver la nueva firma de la función getPatternHeight">

La firma de la función es:
```kotlin
fun fillPatternRow(patternRow: String, patternWidth: Int): String
```
</div>

Por favor, lanza una `IllegalStateException` si `patternRow.length > patternWidth`.

Para el separador, usa la variable predefinida `separator`, que almacena un espacio.
```kotlin
println("Este es el valor de la variable separator: $separator.") // Este es el valor de la variable separator:  .
```

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para ver detalles sobre la función integrada `repeat`">

Para generar una cadena que consista en algunos símbolos repetidos, puedes usar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/repeat.html"><code>repeat</code></a>, por ejemplo:
  ```kotlin
  println("a".repeat(5)) // aaaaa
  ```
</div>

<div class="hint" title="Haz clic para conocer la idea principal de la función `fillPatternRow`">

Para implementar la función `fillPatternRow`, solo necesitas comprobar
si la longitud de la fila del patrón actual es menor que el ancho del patrón.
Si es `true`, añade el número necesario de espacios al final de la fila.
</div>