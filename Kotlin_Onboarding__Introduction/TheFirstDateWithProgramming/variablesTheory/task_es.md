En programación, el concepto de una **variable** es esencial.  
Una variable es una especie de caja que almacena algún valor.  
Cada variable tiene un _nombre_, un _tipo_ y un _valor_.

Para declarar una variable en Kotlin,  
necesitas usar la palabra clave [`val`](https://kotlinlang.org/docs/basic-syntax.html#variables),  
especificar su _nombre_ y _tipo_, y después del signo `=`,  
especificar el _valor_ de esta variable.

Por ejemplo, para crear una variable `firstAnswer` y asignarle un [`String`](https://kotlinlang.org/docs/basic-types.html#strings) vacío,  
deberías escribir lo siguiente:
```kotlin
val firstAnswer: String = ""
```

Es **importante** notar que la variable `val` _no se puede cambiar_.  
Esto significa que si le pones un valor, entonces no se le puede asignar otro valor:

```kotlin
val firstAnswer: String = ""
firstAnswer = "nueva cadena no vacía" // ¡ERROR!
```

En Kotlin, el tipo de variable a menudo se puede _omitir_ si puede inferirse del contexto:
```kotlin
val firstAnswer = ""
```

De acuerdo con [la convención de nomenclatura de Kotlin](https://kotlinlang.org/docs/coding-conventions.html#function-names),  
los nombres de variables deben comenzar con una letra minúscula y usar [camel case](https://en.wikipedia.org/wiki/Camel_case) sin guiones bajos.  
Por ejemplo, `firstAnswer` es un nombre correcto, y `first_answer` o `FirstAnswer` son incorrectos.