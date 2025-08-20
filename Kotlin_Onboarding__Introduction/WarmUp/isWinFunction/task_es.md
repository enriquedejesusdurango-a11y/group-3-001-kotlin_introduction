Es hora de implementar funciones que indiquen si el usuario gana o pierde. Comencemos con la primera.

### Tarea

Agrega una función `isWon`, que acepte tres argumentos: `complete`, `attempts` y `maxAttemptsCount` 
y devuelva `true` solo si el usuario adivinó la palabra (la variable `complete` almacena `true`) 
**y** gastó _no más_ de los intentos de `maxAttemptsCount`.

<div class="hint" title="Haz clic para ver la firma de la función isWon">

La firma de la función es:
```kotlin
fun isWon(complete: Boolean, attempts: Int, maxAttemptsCount: Int): Boolean
```
</div>