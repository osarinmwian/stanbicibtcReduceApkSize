import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { RefObject, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";

import { Box } from "@/shared/components/Layout";
import { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import profiles from "@/shared/screens/onePass/components/files/profiles";
import ProfileComponent from "@/shared/screens/onePass/components/ProfileComponent";
import {
  OnePassNavigationProps,
  OnePassRootStackParameterList,
} from "@/shared/screens/onePass/navigation/type";

interface ModuleProps {
  profileBottomSheetModalRef: RefObject<BottomSheetModal>;
  navigation: OnePassNavigationProps<"OnePass">["navigation"];
}

export default function SelectProfileModal(props: ModuleProps) {
  const { profileBottomSheetModalRef, navigation } = props;

  const { t } = useTranslation();

  const snapPoints = useMemo(() => ["75%", "75%"], []);

  const renderBackdrop = useCallback(
    (property) => (
      <BottomSheetBackdrop
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...property}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      enableDismissOnClose
      ref={profileBottomSheetModalRef}
      snapPoints={snapPoints}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        marginBottom="lg"
        marginHorizontal="lg"
        marginTop="md"
      >
        <Box
          alignItems="center"
          backgroundColor="primaryColor20"
          borderRadius="lg"
          justifyContent="center"
          padding="xxs"
        >
          <Text color="textColor" padding="sm">
            {t("onepass.onePassHome.chooseProfile")}
          </Text>
        </Box>
      </Box>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileComponent
            background={item.background as PressableProps["backgroundColor"]}
            destination={
              item.destination as keyof OnePassRootStackParameterList
            }
            image={item.image}
            navigation={navigation}
            profileBottomSheetModalRef={profileBottomSheetModalRef}
            title={item.title}
          />
        )}
      />
    </BottomSheetModal>
  );
}
