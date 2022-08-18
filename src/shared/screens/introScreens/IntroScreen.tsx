import React, { useCallback, useRef, useState } from "react";
import { Box, ImageBackground } from "@/shared/components/Layout";
import AnimatedBox from "./AnimatedBox";
import { Animated, Dimensions } from "react-native";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { palette } from "@/shared/theme/palette";
import { LinearGradient } from "expo-linear-gradient";
import { BaseButton } from "@/shared/components/Buttons";

import {
  introBackground1,
  introBackground2,
  introBackground3,
  introBackground4,
  introBackground5,
  introBackground6,
  introBackground7,
  landingpagebackground,
} from "@/shared/assets/image";
import { useFocusEffect } from "@react-navigation/native";
import { SelectChannelModal } from "./components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";

const allSlides = [
  { text: "Bank as quick as you think with this Super App" },
  { text: "Login made better with One Pass " },
  { text: "Invest like a hero with the Mutual Funds module" },
  { text: "Content here for pension module Max of 10 word" },
  { text: "Bank as quick as you think with this Super App" },
  { text: "Enjoy easy banking with the electronic wallet - @ease" },
  { text: "Defend your treasures with the new stockbroking  module" },
];

const allSlidesBackgrounds = [
  introBackground1,
  introBackground2,
  introBackground3,
  introBackground4,
  introBackground5,
  introBackground6,
  introBackground7,
];

const DURATION = 5000;

export default function IntroScreen() {
  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useState(0);
  const slide = allSlides.map(() => useRef(new Animated.Value(0)).current);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const slideFn = (active: number) => {
    return Animated.timing(slide[active], {
      toValue: 34,
      duration: DURATION,
      useNativeDriver: false,
    });
  };

  const fadeFn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: DURATION / 4,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const resetFadeFn = () => {
    slide.map((s, index) => {
      if (index > activeSlide - 1) {
        Animated.timing(slide[index], {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      if (index < activeSlide) {
        Animated.timing(slide[index], {
          toValue: 34,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      resetFadeFn();
      fadeFn();
      slideFn(activeSlide).start(({ finished }) => {
        if (finished) {
          setActiveSlide(
            activeSlide < allSlides.length - 1 ? activeSlide + 1 : 0,
          );
        }
      });
    }, [activeSlide]),
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = (typeToShow: typeof type) => {
    setType(typeToShow);
    bottomSheetModalRef.current?.present();
  };

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const [type, setType] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <>
      <ImageBackground flex={1} source={landingpagebackground}>
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ImageBackground flex={1} source={allSlidesBackgrounds[activeSlide]}>
            <Box flex={1}>
              <Box flex={3} p="md" mt="lg">
                <Box flexDirection="row">
                  {allSlides.map((eachSlide, index) => (
                    <Box
                      key={`slide-${index}`}
                      height={4}
                      width={34}
                      mr="sm"
                      backgroundColor="transparentWhite"
                      borderRadius="lg"
                    >
                      <Animated.View
                        style={{
                          height: 4,
                          width: slide[index],
                          marginRight: RFValue(7),
                          backgroundColor: palette.whiteColor,
                          borderRadius: 100,
                        }}
                      ></Animated.View>
                    </Box>
                  ))}
                </Box>
                <Box p="lg" py="lg">
                  <Text
                    color="whiteColor"
                    variant="bold22"
                    fontSize={RFValue(22)}
                    lineHeight={RFValue(22)}
                  >
                    {allSlides[activeSlide].text}
                  </Text>
                </Box>
              </Box>
              <Box flex={2}>
                <LinearGradient
                  style={{ flex: 1 }}
                  start={{ x: 0.005, y: 0.0 }}
                  colors={[palette.transparent, palette.black]}
                >
                  <Box flex={1} justifyContent="flex-end">
                    <Box
                      flexDirection="row"
                      justifyContent="space-around"
                      mb="md"
                      mx="sm"
                    >
                      <Box>
                        <BaseButton
                          size="md"
                          backgroundColor="whiteColor"
                          width={Dimensions.get("window").width / 2 - 30}
                          paddingHorizontal="none"
                          onPress={() => handlePresentModalPress("sign-up")}
                        >
                          <Box
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                          >
                            <Text fontSize={RFValue(12)} variant="medium12">
                              {t("intro.createAccount").toUpperCase()}
                            </Text>
                          </Box>
                        </BaseButton>
                      </Box>
                      <Box>
                        <BaseButton
                          size="md"
                          backgroundColor="whiteColor"
                          width={Dimensions.get("window").width / 2 - 30}
                          onPress={() => handlePresentModalPress("sign-in")}
                        >
                          <Box width="100%">
                            <Text
                              textAlign="center"
                              variant="medium12"
                              fontWeight="400"
                            >
                              {t("intro.signIn").toUpperCase()}
                            </Text>
                          </Box>
                        </BaseButton>
                      </Box>
                    </Box>
                  </Box>
                </LinearGradient>
              </Box>
            </Box>
          </ImageBackground>
        </Animated.View>
        <AnimatedBox />
        <SelectChannelModal
          type={type}
          bottomRef={bottomSheetModalRef}
          handleDismissModalPress={handleDismissModalPress}
        />
        <Box position="absolute" top={0} left={0} right={0} bottom="10%">
          <Box flex={1} flexDirection="row">
            <Box flex={1}>
              <TouchableOpacity
                activeOpacity={0.1}
                onPressIn={() => {
                  if (activeSlide > 0) setActiveSlide(activeSlide - 1);
                }}
                style={{ flex: 1 }}
              >
                <Box flex={1}></Box>
              </TouchableOpacity>
            </Box>
            <Box flex={3}></Box>
            <TouchableOpacity
              onPress={() => {
                setActiveSlide(
                  activeSlide < allSlides.length - 1 ? activeSlide + 1 : 0,
                );
              }}
              style={{ flex: 1 }}
            >
              <Box flex={1}></Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </ImageBackground>
    </>
  );
}
