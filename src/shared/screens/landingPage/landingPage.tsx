import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, Image } from "react-native";

import StatusTopBar from "@/mybank/components/StatusbarImageContainer";
import {
  MyBankNavigationProps,
  MyBankRootStackParameterList,
} from "@/mybank/navigation/types";
import { landingpagebackground } from "@/shared/assets/image";
import logo from "@/shared/assets/image/logo.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, ImageBackground } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import SelectChannelModal from "@/shared/components/selectChannelModal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import ModuleComponent from "../../components/Card/SelectChannelCard";
import QuickOptionsModal from "./components/quickOptionsModal";
import modules from "./files/modules";
import { LOGOSTYLE } from "./landingPageStyles";
import BottomTabLandingPageTopBar from "@/mybank/components/bottomTabLandingPageTopBar";
import { loginBackground } from "@/mybank/assets/image";

export default function LandingPage({
  navigation,
}: MyBankNavigationProps<"LandingPage">) {
  const { t } = useTranslation();
  const { height } = Dimensions.get("window");
  return (
    <>
      <StatusTopBar imageName={landingpagebackground}>
        <Box>
          <Box alignItems="flex-end">
            <QuickOptionsModal navigation={navigation} />
          </Box>
          <Box paddingHorizontal="md">
            <Box
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: height / 20,
                marginTop: height / 30,
              }}
            >
              <Image source={logo} style={LOGOSTYLE} />
              <Text color="whiteColor" marginTop="sm" variant="medium18">
                {t("mybank.landing.hello")}
              </Text>
            </Box>

            <Box marginVertical="md">
              <Box>
                <Text color="whiteColor">
                  {t("mybank.landing.slideToSeeMoreOptions")}
                </Text>
              </Box>
              <Box alignItems="center">
                <FlatList
                  data={modules}
                  keyExtractor={(item: { id: string }) => item.id}
                  numColumns={3}
                  renderItem={({ item }) => (
                    <ModuleComponent
                      backgroundColor={
                        item.backgroundColor as PressableProps["backgroundColor"]
                      }
                      image={item.image}
                      onPress={() => navigation.navigate(item.destination)}
                      title={item.title}
                    />
                  )}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              </Box>
            </Box>

            <Box>
              <Pressable alignItems="flex-start" marginTop="md">
                <Text color="whiteColor" marginBottom="xs" variant="regular14">
                  {t("mybank.landing.new")}
                </Text>
              </Pressable>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="md"
                marginTop="sm"
              >
                <SelectChannelModal
                  destination={"OnePass" as keyof MyBankRootStackParameterList}
                  navigation={navigation}
                />

                <PrimaryButton
                  alignItems="center"
                  backgroundColor="whiteColor"
                  height={RFValue(51)}
                  justifyContent="center"
                  label={t("mybank.landing.onePass")}
                  labelProps={{
                    color: "wealthColor",
                  }}
                  labelVariant="medium12"
                  width={RFValue(150)}
                />
              </Box>
            </Box>

            <PrimaryButton
              alignItems="center"
              backgroundColor="transparent"
              borderColor="whiteColor"
              borderRadius="sm"
              borderWidth={2}
              height={RFValue(51)}
              justifyContent="center"
              label={t("mybank.landing.explore")}
              labelProps={{ color: "whiteColor" }}
              labelVariant="regular14"
              leftIcon="compass"
              // size="md"
            />
          </Box>
        </Box>
      </StatusTopBar>
    </>
  );
}
