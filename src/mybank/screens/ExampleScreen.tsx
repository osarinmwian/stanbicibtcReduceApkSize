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
      backgroundColor="mediumGrey"
      flex={1}
      justifyContent="center"
      padding="md"
    >
      <Animated.Text
        entering={LightSpeedInLeft.springify()}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}
      >
        {t("mybank.welcome")}
      </Animated.Text>
      <PrimaryButton
        label="Go to Loans"
        onPress={() => props.navigation.navigate("LoansNavigation")}
        variant="filled"
      />
      <PrimaryButton
        label="Go to PFM"
        onPress={() => props.navigation.navigate("PfmNavigation")}
        variant="filled"
      />
    </Box>
  );
};

export default ExampleScreen;
