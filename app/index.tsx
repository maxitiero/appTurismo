import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';


export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pantalla Principal</Text>
      <Button title="Ir a Map Component" onPress={() => router.push('/mapScreen')} />
    </View>
  );
}
