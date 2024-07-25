import { SafeAreaView } from "react-native";
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen";
// import { CounterScreen } from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
// import { CounterScreenM3 } from "./src/presentation/screens/CounterM3Screen";
// import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen";
import { DimensionsScreen } from "./src/presentation/screens/DimensionsScreen";
import { PositionScreen } from "./src/presentation/screens/PositionScreen";
import FlexScreen from "./src/presentation/screens/FlexScreen";
import FlexDirectionScreen from "./src/presentation/screens/FlexDirectionScreen";
import { HomeworkScreen } from "./src/presentation/screens/HomeworkScreen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Alan Bruno" /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
