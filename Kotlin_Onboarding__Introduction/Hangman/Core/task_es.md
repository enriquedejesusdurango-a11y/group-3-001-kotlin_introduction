Ahora, implementaremos una función que construye una nueva cadena para mostrar después de una suposición del usuario.

### Tarea

Implementa la función `generateNewUserWord`, 
que genera una nueva secuencia de guiones bajos y letras ya adivinadas 
usando una cadena para `secret`, un caracter para el `guess` del usuario, y una cadena para el `currentUserWord`.

<div class="hint" title="Haz clic para ver la nueva firma de la función generateNewUserWord">

La firma de la función es:
```kotlin
fun generateNewUserWord(secret: String, guess: Char, currentUserWord: String): String
```
</div>

**Nota**, el `currentUserWord` debe almacenarse con `separadores`, por ejemplo, `B _ N _`.

Puedes implementar esta función de cualquier manera que elijas, pero _recomendamos_ considerar la propiedad [`indices`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/indices.html), 
y la función [`removeSuffix`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/remove-suffix.html).

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para ver ejemplos de cómo funciona la función currentUserWord">

Aquí hay varios ejemplos del funcionamiento de la función _currentUserWord_:

- secret = `"BOOK"`, guess = `'A'`, currentUserWord = `"_ _ _ _"`, resultado = `"_ _ _ _"`;
- secret = `"BOOK"`, guess = `'A'`, currentUserWord = `"_ O O _"`, resultado = `"_ O O _"`;
- secret = `"BOOK"`, guess = `'A'`, currentUserWord = `"_ _ _ K"`, resultado = `"_ _ _ K"`;
- secret = `"BOOK"`, guess = `'B'`, currentUserWord = `"_ _ _ _"`, resultado = `"B _ _ _"`;
- secret = `"BOOK"`, guess = `'B'`, currentUserWord = `"_ O O _"`, resultado = `"B O O _"`;
- secret = `"BOOK"`, guess = `'K'`, currentUserWord = `"_ _ _ K"`, resultado = `"_ _ _ K"`;
</div>

<div class="Hint" title="Haz clic para saber más sobre la propiedad indices">

Para iterar sobre cada caracter en una cadena, puedes usar la propiedad <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/indices.html">`indices`</a>:
   ```
   for (i in "abcd".indices) { ... } // i será 0, 1, 2, 3
   ```
Es lo mismo que:
   ```
   for (i in 0 until "abcd".length) { ... } // i será 0, 1, 2, 3
   ```

Es una forma más conveniente y concisa de representar un rango de índices.
</div>

<div class="Hint" title="Haz clic para saber más sobre la función removeSuffix">

La función [`removeSuffix`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/remove-suffix.html)
ayuda a eliminar un sufijo de una cadena:
```kotlin
println("abcdef".removeSuffix("f")) // abcde
```

Puede ser útil si necesitas eliminar algunos separadores extra del final de la cadena.
</div>

<div class="Hint" title="Haz clic para verificar la idea principal del algoritmo">

Para implementar la función `generateNewUserWord`, solo necesitas verificar si cada letra de `secret` 
coincide con el `guess`.
Si el caracter actual de `secret` coincide con el caracter de `guess` en la misma posición, 
agrega el respectivo caracter de `secret` a `newUserWord`; de lo contrario, agrega el caracter de `currentUserWord` en la posición `i * 2`, 
donde `i` es la posición del caracter actual.

**Además, no olvides agregar un separador en cada paso del bucle, ya que la cadena resultante necesita incluir espacios:**
```kotlin
"${secret[i]}$separator" o "${currentUserWord[i * 2]}$separator" // CORRECTO

"${secret[i]}" o "${currentUserWord[i * 2]}" // INCORRECTO
```

Al seguir este algoritmo, no olvides eliminar un espacio extra del final de la nueva cadena.
</div>