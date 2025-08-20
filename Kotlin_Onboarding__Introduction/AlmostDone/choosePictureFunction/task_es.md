En esta tarea, implementaremos una función que permite al usuario elegir cuál de las imágenes predefinidas desea modificar.

### Tarea

Implementa la función `choosePicture` que permita elegir una imagen predefinida por su nombre.

<div class="hint" title="Haz clic para ver la firma de la función choosePicture">

La firma de la función es:
```kotlin
fun choosePicture(): String
```
</div>

Debes pedir al usuario que elija una imagen por su nombre: 
`Por favor, elige una imagen. Las opciones posibles son: <nombres de imágenes>`.
Necesitas pedir al usuario hasta que ingrese una de las opciones correctas.

Puedes obtener la lista de imágenes predefinidas llamando a la función predefinida `allPictures`:

```kotlin
println(allPictures()) // [spongeBob, simba, brianGriffin, cat, pig, fox, monkey, elephant, android, apple]
```

Para obtener una imagen por su nombre, puedes usar la función predefinida `getPictureByName`,
que devuelve ya sea `String?` – una imagen – o `null` si el nombre ingresado es incorrecto:

```kotlin
println(getPictureByName("brianGriffin")) // devuelve una imagen, ya que "brianGriffin" es parte del resultado de allPictures()
println(getPictureByName("myPicture")) // devuelve NULL, ya que "myPicture" NO está incluido en el resultado de allPictures()
```

**Nota**: para evitar errores tipográficos, simplemente copia el texto de aquí y pégalo en tu código.

La función `choosePicture` debe funcionar de la siguiente manera:

![Funcionamiento de la función `choosePicture`](../../utils/src/main/resources/images/part1/almost.done/choose_picture.gif "Funcionamiento de la función `choosePicture`")