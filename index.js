import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { registerRootComponent } from "expo";

import App from "./src/App";
import i18n from "./src/shared/i18n";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["Setting a timer"]);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
