Durante esta lección, aprenderemos teoría sobre bucles en Kotlin.

#### 1. Qué son los bucles

A veces, las mismas acciones necesitan repetirse varias veces: por ejemplo, jugar varias rondas de un juego o imprimir el mismo texto en la pantalla. Para resolver este problema, se pueden usar bucles. Los bucles pueden ejecutarse mientras una cierta condición es verdadera (el [bucle `while`](https://kotlinlang.org/docs/basic-syntax.html#while-loop)) o pueden repetirse un cierto número de veces (el [bucle `for`](https://kotlinlang.org/docs/control-flow.html#for-loops)).

#### 2. Los bucles `while` y `do-while`

Los bucles `while` suelen utilizar valores `Boolean`, por ejemplo:
```kotlin
while(y < 10) {
    // Hacer algo
}
```
Esto ejecutará las acciones (el cuerpo del bucle) mientras el valor en `y` sea menor que diez. Aquí, la condición se verificará _primero_ y, a continuación, si es verdadera, se ejecutará el cuerpo del bucle. Si necesitas otro escenario: _primero_ ejecutar el cuerpo del bucle y luego verificar la condición, debes utilizar el bucle `do-while`. En tal caso, el cuerpo se ejecutará al menos una vez:
```kotlin
do {
    // Hacer algo
} while(y < 10)
```

#### 3. El bucle `for`

Los bucles `for` suelen utilizar [Rangos](https://kotlinlang.org/docs/basic-syntax.html#ranges) para definir cuántas veces se ejecutará el cuerpo del bucle:
```kotlin
for (i in 1..3) {
  // Hacer algo
}
```
En este caso, el cuerpo del bucle se ejecutará tres veces: `1 <= i <= 3`. Kotlin tiene [varias maneras](https://kotlinlang.org/docs/idioms.html#iterate-over-a-range) para definir los límites de un rango; por ejemplo, el rango `1 <= i < 3` puede definirse de la siguiente manera:
```kotlin
for (i in 1 until 3) {
  // Hacer algo
}
```

#### 4. Variables `Boolean` en las condiciones del bucle

Si necesitas trabajar con variables `Boolean`, debes omitir la parte de comparación en la condición:
```kotlin
while (b == true) { 
    // ... 
}
```
vs
```kotlin
while (b) {  
    // ... 
}
```

Un ejemplo opuesto:
```kotlin
while (b == false) {
    // ... 
}
```
vs
```kotlin
while (!b) {
    // ... 
}
```