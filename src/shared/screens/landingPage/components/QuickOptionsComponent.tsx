import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RefObject } from "react";
import { Image, ImageSourcePropType } from "react-native";

import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import {
  RootNavigationProps,
  RootStackParameterList,
} from "@/shared/navigation/types";
import { RFValue } from "@/shared/utils/functions";

interface ModuleProps {
  title: string;
  image: ImageSourcePropType;
  navigation: RootNavigationProps<"QuickAirtime">["navigation"];
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  destination: keyof RootStackParameterList;
}

export default function QuickOptionsComponent(props: ModuleProps) {
  const { title, image, navigation, destination, bottomSheetModalRef } = props;

  return (
    <Pressable
      alignItems="center"
      borderRadius="md"
      height={RFValue(92)}
      marginHorizontal="sm"
      marginVertical="sm"
      onPress={() => {
        navigation.navigate(destination);
        bottomSheetModalRef.current?.close();
      }}
      width={RFValue(90)}
    >
      <Image source={image} />
      <Text
        color="darkGrey"
        fontSize={RFValue(14)}
        fontWeight="300"
        marginTop="sm"
        textAlign="center"
      >
        {title}
      </Text>
    </Pressable>
  );
}
