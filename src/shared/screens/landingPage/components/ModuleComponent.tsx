import { Image, ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

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

  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="sm"
      height={RFValue(90)}
      justifyContent="center"
      marginRight="sm"
      marginTop="sm"
      onPress={() => navigation.navigate(destination)}
      width={RFValue(98)}
    >
      <Image source={image} />
      <Text color="whiteColor" marginTop="md" variant="medium8">
        {title}
      </Text>
    </Pressable>
  );
}
