import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Asistencia</Text>
      <link href="/about" style={styles.button}>
      Go To About Us
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    fontSize: 18,
    color: "fff",
    backgroundColor: "#0f4736",
  }
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7ac3ad",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});