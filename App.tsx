import { SafeAreaView } from "react-native";
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./src/presentation/screens/CounterScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name="Alan Bruno" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
}
