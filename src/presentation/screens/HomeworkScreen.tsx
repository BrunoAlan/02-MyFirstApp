import { StyleSheet, Text, View } from "react-native";
export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  );
};

//Task 1
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//   },
//   orangeBox: {
//     flex: 1,
//     backgroundColor: "#F0A23B",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//   },
// });

//Task 2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//     width: "100%",
//   },
// });

//Task 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//     alignSelf: "flex-end",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//     alignSelf: "center",
//   },
// });

//Task 4
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "space-between",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//     alignSelf: "flex-end",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//     alignSelf: "center",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//   },
// });

//Task 5
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   box: {
//     width: 100,

//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//   },
// });

//Task 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//   },
//   box: {
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//     flex: 1,
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//     flex: 2,
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//     flex: 3,
//   },
// });

//Task 7
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//     alignSelf: "flex-end",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//     alignSelf: "center",
//   },
// });

//Task 8
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//     right: -100,
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//   },
// });

// //Task 9
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425B",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white",
//   },

//   purpleBox: {
//     backgroundColor: "#5856D6",
//     top: 100,
//   },
//   orangeBox: {
//     backgroundColor: "#F0A23B",
//     right: -100,
//   },
//   blueBox: {
//     backgroundColor: "#25D366",
//   },
// });

//Task 9
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425B",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
  },

  purpleBox: {
    backgroundColor: "#5856D6",
  },
  orangeBox: {
    backgroundColor: "#F0A23B",
    top: 50,
  },
  blueBox: {
    backgroundColor: "#25D366",
  },
});
