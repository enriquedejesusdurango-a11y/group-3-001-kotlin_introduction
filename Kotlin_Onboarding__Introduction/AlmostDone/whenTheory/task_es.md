### 1. ¿Qué es la expresión `when`?

Ya estamos familiarizados con la expresión `if`; sin embargo, 
puede no ser conveniente en todos los casos: 
por ejemplo, cuando necesitamos verificar un gran número de valores. 
En tales casos, puedes utilizar la expresión [`when`](https://kotlinlang.org/docs/control-flow.html#when-expression).

Por ejemplo, observa el siguiente código:
```kotlin
fun checkNumber(x: Int) {
    if (x > 0) {
        println("Un número positivo")
    } else if (x < 0) {
        println("Un número negativo")
    } else {
        println("El número cero")
    }
}
```
El código anterior puede ser reemplazado por el siguiente:
```kotlin
fun checkNumber(x: Int) {
    when {
        x > 0 -> println("Un número positivo")
        x < 0 -> println("Un número negativo")
        else -> println("El número cero")
    }
}
```
Ahora es más corto y fácil de leer.

### 2. Usar la expresión `when`: comprobando el valor de la variable

Además, puedes especificar una variable que deseas comparar
con algunos valores y simplemente listar estos valores a continuación. Por ejemplo:

```kotlin
fun checkNumber(x: Int): Int {
    return if (x == 0) {
        x + 5
    } else if (x == 10) {
        x - 5
    } else {
        x / 10
    }
}
```
Puede ser reemplazado con:
```kotlin
fun checkNumber(x: Int): Int {
    return when (x) {
        0 -> { x + 5 }
        10 -> { x - 5 }
        else -> { x / 10 }
    }
}
```