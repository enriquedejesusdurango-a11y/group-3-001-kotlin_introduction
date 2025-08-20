En este paso, añadiremos una función para generar el secreto inicial oculto utilizando guiones bajos.

### Tarea

Implementa la función `getHiddenSecret`, que acepta `wordLength`
y genera el secreto inicial oculto utilizando guiones bajos: por ejemplo, para `wordLength` `4`, el resultado será `_ _ _ _`.

<div class="hint" title="Haz clic para ver la nueva firma de la función getHiddenSecret">

La firma de la función es:
```kotlin
fun getHiddenSecret(wordLength: Int): String
```
</div>

También puedes usar las variables ya definidas `separator` y `underscore`, que almacenan un espacio y un guion bajo respectivamente:
```kotlin
println("Este es el valor de la variable separator: $separator.") // Este es el valor de la variable separator:  .
println("Este es el valor de la variable underscore: $underscore.") // Este es el valor de la variable underscore: _.
```

Puedes implementar esta función de cualquier manera que elijas, pero _recomendamos_ mirar la función [`joinToString`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/join-to-string.html).

Si tienes alguna dificultad, **los consejos te ayudarán a resolver esta tarea**.

----

### Consejos

<div class="Hint" title="Haz clic para aprender más sobre la función joinToString">

Para unir una lista de elementos en una cadena,
puedes utilizar la función [`joinToString`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/join-to-string.html),
pasando el _separator_ — un carácter (o _string_)
que se usará para separar los elementos — como argumento:
```kotlin
// El separador es "; ", la cadena resultante es: "6_6_6_6_6"
List(5) { 6 }.joinToString("_")
// El separador predeterminado es ", ", la cadena resultante es: "A, A, A, A, A"
List(5) { 'A' }.joinToString()
```
</div>