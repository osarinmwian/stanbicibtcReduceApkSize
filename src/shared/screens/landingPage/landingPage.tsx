import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  MyBankNavigationProps,
  MyBankRootStackParameterList,
} from "@/mybank/navigation/types";
import { landingpagebackground } from "@/shared/assets/image";
import logo from "@/shared/assets/image/logo.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import SelectChannelModal from "@/shared/components/selectChannelModal";
import { Text } from "@/shared/components/Typography";

import ModuleComponent from "./components/ModuleComponent";
import QuickOptionsModal from "./components/quickOptionsModal";
import modules from "./files/modules";
import { LOGOSTYLE, ROOT } from "./landingPageStyles";

export default function LandingPage({
  navigation,
}: MyBankNavigationProps<"LandingPage">) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={landingpagebackground}
        style={ROOT}
      >
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

          <Box alignItems="flex-start" marginVertical="lg">
            <Text color="whiteColor" marginBottom="sm">
              {t("mybank.landing.slideToSeeMoreOptions")}
            </Text>

            <FlatList
              contentContainerStyle={{
                justifyContent: "space-between",
                width: "100%",
              }}
              data={modules}
              keyExtractor={(item: { id: string }) => item.id}
              numColumns={Math.ceil(modules.length / 2)}
              renderItem={({ item }) => (
                <ModuleComponent
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  destination={
                    item.destination as keyof MyBankRootStackParameterList
                  }
                  image={item.image}
                  navigation={navigation}
                  title={item.title}
                />
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
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
          />
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
}
