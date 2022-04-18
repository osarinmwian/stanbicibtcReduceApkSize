import React from "react";
import { FlatList, Image, ImageBackground } from "react-native";

import { loginBackground } from "@/mybank/assets/image/";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import back from "@/shared/assets/image/back.png";
import logo from "@/shared/assets/image/logo.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import ModuleComponent from "./components/ModuleComponent";
import modules from "./files/modules";
import { BACK, LOGO, ROOT } from "./loginStyles";

export default function LoginScreen({
  navigation,
}: MyBankNavigationProps<"LoginScreen">) {
  return (
    <Box flex={1}>
      <ImageBackground resizeMode="cover" source={loginBackground} style={ROOT}>
        <Box paddingHorizontal="md">
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
            <Text color="whiteColor" marginTop="lg">
              New here? Register for One Pass
            </Text>
          </Pressable>

          <Pressable>
            <Text color="whiteColor" marginVertical="sm">
              Forgot Password
            </Text>
          </Pressable>
          <Box>
            <PrimaryButton
              alignItems="center"
              backgroundColor="whiteColor"
              justifyContent="center"
              label="LOGIN"
              labelProps={{ color: "primaryColor" }}
              labelVariant="bold14"
              marginVertical="xs"
              onPress={() => console.log("Baby")}
              paddingVertical="md"
            />
            <PrimaryButton
              alignItems="center"
              borderColor="whiteColor"
              borderWidth={2}
              justifyContent="center"
              label="LOGIN WITH ONE PASS"
              labelProps={{ color: "whiteColor" }}
              labelVariant="bold14"
              marginVertical="xs"
              onPress={() => console.log("Baby")}
              paddingVertical="md"
            />

            <PrimaryButton
              icon="fingerprint"
              justifyContent="center"
              label="LOGIN WITH FINGERPRINT"
              labelProps={{ color: "whiteColor" }}
              labelVariant="regular14"
              marginTop="md"
              onPress={() => console.log("Baby")}
              paddingVertical="md"
            />
          </Box>

          <Box
            alignItems="center"
            justifyContent="space-between"
            marginBottom="sm"
            marginTop="xl"
            width="100%"
          >
            <FlatList
              contentContainerStyle={{ justifyContent: "space-between" }}
              data={modules}
              horizontal
              keyExtractor={(item) => item.id}
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
