import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  backgroundIcons,
  close,
  logoWithBackdrop,
} from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, SafeAreaView } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import LoginInstructionModal from "@/shared/screens/onePass/components/modals/LoginInstructionModal";
import SelectProfileModal from "@/shared/screens/onePass/components/modals/SelectProfileModal";

import { OnePassNavigationProps } from "./navigation/type";
import { LOGOSTYLE, ROOT } from "./styles/OnePassStyles";

export default function OnePassLanding({
  navigation,
}: OnePassNavigationProps<"OnePass">) {
  const { t } = useTranslation();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const profileBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    // navigation.navigate("OnePassLogin");
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    profileBottomSheetModalRef.current?.present();
  }, []);

  return (
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView flex={1}>
          <Box flex={1} paddingHorizontal="md">
            <Pressable
              alignItems="flex-end"
              justifyContent="center"
              onPress={() => navigation.goBack()}
            >
              <Image source={close} />
            </Pressable>

            <Box alignItems="center" justifyContent="center" marginTop="xxl">
              <Image source={logoWithBackdrop} style={LOGOSTYLE} />
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              marginHorizontal="lg"
              marginTop="md"
            >
              <Text color="textColorInverted" variant="bold24">
                {t("onepass.onePassHome.onePass")}
              </Text>

              <Text
                color="textColorInverted"
                marginTop="sm"
                textAlign="center"
                variant="regular14"
              >
                {t("onepass.onePassHome.welcome")}
              </Text>
            </Box>

            <Box
              alignItems="center"
              bottom={RFValue(10)}
              justifyContent="center"
              marginHorizontal="md"
              position="absolute"
              width="100%"
            >
              <PrimaryButton
                alignItems="center"
                backgroundColor="whiteColor"
                height={RFValue(51)}
                justifyContent="center"
                label={t("onepass.onePassHome.createOnePass")}
                labelProps={{
                  color: "wealthColor",
                }}
                labelVariant="regular14"
                onPress={() => handlePresentModalPress()}
                width={RFValue(300)}
              />
            </Box>
          </Box>

          <LoginInstructionModal
            bottomSheetModalRef={bottomSheetModalRef}
            handleCloseModal={() => handleCloseModal()}
          />

          <SelectProfileModal
            navigation={navigation}
            profileBottomSheetModalRef={profileBottomSheetModalRef}
          />
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}
