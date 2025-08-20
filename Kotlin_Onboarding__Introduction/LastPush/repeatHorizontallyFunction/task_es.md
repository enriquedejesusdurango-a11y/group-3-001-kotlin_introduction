Practiquemos separando un algoritmo en varias funciones. Implementaremos varias funciones adicionales y luego las combinaremos en otra función que aplica un filtro al patrón.

### Tarea

Implementa la función `repeatHorizontally`, que acepta un `pattern`, el número de repeticiones `n`, y `patternWidth`, y luego repite el `pattern` `n` veces horizontalmente.

<div class="hint" title="Haz clic para ver la nueva firma de la función repeatHorizontally">

La firma de la función es:
```kotlin
fun repeatHorizontally(pattern: String, n: Int, patternWidth: Int): String
```
</div>

**Nota**: dado que las líneas en el patrón pueden tener diferentes anchos, necesitas usar la función `fillPatternRow` para hacer que todas las líneas tengan el mismo ancho.

Además, el proyecto ya almacena la variable `newLineSymbol`, la cual se puede usar para añadir nuevas líneas entre las líneas de imagen recién generadas, por ejemplo:
```kotlin
val line1 = "#######"
val line2 = "#######"

val line3 = "$line1$newLineSymbol$line2"
println(line3)
```

El resultado será:
```text
#######
#######
```
</div>

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haz clic para ver varios ejemplos de cómo debería funcionar la función repeatHorizontally">

El primer ejemplo:
```kotlin
// Patrón: ○
// n = 1
// Resultado: ○
```

El segundo ejemplo:
```kotlin
// Patrón: ○
// n = 2
// Resultado: ○○
```

El tercer ejemplo:
```text
Patrón:
 X
/ \
\ /
 X
n = 1
Resultado:
 X
/ \
\ /
 X 
```

El cuarto ejemplo:
```text
Patrón:
 X
/ \
\ /
 X
n = 2
Resultado:
 X  X 
/ \/ \
\ /\ /
 X  X 
```

</div>

<div class="hint" title="Haz clic para aprender cómo ejecutar la función repeatHorizontally con patrones predefinidos">

Para comprobar cómo funciona tu función, puedes ejecutarla en <code>main</code> pasando uno de los patrones predefinidos:

```kotlin
fun main() {
    println("Pattern:")
    val n = 2
    println(rhombus)
    println("n = $n")
    println("Resultado:")
    println(repeatHorizontally(rhombus, n, getPatternWidth(rhombus)))
}
```
</div>