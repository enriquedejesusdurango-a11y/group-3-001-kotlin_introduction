import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { saveResultado } from "../storage"; // 👈 importa tu método de storage
import FlashCard from "./FlashCard";

type Tarjeta = { pregunta: string; respuesta: string };
type Unidad = { id: string; nombre: string; descripcion: string; tarjetas: Tarjeta[] };

export default function QuizUnidadScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [unidad, setUnidad] = useState<Unidad | null>(null);
  const [respuestas, setRespuestas] = useState<(null | boolean)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const cargarUnidad = async () => {
        const saved = await AsyncStorage.getItem("unidades");
        if (saved) {
          const todas: Unidad[] = JSON.parse(saved);
          const encontrada = todas.find((u) => u.id === id);
          setUnidad(encontrada || null);

          if (encontrada) {
            setRespuestas(new Array(encontrada.tarjetas.length).fill(null));
            setCurrentIndex(0);
          }
        }
      };
      cargarUnidad();
    }, [id])
  );

  const handleRespuesta = async (esCorrecta: boolean) => {
    if (!unidad) return;
    if (respuestas[currentIndex] !== null) return; // ya respondida

    const nuevas = [...respuestas];
    nuevas[currentIndex] = esCorrecta;
    setRespuestas(nuevas);

    if (currentIndex < nuevas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const buenas = nuevas.filter((r) => r === true).length;
      const malas = nuevas.filter((r) => r === false).length;

      // 👉 Guardar usando el método del storage
      await saveResultado({
        unidadId: id!,
        unidadNombre: unidad.nombre,
        fecha: new Date().toLocaleString(),
        correctas: buenas,
        incorrectas: malas,
      });

      Alert.alert(
        "Resultados",
        'Correctas ✅: '+buenas+'\nIncorrectas ❌: '+malas,
        [{ text: "Salir", onPress: () => router.back() }]
      );
    }
  };

  if (!unidad) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>❌ Unidad no encontrada</Text>
      </View>
    );
  }

  const tarjetaActual = unidad.tarjetas[currentIndex];

  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
      <Text style={styles.title}>
        Estudiando: {unidad.nombre} ({currentIndex + 1}/{unidad.tarjetas.length})
      </Text>

      <FlashCard
        pregunta={tarjetaActual.pregunta}
        respuesta={tarjetaActual.respuesta}
      />

      <View style={styles.botones}>
        <TouchableOpacity
          style={[styles.boton, { backgroundColor: "green" }]}
          onPress={() => handleRespuesta(true)}
          disabled={respuestas[currentIndex] !== null}
        >
          <Text style={styles.botonTexto}>✅ Bien</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boton, { backgroundColor: "red" }]}
          onPress={() => handleRespuesta(false)}
          disabled={respuestas[currentIndex] !== null}
        >
          <Text style={styles.botonTexto}>✖️ Mal</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  error: { fontSize: 18, color: "red", textAlign: "center" },
  botones: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
    width: "80%",
  },
  boton: {
    padding: 15,
    borderRadius: 10,
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    marginTop: 550,
    alignItems: "center",
  },
  botonTexto: { color: "#fff", fontSize: 18, fontWeight: "bold", paddingTop: 22 },
});
