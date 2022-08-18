import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RefObject } from "react";
import { Image, ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import {
  OnePassNavigationProps,
  OnePassRootStackParameterList,
} from "../navigation/type";

interface ModuleProps {
  title: string;
  background: PressableProps["backgroundColor"];
  image: ImageSourcePropType;
  destination: keyof OnePassRootStackParameterList;
  navigation: OnePassNavigationProps<"OnePass">["navigation"];
  profileBottomSheetModalRef: RefObject<BottomSheetModal>;
}

export default function ProfileComponent(props: ModuleProps) {
  const {
    title,
    background,
    image,
    destination,
    navigation,
    profileBottomSheetModalRef,
  } = props;

  return (
    <Box marginHorizontal="md">
      <Box borderColor="paleGrey" borderWidth={1} />
      <Pressable
        alignItems="center"
        flexDirection="row"
        onPress={() => {
          navigation.navigate(destination);
          profileBottomSheetModalRef.current?.close();
        }}
      >
        <Box
          alignItems="center"
          backgroundColor={background}
          borderRadius="md"
          height={RFValue(50)}
          justifyContent="center"
          marginRight="sm"
          marginVertical="sm"
          width={RFValue(50)}
        >
          <Image source={image} />
        </Box>
        <Text variant="medium14">{title}</Text>
      </Pressable>
    </Box>
  );
}
