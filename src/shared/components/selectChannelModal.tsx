import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// import { MyBankRootStackParameterList } from "@/mybank/navigation/types";
import ModuleComponent from "@/shared/screens/landingPage/components/ModuleComponent";

import modules from "../screens/landingPage/files/modules";
import { GradientButton, PrimaryButton } from "./Buttons";
import { Box } from "./Layout";
import { PressableProps } from "./Pressable";
import { Text } from "./Typography";

const SelectChannel = () => {
  const navigation = useNavigation();
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["60%", "60%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    [],
  );

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
          textAlign: "left",
          variant: "medium10",
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
          <Box
            borderTopEndRadius="md"
            borderTopStartRadius="md"
            flex={1}
            padding="md"
          >
            <Box alignItems="flex-start" marginBottom="md">
              <Text marginBottom="xxs" variant="medium18">
                Select Channel
              </Text>
              <Text variant="regular14">
                Select Channel to sign up or sign in with
              </Text>
            </Box>
            <FlatList
              data={modules}
              keyExtractor={(item) => item.id}
              numColumns={Math.ceil(modules.length / 2)}
              renderItem={({ item }) => (
                <ModuleComponent
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  destination={() => navigation.navigate(item.destination)}
                  image={item.image}
                  title={item.title}
                />
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />

            <GradientButton size="md" style={{ alignItems: "center" }}>
              <Text color="whiteColor" variant="medium18">
                SIGN UP WITH ONE PASS
              </Text>
            </GradientButton>
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default SelectChannel;
