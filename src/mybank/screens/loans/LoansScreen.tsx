import React, { VFC } from "react";

import { loginBackground } from "@/mybank/assets/image/";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";

const LoansScreen: VFC<LoansNavigationProps<"Loans">> = ({ navigation }) => (
  <SafeAreaView flex={1}>
    <Box flex={1}>
      <ImageBackground flex={1} source={loginBackground} />
    </Box>
  </SafeAreaView>
);

export { LoansScreen };
