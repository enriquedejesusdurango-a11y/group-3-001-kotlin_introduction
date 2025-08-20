Ya hemos aprendido cómo generar una lista de letras aleatorias, pero necesitamos trabajar con cadenas de texto. Para unir una lista de elementos en una cadena de texto, puedes usar la función [`joinToString`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/join-to-string.html), pasando el _separador_ — un carácter (o _cadena de texto_) que se usará para separar los elementos — como argumento.:
```kotlin
// El separador es "; ", la cadena resultante es: "6; 6; 6; 6; 6"
List(5) { 6 }.joinToString("; ")
// El separador predeterminado es ", ", la cadena resultante es: "A, A, A, A, A"
List(5) { 'A' }.joinToString()
```