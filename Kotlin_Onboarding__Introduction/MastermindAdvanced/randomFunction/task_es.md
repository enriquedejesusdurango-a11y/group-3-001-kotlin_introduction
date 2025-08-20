### 1. La función `random`

¿Cómo puedes generar una palabra?
Por ejemplo, puedes especificar un alfabeto posible
(una lista de caracteres que se pueden usar en la palabra)
y seleccionar **aleatoriamente** los caracteres el número deseado de veces.

Para hacer eso, puedes usar una función especial, [`random`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/random.html),
que funciona con una _lista_ (o con una _cadena_, que, como ya hemos descubierto,
puede representarse como una lista):

```kotlin
// Devuelve cualquier símbolo único de la cadena "ABCD"
"ABCD".random()
```

### 2. Cómo crear una nueva lista con elementos aleatorios

Para obtener una _lista de elementos aleatorios_, necesitas crear una lista con el número deseado
de elementos, especificando en una _expresión lambda_ (la condición)
cómo se generará cada elemento:
```kotlin
// Crea una lista con 5 elementos, cada uno de ellos es 6
List(5) { 6 }
// Crea una lista con 5 elementos, cada uno de ellos es 'A'
List(5) { 'A' }
// Crea una lista con 5 elementos, cada uno de ellos es un símbolo aleatorio de la cadena "ABCD"
List(5) { "ABCD".random() }
```