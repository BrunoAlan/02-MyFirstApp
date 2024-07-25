import { View, StyleSheet } from "react-native";

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}></View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    gap: 20,
  },
  title: {
    fontSize: 30,
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    backgroundColor: "purple",
    flex: 1,
    marginHorizontal: 20,
  },
});
