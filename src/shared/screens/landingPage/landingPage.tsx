import React from "react";
import { FlatList, Image, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { compass, landingpagebackground } from "@/shared/assets/image";
import logo from "@/shared/assets/image/logo.png";
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
    <Box flex={1}>
      <ImageBackground
        resizeMode="cover"
        source={landingpagebackground}
        style={ROOT}
      >
        <Box alignItems="flex-end">
          <QuickOptionsModal />
        </Box>
        <Box paddingHorizontal="sl">
          <Box alignItems="center" justifyContent="center" marginTop="sl">
            <Image source={logo} style={LOGOSTYLE} />
            <Text color="whiteColor" marginTop="xs" variant="bold24">
              Hello!
            </Text>
          </Box>

          <Box
            alignItems="center"
            justifyContent="space-between"
            marginBottom="sl"
            marginTop="Ml"
            width="100%"
          >
            <FlatList
              data={modules}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text color="whiteColor" marginBottom="ssm">
                  Slide to see more options
                </Text>
              }
              numColumns={Math.ceil(modules.length / 2)}
              renderItem={({ item }) => (
                <ModuleComponent
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  destination={item.destination}
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
              marginVertical="sl"
            >
              <Box>
                <SelectChannelModal />
              </Box>
              <Pressable
                alignItems="center"
                backgroundColor="whiteColor"
                borderRadius={10}
                height={RFValue(51)}
                justifyContent="center"
                width={RFValue(150)}
              >
                <Text variant="medium12">ONE PASS</Text>
              </Pressable>
            </Box>
          </Box>

          <Pressable
            alignItems="center"
            alignSelf="center"
            borderColor="whiteColor"
            borderRadius={10}
            borderWidth={1}
            flexDirection="row"
            height={RFValue(45)}
            justifyContent="center"
            marginTop="ssm"
            width="100%"
          >
            <Image source={compass} />
            <Text color="whiteColor" marginLeft="sl" variant="medium12">
              Explore Quick Services
            </Text>
          </Pressable>
        </Box>
      </ImageBackground>
    </Box>
  );
}
