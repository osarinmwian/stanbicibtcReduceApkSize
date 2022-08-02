import React from "react";
import { StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

type CenterViewProps = {
  children: React.ReactNode;
};

export default function CenterView({ children }: CenterViewProps) {
  return <View style={style.main}>{children}</View>;
}
