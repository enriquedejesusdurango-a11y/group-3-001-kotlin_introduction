¡Hagamos nuestro juego más divertido!

### Tarea

Implementa la función `generateSecret` para devolver una palabra secreta aleatoria para el juego:
- añade nuevos argumentos: `wordLength` y `alphabet`;

<div class="hint" title="Haz clic para ver la nueva firma de la función generateSecret">

La firma de la función es:
```kotlin
fun generateSecret(wordLength: Int, alphabet: String): String
```
</div>

- implementa el cuerpo que genera una palabra aleatoria con letras de `wordLength` del `alphabet` 
en lugar de devolver siempre `ABCD`.

**Nota**, necesitas definir una nueva variable `alphabet` en la función `main` e inicializarla con el valor `ABCDEFGH` para pasar las pruebas.
No olvides usar las variables `wordLength` y `alphabet` al llamar a la función `generateSecret`.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para aprender a implementar la función generateSecret">

Puedes crear una nueva lista con `wordLength` elementos usando letras _aleatorias_ del `alphabet`.
Finalmente, puedes usar la función `joinToString` con un separador vacío (`""`) para construir la cadena final.
</div>