import React, { VFC } from "react";
import { ScrollView, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import { EligibilityButton } from "@/mybank/components/Buttons";
import { EligibilityCard } from "@/mybank/components/Cards";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground } from "@/shared/components/Layout";

const LoansScreen: VFC<LoansNavigationProps<"LoansScreen">> = ({
  navigation,
}) => (
  <ImageBackground flex={1} source={loginBackground}>
    <StatusBar
      animated
      backgroundColor="transparent"
      barStyle="light-content"
      translucent
    />
    <Box flex={1}>
      <Box height={RFValue(150)} />
      <Box backgroundColor="whiteColor" flex={1} px="md">
        <Box
          minHeight={RFValue(150)}
          style={{ marginTop: RFValue(-75) }}
          width="100%"
        >
          <EligibilityCard />
        </Box>
        <ScrollView style={{ backgroundColor: "white" }}>
          <Box my="md">
            <Box mb="md">
              <EligibilityButton
                leftIcon="cash"
                onPress={() => navigation.navigate("EzCashLoansScreen")}
                subtitle="Eligibility Amount: N2,000,000"
                title="EZ Cash"
              />
            </Box>
            <Box mb="md">
              <EligibilityButton
                leftIcon="coins"
                subtitle="Eligibility Amount: N2,000,000"
                title="UPL Top-up"
              />
            </Box>
            <Box mb="md">
              <EligibilityButton
                leftIcon="leaf"
                subtitle="Eligibility Amount: N2,000,000"
                title="Agriculture Loan"
              />
            </Box>
            <Box>
              <EligibilityButton
                leftIcon="car"
                subtitle="Eligibility Amount: N2,000,000"
                title="Car Loan"
              />
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  </ImageBackground>
);

export default LoansScreen;
