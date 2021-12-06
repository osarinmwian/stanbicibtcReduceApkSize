import React from "react";
import { Pressable, Text, View } from "react-native";
import RNRestart from "react-native-restart";

import { fallbackStyles as styles } from "./styles";

/**
 * Restarts the app on press
 */
const handleRestart = () => {
  RNRestart.Restart();
};

/**
 * Fallback Screen for ErrorBoundary
 */
function FallBack() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Oops 😞!</Text>
      <Text style={styles.descriptionText}>We Encountered an error,</Text>
      <Pressable onPress={handleRestart}>
        <Text>Restart the app</Text>
      </Pressable>
    </View>
  );
}

export default FallBack;
