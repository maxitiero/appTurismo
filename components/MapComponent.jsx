import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Linking, Text, Image } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants';

export default function MapComponent({ pointsOfInterest }) {
  console.log(pointsOfInterest);
  const initialRegion = {
    latitude: -34.9206722, // Latitud inicial (Plaza Moreno)
    longitude: -57.9561499, // Longitud inicial
    latitudeDelta: 0.0922, // Zoom del mapa
    longitudeDelta: 0.0421,
  };

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  const googleApiKey = Constants.expoConfig.extra.googleApiKey;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} // Región inicial del mapa
        showsUserLocation={true} // Muestra la ubicación del usuario (si se otorgan permisos)
      >
        {/* Trazar ruta entre puntos */}
        {pointsOfInterest.length > 1 && (
          <MapViewDirections
            origin={{
              latitude: pointsOfInterest[0].latitude,
              longitude: pointsOfInterest[0].longitude,
            }}
            destination={{
              latitude: pointsOfInterest[pointsOfInterest.length - 1].latitude,
              longitude: pointsOfInterest[pointsOfInterest.length - 1].longitude,
            }}
            waypoints={pointsOfInterest.slice(1, -1).map(point => ({
              latitude: point.latitude,
              longitude: point.longitude,
            }))}
            apikey={googleApiKey} // Acceso a la API key desde app.json
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
        {/* Marcadores y Callouts */}
        {pointsOfInterest.map((point) => (
          <Marker
            key={point.id}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude,
            }}
          >
            {point.image ? (
              <Image
                source={{ uri: point.image }}
                style={styles.markerImage}
              />
            ) : null}
            <Callout onPress={() => handleLink(point.url)}>
              <View>
                <Text>{point.title}</Text>
                <Text>{point.description}</Text>
                <Text style={{ color: "blue" }}>Ver más</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerImage: {
    width: 50, // Tamaño del marcador
    height: 50,
    borderRadius: 25, // Forma circular
    borderWidth: 2, // Ancho del borde
    borderColor: "#ffffff", // Color del borde (blanco en este caso)
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 5, // Radio de la sombra
    elevation: 3, // Elevación (para Android)
  }
});
