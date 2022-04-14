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
      borderRadius="sm"
      height={RFValue(90)}
      justifyContent="center"
      margin="xs"
      onPress={() => navigation.navigate(destination)}
      width={RFValue(105)}
    >
      <Image source={image} />
      <Text
        color="whiteColor"
        marginTop="sm"
        textAlign="center"
        variant="regular12"
      >
        {title}
      </Text>
    </Pressable>
  );
}
