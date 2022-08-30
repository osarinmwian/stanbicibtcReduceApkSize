import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { TextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import BeneficiariesListing from "./BeneficiariesListing";
import RecentTransactionsForBeneficiaries from "./RecentTransactionsForBeneficiaries";

function Beneficiary() {
  const { t } = useTranslation();
  const navigation = useNavigation();
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
          <StatusBar backgroundColor="#0033AA" barStyle="light-content" />
          <Box flex={0.1}>
            <Box
              alignItems="center"
              flex={1}
              flexDirection="row"
              marginTop="sm"
            >
              <BaseButton
                leftIcon="arrow-back"
                leftIconProps={{
                  size: "md",
                }}
                onPress={() => navigation.goBack()}
                size="sm"
                width={140}
              />
              <Box>
                <Text
                  color="textColorInverted"
                  textTransform="uppercase"
                  variant="medium14"
                >
                  {t("mybank.beneficiary.title")}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor="mainBackground"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            flex={0.9}
            justifyContent="space-between"
            paddingBottom="lg"
            paddingHorizontal="md"
          >
            <Box style={{ paddingTop: RFValue(24) }}>
              <TextInput
                leftIcon="search"
                leftIconProps={{ color: "secondaryBlack", size: "sm" }}
                placeholder="Type to search"
                size="xs"
              />
              <RecentTransactionsForBeneficiaries />
              <BeneficiariesListing />
            </Box>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default Beneficiary;
