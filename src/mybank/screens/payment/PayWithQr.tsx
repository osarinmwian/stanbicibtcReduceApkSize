import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { FC, useRef } from "react";
import { Image, ImageBackground, Pressable } from "react-native";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { backgroundIcons, imagedisplay, logo } from "@/shared/assets/image";
import { Box, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import ApproveBankTransferModal from "../Transfer/components/ApproveBankTransferModal";
import SelectDebitAccountModal from "./components/modals/SelectDebitAccountModal";
import { PAYWITHQRLOGOSTYLE, QRSTYLE, ROOT } from "./styles/PaymentStyles";

const PayWithQr: FC = ({ navigation }: MyBankNavigationProps<"PayWithQr">) => {
  const debitAccountModalRef = useRef<BottomSheetModal>(null);
  const approveTransferModalRef = useRef<BottomSheetModal>(null);

  return (
    <Box backgroundColor="primaryColor" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView>
          <Box alignItems="center" justifyContent="center" marginTop="xl">
            <Image source={logo} style={PAYWITHQRLOGOSTYLE} />
          </Box>

          <Box alignItems="center" justifyContent="center" marginTop="lg">
            <Pressable onPress={() => debitAccountModalRef.current?.present()}>
              <Image source={imagedisplay} style={QRSTYLE} />
            </Pressable>

            <Text color="whiteColor" mt="lg" variant="regular14">
              Place QR code within the square and scan
            </Text>
          </Box>

          <SelectDebitAccountModal
            bottomSheetModalRef={debitAccountModalRef}
            handleClose={() => debitAccountModalRef.current?.close()}
            onProceed={() => {
              approveTransferModalRef.current?.present();
              debitAccountModalRef.current?.dismiss();
            }}
          />

          <ApproveBankTransferModal
            bottomSheetModalRef={approveTransferModalRef}
            handleClose={() => approveTransferModalRef.current?.close()}
          />
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
};

export default PayWithQr;
