import * as React from "react";
import { VFC } from "react";

import { StoryBookNavigationProps } from "@/shared/modules/storybook/navigation/types";

import StorybookUIRoot from "../../../../../../storybook";

const HomeScreen: VFC<StoryBookNavigationProps<"Home">> = () => (
  <StorybookUIRoot />
);

export { HomeScreen };
