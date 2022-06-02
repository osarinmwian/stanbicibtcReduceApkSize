import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import React, { RefObject, useMemo, VFC } from "react";
import { TouchableOpacity } from "react-native";

import debitAccountList from "@/mybank/screens/Transfer/files/debitAccountList";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

type DebitAccountProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  onProceed: () => void;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const DebitAccountModal: VFC<DebitAccountProps> = (props) => {
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
          <Box p="md">
            <Text fontVariant="h6" fontWeight="bold" mb="md">
              Select debit account
            </Text>
            <Box mb="md">
              {debitAccountList.map((account) => (
                <LinearGradient
                  colors={account.background}
                  key={account.accountNumber}
                  style={{
                    borderRadius: RFValue(10),
                    marginVertical: RFValue(10),
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => props.onProceed()}
                    style={{
                      height: RFValue(150),
                      justifyContent: "space-between",
                      padding: RFValue(20),
                    }}
                  >
                    <Box>
                      <Text
                        color="whiteColor"
                        textTransform="uppercase"
                        variant="regular10"
                      >
                        {account.type}
                      </Text>
                      <Box flexDirection="row">
                        <Box flex={1}>
                          <Text
                            color="whiteColor"
                            numberOfLines={1}
                            textTransform="uppercase"
                            variant="bold10"
                          >
                            {account?.accountName}
                          </Text>
                        </Box>
                        <Box>
                          <Text color="whiteColor" pl="sm" variant="bold10">
                            {account.accountNumber}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Text color="whiteColor" variant="bold18">
                        {account.amount}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="whiteColor" variant="regular10">
                        LEDGER BALANCE: {account.ledgerBalance}
                      </Text>
                    </Box>
                  </TouchableOpacity>
                </LinearGradient>
              ))}
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

export default DebitAccountModal;
