import { StyleSheet, Text, View } from "react-native";
const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};
export default FlexScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  box1: {
    backgroundColor: "#5856D6",
    flex: 1, // ->1/6
  },
  box2: {
    backgroundColor: "#F0A23B",
    flex: 2, // ->2/6
  },
  box3: {
    backgroundColor: "#25D366",
    flex: 3, // ->3/6
  },
});
