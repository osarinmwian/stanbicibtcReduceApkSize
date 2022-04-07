import { VFC } from "react";
import { useTranslation } from "react-i18next";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";

const ExampleScreen: VFC<MyBankNavigationProps<"Home">> = (props) => {
  const { t } = useTranslation();

  return (
    <Box
      alignItems="center"
      backgroundColor="mainBackground"
      flex={1}
      justifyContent="center"
    >
      <Animated.Text
        entering={LightSpeedInLeft.springify()}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}
      >
        {t("mybank.welcome")}
      </Animated.Text>
      <BaseButton
        label="Go to Storybook"
        onPress={() => props.navigation.replace("StoryBook")}
      />
    </Box>
  );
};

export default ExampleScreen;
