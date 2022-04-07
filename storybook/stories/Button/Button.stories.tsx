import { storiesOf } from "@storybook/react-native";
import React from "react";

import { BaseButton } from "@/shared/components/Buttons";

import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Button", () => (
    <BaseButton label="Some Button" onPress={() => {}} />
  ));
