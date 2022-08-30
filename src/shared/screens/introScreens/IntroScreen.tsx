import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
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
import { BaseButton } from "@/shared/components/Buttons";
import { Box, ImageBackground } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

import AnimatedBox from "./AnimatedBox";
import { SelectChannelModal } from "./components";

const allSlides = [
  { id: "oworkf", text: "Bank as quick as you think with this Super App" },
  { id: "sowike", text: "Login made better with One Pass " },
  { id: "apoow2", text: "Invest like a hero with the Mutual Funds module" },
  { id: "as9w3i", text: "Content here for pension module Max of 10 word" },
  { id: "osaooq2", text: "Bank as quick as you think with this Super App" },
  {
    id: "s288348s",
    text: "Enjoy easy banking with the electronic wallet - @ease",
  },
  {
    id: "oworkfo3203",
    text: "Defend your treasures with the new stockbroking  module",
  },
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

export default function IntroScreen({
  navigation,
}: MyBankNavigationProps<"LandingPage">) {
  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const slide = allSlides.map(() => useRef(new Animated.Value(0)).current);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const slideFunction = (active: number) =>
    Animated.timing(slide[active], {
      toValue: 34,
      duration: DURATION,
      useNativeDriver: false,
    });

  const fadeFunction = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: DURATION / 4,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const resetFadeFunction = () => {
    // eslint-disable-next-line array-callback-return
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
      resetFadeFunction();
      fadeFunction();
      slideFunction(activeSlide).start(({ finished }) => {
        if (finished) {
          setActiveSlide(
            activeSlide < allSlides.length - 1 ? activeSlide + 1 : 0,
          );
        }
      });
    }, [activeSlide]),
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [type, setType] = useState<"sign-in" | "sign-up">("sign-in");
  const handlePresentModalPress = (typeToShow: "sign-in" | "sign-up") => {
    setType(typeToShow);
    bottomSheetModalRef.current?.present();
  };

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <>
      <ImageBackground flex={1} source={landingpagebackground}>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ImageBackground flex={1} source={allSlidesBackgrounds[activeSlide]}>
            <Box flex={1}>
              <Box flex={3} mt="lg" p="md">
                <Box flexDirection="row">
                  {allSlides.map((eachSlide, index) => (
                    <Box
                      backgroundColor="transparentWhite"
                      borderRadius="lg"
                      height={4}
                      key={eachSlide.id}
                      mr="sm"
                      width={34}
                    >
                      <Animated.View
                        style={{
                          height: 4,
                          width: slide[index],
                          marginRight: RFValue(7),
                          backgroundColor: palette.whiteColor,
                          borderRadius: 100,
                        }}
                      />
                    </Box>
                  ))}
                </Box>
                <Box p="lg" py="lg">
                  <Text
                    color="whiteColor"
                    fontSize={RFValue(22)}
                    lineHeight={RFValue(22)}
                    variant="bold22"
                  >
                    {allSlides[activeSlide].text}
                  </Text>
                </Box>
              </Box>
              <Box flex={2}>
                <LinearGradient
                  colors={[palette.transparent, palette.black]}
                  start={{ x: 0.005, y: 0 }}
                  style={{ flex: 1 }}
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
                          backgroundColor="whiteColor"
                          onPress={() => handlePresentModalPress("sign-up")}
                          paddingHorizontal="none"
                          size="md"
                          width={Dimensions.get("window").width / 2 - 30}
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
                          backgroundColor="whiteColor"
                          onPress={() => navigation.navigate("LandingPage")}
                          size="md"
                          width={Dimensions.get("window").width / 2 - 30}
                        >
                          <Box width="100%">
                            <Text
                              fontWeight="400"
                              textAlign="center"
                              variant="medium12"
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
          bottomRef={bottomSheetModalRef}
          handleDismissModalPress={handleDismissModalPress}
          type={type}
        />
        <Box bottom="10%" left={0} position="absolute" right={0} top={0}>
          <Box flex={1} flexDirection="row">
            <Box flex={1}>
              <TouchableOpacity
                activeOpacity={0.1}
                onPressIn={() => {
                  if (activeSlide > 0) setActiveSlide(activeSlide - 1);
                }}
                style={{ flex: 1 }}
              >
                <Box flex={1} />
              </TouchableOpacity>
            </Box>
            <Box flex={3} />
            <TouchableOpacity
              onPress={() => {
                setActiveSlide(
                  activeSlide < allSlides.length - 1 ? activeSlide + 1 : 0,
                );
              }}
              style={{ flex: 1 }}
            >
              <Box flex={1} />
            </TouchableOpacity>
          </Box>
        </Box>
      </ImageBackground>
    </>
  );
}
