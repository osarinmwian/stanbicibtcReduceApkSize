import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image } from "react-native";

import StatusTopBar from "@/mybank/components/StatusbarImageContainer";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { landingpagebackground } from "@/shared/assets/image";
import logo from "@/shared/assets/image/logo.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import SelectChannelModal from "@/shared/components/selectChannelModal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import ModuleComponent from "../../components/Card/SelectChannelCard";
import QuickOptionsModal from "./components/quickOptionsModal";
import modules from "./files/modules";
import { LOGOSTYLE } from "./landingPageStyles";

export default function LandingPage({
  navigation,
}: MyBankNavigationProps<"LandingPage">) {
  const { t } = useTranslation();
  return (
    <>
      <StatusTopBar imageName={landingpagebackground}>
        <Box>
          <Box alignItems="flex-end">
            <QuickOptionsModal />
          </Box>
          <Box paddingHorizontal="md">
            <Box
              alignItems="center"
              justifyContent="center"
              marginBottom="lg"
              marginTop="md"
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
                <SelectChannelModal />

                <PrimaryButton
                  alignItems="center"
                  backgroundColor="whiteColor"
                  height={RFValue(51)}
                  justifyContent="center"
                  label={t("mybank.landing.onePass")}
                  labelProps={{
                    color: "wealthColor",
                  }}
                  labelVariant="medium10"
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
