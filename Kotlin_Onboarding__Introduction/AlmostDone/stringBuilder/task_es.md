Para crear cadenas, es mejor usar un mecanismo especial, [`StringBuilder`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-string-builder/), que te permite construir una cadena larga a partir de partes. También te permite evitar copiar toda la cadena cada vez que se actualiza, por ejemplo:

```kotlin
var myString = "It"
myString += "is"
myString += "string"
```

En este caso, crearemos una cadena con el texto `It`, luego la recrearemos, pero con el texto adicional `is`, y así sucesivamente. Esto afecta el tiempo de ejecución del programa, así como la cantidad de recursos del ordenador que consume.

`StringBuilder` está diseñado para evitar este tipo de copias. Primero, debes crear una cadena, luego aplicar la función `append` para actualizarla, y finalmente, usar la función `toString` para devolver la cadena resultante:

```kotlin
val sb = StringBuilder()
sb.append("It")
sb.append("is")
sb.append("string")
sb.toString()
```