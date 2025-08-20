### 1. ¿Qué son las cadenas de texto multilínea?

Cuando se trabaja con cadenas de texto largas, la manera más conveniente es usar las llamadas [cadenas de texto multilínea](https://kotlinlang.org/docs/coding-conventions.html#strings).
A diferencia de las cadenas de texto regulares, están encerradas entre comillas triples:
```kotlin
// Una cadena de texto regular:
val regularString = "Mi texto"

// Una cadena de texto multilínea:
val multiRowString = """
    Primera línea de la cadena\n
    Segunda línea de la cadena
"""
```


### 2. Las funciones `trimIndent` y `trimMargin`

Para un manejo conveniente de tales cadenas, Kotlin proporciona dos funciones: [`trimIndent`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/trim-indent.html) y [`trimMargin`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/trim-margin.html).
`trimIndent` detecta la indentación común más pequeña de todas las líneas de entrada,
la elimina de cada línea y también descarta la primera y la última línea
si están en blanco.
`trimMargin` elimina los caracteres de espacio en blanco precedentes
seguidos por `marginPrefix` de cada línea de una cadena de texto de origen y también elimina
las primeras y últimas líneas si están en blanco.

Por ejemplo, revisa el siguiente código:
```kotlin
fun main() {
    val multiRowString = """
    *Primera línea de la cadena\n
    *Segunda línea de la cadena
    """
    println("______CADENA REGULAR_____")
    println(multiRowString)
    println("______TRIM INDENT_____")
    println(multiRowString.trimIndent())
    println("______TRIM MARGIN CON *_____")
    println(multiRowString.trimMargin("*"))
}
```

La salida será:

```text
______CADENA REGULAR_____

    *Primera línea de la cadena\n
    *Segunda línea de la cadena
    
______TRIM INDENT_____
*Primera línea de la cadena\n
*Segunda línea de la cadena
______TRIM MARGIN CON *_____
Primera línea de la cadena\n
Segunda línea de la cadena
```

En el primer caso, la cadena tendrá sangrías y márgenes adicionales.
Además, cada línea en la cadena tiene el símbolo `*`.
En el segundo caso, la cadena se ve mejor, pero aún tiene un símbolo extra en cada línea.
El último caso parece ser la mejor opción.

Por lo tanto, al trabajar con cadenas de texto multilínea, tales funciones son de gran ayuda.