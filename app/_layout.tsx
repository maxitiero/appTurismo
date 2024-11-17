import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: "Entre Cuadras y Diagonales" }}
            />
            <Stack.Screen
                name="mapScreen"
                options={{ title: "Entre Cuadras y Diagonales" }}
            />
        </Stack>
    );
}
