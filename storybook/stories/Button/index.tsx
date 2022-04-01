import React from "react";
import { TouchableHighlight } from "react-native";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

export default function Button({ onPress, children }: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
