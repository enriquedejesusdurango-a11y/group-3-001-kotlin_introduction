import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const resetProgreso = async () => {
  try {
    await AsyncStorage.clear(); // 🔥 Borra TODO lo guardado en AsyncStorage
    alert("Progreso eliminado ✅");
  } catch (error) {
    console.error("Error al borrar el progreso:", error);
  }
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📖✨</Text>
      <Text style={styles.title}>📚 Bienvenido a StudyApp 📚</Text>
      <Text style={styles.subtitle}>
        Organiza tus unidades, haz quizzes y revisa tu progreso 🚀
      </Text>

      <Button title="Ver Unidades" onPress={() => router.push("/(tabs)/unidad")} />
      <Button title="Hacer Quiz" onPress={() => router.push("/(tabs)/quiz")} />
      <Button title="Ver Progreso" onPress={() => router.push("/(tabs)/progreso")} />
      {/* <Button title="Nada" onPress={resetProgreso} /> -> boton para eliminar todo */} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
