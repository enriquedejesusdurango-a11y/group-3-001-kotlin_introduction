En esta tarea llamaremos a funciones ya implementadas dentro de la función principal.

### Tarea

Llama a la función `playGame` en la función `main`. 
No olvides utilizar la función `generateSecret` para obtener un secreto y pasarlo como argumento a la función `playGame`.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para aprender cómo pasar un secreto generado dentro de la función playGame">

Puedes llamar a `generateSecret` y escribir la salida en una variable, o pasar el resultado sin crear una variable extra:
```kotlin
fun main() {
    val wordLength = 4
    val maxAttemptsCount = 3
    val secretExample = "ACEB"
    println(getGameRules(wordLength, maxAttemptsCount, secretExample))
    
    val secret = generateSecret()
    playGame(secret, wordLength, maxAttemptsCount)
}
```
o
```kotlin
fun main() {
    val wordLength = 4
    val maxAttemptsCount = 3
    val secretExample = "ACEB"
    println(getGameRules(wordLength, maxAttemptsCount, secretExample))
    
    playGame(generateSecret(), wordLength, maxAttemptsCount)
}
```
</div>