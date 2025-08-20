En esta tarea, implementaremos la función `safeUserInput` para asegurar que el usuario solo ingrese entradas correctas.

### Tarea

Implementa la función `safeUserInput`, que no acepta argumentos y devuelve una letra en mayúsculas que fue ingresada por el usuario. Esta función debe verificar la entrada del usuario con la función `isCorrectInput` para evitar entradas incorrectas.

<div class="hint" title="Haga clic aquí para ver la nueva firma de la función safeUserInput">

La firma de la función es:
```kotlin
fun safeUserInput(): Char
```
</div>

- antes de leer la entrada del usuario, imprime el mensaje:

```text
Please input your guess.
```

**Nota**: para evitar errores tipográficos, solo copia el texto de aquí y pégalo en tu código.

- para leer la línea de entrada del usuario, utiliza la función `safeReadLine`, que ya está definida en el proyecto:

```kotlin
guess = safeReadLine()
```

- para verificar la corrección de la entrada del usuario, usa la función `isCorrectInput`, que se implementó en el paso anterior.

Para convertir una letra a mayúscula, puedes implementar tu propia función, pero _recomendamos_ mirar la función integrada [`uppercase`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/uppercase.html).

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haga clic aquí para aprender más sobre la función integrada uppercase">

La función integrada [`uppercase`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/uppercase.html) convierte todas las letras de una cadena a formato mayúsculas:
```kotlin
println("abc".uppercase()) // ABC
```

Dado que la función devuelve un `String`, para obtener un `Char` necesitamos obtener esta letra por índice, por ejemplo:
```kotlin
println("abc".uppercase()[0]) // A
println("abc".uppercase()[1]) // B
println("abc".uppercase()[2]) // C
```
</div>