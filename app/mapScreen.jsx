import React from "react";
import { View, StyleSheet } from "react-native";
import MapComponent from "../components/MapComponent";

export default function MapScreen() {
    const pointsOfInterest = [
        {
            id: 1,
            latitude: -34.92298,
            longitude: -57.95484,
            title: "Arzobispado de la Ciudad de La Plata",
            description:
                "Sede central de la Iglesia católica en la ciudad. Desde aquí se coordinan las actividades religiosas y sociales de la arquidiócesis platense.",
            url: "https://arzolap.org.ar/",
            image: "https://lh3.googleusercontent.com/p/AF1QipOyw43t4l5rDCHV0Zsa09FIvCmTmyoNAZD20GIG=s680-w680-h510",
        },
        {
            id: 2,
            latitude: -34.922817,
            longitude: -57.956272,
            title: "Catedral de la Inmaculada Concepción",
            description:
                "La Catedral de la Inmaculada Concepción es el templo neogótico más grande de América Latina. Ubicada en el centro de la ciudad, destaca por sus majestuosas torres y hermosos vitrales.",
            url: "https://turismo.laplata.gob.ar/la-catedral/",
        },
        {
            id: 3,
            latitude: -34.920939,
            longitude: -57.956669,
            title: "Museo Dardo Rocha",
            description:
                "Ubicado en la antigua residencia del fundador de la ciudad, este museo conserva objetos históricos y documentos sobre la creación de La Plata.",
            url: "https://es.wikipedia.org/wiki/Museo_Dardo_Rocha",
        },
        {
            id: 4,
            latitude: -34.920995,
            longitude: -57.956145,
            title: "Plaza Moreno",
            description:
                "Plaza fundacional de La Plata y uno de sus puntos más emblemáticos, es el corazón histórico y geográfico de la ciudad. ",
            url: "https://es.wikipedia.org/wiki/Plaza_Moreno",
        },
        {
            id: 5,
            latitude: -34.9214,
            longitude: -57.95608,
            title: "El Pulpito",
            description:
                "Local icónico de comida rápida en la Plaza Moreno, conocido por su ambiente relajado y su variado menú de hamburguesas, empanadas y pizzas. Fue un punto de encuentro popular entre los platenses.",
            url: "https://www.instagram.com/elpulpito14y50/o",
        },
        {
            id: 6,
            latitude: -34.92152,
            longitude: -57.95531,
            title: "Estatua Las Cuatro Estaciones: Invierno",
            description:
                "Local icónico de comida rápida en la Plaza Moreno, conocido por su ambiente relajado y su variado menú de hamburguesas, empanadas y pizzas. Fue un punto de encuentro popular entre los platenses.",
        },
        {
            id: 7,
            latitude: -34.92205,
            longitude: -57.95499,
            title: "Monumento al Decamisado",
            description:
                "Escultura que rinde homenaje al movimiento popular de los decamisados durante la Revolución del 25 de mayo de 1955, que representaron a las masas que apoyaron al gobierno de Perón. El monumento es un símbolo de la lucha social y política.",
        },
        {
            id: 8,
            latitude: -34.922,
            longitude: -57.95466,
            title: "Estatua Las Cuatro Estaciones: Otoño",
            description:
                "Parte de la misma serie escultórica, esta obra refleja la estación de otoño, con formas que evocan el cambio de hojas y la melancolía propia de esa época del año.",
        },
        {
            id: 9,
            latitude: -34.92249,
            longitude: -57.95413,
            title: "Estatua El Arquero",
            description:
                "Escultura en La Plata que representa a un arquero en acción, parte de un homenaje a la cultura deportiva de la ciudad, con una figura dinámica y de gran presencia.",
        },
        {
            id: 10,
            latitude: -34.92141,
            longitude: -57.95447,
            title: "Monumento a Mariano Moreno",
            description:
                "Este monumento rinde homenaje a Mariano Moreno, uno de los principales impulsores de la Revolución de Mayo y secretario de la Primera Junta. La escultura simboliza su legado como defensor de la libertad y la independencia de Argentina. Inaugurado en 1907, es un importante ícono histórico de la ciudad de La Plata.",
        },
        {
            id: 11,
            latitude: -34.92139,
            longitude: -57.95466,
            title: "ADAMANTIUM",
            description:
                "Escultura moderna de gran tamaño ubicada en la Plaza Moreno, creada por el artista Carlos Regazzoni. Compuesta por piezas metálicas ensambladas, la obra es conocida por su estilo abstracto y su impacto visual.",
        },
        {
            id: 12,
            latitude: -34.92162,
            longitude: -57.95289,
            title: "El Morenito",
            description:
                "Local de comida popular en la Plaza Moreno, conocido por sus opciones de comidas rápidas y su ambiente informal. Un lugar clásico para quienes pasaban por el centro de La Plata.",
        },
        {
            id: 13,
            latitude: -34.92123,
            longitude: -57.95379,
            title: "Estatua Las Cuatro Estaciones: Verano",
            description:
                " Otra pieza de la serie Las Cuatro Estaciones, que representa el verano, con formas que evocan el calor, la luz y la vitalidad de la estación, destacando la energía propia de esta época.",
        },
        {
            id: 14,
            latitude: -34.92084,
            longitude: -57.95355,
            title: "Estatua El Pueblo a Raul Alfonsin",
            description:
                "Monumento dedicado a Raúl Alfonsín, ex presidente de Argentina, en reconocimiento a su legado en la restauración de la democracia en el país. La obra es un homenaje a su figura y su lucha por la democracia.",
        },
        {
            id: 15,
            latitude: -34.92074,
            longitude: -57.95446,
            title: "Estatua Las Cuatro Estaciones: Primavera",
            description:
                "Escultura final de la serie Las Cuatro Estaciones, representando la primavera. La obra refleja la renovación, el crecimiento y la belleza propia de la estación, con elementos que simbolizan la floración y la vida.",
        },
        {
            id: 16,
            latitude: -34.92018,
            longitude: -57.95327,
            title: "Municipalidad de La Plata",
            description:
                "Edificio de estilo renacentista alemán, es la sede del gobierno de la ciudad. Se destaca por su arquitectura y el reloj que corona su torre.",
            url: "https://es.wikipedia.org/wiki/Palacio_Municipal_de_La_Plata",
        },

        {
            id: 17,
            latitude: -34.91782,
            longitude: -57.95138,
            title: "Teatro Argentino",
            description:
                "Uno de los teatros más importantes de Argentina, ofrece una amplia agenda de ópera, ballet y conciertos. Su moderna estructura fue reconstruida después de un incendio.",
            url: "https://es.wikipedia.org/wiki/Teatro_Argentino_de_La_Plata",
        },
        {
            id: 18,
            latitude: -34.917635,
            longitude: -57.950164,
            title: "Museo de arte y memoria - CPM",
            description:
                "El Museo de Arte y Memoria se abrió en diciembre de 2002 y significó la puesta en acto de un deseo que la Comisión Provincial por la Memoria tenía desde sus inicios: contar con un espacio de sensibilización y transmisión de la memoria social que abriera el debate por la promoción y defensa de los derechos humanos en la Argentina a través del arte.",
            url: "https://www.comisionporlamemoria.org/sitiosdememoria/ficha/museo-arte-y-memoria/",
        },
        {
            id: 19,
            latitude: -34.91604,
            longitude: -57.94864,
            title: "Palacio de la Legislatura de la Provincia de Buenos Aires",
            description:
                "Majestuoso edificio de estilo neoclásico donde sesiona la legislatura provincial. Sus amplios salones y cúpulas lo hacen un lugar icónico.",
            url: "https://es.wikipedia.org/wiki/Palacio_de_la_Legislatura_de_la_Provincia_de_Buenos_Aires",
        },
        {
            id: 20,
            latitude: -34.91676,
            longitude: -57.94801,
            title: "Sede del Club Estudiantes de La Plata",
            description:
                "Sede del emblemático club deportivo conocido en todo el mundo por sus éxitos en el fútbol. Su sede representa la pasión y tradición de los hinchas platenses.",
            url: "https://estudiantesdelaplata.com/",
        },
        {
            id: 21,
            latitude: -34.915278,
            longitude: -57.948056,
            title: "Plaza San Martín",
            description:
                "Un gran espacio verde con monumentos y jardines. En el centro se levanta una estatua del Libertador, José de San Martín.",
            url: "https://es.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(La_Plata)",
        },
        {
            id: 22,
            latitude: -34.91418,
            longitude: -57.94925,
            title: "Centro Cultural Pasaje Dardo Rocha",
            description:
                "Antiguo edificio ferroviario transformado en centro cultural, alberga exposiciones, talleres y eventos artísticos en el corazón de la ciudad.",
            url: "https://es.wikipedia.org/wiki/Centro_Cultural_Pasaje_Dardo_Rocha",
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
