import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ErrorBoundary } from "./shared/components/ErrorBoundary";
import theme from "./shared/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  gestureFlex: {
    flex: 1,
  },
});

/**
 * Root component of the application.
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureFlex}>
          <SafeAreaProvider>
            <View style={styles.container}>
              <Animated.Text
                entering={LightSpeedInLeft.springify()}
                exiting={LightSpeedOutRight}
                layout={Layout.springify()}
              >
                Open up App.js to start working on your app!
              </Animated.Text>
              <StatusBar style="auto" />
            </View>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
