import { Image, ImageSourcePropType } from "react-native";

import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

interface ModuleProps {
  title: string;
  image: ImageSourcePropType;
}

export default function QuickOptionsComponent(props: ModuleProps) {
  const { title, image } = props;

  return (
    <Pressable
      alignItems="center"
      borderRadius="md"
      height={RFValue(92)}
      // justifyContent="center"
      marginHorizontal="sm"
      marginVertical="md"
      width={RFValue(95)}
    >
      <Image source={image} />
      <Text
        color="darkGrey"
        marginTop="sm"
        textAlign="center"
        variant="medium8"
      >
        {title}
      </Text>
    </Pressable>
  );
}
