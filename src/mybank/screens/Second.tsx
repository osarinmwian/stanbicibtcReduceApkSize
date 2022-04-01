import { useTranslation } from "react-i18next";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { Box } from "@/shared/components/";

function SecondScreen() {
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
    </Box>
  );
}

export default SecondScreen;
