import { View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: "https://images.adsttc.com/media/images/6454/4a6b/5732/bf01/7a43/a46c/medium_jpg/el-origen-de-las-ciudades-la-plata-argentina_6.jpg?1683245727",
      }}
      style={styles.background}
    >
      {/* Agregamos un gradiente para mejorar el contraste del contenido */}
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.3)', 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>¡Bienvenid@!</Text>
          <Text style={styles.subtitle}>Descubre los secretos de La Plata</Text>

          {/* Botón personalizado */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/mapScreen')}
          >
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
