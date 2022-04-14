import React from "react";
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
// eslint-disable-next-line prettier/prettier
export default function LandingPage({ navigation }: MyBankNavigationProps<"LandingPage"> ){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={landingpagebackground}
        style={ROOT}
      >
        <Box alignItems="flex-end">
          <QuickOptionsModal />
        </Box>
        <Box paddingHorizontal="md">
          <Box alignItems="center" justifyContent="center" marginTop="md">
            <Image source={logo} style={LOGOSTYLE} />
            <Text color="whiteColor" marginTop="xs" variant="bold24">
              Hello!
            </Text>
          </Box>

          <Box
            alignItems="center"
            justifyContent="space-between"
            marginBottom="md"
            marginTop="md"
            width="100%"
          >
            <FlatList
              data={modules}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text color="whiteColor" marginBottom="lg">
                  Slide to see more options
                </Text>
              }
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
            <Pressable alignItems="flex-start">
              <Text color="whiteColor" variant="regular14">
                New to Stanbic IBTC?
              </Text>
            </Pressable>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginVertical="lg"
            >
              <SelectChannelModal />

              <PrimaryButton
                alignItems="center"
                backgroundColor="whiteColor"
                height={RFValue(51)}
                justifyContent="center"
                label="ONE PASS"
                labelProps={{
                  color: "wealthColor",
                }}
                labelVariant="medium12"
                onPress={() => console.log("bABY")}
                width={RFValue(150)}
              />
            </Box>
          </Box>

          <PrimaryButton
            alignItems="center"
            borderColor="whiteColor"
            borderRadius="sm"
            borderWidth={2}
            height={RFValue(51)}
            icon="compass"
            justifyContent="center"
            label="Explore Quick Services"
            labelProps={{ color: "whiteColor" }}
            labelVariant="regular14"
            marginVertical="xs"
            onPress={() => console.log("Baby")}
          />
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
}
