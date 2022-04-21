import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: string;
  backgroundColor: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: string;
}

const { width } = Dimensions.get("screen");

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, destination } = props;
  const navigation = useNavigation();
  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="sm"
      height={width / 3.9}
      justifyContent="center"
      margin="xs"
      onPress={() => navigation.navigate(destination)}
      padding="xs"
      width={width / 3.6}
    >
      <Image source={image} />
      <Text
        color="whiteColor"
        marginTop="sm"
        textAlign="center"
        variant="regular8"
      >
        {title}
      </Text>
    </Pressable>
  );
}
