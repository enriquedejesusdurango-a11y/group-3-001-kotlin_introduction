El operador condicional (la [expresión `if`](https://kotlinlang.org/docs/control-flow.html#if-expression)) 
se utiliza cuando el programa tiene alguna elección.
Por ejemplo, si la variable contiene un número positivo, muéstralo en la pantalla,
de lo contrario, no hagas nada.
O, si la conjetura coincide con el secreto, termina el juego.

Considera el siguiente ejemplo:
```kotlin
if (y > 0) {
    println(y)
}
```
Otro ejemplo:
```kotlin
if (x > y) {
    println(x)
} else {
    // La condición opuesta: x <= y
    println(y)
}
```

Para la rama `else`, se utiliza la reversa de la condición original: por ejemplo,
para `x > y`, la condición opuesta es `x <= y`.