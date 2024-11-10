import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapComponent() {
  const initialRegion = {
    latitude: 37.78825,  // Latitud inicial (ej: San Francisco)
    longitude: -122.4324,  // Longitud inicial
    latitudeDelta: 0.0922,  // Zoom del mapa
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}  // Región inicial del mapa
        showsUserLocation={true}  // Muestra la ubicación del usuario (si se otorgan permisos)
      >
        {/* Ejemplo de marcador en el mapa */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Ubicación Ejemplo"
          description="Este es un marcador de ejemplo"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
