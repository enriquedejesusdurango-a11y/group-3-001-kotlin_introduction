Para trabajar correctamente con valores _nullables_, Kotlin proporciona un mecanismo para la [seguridad de nulos](https://kotlinlang.org/docs/null-safety.html). En términos más simples, en Kotlin, es necesario manejar los valores `null` por separado para que el programa funcione correctamente. Los mecanismos de procesamiento más simples son los operadores [`!!`](https://kotlinlang.org/docs/null-safety.html#the-operator) y [`?:`](https://kotlinlang.org/docs/null-safety.html#elvis-operator) (el operador Elvis).

### 1. El operador `!!`

El operador `!!` simplemente ignora el valor `null` y trabaja con el tipo como si no pudiera haber un valor `null`. Sin embargo, si el programa encuentra el valor `null`, finalizará con un error ([`Null pointer exception`](https://kotlinlang.org/docs/null-safety.html#nullable-types-and-non-null-types), o `NPE`).
```kotlin
var a: String? = null
a!!.length // CORRECTO, pero lanzará NPE
```

### 2. El operador `Elvis` y el mecanismo de conversiones inteligentes

El operador `Elvis` verifica si el valor es `null` y maneja el valor `null` por separado.
```kotlin
var a: String? = null
a?.length ?: error("Encontrar valor nulo") // CORRECTO, el caso con null será manejado por separado
```

El último ejemplo con el operador Elvis es igual al siguiente código:
```kotlin
var a: String? = null
if (a != null) {
    a.length // Podemos usar simplemente length aquí (sin ?) gracias al mecanismo de conversiones inteligentes
} else {
    error("Encontrar valor nulo")
}
```

En este ejemplo, notamos el [mecanismo de conversiones inteligentes](https://kotlinlang.org/docs/typecasts.html#smart-casts). Es un mecanismo especial en Kotlin que puede identificar ciertos casos cuando un valor nullable es siempre no nulo.