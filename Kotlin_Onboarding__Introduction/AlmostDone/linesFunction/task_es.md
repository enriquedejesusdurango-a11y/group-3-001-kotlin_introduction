Al trabajar con cadenas de texto multilínea, puedes dividirlas en líneas y manejar cada una por separado. Esto se puede hacer usando la función [`lines`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/lines.html):
```kotlin
"""First line
Second line
""".lines()
```
La cadena se convertirá en una lista con dos cadenas: `First line` y `Second line`.

Esta función es mejor que `split`, ya que toma en cuenta los símbolos de nueva línea de varios sistemas operativos:

```kotlin
"""First line
Second line
""".lines() // funciona en todos los sistemas operativos
```
VS
```kotlin
"""First line
Second line
""".split("\n") // no funciona en Windows
```