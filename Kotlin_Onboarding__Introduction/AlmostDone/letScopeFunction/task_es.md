Si necesitas realizar varias acciones al trabajar con un valor `nullable`, puedes utilizar el operador de llamada segura (`?.`) junto con la función de ámbito [`let`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/let.html) de la biblioteca estándar:
```kotlin
fun foo(x: String?): String {
    x?.let {
        println("¡x no es nulo!")
        return x
    }
    return ""
}
```
o
```kotlin
fun foo(x: String?): String {
    x?.let {
        println("¡x no es nulo!")
        return it
    }
    return ""
}
```

Este código es el mismo que:
```kotlin
fun foo(x: String?): String {
    if (x != null) {
        println("¡x no es nulo!")
        return x
    }
    return ""
}
```