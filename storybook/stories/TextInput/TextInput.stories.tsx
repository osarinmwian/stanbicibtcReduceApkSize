import { storiesOf } from "@storybook/react-native";
import React from "react";

import { BaseTextInput, TextInput } from "@/shared/components/TextInput";

import CenterView from "../CenterView";

storiesOf("Text Input", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Text Input Filled", () => (
    <BaseTextInput placeholder="Enter something" />
  ))
  .add("Text Input Filled", () => <TextInput />)
  .add("Text Input Outlined", () => (
    <TextInput placeholder="Enter..." variant="outlined" />
  ))
  .add("Text Input with left Icon", () => <TextInput leftIcon="compass" />)
  .add("Text Input with right Icon", () => <TextInput rightIcon="compass" />)
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
  ));
