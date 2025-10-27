import { Text, TextInput, View } from "react-native";

const Tugas2 = () => {
  return (
    <View
      style={{
        marginTop: 32,
      }}
    >
      <Text>Nama</Text>
      <TextInput placeholder="Masukkan nama kamu" />
      <Text>Kelas</Text>
      <TextInput placeholder="Masukkan kelas kamu" />
      <Text>Hobi</Text>
      <TextInput placeholder="Masukkan hobi kamu" />
    </View>
  );
};

export default Tugas2;
