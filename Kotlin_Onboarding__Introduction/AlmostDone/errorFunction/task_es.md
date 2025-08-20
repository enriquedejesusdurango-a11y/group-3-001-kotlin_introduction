La expresión `when` es útil para manejar casos extremos.  
Por ejemplo, puedes simplemente terminar la ejecución del programa  
e informar al usuario sobre errores.  
Puedes lograr esto utilizando la función [`error`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/error.html):  
```kotlin
fun checkNumber(x: Int): Int {
    return when (x) {
        0 -> { x + 5 }
        10 -> { x - 5 }
        else -> error("Número inesperado")
    }
}
```