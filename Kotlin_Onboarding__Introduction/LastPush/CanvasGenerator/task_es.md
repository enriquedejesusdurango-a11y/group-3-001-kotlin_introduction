¡Es momento de implementar el primer generador de patrones!

### Tarea

En este paso, necesitas implementar la función `canvasGenerator`, que acepta el `pattern`, `width` y `height` que fueron introducidos por el usuario. Esta función debe devolver una nueva cadena con una imagen de lienzo generada.

<div class="hint" title="Haz clic para ver la nueva firma de la función canvasGenerator">

La firma de la función es:
```kotlin
fun canvasGenerator(pattern: String, width: Int, height: Int): String
```
</div>

En este proyecto, puedes usar las funciones y variables ya implementadas:

- la variable `newLineSymbol`, que almacena un símbolo de nueva línea;
- la función `getPatternWidth`, que acepta un patrón y calcula su ancho;

El generador `canvas` debería construir un rectángulo de `width` x `height` a partir del patrón. El generador funciona según el siguiente algoritmo:
1) El **primer** nivel de la imagen generada **no cambia** el patrón;
2) Cada nivel subsecuente en la imagen generada elimina la línea superior del patrón, pero solo si el patrón tiene más de una línea;
3) Cuando se repite **horizontalmente**, el patrón permanece **sin cambios**.

<div class="hint" title="Haz clic para ver ejemplos del filtro `canvas`">
  Por ejemplo, considera el siguiente patrón:

```text
 X
/ \
\ /
 X
```

La imagen resultante de 5 x 3 será:

```text
            CORRECTO:            INCORRECTO:

            X  X  X  X  X         X  X  X  X  X 
1er nivel: / \/ \/ \/ \/ \       / \/ \/ \/ \/ \
           \ /\ /\ /\ /\ /       \ /\ /\ /\ /\ /
            X  X  X  X  X         X  X  X  X  X 
2do nivel: / \/ \/ \/ \/ \        X  X  X  X  X
           \ /\ /\ /\ /\ /       / \/ \/ \/ \/ \
            X  X  X  X  X        \ /\ /\ /\ /\ / 
3er nivel: / \/ \/ \/ \/ \        X  X  X  X  X 
           \ /\ /\ /\ /\ /        X  X  X  X  X 
            X  X  X  X  X        / \/ \/ \/ \/ \ 
                                 \ /\ /\ /\ /\ / 
                                  X  X  X  X  X
```

La primera línea del patrón inicial fue eliminada a partir del segundo nivel y más allá. El ejemplo incorrecto muestra la generación de imágenes sin eliminar la línea superior en el segundo y tercer niveles.

Sin embargo, si el tamaño es 5 x 1, la imagen resultante será:

```text
            CORRECTO:            INCORRECTO:
 
            X  X  X  X  X         X  X  X  X  X
1er nivel: / \/ \/ \/ \/ \       / \/ \/ \/ \/ \
           \ /\ /\ /\ /\ /       \ /\ /\ /\ /\ /
            X  X  X  X  X 
```

En este caso, mantenemos la primera línea porque, de acuerdo con el primer punto del algoritmo, no necesitamos cambiar el primer nivel de la imagen generada.
</div>

Te _recomendamos_ que utilices las funciones `getPatternHeight`, `repeatHorizontally` y `dropTopLine`, que ya has implementado. Solo necesitas combinar sus resultados y repetir el patrón verticalmente.