Bueno, ¡parece que el juego está listo! Pero, ¿qué más queda por hacer?

### 1. ¿Por qué necesitamos informar al usuario sobre problemas?

Al escribir programas, es esencial considerar escenarios de comportamiento _posibles_ y manejarlos adecuadamente. Por ejemplo, en la versión actual del juego, el usuario puede ingresar una palabra que no coincida con los parámetros actuales del juego (el alfabeto, la longitud de la palabra, etc.). En tal caso, sería necesario procesar la situación e informar al usuario sobre el problema. Hacerlo permitiría al usuario solucionar el problema y continuar con el juego.

### 2. Cómo simplificar el operador `if`

Normalmente, para verificar varias condiciones, necesitas usar el operador `if` con múltiples ramas. Sin embargo, si la condicional se utiliza dentro de una función con `return`, se puede omitir la palabra `else`:
```kotlin
fun myFunction(a: Int): String {
    if (a > 0) {
        return "Positive"
    } else if (a == 0) {
        return "Zero"
    } else {
        return "Negative"
    }
}
```
Es equivalente a:
```kotlin
fun myFunction(a: Int): String {
    if (a > 0) {
        return "Positive"
    }
    if (a == 0) {
        return "Zero"
    }
    return "Negative"
}
```