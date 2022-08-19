import { VFC } from "react";
import { ImageBackground, ImageSourcePropType, Pressable } from "react-native";

import { Icon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

import { DEBITCARDSBACKGORUND } from "../styles/PaymentStyles";

type DebitCardProps = {
  backgroundColor: PaletteType;
  accountType: string;
  accountHolder: string;
  accountNumber: string;
  accountbalance: string;
  ledgerBalance: string;
  toggleVisibility: () => void;
  onProceed: () => void;
  isVisible: boolean;
  image: ImageSourcePropType;
};

const DebitCards: VFC<DebitCardProps> = (props) => (
  <Box
    // padding="md"
    backgroundColor={props.backgroundColor}
    borderRadius="md"
    mt="md"
  >
    <ImageBackground source={props.image} style={DEBITCARDSBACKGORUND}>
      <Pressable onPress={() => props.onProceed()}>
        <Text color="whiteColor" variant="regular10">
          {props.accountType}
        </Text>

        <Box flexDirection="row" justifyContent="space-between" mt="xs">
          <Text color="whiteColor" variant="medium12">
            {props.accountHolder}
          </Text>

          <Text color="whiteColor" variant="regular12">
            {props.accountNumber}
          </Text>
        </Box>

        <Box alignItems="center" flexDirection="row" mt="lg">
          <Text color="whiteColor" mr="md" variant="bold18">
            {props.accountbalance}
          </Text>

          <Pressable onPress={() => props.toggleVisibility()}>
            <Icon
              color="whiteColor"
              name={props.isVisible ? "eyeOpen" : "eyeClosed"}
              // {...props.iconProps}
            />
          </Pressable>
        </Box>

        <Box flexDirection="row" marginTop="ss">
          <Text color="whiteColor" variant="regular12">
            LEDGER BALANCE:{" "}
          </Text>
          <Text color="whiteColor" variant="regular12">
            {props.ledgerBalance}
          </Text>
        </Box>
      </Pressable>
    </ImageBackground>
  </Box>
);

export default DebitCards;
