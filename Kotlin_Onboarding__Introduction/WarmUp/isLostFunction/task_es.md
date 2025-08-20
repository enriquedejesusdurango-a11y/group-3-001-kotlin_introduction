Vamos a implementar la segunda función.

### Tarea

Agrega una función `isLost`, que acepte tres argumentos: `complete`, `attempts` y `maxAttemptsCount` y devuelva `true` solo si el usuario **no** adivinó la palabra (la variable `complete` almacena `false`) **y** gastó _más_ intentos que `maxAttemptsCount`.

<div class="hint" title="Haz clic para ver la firma de la función isLost">

La firma de la función es:
```kotlin
fun isLost(complete: Boolean, attempts: Int, maxAttemptsCount: Int): Boolean
```
</div>