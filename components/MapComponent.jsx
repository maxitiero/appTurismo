import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import {
    StyleSheet,
    View,
    Linking,
    Text,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
    Button,
} from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import MapViewDirections from "react-native-maps-directions";

export default function MapComponent({ pointsOfInterest }) {
    const initialRegion = {
        latitude: -34.9206722, // Latitud inicial (Plaza Moreno)
        longitude: -57.9561499, // Longitud inicial
        latitudeDelta: 0.009, // Zoom del mapa
        longitudeDelta: 0.009,
    };

    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [destination, setDestination] = useState(null);
    const [travelMode, setTravelMode] = useState("driving");
    const [showModeButtons, setShowModeButtons] = useState(false);

    // para no renderizar todo el tiempo las imágenes de los marcadores
    const MarkerImage = React.memo(({ image }) => (
        <Image
            source={{ uri: image }}
            style={styles.markerImage}
        />
    ));

    useEffect(() => {
        const getLocation = async () => {
            try {
                const { status } =
                    await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setErrorMsg("Permiso de ubicación denegado");
                    setIsLoading(false);
                    return;
                }
                const location = await Location.getCurrentPositionAsync({});
                setUserLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                });
            } catch (error) {
                setErrorMsg("Error al obtener la ubicación.");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getLocation();
    }, []);

    useEffect(() => {
        if (userLocation) {
            mostrarAlerta();
        }
    }, [userLocation]);

    const mostrarAlerta = () => {
        Alert.alert(
            "¡Inicia el Recorrido!",
            "¿Desea dirigirse al punto de partida?",
            [
                { text: "No", style: "cancel" },
                {
                    text: "Sí",
                    onPress: () => {
                        setShowModeButtons(true);
                    },
                },
            ]
        );
    };

    const handleModeChange = (mode) => {
        setTravelMode(mode);
        drawRoute(mode);
    };

    const drawRoute = (mode) => {
        try {
            const firstPoint = customWaypoints[0];
            setDestination({
                latitude: firstPoint.latitude,
                longitude: firstPoint.longitude,
            });
        } catch (error) {
            console.error("Error en drawRoute:", error.message);
            Alert.alert("Error", "No se pudo establecer el destino.");
        }
    };

    const handleLink = async (url) => {
        if (!url) {
            console.log("URL no disponible para este punto.");
            return;
        }

        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                console.log("URL no soportada:", url);
            }
        } catch (error) {
            console.error("Error al abrir el enlace:", error);
        }
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando Ubicación...</Text>
            </View>
        );
    }

    const googleApiKey = Constants.expoConfig.extra.googleApiKey;

    const customWaypoints = [
        { latitude: -34.920995, longitude: -57.956145 },
        { latitude: -34.921426, longitude: -57.956304 },
        { latitude: -34.921714, longitude: -57.955817 },
        { latitude: -34.922078, longitude: -57.955275 },
        { latitude: -34.92254, longitude: -57.954701 },
        { latitude: -34.921899, longitude: -57.953967 },
        { latitude: -34.921344, longitude: -57.954501 },
        { latitude: -34.920647, longitude: -57.953672 },
        { latitude: -34.920959, longitude: -57.953117 },
        { latitude: -34.920894, longitude: -57.952965 },
        { latitude: -34.916268, longitude: -57.947846 },
        { latitude: -34.915443, longitude: -57.947873 },
        { latitude: -34.915369, longitude: -57.94775 },
        { latitude: -34.915208, longitude: -57.94775 },
        { latitude: -34.915209, longitude: -57.948003 },
        { latitude: -34.9144, longitude: -57.949071 },
        { latitude: -34.914287, longitude: -57.948922 },
        { latitude: -34.914242, longitude: -57.948819 },
        { latitude: -34.914211, longitude: -57.948685 },
        { latitude: -34.914209, longitude: -57.948584 },
        { latitude: -34.914223, longitude: -57.948441 },
        { latitude: -34.914259, longitude: -57.948324 },
        { latitude: -34.914339, longitude: -57.948181 },
    ];

    const handleCalloutPress = (description, url) => {
        Speech.speak(description, {
            language: "es",
            pitch: 1,
            rate: 1.0,
            onDone: () => handleLink(url), // Abrir el enlace solo después de leer
        });
    };

    return (
        <View style={styles.container}>
            {showModeButtons && (
                <View style={styles.modeContainer}>
                    <Button
                        title="Caminando"
                        color="green"
                        onPress={() => handleModeChange("WALKING")}
                    />
                    <Button
                        title="Vehículo"
                        onPress={() => handleModeChange("DRIVING")}
                    />
                </View>
            )}
            <MapView
                style={styles.map}
                initialRegion={userLocation || initialRegion}
                showsUserLocation={true}
            >
                {destination && (
                    <MapViewDirections
                        origin={userLocation}
                        destination={destination}
                        mode={travelMode}
                        apikey={googleApiKey}
                        strokeWidth={5}
                        strokeColor="#4285F4"
                        onError={(error) =>
                            console.error("Error al trazar la ruta:", error)
                        }
                    />
                )}
                <Polyline
                    coordinates={customWaypoints}
                    strokeColor="#34A853"
                    strokeWidth={5}
                />
                {pointsOfInterest.map((point) => (
                    <Marker
                        key={point.id}
                        coordinate={{
                            latitude: point.latitude,
                            longitude: point.longitude,
                        }}
                    >
                        {point.image && <MarkerImage image={point.image} />}
                        <Callout
                            onPress={() => {
                                handleCalloutPress(
                                    point.description,
                                    point.url
                                );
                            }}
                        >
                            <View style={styles.calloutContainer}>
                                <Text style={styles.titleText}>
                                    {point.title}
                                </Text>
                                <Text style={styles.descriptionText}>
                                    {point.description}
                                </Text>
                                <Text style={styles.textSub}>
                                    Presione aquí para escuchar la descripción y
                                    ser redirigido a un enlace con más
                                    información.
                                </Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    markerImage: {
        width: 50,              // Tamaño del marcador
        height: 50,
        borderRadius: 25,       // Forma circular
        borderWidth: 2.5,       // Ancho del borde
        borderColor: "white", // Color del borde (blanco en este caso)
        shadowColor: "#000",    // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3,     // Opacidad de la sombra
        shadowRadius: 5,        // Radio de la sombra
        elevation: 3,           // Elevación (para Android)
    },
    calloutContainer: {
        minWidth: 200,
        maxWidth: 250,
        padding: 10,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        backgroundColor: "#007bff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        textAlign: "center",
        marginVertical: 5,
    },
    modeContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Fondo translúcido
        padding: 10,
        borderRadius: 5,
    },
    textSub: {
        color: "blue",
        textDecorationLine: "underline",
    },
});
