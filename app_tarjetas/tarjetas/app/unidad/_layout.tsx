import { Stack } from "expo-router";

export default function UnidadLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Todas las pantallas dentro de unidad SIN header
      }}
    />
  );
}
