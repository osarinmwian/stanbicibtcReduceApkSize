import { Image, ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: string;
  image: ImageSourcePropType;
}

export default function QuickOptionsComponent(props: ModuleProps) {
  const { title, image } = props;

  return (
    <Pressable
      alignItems="center"
      borderRadius={10}
      height={RFValue(92)}
      justifyContent="center"
      marginHorizontal="xs"
      width={RFValue(95)}
    >
      <Image source={image} />
      <Text
        color="darkGrey"
        marginTop="s"
        textAlign="center"
        variant="regular10"
      >
        {title}
      </Text>
    </Pressable>
  );
}
