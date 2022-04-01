import React from "react";
import { Pressable } from "react-native";
import RNRestart from "react-native-restart";

import { Box, Text } from "@/shared/components/";

/**
 * Restarts the app on press
 */
const handleRestart = () => {
  RNRestart.Restart();
};

/**
 * Fallback Screen for ErrorBoundary, this screen is displayed when the app crashes
 * due to an error in our component tree.
 */
function FallBack() {
  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={24} marginBottom="Ml">
        Oops 😞!
      </Text>
      <Text fontSize={16} marginTop="l">
        We Encountered an error,
      </Text>
      <Pressable onPress={handleRestart}>
        <Text>Restart the app</Text>
      </Pressable>
    </Box>
  );
}

export default FallBack;
