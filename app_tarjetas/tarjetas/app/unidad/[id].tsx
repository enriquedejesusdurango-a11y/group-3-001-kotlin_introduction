import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getUnidades, updateUnidad } from "../storage";

type Tarjeta = {
  pregunta: string;
  respuesta: string;
};

type Unidad = {
  id: string;
  nombre: string;
  descripcion: string;
  tarjetas: Tarjeta[];
};

export default function UnidadScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [unidad, setUnidad] = useState<Unidad | null>(null);
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  // estados edición de unidad
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  // estados edición de tarjetas
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
  const [editPregunta, setEditPregunta] = useState("");
  const [editRespuesta, setEditRespuesta] = useState("");

  // cargar datos
  useEffect(() => {
    const cargarUnidad = async () => {
      const todas = await getUnidades();
      const encontrada = todas.find((u: Unidad) => u.id === id);
      setUnidad(encontrada || null);
    };
    cargarUnidad();
  }, [id]);

  //Eliminar unidad
  const eliminarUnidad = async () => {
    if (!unidad) return;
    Alert.alert(
      "Eliminar unidad",
      '¿Seguro que deseas eliminar "' + unidad.nombre + '"?',
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            const saved = await AsyncStorage.getItem("unidades");
            if (saved) {
              let todas: Unidad[] = JSON.parse(saved);
              todas = todas.filter((u) => u.id !== unidad.id);
              await AsyncStorage.setItem("unidades", JSON.stringify(todas));
              router.back(); // 👈 vuelve a la lista de unidades
            }
          },
        },
      ]
    );
  };

  //Editar unidad
  const editarUnidad = async (
    nuevoNombre: string,
    nuevaDescripcion: string
  ) => {
    if (!unidad) return;
    const saved = await AsyncStorage.getItem("unidades");
    if (saved) {
      let todas: Unidad[] = JSON.parse(saved);
      const index = todas.findIndex((u) => u.id === unidad.id);
      if (index !== -1) {
        todas[index].nombre = nuevoNombre;
        todas[index].descripcion = nuevaDescripcion;
        await AsyncStorage.setItem("unidades", JSON.stringify(todas));
        setUnidad({
          ...unidad,
          nombre: nuevoNombre,
          descripcion: nuevaDescripcion,
        });
      }
    }
  };

  // guardar tarjeta
  const agregarTarjeta = async () => {
    if (!pregunta.trim() || !respuesta.trim() || !unidad) {
      Alert.alert("Error", "Debes ingresar pregunta y respuesta.");
      return;
    }

    const nuevaTarjeta: Tarjeta = { pregunta, respuesta };
    const nuevasTarjetas = [...unidad.tarjetas, nuevaTarjeta];

    await updateUnidad(unidad.id, { tarjetas: nuevasTarjetas });

    setUnidad({ ...unidad, tarjetas: nuevasTarjetas }); // refrescar vista
    setPregunta("");
    setRespuesta("");
    Alert.alert("Éxito", "Tarjeta agregada correctamente ✅");
  };

  //Editar tarjeta
  const editarTarjeta = async (
    index: number,
    nuevaPregunta: string,
    nuevaRespuesta: string
  ) => {
    if (!unidad) return;
    const saved = await AsyncStorage.getItem("unidades");
    if (saved) {
      let todas: Unidad[] = JSON.parse(saved);
      const unidadIndex = todas.findIndex((u) => u.id === unidad.id);
      if (unidadIndex !== -1) {
        todas[unidadIndex].tarjetas[index] = {
          pregunta: nuevaPregunta,
          respuesta: nuevaRespuesta,
        };
        await AsyncStorage.setItem("unidades", JSON.stringify(todas));
        setUnidad({ ...unidad, tarjetas: todas[unidadIndex].tarjetas });
      }
    }
    setEditandoIndex(null);
  };

  //Eliminar tarjeta
  const eliminarTarjeta = async (index: number) => {
    if (!unidad) return;
    Alert.alert("Eliminar tarjeta", "¿Seguro que deseas eliminar esta tarjeta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          const saved = await AsyncStorage.getItem("unidades");
          if (saved) {
            let todas: Unidad[] = JSON.parse(saved);
            const unidadIndex = todas.findIndex((u) => u.id === unidad.id);
            if (unidadIndex !== -1) {
              todas[unidadIndex].tarjetas.splice(index, 1);
              await AsyncStorage.setItem("unidades", JSON.stringify(todas));
              setUnidad({ ...unidad, tarjetas: todas[unidadIndex].tarjetas });
            }
          }
        },
      },
    ]);
  };

  if (!unidad) {
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>Unidad no encontrada ❌</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
      <Text style={styles.title}>{unidad.nombre}</Text>
      <Text style={styles.descripcion}>{unidad.descripcion}</Text>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        {/* Botón editar */}
        <TouchableOpacity
          style={[styles.botonAccion, { backgroundColor: "blue" }]}
          onPress={() => {
            setModoEdicion(true);
            setNuevoNombre(unidad.nombre);
            setNuevaDescripcion(unidad.descripcion);
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Editar</Text>
        </TouchableOpacity>

        {/* Botón eliminar */}
        <TouchableOpacity
          style={[styles.botonAccion, { backgroundColor: "red" }]}
          onPress={eliminarUnidad}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Eliminar</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs de edición unidad */}
      {modoEdicion && (
        <View style={{ marginBottom: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo título"
            value={nuevoNombre}
            onChangeText={setNuevoNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva descripción"
            value={nuevaDescripcion}
            onChangeText={setNuevaDescripcion}
          />

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
            <TouchableOpacity
              style={[
                styles.botonAccion,
                { backgroundColor: "green" },
              ]}
              onPress={() => {
                editarUnidad(nuevoNombre, nuevaDescripcion);
                setModoEdicion(false);
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Guardar cambios</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.botonAccion,
                { backgroundColor: "gray" },
              ]}
              onPress={() => setModoEdicion(false)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Text style={styles.subTitle}>Tarjetas</Text>
      {unidad.tarjetas.length === 0 ? (
        <Text style={{ color: "gray" }}>No hay tarjetas aún.</Text>
      ) : (
        <FlatList
          data={unidad.tarjetas}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={{ fontWeight: "bold" }}>#{index + 1}</Text>

              {editandoIndex === index ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={editPregunta}
                    onChangeText={setEditPregunta}
                    placeholder="Editar pregunta"
                  />
                  <TextInput
                    style={styles.input}
                    value={editRespuesta}
                    onChangeText={setEditRespuesta}
                    placeholder="Editar respuesta"
                  />

                  <TouchableOpacity
                    style={[
                      styles.botonAccion,
                      { backgroundColor: "green", marginTop: 5 },
                    ]}
                    onPress={() =>
                      editarTarjeta(index, editPregunta, editRespuesta)
                    }
                  >
                    <Text style={{ color: "white" }}>Guardar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.botonAccion,
                      { backgroundColor: "gray", marginTop: 5 },
                    ]}
                    onPress={() => setEditandoIndex(null)}
                  >
                    <Text style={{ color: "white" }}>Cancelar</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text>❓ {item.pregunta}</Text>
                  <Text>✅ {item.respuesta}</Text>

                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <TouchableOpacity
                      style={[styles.botonAccion, { backgroundColor: "blue" }]}
                      onPress={() => {
                        setEditandoIndex(index);
                        setEditPregunta(item.pregunta);
                        setEditRespuesta(item.respuesta);
                      }}
                    >
                      <Text style={{ color: "white" }}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.botonAccion, { backgroundColor: "red" }]}
                      onPress={() => eliminarTarjeta(index)}
                    >
                      <Text style={{ color: "white" }}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          )}
        />
      )}

      {/* Inputs para nueva tarjeta */}
      <TextInput
        style={styles.input}
        placeholder="Pregunta..."
        value={pregunta}
        onChangeText={setPregunta}
      />
      <TextInput
        style={styles.input}
        placeholder="Respuesta..."
        value={respuesta}
        onChangeText={setRespuesta}
      />

      {/* Botón agregar tarjeta */}
      <TouchableOpacity style={styles.boton} onPress={agregarTarjeta}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          + Agregar tarjeta
        </Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  descripcion: { fontSize: 16, color: "gray", marginBottom: 15 },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botonAccion: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 3,
  },
  boton: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
