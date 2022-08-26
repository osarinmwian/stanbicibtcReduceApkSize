import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

import { SvgIconPackType } from "@/shared/assets/icons";
import { IconVector } from "@/shared/assets/icons/IconVector";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

interface ModuleProps {
  title: string;
  backgroundColor: PressableProps["backgroundColor"];
  iconName: SvgIconPackType;
  destination: string;
  textColor: PaletteType;
}

const { width } = Dimensions.get("screen");

export default function ModuleComponent(props: ModuleProps) {
  const { title, backgroundColor, iconName, destination, textColor } = props;
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
      padding="sm"
      width={width / 3.5}
    >
      <IconVector name={iconName} stroke="white" />
      <Text
        color={textColor}
        lineHeight={22}
        marginTop="sm"
        textAlign="center"
        variant="regular12"
      >
        {title}
      </Text>
    </Pressable>
  );
}
