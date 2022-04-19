import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: unknown;
  backgroundColor: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: string;
}

const { width } = Dimensions.get("screen");

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, destination } = props;
  const navigation = useNavigation();
  const { t } = useTranslation();
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
        {t(`mybank.login.${title}`)}
      </Text>
    </Pressable>
  );
}
