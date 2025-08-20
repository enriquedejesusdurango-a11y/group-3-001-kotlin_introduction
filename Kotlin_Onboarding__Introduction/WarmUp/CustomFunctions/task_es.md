En esta tarea añadiremos varias _firmas_ de funciones e implementaremos una de ellas.

### Tarea

Agrega varias funciones al juego:

- _generateSecret_, que debe devolver la palabra oculta.
Por el momento, deja que esta función siempre devuelva `ABCD`.

<div class="hint" title="Haz clic para ver la firma de la función generateSecret">

La firma de la función es:
```kotlin
fun generateSecret(): String
```
</div>

- _countPartialMatches_, que tiene dos argumentos de tipo string (_secret_ y _guess_)
y devuelve el número de letras coincidentes entre ellos que no están en las mismas posiciones.
No necesitas implementar esta función ahora, es suficiente usar la función `TODO`
en lugar de la implementación como una solución temporal.
Implementaremos esta función durante la resolución de las siguientes tareas.

<div class="hint" title="Haz clic para ver la firma de la función countPartialMatches">

La firma de la función es:
```kotlin
fun countPartialMatches(secret: String, guess: String): Int
```
</div>

- _countExactMatches_, que tiene dos argumentos (_secret_ y _guess_)
y devuelve el número de posiciones exactamente coincidentes entre ellos.
No necesitas implementar esta función ahora, es suficiente usar la función `TODO`
en lugar de la implementación como una solución temporal.
Implementaremos esta función durante la resolución de las siguientes tareas.

<div class="hint" title="Haz clic para ver la firma de la función countExactMatches">

La firma de la función es:
```kotlin
fun countExactMatches(secret: String, guess: String): Int
```
</div>

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Presiona para aprender por qué es mejor definir las funciones generateSecret como una expresión">

El `generateSecret` es muy corta, por lo que podemos hacer el código más breve y reescribir esta función en forma de expresión:
```kotlin
fun generateSecret(): String {
    return "ABCD"
}
```
puede ser reescrito como
```kotlin
fun generateSecret() = "ABCD"
```

La forma corta también es más fácil de leer y entender.
</div>