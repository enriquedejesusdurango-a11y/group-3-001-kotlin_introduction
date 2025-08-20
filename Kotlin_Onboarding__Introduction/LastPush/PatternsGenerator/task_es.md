Esta lección se centra en los temas que cubriste en la lección anterior. La principal diferencia es que el proyecto final no se dividirá en etapas intermedias y puedes intentar implementarlo desde cero por ti mismo. ¡No tenemos ninguna duda de que lo lograrás!

----

<p align="center">
    <img src="../../utils/src/main/resources/images/part1/last.push/game.png" alt="Generador de patrones" width="400"/>
</p>

### Descripción del proyecto

El proyecto de esta lección es **Generador de patrones**. El propósito de este proyecto es crear una aplicación para generar automáticamente imágenes de caracteres de un tamaño y patrón dados.

Primero, necesitas preguntar al usuario:
```text
¿Deseas usar un patrón predefinido o uno personalizado? Por favor, ingresa 'sí' para un patrón predefinido o 'no' para uno personalizado.
```

Necesitas manejar la respuesta del usuario y volver a preguntar si la respuesta es incorrecta. Si el usuario desea usar un patrón personalizado, solo necesitas pedirle que lo ingrese. Si el usuario desea usar un patrón predefinido, necesitas pedirle que elija uno de los patrones predefinidos. Puedes obtener una lista con todos ellos llamando a la función `allPatterns` ya definida.

En segundo lugar, debes pedir al usuario que elija el generador: `canvas` o `canvasGaps`. Y finalmente, pedir al usuario que ingrese el `ancho` y la `altura` de la imagen generada.

### Ejemplo del proyecto

![El ejemplo del generador de patrones](../../utils/src/main/resources/images/part1/last.push/app.gif "El ejemplo del generador de patrones")