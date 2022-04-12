import { storiesOf } from "@storybook/react-native";
import React from "react";

import {
  BaseButton,
  GradientButton,
  PrimaryButton,
} from "@/shared/components/Buttons";
import { Text } from "@/shared/components/Typography";

import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Base Button Filled", () => (
    <BaseButton onPress={() => {}}>
      <Text color="whiteColor">Base Button Filled</Text>
    </BaseButton>
  ))
  .add("Base Button Outlined", () => (
    <BaseButton onPress={() => {}} variant="outlined">
      <Text color="primaryColor">Base Button Outlined</Text>
    </BaseButton>
  ))
  .add("Base Button Ghost", () => (
    <BaseButton onPress={() => {}} variant="ghost">
      <Text color="primaryColor">Base Button Ghost</Text>
    </BaseButton>
  ))
  .add("Base Button Disabled", () => (
    <BaseButton disabled onPress={() => {}}>
      <Text color="whiteColor">Base Button Disabled</Text>
    </BaseButton>
  ))
  .add("Base Button Filled with Icon", () => (
    <BaseButton leftIcon="compass" onPress={() => {}}>
      <Text color="whiteColor">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Base Button Filled with both Icon", () => (
    <BaseButton leftIcon="compass" onPress={() => {}} rightIcon="compass">
      <Text color="whiteColor">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Base Button Outlined with Icon", () => (
    <BaseButton
      leftIcon="compass"
      leftIconProps={{
        color: "primaryColor",
      }}
      onPress={() => {}}
      variant="outlined"
    >
      <Text color="primaryColor">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Base Button Ghost with Icon", () => (
    <BaseButton
      leftIcon="compass"
      leftIconProps={{
        color: "primaryColor",
      }}
      onPress={() => {}}
      variant="ghost"
    >
      <Text color="primaryColor">Base Button Icon</Text>
    </BaseButton>
  ))
  .add("Primary Button Loading", () => (
    <PrimaryButton
      isLoading
      label="Primary Button"
      labelProps={{
        color: "whiteColor",
      }}
      onPress={() => {}}
    />
  ))
  .add("Primary Button Loading With Icon", () => (
    <PrimaryButton
      isLoading
      label="Primary Button"
      labelProps={{
        color: "whiteColor",
      }}
      leftIcon="compass"
      onPress={() => {}}
    />
  ))
  .add("Gradient Button", () => (
    <GradientButton borderRadius="lg" onPress={() => {}}>
      <Text color="whiteColor">Gradient Button</Text>
    </GradientButton>
  ))
  .add("Gradient Button small", () => (
    <GradientButton borderRadius="lg" onPress={() => {}} size="sm">
      <Text color="whiteColor">Gradient Button Small</Text>
    </GradientButton>
  ))
  .add("Base Button Small", () => (
    <BaseButton onPress={() => {}} size="sm">
      <Text color="whiteColor" fontVariant="caption">
        Base Button Small
      </Text>
    </BaseButton>
  ))
  .add("Base Button Large", () => (
    <BaseButton onPress={() => {}} size="lg">
      <Text color="whiteColor" fontVariant="h2">
        Base Button Large
      </Text>
    </BaseButton>
  ));
