import { storiesOf } from "@storybook/react-native";
import React from "react";

import {
  BaseTextInput,
  SecureTextInput,
  TextInput,
} from "@/shared/components/TextInput";

import CenterView from "../CenterView";

storiesOf("Text Input", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Text Input Filled", () => (
    <BaseTextInput placeholder="Enter something" />
  ))
  .add("Base Text Input Filled Medium", () => (
    <BaseTextInput placeholder="Enter something" size="md" />
  ))
  .add("Text Input Filled", () => <TextInput placeholder="Enter something" />)
  .add("Text Input Outlined", () => (
    <TextInput placeholder="Enter something" variant="outlined" />
  ))
  .add("Text Input with left Icon", () => (
    <TextInput leftIcon="compass" placeholder="Enter..." />
  ))
  .add("Text Input with right Icon", () => (
    <TextInput placeholder="Enter..." rightIcon="compass" />
  ))
  .add("Text Input with both Icon", () => (
    <TextInput leftIcon="compass" placeholder="Enter..." rightIcon="compass" />
  ))
  .add("Text Input Outlined with both Icon", () => (
    <TextInput
      leftIcon="compass"
      placeholder="Enter..."
      rightIcon="compass"
      variant="outlined"
    />
  ))
  .add("Secure Text Input", () => (
    <SecureTextInput placeholder="Enter Password..." />
  ))
  .add("Secure Text Input with toggle Icon", () => (
    <SecureTextInput placeholder="Enter Password..." showToggleIcon />
  ));
