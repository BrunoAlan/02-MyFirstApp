import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export const DimensionsScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.purtpleBox, width: width / 2 }}></View>
      </View>
      <Text>Width: {width}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    backgroundColor: "red",
  },
  purtpleBox: {
    backgroundColor: "purple",
    height: "50%", // 50% of the parent
    width: "50%", // 50% of the parent
  },
});
