Al definir un tipo, puedes especificar que también podría tener un valor especial `null`. Es una referencia `null`, que no se refiere a nada. Nos adentraremos en más detalles sobre esto en las siguientes partes del curso; por ahora, es suficiente conocer algunas cosas básicas.

Para indicar que un tipo podría ser `null`, debes añadir `?` al tipo, por ejemplo:
```kotlin
// 'a' puede ser String o null
var a: String? = null
```

Si un valor puede ser `null`, entonces las diversas funciones incorporadas de las que hablamos antes no pueden trabajar automáticamente con dicho valor, por ejemplo:
```kotlin
var a: String? = null
a.length // INCORRECTO!!

var a: String = "texto"
a.length // CORRECTO
```