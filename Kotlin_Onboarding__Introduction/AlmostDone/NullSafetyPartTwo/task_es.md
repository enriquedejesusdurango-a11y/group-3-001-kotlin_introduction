Necesitamos permitir que el usuario transforme sus propias imágenes. ¡Hagámoslo!

### Tarea

Implementa la función `getPicture`, que solicita al usuario elegir una imagen predefinida o ingresar una imagen personalizada.

<div class="hint" title="Haz clic para ver la firma de la función getPicture">

La firma de la función es:
```kotlin
fun getPicture(): String
```
</div>

Esta función debe funcionar de la siguiente manera:

Primero que nada, haz esta pregunta: 
```text
¿Deseas usar una imagen predefinida o una personalizada? Por favor ingresa 'sí' para una imagen predefinida o 'no' para una personalizada
```

A continuación, lee la respuesta del usuario mediante la función `safeReadLine` y procesa la salida:

(1) Si el usuario quiere elegir una imagen predefinida, ejecuta la función `choosePicture`.

(2) Si el usuario quiere cargar una imagen personalizada, indícale: `Por favor ingresa una imagen personalizada` (ten en cuenta que solo se admiten imágenes de una sola línea).

(3) Si el usuario introduce un comando incorrecto, indícale: `Por favor ingresa 'sí' o 'no'`.

**Nota**: para evitar errores tipográficos, simplemente copia el texto desde aquí y pégalo en tu código.

La función `getPicture` debe funcionar de la siguiente manera:

![funcionamiento de la función `getPicture`](../../utils/src/main/resources/images/part1/almost.done/get_picture.gif "funcionamiento de la función `getPicture`")

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para obtener una pista sobre el estilo del código">

Para verificar la respuesta del usuario en la función `getPicture`, es más conveniente usar la expresión `when` en lugar de un `if` compuesto.
</div>