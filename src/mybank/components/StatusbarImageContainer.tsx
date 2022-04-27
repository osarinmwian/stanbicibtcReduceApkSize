import React, { ReactNode } from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";

interface Style {
  imageName: ImageBackgroundProps & ImageIconPackType;
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
          <Box backgroundColor="transparent" height={insets.top}>
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
