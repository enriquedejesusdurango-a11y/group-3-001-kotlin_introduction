¡Este es el paso final antes de implementar la función principal para el juego! ¡Vamos!

### Tarea

Implementa la función `getRoundResults`,
que acepta un string `secret` - el secreto de la ronda actual del juego,
un char `guess` - la conjetura actual del usuario, y un string `currentUserWord` - el estado actual del juego, por ejemplo, `_ _ _ K`.
Esta función debe comprobar si el usuario adivinó correctamente un carácter.

<div class="hint" title="Haz clic en mí para ver la nueva firma de la función safeUserInput">

La firma de la función es:
```kotlin
fun getRoundResults(secret: String, guess: Char, currentUserWord: String): String
```
</div>

Esta función debe tener el siguiente comportamiento:
- informar al usuario si `guess` no está en `secret`:
  ```text
  Lo sentimos, el secreto no contiene el símbolo: <guess>. La palabra actual es <currentUserWord>
  ```
  Aquí, en lugar de `<guess>` y `<currentUserWord>`, debes imprimir los valores de los argumentos de la función `guess` y `currentUserWord`:
  por ejemplo, si el valor de `guess` es `A`, y `currentUserWord` es `_ _ _ K`,
  se imprimirá el texto `Lo sentimos, el secreto no contiene el símbolo: A. La palabra actual es _ _ _ K`.

- informar al usuario si `secret` contiene `guess`:
  ```text
  ¡Genial! ¡Esta letra está en la palabra! La palabra actual es <newUserWord>
  ```
  Aquí, en lugar de `<newUserWord>`, debes imprimir el resultado de la función `generateNewUserWord` que implementaste anteriormente: por ejemplo,
  si la función `generateNewUserWord` devuelve `B _ _ K`,
  se imprimirá el texto `¡Genial! ¡Esta letra está en la palabra! La palabra actual es B _ _ K`.

**Nota**: para evitar errores de escritura, simplemente copia el texto de aquí y pégalo en tu código.