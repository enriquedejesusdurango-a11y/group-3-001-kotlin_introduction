import AsyncStorage from '@react-native-async-storage/async-storage';

export type Tarjeta = {
  pregunta: string;
  respuesta: string;
};

export type Unidad = {
  id: string; // string para evitar inconsistencias
  nombre: string;
  descripcion: string;
  tarjetas: Tarjeta[];
};

type ResultadoQuiz = {
  unidadId: string;
  unidadNombre: string;
  fecha: string;
  correctas: number;
  incorrectas: number;
};

const UNIDADES_KEY = 'unidades';

// Guardar un resultado
export async function saveResultado(resultado: ResultadoQuiz) {
  const saved = await AsyncStorage.getItem("progreso");
  const resultados: ResultadoQuiz[] = saved ? JSON.parse(saved) : [];
  resultados.push(resultado);
  await AsyncStorage.setItem("progreso", JSON.stringify(resultados));
}

// Obtener todos los resultados
export async function getResultados(): Promise<ResultadoQuiz[]> {
  const saved = await AsyncStorage.getItem("progreso");
  return saved ? JSON.parse(saved) : [];
}


export const getUnidades = async (): Promise<Unidad[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(UNIDADES_KEY);
    return jsonValue ? (JSON.parse(jsonValue) as Unidad[]) : [];
  } catch (e) {
    console.error("Error al obtener unidades", e);
    return [];
  }
};

/**
 * Guarda una unidad y devuelve la unidad guardada con su id.
 * unidadInput no necesita id.
 */
export const saveUnidad = async (unidadInput: Omit<Unidad, 'id'>): Promise<Unidad | null> => {
  try {
    const unidades = await getUnidades();
    const newUnidad: Unidad = {
      id: Date.now().toString(),
      ...unidadInput,
      tarjetas: unidadInput.tarjetas ?? [],
    };
    unidades.push(newUnidad);
    await AsyncStorage.setItem(UNIDADES_KEY, JSON.stringify(unidades));
    return newUnidad;
  } catch (e) {
    console.error("Error al guardar unidad", e);
    return null;
  }
};

export const updateUnidad = async (
  id: string,
  cambios: Partial<Omit<Unidad, 'id'>>
): Promise<Unidad | null> => {
  try {
    const unidades = await getUnidades();
    const index = unidades.findIndex((u) => u.id === id);
    if (index === -1) return null;
    unidades[index] = { ...unidades[index], ...cambios };
    await AsyncStorage.setItem(UNIDADES_KEY, JSON.stringify(unidades));
    return unidades[index];
  } catch (e) {
    console.error("Error al actualizar unidad", e);
    return null;
  }
};

export const deleteUnidad = async (id: string): Promise<boolean> => {
  try {
    const unidades = await getUnidades();
    const nuevas = unidades.filter((u) => u.id !== id);
    if (nuevas.length === unidades.length) {
      // no se encontró el id
      return false;
    }
    await AsyncStorage.setItem(UNIDADES_KEY, JSON.stringify(nuevas));
    return true;
  } catch (e) {
    console.error("Error al eliminar unidad", e);
    return false;
  }
};

export const clearUnidades = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(UNIDADES_KEY);
  } catch (e) {
    console.error("Error al limpiar unidades", e);
  }
};
