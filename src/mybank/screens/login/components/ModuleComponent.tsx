import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Image, ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface ModuleProps {
  title: unknown;
  backgroundColor: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: string;
}

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, image, destination } = props;
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <Pressable
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="sm"
      height={RFValue(90)}
      justifyContent="center"
      margin="xs"
      onPress={() => navigation.navigate(destination)}
      padding="xs"
      width={RFValue(103)}
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
