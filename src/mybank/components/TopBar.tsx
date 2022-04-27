import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundProps,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ImageIcon, ImageIconPackType } from "@/shared/assets/icons";
import { logo } from "@/shared/assets/image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

interface Style {
  landingPage: boolean;
  imageName: ImageBackgroundProps & ImageIconPackType;
  heading: string;
}
const BottomTabLandingPageTopBar = ({
  landingPage,
  imageName,
  heading,
}: Style) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={imageName}
        style={{ flex: 0.3 }}
      >
        <SafeAreaView style={{ opacity: 0 }} />
        <Box
          backgroundColor="transparent"
          height={
            Platform.OS === "android" ? insets.top + RFValue(12) : RFValue(5)
          }
          marginTop="md"
        >
          <StatusBar
            animated
            backgroundColor="transparent"
            barStyle="light-content"
            translucent
          />
        </Box>
        {landingPage ? (
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="md"
          >
            <Text color="whiteColor" fontSize={RFValue(16)}>
              {" "}
              {heading}{" "}
            </Text>
            <Image
              source={logo}
              style={{ height: RFValue(42), width: RFValue(36.14) }}
            />
          </Box>
        ) : (
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="md"
          >
            <Pressable onPress={() => navigation.goBack()}>
              <ImageIcon name="arrowLeft" />
            </Pressable>
            <Text color="whiteColor" fontSize={RFValue(16)}>
              {" "}
              {heading}{" "}
            </Text>
            <Box />
          </Box>
        )}
        <SafeAreaView style={{ opacity: 0 }} />
      </ImageBackground>
    </>
  );
};

export default BottomTabLandingPageTopBar;
