import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  bluemask,
  greenmask,
  orangemask,
  purplemask,
  right_arrow,
} from "@/mybank/assets/image";
import { styles } from "@/mybank/screens/Extras/styles/LoansAndOffersStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { Image, ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";

function LoansAndOffers() {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const moreModalRef = useRef<BottomSheetModal>(null);

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
                width={130}
              />
              <Box>
                <Text color="textColorInverted" variant="medium14">
                  {t("mybank.loanAndOffers.lonasAndOffersTitle")}
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
            <Box marginVertical="xs" width="100%">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.title} variant="bold14">
                  {t("mybank.loanAndOffers.loansAndOffersSubheading")}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                >
                  <ImageBackground
                    borderRadius="md"
                    resizeMode="cover"
                    source={purplemask}
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.content}>
                      <Text variant="bold14">
                        {t("mybank.loanAndOffers.cashloans")}
                      </Text>
                      <Text variant="regular14">
                        {t("mybank.loanAndOffers.LoanContent")}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ChatBot")}
                        style={styles.bottomContainer}
                      >
                        <Text
                          color="purple"
                          paddingVertical="md"
                          style={styles.accessloans}
                          variant="bold14"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          resizeMode="contain"
                          source={right_arrow}
                          style={styles.rightImage}
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                >
                  <ImageBackground
                    resizeMode="cover"
                    source={greenmask}
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.content}>
                      <Text variant="bold14">
                        {t("mybank.loanAndOffers.agricLoan")}
                      </Text>
                      <Text variant="regular14">
                        {t("mybank.loanAndOffers.LoanContent")}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ChatBot")}
                        style={styles.bottomContainer}
                      >
                        <Text
                          color="textTint"
                          paddingVertical="md"
                          style={styles.accessloans}
                          variant="bold14"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          resizeMode="contain"
                          source={right_arrow}
                          style={styles.rightImage}
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                >
                  <ImageBackground
                    resizeMode="cover"
                    source={orangemask}
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.content}>
                      <Text variant="bold14">
                        {t("mybank.loanAndOffers.topUpLoans")}
                      </Text>
                      <Text variant="regular14">
                        {t("mybank.loanAndOffers.LoanContent")}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ChatBot")}
                        style={styles.bottomContainer}
                      >
                        <Text
                          color="orange"
                          paddingVertical="md"
                          style={styles.accessloans}
                          variant="bold14"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          resizeMode="contain"
                          source={right_arrow}
                          style={styles.rightImage}
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                >
                  <ImageBackground
                    resizeMode="cover"
                    source={bluemask}
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.content}>
                      <Text variant="bold14">
                        {t("mybank.loanAndOffers.vehicleLoans")}
                      </Text>
                      <Text variant="regular14">
                        {t("mybank.loanAndOffers.LoanContent")}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ChatBot")}
                        style={styles.bottomContainer}
                      >
                        <Text
                          color="primaryColorLight"
                          paddingVertical="md"
                          style={styles.accessloans}
                          variant="bold14"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          resizeMode="contain"
                          source={right_arrow}
                          style={styles.rightImage}
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
              </ScrollView>
            </Box>
          </Box>
        </SafeAreaView>
        <Modal ref={moreModalRef} />
      </ImageBackground>
    </Box>
  );
}

export default LoansAndOffers;
