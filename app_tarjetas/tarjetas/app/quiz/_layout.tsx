import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Todas las pantallas dentro de quiz SIN header
      }}
    />
  );
}
