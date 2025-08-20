¡Vamos a implementar el segundo filtro!

### Tarea

Implementa la función `applySquaredFilter`.  
Para el símbolo del borde, por favor usa la variable predefinida `borderSymbol`, que almacena `#`:
```kotlin
println(borderSymbol) // #
```

<div class="hint" title="Haz clic aquí para ver un ejemplo del trabajo de la función applySquaredFilter">

Aquí tienes un ejemplo del trabajo de la función:
<p>
    <img src="../../utils/src/main/resources/images/part1/almost.done/when_hint_2.png" alt="Ejemplo del trabajo de la función" width="400"/>
</p>
</div>

Para hacer la imagen más atractiva, añade un separador entre la imagen y el borde.  
Para el separador, por favor usa la variable predefinida `separator`, que almacena un espacio.
```kotlin
println("Este es el valor de la variable separator: $separator.") // Este es el valor de la variable separator:  .
```

**Ten en cuenta que la imagen podría no ser un cuadrado, lo que significa que el ancho de las diferentes líneas en la imagen puede variar.**  
En otras palabras, necesitas rellenar las líneas más cortas con el `separator` para hacer la imagen cuadrada.  
Para obtener el ancho de la imagen, puedes usar la función predefinida `getPictureWidth`, que devuelve la longitud máxima de todas las líneas de la imagen.

<div class="hint" title="Haz clic aquí para ver un ejemplo del trabajo de la función getPictureWidth">

```kotlin
val pictureWidth = getPictureWidth(picture) // calcula la línea más larga en la imagen y devuelve su longitud
```

Además, el proyecto ya almacena la variable `newLineSymbol`, que se puede usar para añadir nuevas líneas entre las líneas generadas de la imagen, por ejemplo:
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

<div class="hint" title="Haz clic aquí para ver varios ejemplos de cómo debería funcionar la función applySquaredFilter">

Primer ejemplo:
<img src="../../utils/src/main/resources/images/part1/almost.done/examples/squared/android.png" alt="Ejemplo del trabajo de la función" width="400"/>

Segundo ejemplo:
<img src="../../utils/src/main/resources/images/part1/almost.done/examples/squared/monkey.png" alt="Ejemplo del trabajo de la función" width="400"/>
</div>

<div class="hint" title="Haz clic aquí para aprender cómo ejecutar la función applySquaredFilter con imágenes predefinidas">

Para comprobar cómo funciona tu función, puedes ejecutarla en <code>main</code> pasando una de las imágenes predefinidas:

```kotlin
fun main() {
  applyFilter(simba, "squared")   // un ejemplo con la imagen de simba
  applyFilter(monkey, "squared")  // un ejemplo con la imagen de mono
  applyFilter(android, "squared") // un ejemplo con la imagen de android (esta imagen tiene líneas de diferentes longitudes)
}
```
</div>

<div class="hint" title="Haz clic aquí para aprender la idea principal del algoritmo">

Puedes usar la función `applyBordersFilter` para añadir bordes. Luego,  
crea dos instancias de `StringBuilder` — una para la parte superior y otra para la inferior.  
Procede a llenarlas fila por fila.
</div>

<div class="hint" title="Haz clic aquí para aprender cómo implementar la función getPictureWidth por tu cuenta">

Si lo deseas, puedes intentar implementar tu propia versión de la función `getPictureWidth`:  
divide la imagen usando la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/lines.html">`lines`</a>  
y luego usa la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/max-of-or-null.html">`maxOfOrNull`</a> para calcular  
la longitud máxima de todas las líneas de la imagen.
</div>