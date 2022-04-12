import React from "react";
import { FlatList, Image, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { fingerprint } from "@/shared/assets/image";
import back from "@/shared/assets/image/back.png";
import logo from "@/shared/assets/image/logo.png";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import ModuleComponent from "./components/ModuleComponent";
import modules from "./files/modules";
import { BACK, FINGERPRINT, LOGO, ROOT } from "./loginStyles";

export default function LoginScreen({
  navigation,
}: MyBankNavigationProps<"LoginScreen">) {
  return (
    <Box flex={1}>
      <ImageBackground resizeMode="cover" source={loginBackground} style={ROOT}>
        <Box paddingHorizontal="lg">
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={back} style={BACK} />
            </Pressable>
            <Image source={logo} style={LOGO} />
          </Box>

          <Pressable>
            <Text color="whiteColor" marginVertical="sl">
              New here? Register for One Pass
            </Text>
          </Pressable>

          <Pressable>
            <Text color="whiteColor" marginVertical="sm">
              Forgot Password
            </Text>
          </Pressable>
          <Box>
            <Pressable
              alignItems="center"
              alignSelf="center"
              backgroundColor="whiteColor"
              borderColor="whiteColor"
              borderRadius={10}
              borderWidth={1}
              flexDirection="row"
              height={RFValue(45)}
              justifyContent="center"
              marginTop="ssm"
              width="100%"
            >
              <Text color="primaryColor" marginLeft="sl" variant="bold14">
                LOGIN
              </Text>
            </Pressable>

            <Pressable
              alignItems="center"
              borderColor="whiteColor"
              borderRadius={10}
              borderWidth={1}
              height={RFValue(45)}
              justifyContent="center"
              marginTop="ssm"
              width="100%"
            >
              <Text color="whiteColor" variant="bold14">
                LOGIN WITH ONE PASS
              </Text>
            </Pressable>
          </Box>

          <Pressable
            alignItems="center"
            flexDirection="row"
            justifyContent="center"
            marginTop="sl"
          >
            <Image source={fingerprint} style={FINGERPRINT} />
            <Text color="whiteColor" marginLeft="ssm" variant="regular14">
              LOGIN WITH FINGERPRINT
            </Text>
          </Pressable>

          <Box
            alignItems="center"
            justifyContent="space-between"
            marginBottom="sl"
            marginTop="Ml"
            // width="100%"
          >
            <FlatList
              data={modules}
              keyExtractor={(item) => item.id}
              numColumns={3}
              renderItem={({ item }) => (
                <ModuleComponent
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  destination={item.destination}
                  image={item.image}
                  title={item.title}
                />
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
}
