### 1. Expresiones lambda

A menudo, las funciones integradas que trabajan con colecciones aceptan [expresiones lambda](https://kotlinlang.org/docs/lambdas.html#lambda-expressions-and-anonymous-functions).
Hablaremos de ellas en detalle más adelante, pero por ahora es suficiente saber que:
- ofrecen una manera especial de decirle a las funciones integradas qué deben hacer con _cada_ elemento de la colección;
- tienen una sintaxis especial.

Considera el siguiente ejemplo que recorre una palabra y conserva solo los símbolos `A`:
```kotlin
var result = ""
for (symbol in "ABCDDD") {
   if (symbol == 'A') {
      result += symbol
   }
}
```

Usamos las construcciones ya familiares como `for` y `if`, pero también se puede reescribir mediante funciones integradas y expresiones lambda:

```kotlin
// Conserva solo el símbolo A
"ABCDDD".filter { symbol: Char -> symbol == 'A' }
```
En este caso, estamos usando una expresión lambda (una condición),
la cual se aplicará a **cada** elemento de la colección a través de la función integrada `filter`.
La expresión lambda toma un parámetro `Char` (carácter) y lo compara con el carácter `A`
(para los caracteres necesitamos usar comillas simples).

El signo `->` indica el final de la parte izquierda de la expresión lambda con los argumentos.
La parte derecha de la expresión lambda (después de `->`) indica qué **exactamente** debemos hacer: por ejemplo, comparar el `symbol` con 'A'.

### 2. Diferentes maneras de trabajar con argumentos en expresiones lambda

En el ejemplo anterior, usamos la forma completa para los argumentos de la expresión lambda: el nombre y tipo del argumento.

Si el tipo del argumento es claro por el contexto (como usualmente ocurre con colecciones),
entonces el tipo puede omitirse:
```kotlin
"ABCDDD".filter { symbol -> symbol == 'A' }
```

Además, si solo necesitas un argumento,
este argumento ya tiene un nombre incorporado `it`, y en este caso también puede omitirse:
```kotlin
"ABCDDD".filter { it == 'A' }
```