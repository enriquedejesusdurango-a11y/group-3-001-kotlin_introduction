import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";

type Unidad = {
  id: string;
  nombre: string;
  tarjetas: { pregunta: string; respuesta: string }[];
};

export default function UnidadesScreen() {
  const [unidades, setUnidades] = useState<Unidad[]>([]);
  const router = useRouter();

  // 🔄 Cargar unidades al iniciar
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
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Mis Unidades
      </Text>

      <FlatList
        data={unidades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#f0f0f0",
              borderRadius: 10,
              marginVertical: 5,
            }}
            onPress={() => router.push({pathname: "/unidad/[id]",
                            params: { id: item.id },})}
          >
            <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
            <Text style={{ fontSize: 14, color: "gray" }}>
              {item.tarjetas.length} tarjetas
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No hay unidades aún.</Text>}
      />

      <Button
        title="➕ Crear Unidad"
        onPress={() => router.push("/unidad/crearUnidad")}
      />
    </View>
  );
}
