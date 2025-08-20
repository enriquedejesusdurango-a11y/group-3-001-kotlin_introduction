### El operador condicional como una expresión: variables

En Kotlin, la expresión `if` también puede asignarse a una variable o ser un valor devuelto en una función; en tal caso, el **último** operador en cada rama será devuelto:
```kotlin
val max = if (x > y) {
    println(x)
    // si x > y devuelve x
    x
} else {
    // La condición opuesta: x <= y
    println(y)
    // si x <= y devuelve y
    y
}
```
Para la entrada `x = 5` y `y = 15`, el resultado será `max = 15`; y de lo contrario, si `x = 20` y `y = 15`, el resultado será `max = 20`.

### El operador condicional como una expresión: funciones

Se aplica lo mismo con las funciones:
```kotlin
fun max(x: Int, y: Int) = if (x > y) {
    println(x)
    // si x > y devuelve x
    x
  } else {
    // La condición opuesta: x <= y
    println(y)
    // si x <= y devuelve y
    y
  }
```
O, en la notación completa:
```kotlin
fun max(x: Int, y: Int): Int {
    return if (x > y) {
      println(x)
      // si x > y devuelve x
      x
    } else {
      // La condición opuesta: x <= y
      println(y)
      // si x <= y devuelve y
      y
    }
}
```