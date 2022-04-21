import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

function SecondScreen() {
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
          navigation.navigate("Payments", { screen: "EightScreen" })
        }
      >
        <Text>Second Screen</Text>
      </TouchableOpacity>
    </Box>
  );
}

export default SecondScreen;
