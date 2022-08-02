import { storiesOf } from "@storybook/react-native";
import React from "react";

import { mutualfunds } from "@/mybank/assets/image";
// import * as navigation from "@/mybank/navigation/altNavigation";
import SelectChannelCard from "@/shared/components/Card/SelectChannelCard";

import CenterView from "../CenterView";

storiesOf("Select Channel Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Single Card", () => (
    <SelectChannelCard
      backgroundColor="mutualFundsContainer"
      image={mutualfunds}
      title="Mutual Funds"
    />
  ));
