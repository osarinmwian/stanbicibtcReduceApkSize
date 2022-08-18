import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";
import { BaseButton } from "@/shared/components/Buttons";
import { TextInput } from "@/shared/components/TextInput";
import RecentTransactionsForBeneficiaries from "./RecentTransactionsForBeneficiaries";
import BeneficiariesListing from "./BeneficiariesListing";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

function Beneficiary() {
  const moreModalRef = useRef<BottomSheetModal>(null);
  const { t } = useTranslation();
  const navigation  = useNavigation();
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
        <StatusBar barStyle='light-content' backgroundColor='#0033AA'/>
          <Box flex={0.1}>
            <Box
              alignItems="center"
              flexDirection="row"
              flex={1}
              marginTop="sm"
            >
              <BaseButton
                width={140}
                leftIcon="arrow-back"
                onPress={() => navigation.goBack()}
                leftIconProps={{
                  size: "md",
                }}
                size="sm"
              />
              <Box>
              <Text
                color="textColorInverted"
                variant="medium14"
                textTransform='uppercase'
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
