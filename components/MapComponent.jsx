import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Linking, Text } from 'react-native';

export default function MapComponent({ pointsOfInterest }) {
  console.log(pointsOfInterest);
  const initialRegion = {
    latitude:  -34.9206722,  // Latitud inicial (Plaza Moreno)
    longitude: -57.9561499,  // Longitud inicial
    latitudeDelta: 0.0922,  // Zoom del mapa
    longitudeDelta: 0.0421,
  };

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}  // Región inicial del mapa
        showsUserLocation={true}  // Muestra la ubicación del usuario (si se otorgan permisos)
      >
        {/* Marcadores y Callouts */}
        {pointsOfInterest.map((point) => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.title}
            description={point.description}
          >
            <Callout onPress={() => handleLink(point.url)}>
              <View>
                <Text>{point.title}</Text>
                <Text>{point.description}</Text>
                <Text style={{ color: 'blue' }}>Ver más</Text>
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
    width: '100%',
    height: '100%',
  },
});
