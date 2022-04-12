import { storiesOf } from "@storybook/react-native";
import React from "react";

import { BaseTextInput, TextInput } from "@/shared/components/TextInput";

import CenterView from "../CenterView";

storiesOf("Text Input", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Text Input Filled", () => <BaseTextInput />)
  .add("Text Input Filled", () => <TextInput />)
  .add("Text Input Outlined", () => <TextInput variant="outlined" />);
