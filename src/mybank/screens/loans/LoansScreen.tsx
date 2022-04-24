import React, { VFC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import { EligibilityButton } from "@/mybank/components/Buttons";
import { EligibilityCard } from "@/mybank/components/Cards";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";

const LoansScreen: VFC<LoansNavigationProps<"LoansScreen">> = ({
  navigation,
}) => (
  <SafeAreaView flex={1}>
    <ImageBackground flex={1} source={loginBackground}>
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
          <Box mt="md">
            <Box mb="md">
              <EligibilityButton
                eligibilityAmount="N2,000,000"
                leftIcon="cash"
                onPress={() => navigation.navigate("EzCashLoansScreen")}
                title="EZ Cash"
              />
            </Box>
            <Box mb="md">
              <EligibilityButton
                eligibilityAmount="N2,000,000"
                leftIcon="coins"
                title="UPL Top-up"
              />
            </Box>
            <Box mb="md">
              <EligibilityButton
                eligibilityAmount="N2,000,000"
                leftIcon="leaf"
                title="Agriculture Loan"
              />
            </Box>
            <Box>
              <EligibilityButton
                eligibilityAmount="N2,000,000"
                leftIcon="car"
                title="Car Loan"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ImageBackground>
  </SafeAreaView>
);

export default LoansScreen;
