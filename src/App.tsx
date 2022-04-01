import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Home } from "./screens/Home";
import { StoryBook } from "./screens/StoryBook/StoryBook";
import { ErrorBoundary } from "./shared/components/ErrorBoundary";
import theme from "./shared/theme";

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
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureFlex}>
          <Home />
          <StoryBook />
        </GestureHandlerRootView>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
