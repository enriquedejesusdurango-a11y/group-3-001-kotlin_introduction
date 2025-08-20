Añadamos una función más para ayudarnos a resolver la tarea.

### Tarea

Implementa la función `applyFilter`. Acepta una imagen y un nombre de filtro, aplica la función `trimPicture` a la imagen, luego aplica el filtro especificado y finalmente devuelve la imagen actualizada. Para aplicar un filtro, simplemente llama a una de las funciones ya definidas: `applyBordersFilter` o `applySquaredFilter`.

<div class="hint" title="Haz clic para ver la firma de la función applyFilter">

La firma de la función es:
```kotlin
fun applyFilter(picture: String, filter: String): String
```
</div>

Los valores posibles para el argumento `filter` son:

- `borders` – esto añade un borde a la imagen usando la función `applyBordersFilter`
- `squared` – esto replica la imagen 4 veces usando la función `applySquaredFilter`

Si se utiliza un nombre de filtro no reconocido, la función `applyFilter` lanzará un error para alertar al usuario.