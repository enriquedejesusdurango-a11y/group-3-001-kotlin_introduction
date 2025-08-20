Cuando repetimos el patrón verticalmente, el borde inferior termina siendo duplicado. 
En tales casos, necesitamos eliminar la línea superior.

### Tarea

Implementa la función `dropTopLine`, que acepta una `imagen` (cualquier cadena de texto; puede tener múltiples filas), 
el `ancho` de la nueva imagen que debería crearse (la `imagen` ya debería haber sido repetida `ancho` veces),
`alturaDelPatrón`, y `anchoDelPatrón`. Esta función elimina la primera línea,
por ejemplo (para `ancho` = 1):
```text
   .+------+                 
 .' |    .'|                .' |    .'|
+---+--+'  |    ----->     +---+--+'  |
|   |  |   |               |   |  |   |
|  ,+--+---+               |  ,+--+---+
|.'    | .'                |.'    | .' 
+------+'                  +------+'
```

<div class="hint" title="Haz clic para ver la nueva firma de la función getPatternHeight">

La firma de la función es:
```kotlin
fun dropTopLine(image: String, width: Int, patternHeight: Int, patternWidth: Int): String
```
</div>

**Nota**, esta función debe eliminar solo la primera línea si `alturaDelPatrón > 1`.

Puedes implementar esta función de cualquier manera posible, pero _recomendamos_ que consideres usar las funciones integradas [`removeSuffix`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/remove-suffix.html) y [`drop`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/drop.html).

<div class="Hint" title="Haz clic para aprender más sobre la función integrada removeSuffix">

La función integrada [`removeSuffix`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/remove-suffix.html) ayuda
a eliminar una cadena de texto del final de la cadena actual:
```kotlin
val str = "abcdefg"
println("abcdefg".removeSuffix("fg")) // abcde
println("abcdefg".removeSuffix("a")) // abcdefg, ya que la cadena inicial no termina con "a"
```
</div>

<div class="Hint" title="Haz clic para aprender más sobre la función integrada `drop`">

La función integrada [`drop`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/drop.html) ayuda
a eliminar `n` símbolos del principio de la cadena actual:
```kotlin
val str = "abcdefg"
println("abcdefg".drop(1)) // bcdefg
```
</div>

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para ver varios ejemplos de cómo debería funcionar la función dropTopLine">

El primer ejemplo:
```text
○
```
Este código:
```kotlin
println(ball)
println("___")
val patternWidth = getPatternWidth(ball)
val patternHeight = getPatternHeight(ball)
val repeatedPattern = repeatHorizontally(ball, 1, patternWidth)
val dropped = dropTopLine(repeatedPattern, 1, patternHeight, patternWidth)
println(dropped)
```
imprimirá:
```text
○
```

El segundo ejemplo. El patrón es:
```text
 X
/ \
\ /
 X
```
Este código:
```kotlin
println(rhombus)
println("___")
val patternWidth = getPatternWidth(rhombus)
val patternHeight = getPatternHeight(rhombus)
val repeatedPattern = repeatHorizontally(rhombus, 1, patternWidth)
val dropped = dropTopLine(repeatedPattern, 1, patternHeight, patternWidth)
println(dropped)
```
imprimirá:
```text
/ \
\ /
 X 
```
Puedes haber notado que usamos funciones ya implementadas en este ejemplo. 
Estas funciones nos ayudarán a implementar los filtros, permitiéndonos repetir el patrón verticalmente.

</div>

<div class="hint" title="Haz clic para aprender cómo calcular el número de símbolos a eliminar">

Necesitas eliminar `anchoDelPatrón * ancho + longitudDelSímboloDeNuevaLínea` símbolos del principio de la línea, ya que
tienes una línea donde el patrón se repite `ancho` veces y el `símboloDeNuevaLínea` en diferentes SOs puede ser más de `1`.
</div>