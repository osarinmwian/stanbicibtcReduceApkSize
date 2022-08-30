import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import React, { FC, useCallback, useRef, useState } from "react";
import { ImageBackground, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { loginBackground } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";

import PinComponent from "../Transfer/components/PinComponent";

const CardLessWithDrawal: FC = ({
  navigation,
}: MyBankNavigationProps<"CardLessWithDrawal">) => {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const [pin, setPin] = useState<string>("");
  const titleData = [
    { id: "1", name: "Mr" },
    { id: "1", name: "Mrs" },
  ];

  interface TitleProps {
    item: {
      id: string;
      title: string;
    };
  }

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);

  const renderHeader = () => (
    <Box
      alignContent="center"
      flexDirection="row"
      height={40}
      justifyContent="space-between"
      marginHorizontal="md"
      marginTop="xl"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <ImageIcon name="arrowLeft" />
      </Pressable>
      <Text
        style={{ fontWeight: "bold", color: "#fff" }}
        textTransform="uppercase"
      >
        Cardless Withdrawal
      </Text>
      <Text />
    </Box>
  );
  const renderTranscationPin = () => (
    <Box flex={1} marginTop="md">
      <PinComponent
        onChangeText={(value) => {
          setPin(value);
        }}
        value={pin}
      />
      <PrimaryButton
        alignItems="center"
        backgroundColor="primaryColor"
        justifyContent="center"
        label="CONFIRM"
        labelProps={{ color: "whiteColor" }}
        labelVariant="medium12"
        marginBottom="xl"
        onPress={handleMorePresent}
        paddingVertical="md"
        width="100%"
      />
    </Box>
  );

  const renderReviewWithdrawal = () => (
    <ScrollView>
      <Box paddingHorizontal="md">
        <Box marginVertical="md">
          <Text variant="bold16">Confrim withdrawal request</Text>
          <Text marginTop="sm" variant="medium12">
            Continue with request
          </Text>
        </Box>
        <Box backgroundColor="textTint2" borderRadius="sm" padding="sm">
          <Box flexDirection="row" justifyContent="space-between">
            <Text variant="regular14">Amount</Text>
            <Text variant="regular14">&#x20A6;2,101</Text>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingTop="sm"
          >
            <Text variant="regular14">Debit Account</Text>
            <Text variant="regular14">00989088977</Text>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingVertical="sm"
          >
            <Text variant="regular14">Withdrawal type</Text>
            <Text variant="regular14">PAYCODE</Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-between">
            <Text variant="regular14">Charges</Text>
            <Text variant="regular14">&#x20A6;0.0</Text>
          </Box>
        </Box>
        <Box marginVertical="md">
          <Text marginTop="md" variant="medium14">
            Confirmation
          </Text>
          <Text lineHeight={22} marginTop="sm" variant="regular12">
            After PIN confrimation, your transaction PAYCODE will be sent via
            OTP to your register number. kindly make sure your phone is active.
          </Text>
        </Box>
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          justifyContent="center"
          label="CONTINUE"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginVertical="lg"
          onPress={handleMorePresent}
          paddingVertical="md"
          width="100%"
        />
      </Box>
    </ScrollView>
  );

  return (
    <>
      <StatusBar style="light" translucent />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        {renderHeader()}
        <Box
          backgroundColor="whiteColor"
          borderRadius="md"
          flex={1}
          padding="md"
        >
          <Box>
            <Text marginTop="md" variant="medium14">
              Enter Amount
            </Text>
            <Text marginTop="sm">
              How much do you want to withdraw, you have a max spend limit of{" "}
              <Text variant="medium12">N10,000,000</Text>
            </Text>
          </Box>
          {renderTranscationPin()}
        </Box>
        <Modal ref={moreModalRef}>{renderReviewWithdrawal()}</Modal>
      </ImageBackground>
    </>
  );
};

export default CardLessWithDrawal;
