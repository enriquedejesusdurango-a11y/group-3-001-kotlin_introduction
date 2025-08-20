En esta tarea implementaremos la función `countExactMatches`.

### Tarea

Implementa la función _countExactMatches_. 
Dada una `guess` y una `secret`, la función debería devolver el número de letras que coinciden exactamente en la posición.

Puedes implementar esta función de cualquier manera posible, pero _recomendamos_ revisar la función incorporada `filterIndexed`.

<div class="Hint" title="Haz clic para aprender más sobre la función incorporada filterIndexed">

Kotlin tiene muchas funciones incorporadas: por ejemplo, podemos filtrar y manipular no solo los elementos de la lista, sino también los índices de la lista.
Por ejemplo, dados dos palabras, necesitamos construir una nueva palabra que consista en los caracteres que ocurrieron en ambas palabras en las mismas posiciones.
El método clásico es:
```kotlin
val secondWord = "AACAAA"
var result = ""
for ((index, symbol) in "ABCDDD".withIndex()) {
   if (secondWord[index] == symbol) {
      result += symbol
   }
}
// El resultado será: "AC"
```

Pero también podemos usar la función [`filterIndexed`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-indexed.html) para hacer el código más corto:
```kotlin
val secondWord = "AACAAA"
// El resultado será: "AC"
"ABCDDD".filterIndexed { index, symbol -> secondWord[index] == symbol }
```

Por cierto, en este caso, la expresión lambda toma dos argumentos, por lo que usamos nombres personalizados para los argumentos (`index` y `symbol`), no `it`.
</div>

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="Hint" title="Haz clic para ver ejemplos del funcionamiento de la función `countExactMatches`">

Aquí hay varios ejemplos del funcionamiento de la función _countExactMatches_:

- guess = "ACEB", secret = "BCDF", resultado = 1;
- guess = "ABCD", secret = "DCBA", resultado = 0;
- guess = "AAAA", secret = "ABBB", resultado = 1;
- guess = "BBBB", secret = "BBDH", resultado = 2.
</div>

<div class="Hint" title="Haz clic para aprender la idea principal del algoritmo">

La idea principal del algoritmo es mantener solo aquellas letras que son iguales y tienen el mismo índice. 
Luego, simplemente podemos devolver el número de estas letras.
Para encontrar el número de coincidencias exactas, puedes considerar la función <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/filter-indexed.html"><code>filterIndexed</code></a>.
</div>

<div class="Hint" title="Haz clic para aprender cómo obtener el número de elementos en la lista">

Para obtener el número de caracteres en la palabra, puedes usar <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/length.html#length"><code>length</code></a>: 
`"ABCDDD".length` devolverá `6`, ya que la cadena contiene `6` letras.  
</div>