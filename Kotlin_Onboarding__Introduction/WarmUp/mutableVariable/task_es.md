Los bucles a menudo requieren cambiar el valor de una variable.  
Para hacer eso, puedes usar la variable [`var`](https://kotlinlang.org/docs/basic-syntax.html#variables):  
```kotlin
var y = 5
do {
    println(y)
    y += 2
} while(y < 10)
```
Este código inicializa la variable `y` con el valor `5` y luego, cambia la variable en el bucle.  
El bucle se ejecutará en 3 pasos:  
1) y = 5. println(y). y = 7.  
2) porque y < 10, println(y), y = 9.  
3) porque y < 10, println(y), y = 11.  
4) porque y > 10, detiene el bucle.  
   Al final, los siguientes números: 5, 7 y 9 serán impresos en la consola.  