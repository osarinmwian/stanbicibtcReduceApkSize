import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React, { RefObject, useCallback, useMemo } from "react";
import { Dimensions, FlatList } from "react-native";

import { GradientButton } from "@/shared/components/Buttons";
import { Image } from "@/shared/components/Image";
import { Box } from "@/shared/components/Layout";
import { Backdrop } from "@/shared/components/Modal/Backdrop";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import modules from "../../landingPage/files/modules";

type PropertyType = {
  handleDismissModalPress: () => void;
  bottomRef: RefObject<BottomSheetModal>;
  type: "sign-in" | "sign-up";
};
const { width } = Dimensions.get("screen");

const SelectChannel = ({
  handleDismissModalPress,
  bottomRef,
  type,
}: PropertyType) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["55%", "55%"], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop onPress={handleDismissModalPress} {...props} />
    ),
    [handleDismissModalPress],
  );

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      enableDismissOnClose
      ref={bottomRef}
      snapPoints={snapPoints}
    >
      <Box flex={1}>
        <Box paddingHorizontal="md">
          <Box alignItems="flex-start" marginBottom="md">
            <Text marginBottom="xxs" variant="medium18">
              {t("mybank.selectChannel.selectChannelHeading")}
            </Text>
            <Text variant="regular14">
              {type === "sign-up"
                ? t("mybank.selectChannel.selectChannelSignUpSubTitle")
                : t("mybank.selectChannel.selectChannelSignInSubTitle")}
            </Text>
          </Box>
          <Box>
            <FlatList
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
              }}
              data={modules}
              keyExtractor={(item) => item.id}
              numColumns={Math.ceil(modules.length / 2)}
              renderItem={({ item }) => (
                <Pressable
                  alignItems="center"
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  borderRadius="sm"
                  height={width / 3.9}
                  justifyContent="center"
                  margin="xs"
                  onPress={() => {
                    handleDismissModalPress();
                    navigation.navigate(item.destination);
                  }}
                  padding="sm"
                  width={width / 3.5}
                >
                  <Image source={item.image} />
                  <Text
                    color="whiteColor"
                    marginTop="sm"
                    textAlign="center"
                    variant="regular8"
                  >
                    {item.title}
                  </Text>
                </Pressable>
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </Box>

          {type === "sign-in" && (
            <GradientButton
              alignItems="center"
              borderRadius="md"
              onPress={() => {
                navigation.navigate("OnePass");
                bottomRef.current?.dismiss();
              }}
              size="md"
            >
              <Text color="whiteColor" variant="medium18">
                {t("mybank.selectChannel.signUpWithOnePass")}
              </Text>
            </GradientButton>
          )}
        </Box>
      </Box>
    </BottomSheetModal>
  );
};

export default SelectChannel;
