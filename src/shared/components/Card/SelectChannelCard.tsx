import { Dimensions, Image, ImageSourcePropType } from "react-native";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title?: string;
  backgroundColor?: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  onPress: PressableProps["onPress"];
}

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, onPress } = props;
  const { width } = Dimensions.get("screen");
  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="sm"
      height={width / 3.95}
      justifyContent="center"
      marginHorizontal="xs"
      marginTop="sm"
      onPress={onPress}
      width={width / 3.58}
    >
      <Image source={image} />
      <Text color="whiteColor" marginTop="md" variant="medium8">
        {title}
      </Text>
    </Pressable>
  );
}
