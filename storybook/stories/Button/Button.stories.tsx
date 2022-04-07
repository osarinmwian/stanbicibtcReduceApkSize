import { storiesOf } from "@storybook/react-native";
import React from "react";

import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { Text } from "@/shared/components/Typography";

import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Button Filled", () => (
    <BaseButton onPress={() => {}} variant="filled">
      <Text variant="buttonLabelFilled">Base Button Filled</Text>
    </BaseButton>
  ))
  .add("Base Button Outlined", () => (
    <BaseButton onPress={() => {}} variant="outlined">
      <Text variant="buttonLabelOutlined">Base Button Outlined</Text>
    </BaseButton>
  ))
  .add("Base Button Ghost", () => (
    <BaseButton onPress={() => {}} variant="ghost">
      <Text variant="buttonLabelGhost">Base Button Ghost</Text>
    </BaseButton>
  ))
  .add("Base Button Disabled", () => (
    <BaseButton disabled onPress={() => {}} variant="filled">
      <Text variant="buttonLabelFilled">Base Button Disabled</Text>
    </BaseButton>
  ))
  .add("Base Button Filled with Icon", () => (
    <BaseButton icon="compass" onPress={() => {}} variant="filled">
      <Text variant="buttonLabelFilled">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Base Button Outlined with Icon", () => (
    <BaseButton
      icon="compass"
      iconProps={{
        color: "primaryColor",
      }}
      onPress={() => {}}
      variant="outlined"
    >
      <Text variant="buttonLabelOutlined">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Base Button Ghost with Icon", () => (
    <BaseButton
      icon="compass"
      iconProps={{
        color: "primaryColor",
      }}
      onPress={() => {}}
      variant="ghost"
    >
      <Text variant="buttonLabelGhost">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Primary Button Loading", () => (
    <PrimaryButton
      isLoading
      label="Primary Button"
      labelVariant="buttonLabelFilled"
      onPress={() => {}}
      variant="filled"
    />
  ))
  .add("Primary Button Loading With Icon", () => (
    <PrimaryButton
      icon="compass"
      isLoading
      label="Primary Button"
      labelVariant="buttonLabelFilled"
      onPress={() => {}}
      variant="filled"
    />
  ));
