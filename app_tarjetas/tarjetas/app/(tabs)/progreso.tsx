import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getResultados } from "../storage"; // tu storage

type ResultadoQuiz = {
  unidadId: string;
  unidadNombre: string;
  fecha: string;
  correctas: number;
  incorrectas: number;
};

export default function Progreso() {
  const [resultados, setResultados] = useState<ResultadoQuiz[]>([]);
  const isFocused = useIsFocused(); // 👈 detecta si la pantalla está activa

  useEffect(() => {
    const cargarResultados = async () => {
      const data = await getResultados();
      setResultados(data);
    };

    if (isFocused) { // 👈 solo recarga cuando entras a la pantalla
      cargarResultados();
    }
  }, [isFocused]);

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>📊 Progreso</Text>

      {resultados.length === 0 ? (
        <Text style={{ color: "gray" }}>Aún no has hecho ningún quiz.</Text>
      ) : (
        <FlatList
          data={resultados}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.fecha}>📅 {item.fecha}</Text>
              <Text>📘 Unidad: {item.unidadNombre}</Text>
              <Text>✅ Correctas: {item.correctas}</Text>
              <Text>❌ Incorrectas: {item.incorrectas}</Text>
            </View>
          )}
        />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  fecha: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
