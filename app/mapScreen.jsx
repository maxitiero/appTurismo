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
        {
          id: 3,
          latitude: -34.92,
          longitude: -57.953056,
          title: 'Municipalidad de La Plata',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Palacio_Municipal_de_La_Plata',
        },
        {
          id: 4,
          latitude: -34.920939,
          longitude: -57.956669,
          title: 'Museo Dardo Rocha',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Museo_Dardo_Rocha',
        },
        {
          id: 5,
          latitude: -34.9181,
          longitude: -57.9511,
          title: 'Teatro Argentino',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Teatro_Argentino_de_La_Plata',
        },
        {
          id: 6,
          latitude: -34.917635,
          longitude: -57.950164,
          title: 'Museo de arte y memoria - CPM',
          description: 'El Museo de Arte y Memoria se abrió en diciembre de 2002 y significó la puesta en acto de un deseo que la Comisión Provincial por la Memoria tenía desde sus inicios: contar con un espacio de sensibilización y transmisión de la memoria social que abriera el debate por la promoción y defensa de los derechos humanos en la Argentina a través del arte.',
          url: 'https://es.wikipedia.org/wiki/Palacio_Municipal_de_La_Plata',
        },
        {
          id: 7,
          latitude: -34.915472,
          longitude: -57.948944,
          title: 'Palacio de la Legislatura de la Provincia de Buenos Aires',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Palacio_de_la_Legislatura_de_la_Provincia_de_Buenos_Aires',
        },
        {
          id: 9,
          latitude: -34.915278,
          longitude: -57.948056,
          title: 'Plaza San Martín',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(La_Plata)',
        },
        {
          id: 11,
          latitude: -34.913957,
          longitude: -57.949862,
          title: 'Centro Cultural Pasaje Dardo Rocha',
          description: 'Descripción del Lugar 2',
          url: 'https://es.wikipedia.org/wiki/Centro_Cultural_Pasaje_Dardo_Rocha',
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
