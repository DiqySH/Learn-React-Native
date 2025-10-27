import { Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          fontWeight: 600,
          fontSize: 24,
        }}
      >
        Login
      </Text>
      <View
        style={{
          backgroundColor: "white",
          padding: 24,
          width: 300,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Text>Email:</Text>
        <TextInput placeholder="Masukkan email" />
        <Text>Password:</Text>
        <TextInput placeholder="Masukkan password" />
      </View>
    </View>
  );
};

export default LoginScreen;
