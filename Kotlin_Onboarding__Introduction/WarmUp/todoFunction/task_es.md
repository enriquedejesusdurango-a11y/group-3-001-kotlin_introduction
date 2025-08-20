Kotlin tiene una función especial [`TODO()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-t-o-d-o.html),  
que se puede usar como una solución temporal en lugar de implementar el cuerpo de la función:
```kotlin
fun myName(intVariable: Int): Int = TODO("Aún no implementado")
```

Puede ser útil cuando necesitas definir solo las _firmas_ de las funciones para construir la lógica principal del programa,  
y luego implementarlas paso a paso.

Si utilizas la función `TODO`, **debes** poner el tipo de retorno para esta función directamente:

```kotlin
fun correctFunction(intVariable: Int): Int = TODO("Aún no implementado") // CORRECTO
fun incorrectFunction(intVariable: Int) = TODO("Aún no implementado") // INCORRECTO
```