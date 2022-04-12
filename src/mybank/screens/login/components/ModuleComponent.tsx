import { useNavigation } from "@react-navigation/native";
import { Image, ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: string;
  backgroundColor: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: string;
}

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, destination } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius={10}
      height={RFValue(80)}
      justifyContent="center"
      marginHorizontal="xs"
      marginVertical="ssm"
      onPress={() => navigation.navigate(destination)}
      // paddingHorizontal="xs"
      width={RFValue(95)}
    >
      <Image source={image} />
      <Text
        color="whiteColor"
        marginTop="s"
        textAlign="center"
        variant="medium12"
      >
        {title}
      </Text>
    </Pressable>
  );
}
