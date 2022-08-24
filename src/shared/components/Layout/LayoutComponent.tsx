import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import { Icon } from "@/shared/assets/icons";
import logo from "@/shared/assets/image/logo.png";
import { Image } from "@/shared/components/Image/Image";
import { Box } from "@/shared/components/Layout/Box";
import { SafeAreaViewProps } from "@/shared/components/Layout/SafeAreaView";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

import { ImageBackground } from "./ImageBackground";

export type LayoutComponentProps = SafeAreaViewProps & {
  isIcon?: boolean;
  label: string;
  labelMarginLeftsmallLarge?: boolean;
  isBackArrow?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const styles = StyleSheet.create({
  iconImg: {
    height: RFValue(50),
    width: RFValue(45),
  },
});

function LayoutComponent({
  label,
  labelMarginLeftsmallLarge,
  isIcon = false,
  isBackArrow = true,
  children,
}: LayoutComponentProps) {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: RFValue(20) }}>
        <StatusBar
          backgroundColor={palette.primaryColor}
          style="light"
          translucent
        />
        <ImageBackground flex={1} resizeMode="cover" source={loginBackground}>
          <Box
            alignItems="center"
            flexDirection="row"
            marginBottom="sm"
            marginTop="md"
            paddingHorizontal="md"
          >
            {isBackArrow && (
              <Pressable onPress={navigation.goBack}>
                <Icon name="back" size="sm" />
              </Pressable>
            )}
            <Box
              alignItems={!isBackArrow ? "flex-start" : "center"}
              flex={1}
              justifyContent="center"
            >
              <Text
                color="whiteColor"
                marginLeft={labelMarginLeftsmallLarge ? "sml" : "none"}
                textAlign="center"
                textTransform="uppercase"
                variant="bold14"
              >
                {label}
              </Text>
            </Box>
            {isIcon ? (
              <Image source={logo} style={styles.iconImg} />
            ) : (
              <Box style={styles.iconImg} />
            )}
          </Box>
          <Box
            backgroundColor="primaryColor"
            borderTopLeftRadius="sm"
            borderTopRightRadius="sm"
            flex={1}
          >
            {children}
          </Box>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

export { LayoutComponent };
