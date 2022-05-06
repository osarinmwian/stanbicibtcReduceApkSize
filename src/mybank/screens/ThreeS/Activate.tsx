import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { threeSActivate } from "@/mybank/assets/image";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { Image, ImageBackground } from "@/shared/components/";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import Modal from "./TAndCModal";

function Activate() {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);
  return (
    <Box
      alignItems="center"
      backgroundColor="imageBackgroundTint"
      flex={1}
      justifyContent="center"
    >
      <ImageBackground
        flex={1}
        resizeMode="contain"
        source={backgroundIcons}
        width="100%"
      >
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
          <Box flex={0.1}>
            <Box
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
              marginTop="sm"
              paddingHorizontal="md"
            >
              <Text color="textColorInverted" variant="medium16">
                3S Banking
              </Text>
              <Image source={standardBankLogo} />
            </Box>
          </Box>
          <Box
            backgroundColor="mainBackground"
            borderRadius="md"
            flex={0.9}
            justifyContent="space-between"
            paddingBottom="lg"
            paddingHorizontal="md"
          >
            <Box alignItems="center" style={{ paddingTop: RFValue(55) }}>
              <Image
                height={RFValue(266)}
                marginBottom="md"
                source={threeSActivate}
                style={{ borderRadius: RFValue(266 / 2) }}
                width={RFValue(266)}
              />
              <Text marginBottom="md" marginTop="lg" variant="bold18">
                Welcome to SMS Banking
              </Text>
              <Text textAlign="center" variant="regular14">
                Click on activate to setup your account, an OTP will be sent to
                your mobile number to complete setup
              </Text>
            </Box>
            <PrimaryButton
              justifyContent="center"
              label="ACTIVATE 3S BANKING"
              labelProps={{ color: "textColorInverted" }}
              labelVariant="medium12"
              onPress={handleMorePresent}
              paddingVertical="md"
              width="100%"
            />
          </Box>
        </SafeAreaView>
        <Modal ref={moreModalRef} />
      </ImageBackground>
    </Box>
  );
}

export default Activate;
