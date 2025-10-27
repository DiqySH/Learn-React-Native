import LoginScreen from "@/components/Tugas3";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginScreen />
      {/* <Text>Welcome, Diqy 👋</Text> */}
    </View>
  );
}
