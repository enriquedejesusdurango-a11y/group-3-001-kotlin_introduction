Este paso no es fácil, ¡pero creemos que lo resolverás!

### Tarea

En este paso, necesitas implementar la función `canvasWithGapsGenerator`, que acepta el `pattern`, `width` y `height` que fueron ingresados por el usuario. Esta función debe devolver una nueva cadena con una imagen de lienzo-con-espacios generada.

<div class="hint" title="Haz clic para ver la nueva firma de la función canvasWithGapsGenerator">

La firma de la función es:
```kotlin
fun canvasWithGapsGenerator(pattern: String, width: Int, height: Int): String
```
</div>

El generador `canvasGaps` debe construir un rectángulo de `width` x `height` a partir del patrón, dejando espacios en lugar de cada otro elemento. El generador funciona según el siguiente algoritmo:
1) **Ningún nivel** de la imagen generada **cambia** el patrón;
2) El espacio es un rectángulo de espacios, cuyas dimensiones son iguales al ancho y alto del patrón inicial;
3) En cada **nivel impar**, el espacio debe estar en posiciones **pares**, y en cada **nivel par** - en posiciones **impares**;
4) Cuando se repite **verticalmente**, el patrón permanece **sin cambios**.

<div class="hint" title="Haz clic para ver ejemplos del filtro `canvasGaps`">
  Por ejemplo, tomemos el patrón:

```text
 X
/ \
\ /
 X
```

La imagen resultante de 5 x 3 será:

```text
            CORRECTO:             INCORRECTO: 
            
            X     X     X         X     X     X 
1er nivel: / \   / \   / \       / \   / \   / \
           \ /   \ /   \ /       \ /   \ /   \ /
            X     X     X         X     X     X
               X     X              / \   / \
2do nivel:    / \   / \             \ /   \ /    
              \ /   \ /              X     X
               X     X           / \   / \   / \
            X     X     X        \ /   \ /   \ /    
3er nivel: / \   / \   / \        X     X     X 
           \ /   \ /   \ /
            X     X     X 
```

Ninguno de los niveles de la imagen generada cambia el patrón.
</div>

Las siguientes funciones _no serán comprobadas_, pero pueden ayudarte a implementar este proyecto:

- `repeatHorizontallyWithGaps`, que acepta un `pattern` y el número de veces que ese patrón debe repetirse horizontalmente (n), por ejemplo:
```text
n = 5
○○             ○○  ○○  ○○
○○    ---->    ○○  ○○  ○○
```

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para aprender sobre la función integrada `dropLast`">

Para eliminar <code>n</code> símbolos del final de un <code>String</code>, puedes usar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/drop-last.html"><code>dropLast</code></a>, por ejemplo:
  ```kotlin
  val a = "MyText"
  println(a.dropLast(3)) // MyT
  ```
Si necesitas eliminar <code>n</code> símbolos desde el inicio de un <code>String</code>, puedes usar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/drop.html"><code>drop</code></a>.
</div>

<div class="hint" title="Haz clic para obtener un consejo de estilo de código">

En la programación industrial, el código duplicado se evita comúnmente y se coloca en funciones. Sin embargo, no siempre es posible escribir código claro y legible de inmediato. Intenta implementar las funciones <code>canvasGenerator</code> y <code>canvasWithGapsGenerator</code> para que pasen todas las pruebas y luego procede a mejorar el código. Este proceso se llama <i>refactorización</i>.
</div>