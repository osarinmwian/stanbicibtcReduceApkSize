import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RNRestart from "react-native-restart";

const handleRestart = () => {
  RNRestart.Restart();
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 24,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 48,
  },
});

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
