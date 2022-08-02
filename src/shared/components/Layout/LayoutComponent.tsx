import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Icon } from "@/shared/assets/icons";
import logo from "@/shared/assets/image/logo.png";
import { Image } from "@/shared/components/Image/Image";
import { Box } from "@/shared/components/Layout/Box";
import { SafeAreaViewProps } from "@/shared/components/Layout/SafeAreaView";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

export type LayoutComponentProps = SafeAreaViewProps & {
  isIcon?: boolean;
  label: string;
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
  isIcon = false,
  isBackArrow = true,
  children,
}: LayoutComponentProps) {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="primaryColor" flex={1}>
      <StatusBar backgroundColor={palette.primaryColor} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: RFValue(20) }}>
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
            <Text color="whiteColor" textTransform="uppercase" variant="bold14">
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
          backgroundColor="whiteColor"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
          flex={1}
        >
          {children}
        </Box>
      </SafeAreaView>
    </Box>
  );
}

export { LayoutComponent };
