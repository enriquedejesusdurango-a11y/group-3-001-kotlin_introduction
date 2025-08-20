### 1. `String` como una `Lista` de caracteres

¿De qué está compuesta normalmente una cadena?
En realidad, una cadena es una secuencia de caracteres (letras en nuestro caso).
Por lo tanto, al trabajar con cadenas, podemos pensar en ellas como una _lista de letras_.

Kotlin tiene un tipo de dato especial para trabajar con esas secuencias - [`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/).
Por ahora, necesitamos saber lo siguiente:
1) `List` es una colección que contiene datos del _mismo_ tipo, por ejemplo, solo cadenas o enteros.
2) `List` es una colección ordenada (cada elemento tiene una posición).
   La posición del primer elemento en una lista es cero.

Veamos un ejemplo en el contexto de nuestro ejercicio:
la palabra `ABCDDD` puede dividirse en seis letras: `A`, `B`, `C`, `D`, `D`, `D`.
La lista en este caso consistirá en seis elementos - `A`, `B`, `C`, `D`, `D`, `D`,
y cada uno de ellos tiene su posición: `A` - 0, `B` - 1, `C` - 2, `D` - 3, `D` - 4, `D` - 5.

### 2. Cómo obtener un elemento de la lista

Para obtener un elemento en una lista por el número de posición,
es suficiente referirse al número entre corchetes:
```kotlin
// Obtener el carácter B
"ABCDDD"[1]
```

**Nota**: el índice del primer elemento en la lista es cero.