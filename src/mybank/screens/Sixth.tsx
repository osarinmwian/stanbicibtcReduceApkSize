import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { Box } from "@/shared/components/Layout";

// import { useMybankRoute } from "../utils/hooks";

function SixthScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  // const route = useMybankRoute<"ExampleScreen">();
  return (
    <Box
      alignItems="center"
      backgroundColor="mainBackground"
      flex={1}
      justifyContent="center"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Animated.Text
          entering={LightSpeedInLeft.springify()}
          exiting={LightSpeedOutRight}
          layout={Layout.springify()}
        >
          {t("mybank.welcome")}
        </Animated.Text>
      </TouchableOpacity>
    </Box>
  );
}

export default SixthScreen;
