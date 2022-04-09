import { VFC } from "react";
import { useTranslation } from "react-i18next";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
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
      <PrimaryButton
        label="Go to Storybook"
        onPress={() => props.navigation.replace("StoryBook")}
        variant="filled"
      />
    </Box>
  );
};

export default ExampleScreen;
