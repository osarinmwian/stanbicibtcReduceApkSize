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
import Tile from "@/shared/components/Tile/Tile";

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

      <PrimaryButton
        label="Go to Pay with QR"
        mt="md"
        onPress={() => props.navigation.navigate("Payments")}
        variant="filled"
      />
      <Tile title="The new title" subtitle="subtitle" />
      <Tile title="Manage Transaction Limit" backgroundColor="whiteColor" />
      <Tile title="Refer a friend" />
    </Box>
  );
};

export default ExampleScreen;
