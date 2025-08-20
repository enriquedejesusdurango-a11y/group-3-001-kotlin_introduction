En la tarea anterior, usamos la función _personalizada_ ya implementada `getGameRules`. Esta lección compartirá más detalles sobre cómo puedes crear tus propias funciones.

#### 1. ¿Qué es una función?

Al escribir código, es conveniente dividirlo en unidades independientes—
[**funciones**](https://kotlinlang.org/docs/functions.html), donde cada función realiza una acción _específica_.
Por ejemplo, imprime algo en la pantalla o evalúa el valor de alguna expresión.

Ya hemos visto ejemplos de funciones en este curso, por ejemplo, `main`,
que ampliamos con nuevo código, o funciones _predefinidas_ como `println` y `readlnOrNull`.
Su peculiaridad es que realizan una cierta secuencia de acciones (_siempre la misma_).
Cada función, como `println`, puede ser llamada por su nombre.

#### 2. Cómo crear una nueva función

Para crear una función, necesitas escribir la palabra clave `fun` y darle algún nombre:
```kotlin
fun myName() {
    // Algún código
}
```

#### 3. Argumentos de la función

Además, una función puede tener argumentos.
Estos argumentos están disponibles en el cuerpo de la función.
Los argumentos se declaran entre paréntesis en el formato `nombre: tipo`,
y cada uno de los argumentos puede tener un valor por defecto, por ejemplo:
```kotlin
// Por defecto, intVariable tiene el valor predeterminado 10
fun myName(intVariable: Int = 10, strVariable: String) {
    // Los argumentos están disponibles en la función:
    println("$strVariable: $intVariable")
}
```

#### 4. El valor retornado

La función también puede devolver un valor.
Para eso, debes especificar el tipo del valor de retorno
y devolverlo usando la palabra clave `return`:

```kotlin
fun myName(intVariable: Int, strVariable: String): Int {
    // Los argumentos están disponibles en la función:
    println("$strVariable: $intVariable")
    return intVariable + 5
}
```