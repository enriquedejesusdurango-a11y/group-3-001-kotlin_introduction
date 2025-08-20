En las próximas dos tareas, implementaremos funciones para verificar si la entrada del usuario es correcta.

### Tarea

Implementa la función `isCorrectInput`, que acepta una cadena `userInput`
y verifica si es correcta: 1) la longitud de `userInput` es 1, y 2) `userInput` es una letra en inglés.
Si `userInput` es correcta, la función devuelve `true`, y `false` en caso contrario.

<div class="hint" title="Haz clic aquí para ver la nueva firma de la función getHiddenSecret">

La firma de la función es:
```kotlin
fun isCorrectInput(userInput: String): Boolean
```
</div>

Esta función debe tener el siguiente comportamiento:
- informar al usuario si la longitud de la entrada es incorrecta:
  ```text
  ¡La longitud de tu conjetura debe ser 1! ¡Intenta nuevamente!
  ```

- informar al usuario si la entrada no es una letra en inglés:
  ```text
  ¡Debes ingresar solo letras en inglés! ¡Intenta nuevamente!
  ```

**Nota**: para evitar errores tipográficos, simplemente copia el texto de aquí y pégalo en tu código.

Puedes implementar esta función de cualquier manera que elijas, pero _recomendamos_ revisar la función incorporada [`isLetter`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/is-letter.html).

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic aquí para aprender cómo verificar si el tamaño de userInput es incorrecto">

Puedes usar `length` para obtener el número de letras en `userInput`:
```kotlin
val size = userInput.length
```
Luego, necesitas compararlo con `1`.
</div>

<div class="Hint" title="Haz clic aquí para aprender más sobre la función incorporada isLetter">

La función incorporada <a href='https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/is-letter.html'>`isLetter`</a> verifica si el símbolo pasado 
es una letra en inglés, y solo se puede aplicar a una letra a la vez:
```kotlin
println("AB12"[0].isLetter()) // true, ya que `A` es una letra en inglés
println("AB12"[1].isLetter()) // true, ya que `B` es una letra en inglés
println("AB12"[2].isLetter()) // false, ya que `1` NO es una letra en inglés
println("AB12"[3].isLetter()) // false, ya que `2` NO es una letra en inglés
```
</div>