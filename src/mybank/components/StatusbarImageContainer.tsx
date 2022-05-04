import React, { ReactNode } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box } from "@/shared/components/Layout";

interface Style {
  imageName: number;
  children: ReactNode;
}
const StatusbarImageContainer = ({ children, imageName }: Style) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={imageName}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <Box
            backgroundColor="transparent"
            height={
              Platform.OS === "android" ? insets.top + RFValue(12) : RFValue(5)
            }
          >
            <StatusBar
              animated
              backgroundColor="transparent"
              barStyle="light-content"
              translucent
            />
          </Box>
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default StatusbarImageContainer;
