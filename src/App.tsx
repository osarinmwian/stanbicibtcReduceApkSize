import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import Navigation from "@/shared/navigation";
import theme from "@/shared/theme";

const styles = StyleSheet.create({
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
      <ThemeProvider theme={theme.lightTheme}>
        <GestureHandlerRootView style={styles.gestureFlex}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
