Anteriormente hemos hablado sobre las funciones _integradas_ en Kotlin. Además de las funciones ya familiares para imprimir en la consola, Kotlin también tiene la función [`readlnOrNull`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/readln-or-null.html), que lee los valores ingresados por el usuario y los almacena en una variable:

```kotlin
val myValue = readlnOrNull()
// La variable myValue almacena la entrada del usuario
```

Por ejemplo, en nuestro proyecto **Story twister**, necesitamos hacerle una pregunta al usuario y luego recordar su respuesta. Eso es exactamente para lo que sirve la función `readlnOrNull`. La función le indica al programa que se detenga y espere a que el usuario ingrese algún valor en la consola; luego permite que el programa reciba el valor y, por ejemplo, lo almacene en una variable.

Es importante que en este caso **no** puedes escribir:
```kotlin
val myValue: String = readlnOrNull()
// La variable myValue almacena la entrada del usuario
```

La opción correcta es:
```kotlin
val myValue: String? = readlnOrNull()
// La variable myValue almacena la entrada del usuario
```

Esto se relaciona con la seguridad de nulidad en Kotlin, la cual consideraremos más adelante. Si te interesa este tema, puedes leer más en la [documentación](https://kotlinlang.org/docs/null-safety.html).