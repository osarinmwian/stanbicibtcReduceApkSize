import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
});

export default function Welcome() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome to React Native Storybook</Text>
      <Text style={styles.content}>
        This is a UI Component development environment for your React Native
        app. Here you can display and interact with your UI components as
        stories. A story is a single state of one or more UI components. You can
        have as many stories as you want. In other words a story is like a
        visual test case.
      </Text>
      <Text style={styles.content}>
        We have added some stories inside the &quot;storybook/stories&quot;
        directory for examples. Try editing the
        &quot;storybook/stories/Welcome.js&quot; file to edit this message.
      </Text>
    </View>
  );
}
