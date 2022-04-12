import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import ModuleComponent from "../screens/landingPage/components/ModuleComponent";
import modules from "../screens/landingPage/files/modules";
import { Box } from "./Layout";
import { PressableProps } from "./Pressable";
import { Text } from "./Typography";

const SelectChannel = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

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
      <Box
        alignItems="center"
        backgroundColor="whiteColor"
        borderRadius={10}
        height={RFValue(51)}
        justifyContent="center"
        onTouchStart={handlePresentModalPress}
        width={RFValue(150)}
      >
        <Text variant="medium12">CREATE ACCOUNT</Text>
      </Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <Box flex={1}>
          <Box
            alignItems="center"
            backgroundColor="whiteColor"
            borderTopEndRadius={20}
            borderTopStartRadius={20}
            elevation={5}
            flex={1}
            shadowColor="darkGrey"
            shadowOffset={{ height: 2, width: 0 }}
            shadowOpacity={0.25}
            shadowRadius={4}
            width="100%"
          >
            <FlatList
              data={modules}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Box alignItems="flex-start" marginBottom="m">
                  <Text marginBottom="xxs" variant="medium18">
                    Select Channel
                  </Text>
                  <Text variant="regular14">
                    Select Channel to sign up or sign in with
                  </Text>
                </Box>
              }
              numColumns={Math.ceil(modules.length / 2)}
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
      </BottomSheetModal>
    </Box>
  );
};

export default SelectChannel;
