Una expresión `if` puede tener más de dos ramas `if..else`: también puede haber algunas intermedias:
```kotlin
if (x > 0) {
    TODO("Not implemented yet")
} else if (x == 0) {
    TODO("Not implemented yet")
}
```
Otro ejemplo:
```kotlin
if (x > 0) {
    TODO("Not implemented yet")
} else if (x == 0) {
    TODO("Not implemented yet")
} else if (x < 0 && x != 5) {
    TODO("Not implemented yet")
} else {
    TODO("Not implemented yet")
}
```