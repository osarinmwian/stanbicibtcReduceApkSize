import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";
import { Pressable, TouchableOpacity } from "react-native";

import otherBanksList from "@/mybank/screens/Transfer/files/otherBanksList";
import { Icon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { TextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

type OtherBanksProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleClose: () => void;
  onProceed: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const OtherBanksModal: VFC<OtherBanksProps> = (props) => {
  const snapPoints = useMemo(() => ["80%", "80%"], []);

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView>
          <Box paddingVertical="md">
            <Box paddingHorizontal="sm">
              <Box
                alignItems="center"
                flexDirection="row"
                mb="sm"
                paddingVertical="sm"
              >
                <Pressable onPress={props.handleClose}>
                  <Icon color="black" name="back" size="sm" />
                </Pressable>
                <Text fontVariant="h6" fontWeight="bold" pl="md">
                  Select other bank
                </Text>
              </Box>
              <Box mb="md" mt="sm">
                <TextInput
                  leftIcon="search"
                  leftIconProps={{ color: "secondaryBlack", size: "sm" }}
                  placeholder="Type to search for bank"
                  size="xs"
                />
              </Box>
            </Box>
            <Box mb="md">
              {otherBanksList.map((item, index) => (
                <Box
                  backgroundColor={
                    index % 2 === 0 ? "cardSecondary" : "whiteColor"
                  }
                  key={item}
                >
                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={props.onProceed}
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      padding: RFValue(15),
                    }}
                  >
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </Box>
              ))}
            </Box>
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Box>
  );
};

export default OtherBanksModal;
