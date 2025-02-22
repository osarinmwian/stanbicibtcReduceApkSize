import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, LogBox } from "react-native";

import { close, question } from "@/shared/assets/image";
import { Box } from "@/shared/components/Layout";
import { Backdrop } from "@/shared/components/Modal/Backdrop";
import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import { RootNavigationProps } from "@/shared/navigation/types";

import quickOptions from "../files/quickOptions";
import QuickOptionsComponent from "./QuickOptionsComponent";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

interface ModuleProps {
  navigation: RootNavigationProps<"QuickAirtime">["navigation"];
}

const QuickOptions = (props: ModuleProps) => {
  const { navigation } = props;

  const { t } = useTranslation();
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["60%", "60%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (property) => (
      <Backdrop
        onPress={handleDismissModalPress}
        {...property}
        backdropChildren={
          <Pressable
            alignItems="center"
            flexDirection="row"
            justifyContent="flex-end"
            marginRight="sm"
            marginTop="md"
            onPress={handleDismissModalPress}
            paddingTop="lg"
          >
            <Image source={close} />
            <Box
              alignItems="center"
              backgroundColor="whiteColor"
              borderRadius="lg"
              flexDirection="row"
              marginLeft="md"
              paddingHorizontal="md"
              paddingVertical="md"
            >
              <Image source={question} />
              <Text marginLeft="xs" variant="medium14">
                {t("mybank.quickOptions.quick")}
              </Text>
            </Box>
          </Pressable>
        }
      />
    ),
    [handleDismissModalPress, t],
  );

  // renders
  return (
    <Box>
      <Pressable
        alignItems="center"
        backgroundColor="primaryColor10"
        borderBottomLeftRadius="lg"
        borderTopLeftRadius="lg"
        flexDirection="row"
        onTouchStart={handlePresentModalPress}
        padding="md"
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
          <Box alignItems="flex-start" justifyContent="center" paddingLeft="sm">
            <Text
              color="primaryColor"
              marginBottom="md"
              marginTop="md"
              variant="medium14"
            >
              QUICK OPTIONS
            </Text>
          </Box>
          <Box alignItems="center" flex={1} justifyContent="space-between">
            <BottomSheetFlatList
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              data={quickOptions}
              keyExtractor={(item) => item.id}
              numColumns={3}
              renderItem={({ item }) => (
                <QuickOptionsComponent
                  bottomSheetModalRef={bottomSheetModalRef}
                  destination={item.destination}
                  image={item.image}
                  navigation={navigation}
                  title={item.title}
                />
              )}
            />
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default QuickOptions;
