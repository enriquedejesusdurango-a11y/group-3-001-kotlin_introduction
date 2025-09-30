import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { saveUnidad } from "../storage";


export default function CrearUnidad() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const router = useRouter();

  const handleGuardar = async () => {
    if (!titulo.trim()) {
      Alert.alert("Error", "El título no puede estar vacío.");
      return;
    }

    try {
      const saved = await saveUnidad({
        nombre: titulo,
        descripcion,
        tarjetas: [], // arranca vacía
      });

      if (saved) {
        Alert.alert("Éxito", "Unidad guardada correctamente.");
        router.push({
          pathname: "/unidad/[id]",
          params: { id: saved.id },
        }); // 👈 ir directo a la unidad creada
      } else {
        Alert.alert("Error", "No se pudo guardar la unidad.");
      }
    } catch (e) {
      console.error("Error guardando unidad", e);
      Alert.alert("Error", "Ocurrió un problema al guardar.");
    }
  };

  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Crear Unidad
      </Text>

      <Text style={{ marginBottom: 5 }}>Título</Text>
      <TextInput
        placeholder="Escribe el nombre de la unidad"
        value={titulo}
        onChangeText={setTitulo}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 15,
          borderRadius: 8,
        }}
      />

      <Text style={{ marginBottom: 5 }}>Descripción</Text>
      <TextInput
        placeholder="Descripción de la unidad"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          borderRadius: 8,
        }}
      />

      <Button title="Guardar Unidad" onPress={handleGuardar} />
    </View>
    </>
  );
}
