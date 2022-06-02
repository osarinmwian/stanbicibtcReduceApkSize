import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";
import { TouchableOpacity } from "react-native";

import { PrimaryButton } from "@/shared/components/Buttons";
import Image from "@/shared/components/Image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

type RecipientBankProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleClose: () => void;
  onProceed?: () => void;
  onOpenOtherBanksModal: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const RecipientBankModal: VFC<RecipientBankProps> = (props) => {
  const snapPoints = useMemo(() => ["70%", "70%"], []);

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
            <Text
              fontVariant="h6"
              fontWeight="bold"
              mb="md"
              paddingHorizontal="md"
            >
              Select recipient bank
            </Text>
            <Box mb="md">
              <Box backgroundColor="cardSecondary">
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={props.onProceed}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    padding: RFValue(15),
                  }}
                >
                  <Image
                    height={RFValue(30)}
                    source={require("../../../../shared/assets/image/accessbank-logo.png")}
                    width={RFValue(30)}
                  />
                  <Box flex={1} pl="sm">
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      ACCESS BANK
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
              <Box>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={props.onProceed}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    padding: RFValue(15),
                  }}
                >
                  <Image
                    height={RFValue(30)}
                    source={require("../../../../shared/assets/image/firstbank-logo.png")}
                    width={RFValue(30)}
                  />
                  <Box flex={1} pl="sm">
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      FIRST BANK
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
              <Box backgroundColor="cardSecondary">
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={props.onProceed}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    padding: RFValue(15),
                  }}
                >
                  <Image
                    height={RFValue(30)}
                    source={require("../../../../shared/assets/image/uba-logo.png")}
                    width={RFValue(30)}
                  />
                  <Box flex={1} pl="sm">
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      UBA
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
              <Box>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={props.onProceed}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    padding: RFValue(15),
                  }}
                >
                  <Image
                    height={RFValue(30)}
                    source={require("../../../../shared/assets/image/gtb-logo.png")}
                    width={RFValue(30)}
                  />
                  <Box flex={1} pl="sm">
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      GTB
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
              <Box backgroundColor="cardSecondary">
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={props.onOpenOtherBanksModal}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    padding: RFValue(15),
                  }}
                >
                  <Image
                    height={RFValue(30)}
                    source={require("../../../../shared/assets/image/other-banks.png")}
                    width={RFValue(30)}
                  />
                  <Box flex={1} pl="sm">
                    <Text
                      color="black"
                      textTransform="uppercase"
                      variant="medium10"
                    >
                      OTHER BANKS
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            backgroundColor="cardSecondary"
            containerProps={{ flex: 1 }}
            label="CANCEL"
            labelProps={{ color: "primaryBlack", fontVariant: "caption" }}
            mb="sm"
            onPress={props.handleClose}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default RecipientBankModal;
