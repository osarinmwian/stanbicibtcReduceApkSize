import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
const Home = () => (
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
);

export { Home };
