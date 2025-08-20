¡Es hora de practicar!

### Tarea

Agrega variables de diferentes tipos para personalizar el juego 
y muestra la información del juego en la consola:
- Variable `Int` `wordLength` para definir la longitud de la palabra
- Variable `Int` `maxAttemptsCount` para definir el número máximo de intentos del usuario
- Variable `String` `secretExample` para definir un ejemplo de la palabra oculta (para explicarla al usuario)

Más adelante podrás inicializar estas variables con cualquier valor que desees, pero por ahora, definámoslas de la siguiente manera:
```text
wordLength con valor 4
maxAttemptsCount con valor 3
secretExample con valor ACEB
```

Luego, simplemente llama a la función ya implementada `getGameRules` con tres argumentos: `wordLength`, `maxAttemptsCount`, `secretExample` y imprime su salida:
```kotlin
println(getGameRules(wordLength, maxAttemptsCount, secretExample))
```

Esta función devolverá las reglas del juego con los valores de las variables, que se usan definidas como una cadena y luego imprimiremos las reglas 
con la función ya familiar `println`.
Consideraremos funciones personalizadas en la próxima tarea con más detalle.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Presiona para aprender sobre los saltos de línea en diferentes sistemas operativos">

  Los diferentes sistemas operativos utilizan diferentes caracteres para los saltos de línea. 
  Utiliza la variable predefinida `newLineSymbol` con un carácter de nueva línea en lugar de `\n` para 
  separar las líneas correctamente.
</div>