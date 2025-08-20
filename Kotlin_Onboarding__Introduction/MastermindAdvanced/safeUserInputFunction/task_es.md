En esta tarea, implementaremos la función `safeUserInput` para asegurar que el usuario solo introduzca entradas correctas.

### Tarea

Implementa la función `safeUserInput`,
que acepta `wordLength` y `alphabet`
y maneja entradas incorrectas del usuario.

<div class="hint" title="Haz clic aquí para ver la nueva firma de la función safeUserInput">

La firma de la función es:
```kotlin
fun safeUserInput(wordLength: Int, alphabet: String): String
```
</div>

- antes de leer la entrada del usuario, imprime los requisitos:

```text
Por favor, introduce tu suposición. Debe tener una longitud de <wordLength>, y cada símbolo debe ser del alfabeto: <alphabet>.
```

**Nota**: para evitar errores tipográficos, simplemente copia el texto desde aquí y pégalo en tu código.

- para leer la línea de entrada del usuario, utiliza la función `safeReadLine` como antes (o tu propia implementación de la misma);
- para verificar la corrección de la entrada del usuario, utiliza la función `isCorrectInput` que fue implementada en el paso anterior.

Aquí tienes un ejemplo de cómo funciona la función `safeUserInput`:

![El ejemplo de safeUserInput](../../utils/src/main/resources/images/part1/warmup/safe_user_input.gif "El ejemplo de safeUserInput")

Para ajustar la imagen, se añadieron saltos de línea adicionales.
No es necesario que los añadas al resolver la tarea.