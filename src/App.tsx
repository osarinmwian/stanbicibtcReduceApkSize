import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
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
            <BottomSheetModalProvider>
              <Navigation />
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
