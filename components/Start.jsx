import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";

export default function Start() {
    //Direcciona al usuario hacia el principio del recorrido
    const direccionar = () => {

    }
    const mostrarAlerta = () => {
        Alert.alert(
            "¡Inicia el Recorrido!",
            "¿Desea dirigirse al punto de partida?",
            [
                { text: "Aún no", style: "cancel"},
                { text: "Por supuesto",  onPress: () => console.log("Aceptado")}
            ],
            {cancelable: true} //permite cerrar el alert tocando fuera
        );

    };
    useEffect(() => {
        mostrarAlerta();
      }, []);
    return(

        <View style={styles.container}>

        </View>

    );

}

const styles = StyleSheet.create({
    container:{
        
        justifyContent: "center",
        alignItems: "center",
        },
   
});