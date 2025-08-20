En tareas anteriores, a veces utilizamos la función predefinida `safeReadLine` en lugar de la función incorporada `readlnOrNull`. La razón principal es que `readlnOrNull` devuelve un valor _nullable_ (`String?`). La función predefinida `safeReadLine` procesaba la entrada del usuario con el operador Elvis: devuelve la cadena o lanza un error si se recibe un valor `null`. ¡Ahora, es momento de implementar esta función por tu cuenta!

### Tarea

Implementa la función `safeReadLine`, que devuelve la entrada de cadena proporcionada por el usuario o lanza un error si se recibe un valor `null`.

<div class="hint" title="Haz clic para ver la firma de la función safeReadLine">

La firma de la función es:
```kotlin
fun safeReadLine(): String
```
</div>