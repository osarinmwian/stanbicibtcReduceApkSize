import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList, Image, LogBox } from "react-native";

import { close, question } from "@/shared/assets/image";
import { Box } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import quickOptions from "../files/quickOptions";
import QuickOptionsComponent from "./QuickOptionsComponent";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const QuickOptions = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

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
      <BottomSheetBackdrop
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        opacity={0.92}
        pressBehavior="close"
      >
        <Pressable
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-end"
          marginTop="Ml"
          onPress={handleDismissModalPress}
        >
          <Image source={close} />
          <Box
            alignItems="center"
            backgroundColor="whiteColor"
            borderBottomLeftRadius={30}
            borderTopLeftRadius={30}
            flexDirection="row"
            marginLeft="m"
            padding="m"
          >
            <Image source={question} />
            <Text marginLeft="xs">Quick</Text>
          </Box>
        </Pressable>
      </BottomSheetBackdrop>
    ),
    [handleDismissModalPress],
  );

  // renders
  return (
    <Box>
      <Pressable
        alignItems="center"
        backgroundColor="primaryColor10"
        borderBottomLeftRadius={30}
        borderTopLeftRadius={30}
        flexDirection="row"
        onTouchStart={handlePresentModalPress}
        padding="ssm"
      >
        <Image source={question} />
        <Text marginLeft="xs">Quick</Text>
      </Pressable>
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
              data={quickOptions}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text color="primaryColor" marginBottom="s" variant="medium14">
                  QUICK OPTIONS
                </Text>
              }
              numColumns={3}
              renderItem={({ item }) => (
                <QuickOptionsComponent image={item.image} title={item.title} />
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

export default QuickOptions;
