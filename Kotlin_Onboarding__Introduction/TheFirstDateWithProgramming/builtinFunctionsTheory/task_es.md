Kotlin, al igual que cualquier otro lenguaje de programación, ya tiene muchas funciones predefinidas (integradas). Es posible que hayas notado una de ellas en la tarea anterior – `println`. Te permite mostrar el texto pasado como un _argumento_ en la consola. Necesitamos un argumento en este caso para que la función pueda realizar la _misma_ acción sobre _diferentes_ datos.

Por ejemplo, si quieres mostrar dos palabras – `One` y `Two` – en líneas diferentes, entonces en ambos casos necesitas usar la misma función [`println`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/println.html#println) pero _con argumentos diferentes_:
```kotlin
println("One")
println("Two")
```
La salida es:
```text
One
Two
```

Kotlin también tiene otra función similar - [`print`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/print.html#print). La única diferencia con `println` es que no envuelve el texto a una nueva línea. Por lo tanto, si reemplazamos la función `println` del ejemplo anterior con la función `print`, obtenemos el siguiente resultado:

```kotlin
print("One")
print("Two")
```
La salida es:
```text
OneTwo
```

Es **importante** notar que el texto que queremos imprimir en la consola debe estar entre _comillas dobles_.