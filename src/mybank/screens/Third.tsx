import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { Box } from "@/shared/components/Layout";

function ThirdScreen() {
  const navigation = useNavigation();
  return (
    <Box
      alignItems="center"
      backgroundColor="mainBackground"
      flex={1}
      justifyContent="center"
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Transfer", { screen: "SeventhScreen" })
        }
      >
        <Animated.Text
          entering={LightSpeedInLeft.springify()}
          exiting={LightSpeedOutRight}
          layout={Layout.springify()}
        >
          Third Screen
        </Animated.Text>
      </TouchableOpacity>
    </Box>
  );
}

export default ThirdScreen;
