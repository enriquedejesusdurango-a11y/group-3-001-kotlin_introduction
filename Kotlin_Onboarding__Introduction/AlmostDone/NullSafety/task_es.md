Vamos a implementar una función para interactuar con el usuario.

### Tarea

Implementa la función `chooseFilter`, que solicita al usuario elegir un filtro, ya sea `borders` o `squared`. El texto completo del mensaje es `Please choose the filter: 'borders' or 'squared'.` Luego, la función debe devolver el filtro elegido.

<div class="hint" title="Haga clic aquí para ver la firma de la función chooseFilter">

La firma de la función es:
```kotlin
fun chooseFilter(): String
```
</div>

Esta función debe usar la función `safeReadLine`. Si el usuario ingresa un nombre de filtro incorrecto, la función debe solicitar al usuario nuevamente con `Please input 'borders' or 'squared'` para asegurar que se ingrese el filtro correcto:

![Funcionamiento de la función `chooseFilter`](../../utils/src/main/resources/images/part1/almost.done/choose_filter.gif "Funcionamiento de la función `chooseFilter`")

**Nota**: para evitar errores de escritura, solo copia el texto de aquí y pégalo en tu código.

Si tienes alguna dificultad, **las pistas te ayudarán a resolver esta tarea**.

----

### Pistas

<div class="hint" title="Haga clic aquí para aprender una manera eficiente de usar `when`">

La expresión <code>when</code> te permite usar varios valores en una rama y definir una variable en el lugar:

```kotlin
when (val input = safeReadLine()) {
    "firstValue", "secondValue" -> {
        TODO()
    }
    else -> TODO()
}
```
</div>