import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapComponent from '../components/MapComponent';

export default function MapScreen() {

    const pointsOfInterest = [
        {
          id: 1,
          latitude: -34.922817,
          longitude: -57.956272,
          title: 'Catedral de la Inmaculada Concepción',
          description: 'Descripción del Lugar 1',
          url: 'https://es.wikipedia.org/wiki/Catedral_de_la_Inmaculada_Concepci%C3%B3n_(La_Plata)',
        },
        {
          id: 2,
          latitude: -34.9206722,
          longitude: -57.9561499,
          title: 'Plaza Moreno',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Plaza_Moreno',
        },
        // Agrega más puntos de interés aquí
      ];

  return (
    <View style={styles.container}>
      <MapComponent pointsOfInterest={pointsOfInterest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
