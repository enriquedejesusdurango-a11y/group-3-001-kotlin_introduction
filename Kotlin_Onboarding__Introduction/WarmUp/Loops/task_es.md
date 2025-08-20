Es hora de comenzar a implementar la función `playGame` para poder leer las suposiciones del usuario.

### Tarea

Define una nueva función `playGame`, que acepte `secret`, `wordLength` y `maxAttemptsCount` 
e imite el proceso del juego.

<div class="hint" title="Haz clic para ver la firma de la función playGame">

La firma de la función es:
```kotlin
fun playGame(secret: String, wordLength: Int, maxAttemptsCount: Int): Unit
```
</div>

Esta función debe tener un bucle mientras el juego no esté completo 
(aquí podemos usar la función `isComplete` de los pasos anteriores).
Dentro del bucle necesitas pedir al usuario que introduzca una suposición y escribir su respuesta en la variable `guess`.
Después de pedir la entrada necesitas volver a verificar si el juego fue completado para evitar tener un bucle infinito.

Es mejor pedirle al usuario lo que esperas recibir, así que imprime este texto antes de leer la línea de entrada del usuario:

```text
Por favor ingresa tu suposición. Debe tener una longitud de <wordLength>.
```
donde en lugar de `<wordLength>` necesitas imprimir el valor del argumento de la función `wordLength`, por ejemplo si el valor es `4`,
se imprimirá el texto `Por favor ingresa tu suposición. Debe tener una longitud de 4`.

**Nota**: para evitar errores tipográficos copia el texto de aquí y pégalo en tu código.

**Nota**: En lugar de la función `readlnOrNull`, usa la función `safeReadLine` aquí. 
Es una función personalizada de los autores del curso que facilita la interacción con la entrada del usuario:

```kotlin
val guess = safeReadLine()
```

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para obtener ayuda con la función `playGame`">

Usa un bucle `do-while` para imitar el proceso del juego.
</div>

<div class="Hint" title="Haz clic para aprender qué tipo de variable de condición para el bucle es mejor usar">

El mejor tipo para la variable `complete` para la condición del bucle es `Boolean`, ya que indica solo dos estados del juego.
</div>

<div class="Hint" title="Haz clic para obtener una sugerencia de estilo de código">

Si usas el bucle `do-while` con una variable `Boolean` como condición, 
puedes omitir la inicialización de la variable antes del bucle. Por ejemplo, considera el siguiente código:
```
var myBool = false
do {
    myBool = getNewValue()
} while (!myBool)
```
Puede ser reemplazado por:
```
var myBool: Boolean
do {
    myBool = getNewValue()
} while (!myBool)
```
Puedes hacerlo solo si el valor de la variable es <b>cambiado</b> dentro del bucle.
</div>

<div class="Hint" title="Haz clic para ver la solución correcta de esta tarea">

Una de las posibles formas de resolver esta tarea:
```kotlin
fun playGame(secret: String, wordLength: Int, maxAttemptsCount: Int) {
    var complete: Boolean
    do {
        println("Por favor ingresa tu suposición. Debe tener una longitud de $wordLength.")
        val guess = safeReadLine()
        complete = isComplete(secret, guess)
    } while (!complete)
}
```
</div>