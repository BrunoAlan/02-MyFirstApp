import { SafeAreaView } from "react-native";
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import { CounterScreenM3 } from "./src/presentation/screens/CounterM3Screen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Alan Bruno" /> */}
        {/* <CounterScreen /> */}
        <CounterScreenM3 />
      </SafeAreaView>
    </PaperProvider>
  );
}
