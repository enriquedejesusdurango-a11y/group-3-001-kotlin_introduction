Para condiciones complejas en expresiones `if`, se pueden utilizar los [operadores integrados](https://kotlinlang.org/docs/booleans.html) especiales `||` o `&&`:  
`||` es verdadero si _al menos una_ condición es verdadera;  
`&&` es verdadero si _todas_ las condiciones son verdaderas:  
```kotlin
// Será verdadero si x > 5 O y > 5, por ejemplo, x = 3, y = 6 (verdadero) o x = 6, y = 6 (verdadero)
if (x > 5 || y > 5) {
    TODO("Not implemented yet")
}
```
```kotlin
// Será verdadero si x > 5 Y y > 5, por ejemplo, para x = 3, y = 6 (falso) o x = 6, y = 6 (verdadero)
if (x > 5 && y > 5) {
    TODO("Not implemented yet")
}
```