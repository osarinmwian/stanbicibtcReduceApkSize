import React from "react";
import { Image, StatusBar, StatusBarStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { logo } from "@/shared/assets/image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette, PaletteType } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface Style {
  backgroundColor: PaletteType;
  barStyle: StatusBarStyle;
}
const BottomTabLandingPageTopBar = ({ backgroundColor, barStyle }: Style) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Box backgroundColor={backgroundColor} height={insets.top}>
        <StatusBar
          animated
          backgroundColor={palette[backgroundColor]}
          barStyle={barStyle}
        />
      </Box>
      <Box
        alignItems="center"
        backgroundColor="primaryColor"
        flexDirection="row"
        justifyContent="space-between"
        paddingBottom="lg"
        paddingHorizontal="md"
      >
        <Text color="whiteColor" fontSize={RFValue(16)}>
          {" "}
          LIFESTYLE{" "}
        </Text>
        <Image
          source={logo}
          style={{ height: RFValue(42), width: RFValue(36.14) }}
        />
      </Box>
    </>
  );
};

export default BottomTabLandingPageTopBar;
