Para poder implementar la función `countPartialMatches` en el próximo paso, primero hay que agregar una nueva función `countAllMatches` para calcular todos los emparejamientos.

### Tarea

Agrega e implementa una nueva función _countAllMatches_ que tenga dos argumentos de tipo string (_secret_ y _guess_) y devuelva el número de letras coincidentes entre ellas que no dependen de la posición.

<div class="hint" title="Haz clic para ver la firma de la función countAllMatches">

La firma de la función es:
```kotlin
fun countAllMatches(secret: String, guess: String): Int
```
</div>

Puedes implementar esta función de cualquier manera posible, pero _recomendamos_ que examines las funciones integradas `filter` y `minOf`.

<div class="Hint" title="Haz clic para saber más sobre la función integrada filter">

Puedes usar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/filter.html"><code>filter</code></a> para filtrar elementos de una colección que se encuentran en otra:

```kotlin
val list1 = listOf(1, 2, 3, 4)
val list2 = listOf(3, 4, 5, 6)
println(list1.filter{ it in list2 }) // [3, 4]
```
</div>

<div class="Hint" title="Haz clic para saber más sobre la función integrada minOf">

Puedes usar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.comparisons/min-of.html"><code>minOf</code></a> para encontrar valores mínimos de varios:

```kotlin
println(minOf(2, 3, 5, -1)) // -1
```
</div>

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para ver ejemplos del funcionamiento de la función `countAllMatches`">

Aquí tienes varios ejemplos del funcionamiento de la función _countAllMatches_:

- guess = "ACEB", secret = "BCDF", resultado = 2;
- guess = "ABCD", secret = "DCBA", resultado = 4;
- guess = "AAAA", secret = "ABBB", resultado = 1;
- guess = "BBBB", secret = "BBDH", resultado = 2.
</div>

<div class="Hint" title="Haz clic para conocer la idea principal del algoritmo">

Puedes simplemente contar la cantidad de letras del guess que están en secret.
Pero en algunos casos producirá una respuesta incorrecta, por ejemplo, si el guess tiene las mismas letras:
```text
guess = "BBBB", secret = "BBDH"
```
Si calculamos la cantidad de letras del guess `BBBB` que están en el secret `BBDH`, obtendremos `4`, pero la respuesta correcta es `2`.

Para evitar estos errores, podemos calcular la cantidad de letras del guess que están en secret, pero también hacer lo opuesto: el número de letras del secret que están en guess.
Y luego simplemente calcular el mínimo de ellos:
```text
guess = "BBBB", secret = "BBDH"
1) la cantidad de letras del guess `BBBB` que están en el secret `BBDH` es 4
2) la cantidad de letras del secret `BBDH` que están en el guess `BBBB` es 2
3) el mínimo es 2. La respuesta correcta es 2.
```
</div>