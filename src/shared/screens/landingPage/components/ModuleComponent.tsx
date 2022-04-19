import { Dimensions, Image, ImageSourcePropType } from "react-native";

import {
  MyBankNavigationProps,
  MyBankRootStackParameterList,
} from "@/mybank/navigation/types";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: string;
  backgroundColor: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: keyof MyBankRootStackParameterList;
  navigation: MyBankNavigationProps<"LandingPage">["navigation"];
}

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, destination, navigation } = props;
  const { width } = Dimensions.get("screen");
  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="sm"
      height={width / 3.9}
      justifyContent="center"
      marginHorizontal="xs"
      marginTop="sm"
      onPress={() => navigation.navigate(destination)}
      width={width / 3.58}
    >
      <Image source={image} />
      <Text color="whiteColor" marginTop="md" variant="medium8">
        {title}
      </Text>
    </Pressable>
  );
}
