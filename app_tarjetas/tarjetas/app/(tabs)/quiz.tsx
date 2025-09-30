import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Unidad = {
  id: string;
  nombre: string;
  descripcion: string;
  tarjetas: { pregunta: string; respuesta: string }[];
};

export default function QuizScreen() {
  const [unidades, setUnidades] = useState<Unidad[]>([]);
  const router = useRouter();

  const isFocused = useIsFocused();
  useEffect(() => {
  const cargarUnidades = async () => {
    try {
      const saved = await AsyncStorage.getItem("unidades");
      if (saved) {
        setUnidades(JSON.parse(saved));
      } else {
        setUnidades([]); // si no hay nada, lista vacía
      }
    } catch (e) {
      console.error("Error cargando unidades", e);
    }
  };

  if (isFocused) {
    cargarUnidades(); // se ejecuta cada vez que la pantalla se enfoca
  }
}, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📘 Selecciona una Unidad para realizar un Quiz</Text>

      <FlatList
        data={unidades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.unidadCard}
            onPress={() => router.push({pathname: "/quiz/[id]",
                                        params: { id: item.id },
                                      })
                    }
          >
            <Text style={styles.unidadTitulo}>{item.nombre}</Text>
            <Text style={styles.unidadDescripcion}>{item.descripcion}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No hay unidades aún.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  unidadCard: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginVertical: 8,
  },
  unidadTitulo: { fontSize: 18, fontWeight: "bold" },
  unidadDescripcion: { color: "gray", marginTop: 4 },
});
