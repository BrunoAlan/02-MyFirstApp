import { StyleSheet, View } from "react-native";
const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  );
};
export default FlexDirectionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: "#5856D6",
  },
  box2: {
    backgroundColor: "#F0A23B",
    alignSelf: "center",
  },
  box3: {
    backgroundColor: "#25D366",
    alignSelf: "flex-end",
  },
});
