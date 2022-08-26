import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { SvgIconPackType } from "@/shared/assets/icons";
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
        marginTop="sm"
        textAlign="center"
        variant="regular12"
        lineHeight={22}
      >
        {title}
      </Text>
    </Pressable>
  );
}
