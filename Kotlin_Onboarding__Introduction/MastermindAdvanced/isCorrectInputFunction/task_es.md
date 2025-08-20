En esta tarea, verificaremos si las entradas del usuario son correctas.

### Tarea

Implementa la función `isCorrectInput`,
que acepta `userInput`, `wordLength`, y `alphabet` y retorna `true` 
si la entrada es correcta, y `false` en caso contrario.

<div class="hint" title="Haz clic aquí para ver la nueva firma de la función isCorrectInput">

La firma de la función es:
```kotlin
fun isCorrectInput(userInput: String, wordLength: Int, alphabet: String): Boolean
```
</div>

Esta función debería tener el siguiente comportamiento:
- informa al usuario si la longitud de la entrada es incorrecta:
  ```text
  ¡La longitud de tu adivinanza debería ser de <wordLength> caracteres! ¡Inténtalo de nuevo!
  ```
  Aquí, en lugar de `<wordLength>`, necesitas imprimir el valor del argumento `wordLength` de la función: por ejemplo, si el valor es `4`,
  se imprimirá el texto `¡La longitud de tu adivinanza debería ser de 4 caracteres! ¡Inténtalo de nuevo!`.

- informa al usuario si la entrada contiene símbolos incorrectos:
  ```text
  ¡Todos los símbolos en tu adivinanza deberían ser caracteres del alfabeto <alphabet>! ¡Inténtalo de nuevo!
  ```
  Aquí, en lugar de `<alphabet>`, necesitas imprimir el valor del argumento `alphabet` de la función: por ejemplo, si el valor es `ABCDEFGH`,
  se imprimirá el texto `¡Todos los símbolos en tu adivinanza deberían ser caracteres del alfabeto ABCDEFGH! ¡Inténtalo de nuevo!`.

**Nota**: para evitar errores tipográficos, simplemente copia el texto de aquí y pégalo en tu código.

Puedes implementar esta función de cualquier manera que elijas, pero _recomendamos_ revisar las funciones integradas `filter` e `isNotEmpty`.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic aquí para aprender cómo verificar si el tamaño de userInput es incorrecto">

Puedes usar `length` para obtener el número de letras en `userInput`:
```kotlin
val size = userInput.length
```
Luego, necesitas compararlo con `wordLength`.
</div>

<div class="Hint" title="Haz clic aquí para aprender más sobre la función integrada isNotEmpty">

Como ya sabemos, Kotlin tiene muchas funciones integradas.
Si necesitas verificar si una lista (o cadena) está vacía,
puedes usar las funciones integradas [`isEmpty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/is-empty.html) y [`isNotEmpty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/is-not-empty.html):
```kotlin
if (someString.length == 0) {
    TODO("Not implemented yet")
}
```
Es lo mismo que:
```kotlin
if (someString.isEmpty()) {
    TODO("Not implemented yet")
}
```

Otro ejemplo:
```kotlin
if (someString.length != 0) {
    TODO("Not implemented yet")
}
```
Es lo mismo que:
```kotlin
if (someString.isNotEmpty()) {
    TODO("Not implemented yet")
}
```
</div>