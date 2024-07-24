import { useState } from "react";
import { Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { globalStyles } from "../theme/global.styles";

export const CounterScreenM3 = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode="contained"
      >
        Increment
      </Button> */}
      <FAB
        style={globalStyles.fab}
        icon={"plus"}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
