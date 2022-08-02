import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { MyBankRootStackParameterList } from "@/mybank/navigation/types";

import modules from "../screens/landingPage/files/modules";
import { GradientButton, PrimaryButton } from "./Buttons";
// import { MyBankRootStackParameterList } from "@/mybank/navigation/types";
import ModuleComponent from "./Card/SelectChannelCard";
import { Box } from "./Layout";
import { Backdrop } from "./Modal/Backdrop";
import { PressableProps } from "./Pressable";
import { Text } from "./Typography";

const SelectChannel = () => {
  const navigation = useNavigation();
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["55%", "55%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop onPress={handleDismissModalPress} {...props} />
    ),
    [handleDismissModalPress],
  );

  const handlePress = (destination: keyof MyBankRootStackParameterList) => {
    handleDismissModalPress();
    navigation.navigate(destination);
  };

  return (
    <Box>
      <PrimaryButton
        alignItems="center"
        backgroundColor="whiteColor"
        height={RFValue(51)}
        justifyContent="center"
        label="CREATE ACCOUNT"
        labelProps={{
          color: "wealthColor",
          textAlign: "center",
          variant: "medium12",
        }}
        onPress={handlePresentModalPress}
        width={RFValue(150)}
      />
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <Box flex={1}>
          <Box paddingHorizontal="md">
            <Box alignItems="flex-start" marginBottom="md">
              <Text marginBottom="xxs" variant="medium18">
                {t("mybank.selectChannel.selectChannelHeading")}
              </Text>
              <Text variant="regular14">
                {t("mybank.selectChannel.selectChannelSub")}
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
                  <ModuleComponent
                    backgroundColor={
                      item.backgroundColor as PressableProps["backgroundColor"]
                    }
                    image={item.image}
                    onPress={() => handlePress(item.destination)}
                    title={item.title}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            </Box>

            <GradientButton alignItems="center" borderRadius="md" size="md">
              <Text color="whiteColor" variant="medium18">
                {t("mybank.selectChannel.signUpWithOnePass")}
              </Text>
            </GradientButton>
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default SelectChannel;
