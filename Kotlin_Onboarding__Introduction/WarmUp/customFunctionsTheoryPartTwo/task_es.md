Si una función puede expresarse en [una declaración](https://kotlinlang.org/docs/idioms.html#single-expression-functions) (una acción en el código), la palabra clave `return`, el tipo del valor de retorno y las llaves pueden omitirse. Por ejemplo, considere el siguiente código:
```kotlin
fun myName(intVariable: Int): Int {
    return intVariable + 5
}
```
Es equivalente a:
```kotlin
fun myName(intVariable: Int) = intVariable + 5
```

Estas funciones generalmente ayudan a hacer el código más corto y escribir código al estilo más propio de Kotlin.