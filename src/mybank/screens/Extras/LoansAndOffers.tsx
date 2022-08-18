import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons } from "@/shared/assets/image";
import { purplemask, greenmask, bluemask, orangemask, right_arrow } from "@/mybank/assets/image";
import { ImageBackground, Image } from "@/shared/components/";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { Modal } from "@/shared/components/Modal";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { BaseButton } from "@/shared/components/Buttons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/mybank/screens/Extras/styles/LoansAndOffersStyles";

function LoansAndOffers() {
  const [clickme, setClickme] = useState(0);

  const { t } = useTranslation();

  const navigation = useNavigation();

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
              flex={1}
              marginTop="sm"
            >
              <BaseButton
              width={130}
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
              >
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
              <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>  
              <Text variant="bold14" style={styles.title}>
                {t("mybank.loanAndOffers.loansAndOffersSubheading")}
              </Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  activeOpacity={0.8}
                >
                  <ImageBackground
                    borderRadius="md"
                    source={purplemask}
                    resizeMode="cover"
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
                        style={styles.bottomContainer}
                        onPress={() => navigation.navigate("ChatBot")}>
                          
                        <Text
                          style={styles.accessloans}
                          color="purple"
                          variant="bold14"
                          paddingVertical="md"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          source={right_arrow}
                          style={styles.rightImage}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
  
                  style={styles.buttonContainer}
                  activeOpacity={0.8}
                >
                  <ImageBackground
                    source={greenmask}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.content}>
                      <Text variant="bold14">
                        {t("mybank.loanAndOffers.agricLoan")}
                      </Text>
                      <Text variant="regular14">
                        {t("mybank.loanAndOffers.LoanContent")}
                      </Text>
                      <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("ChatBot")}>
                        <Text
                          style={styles.accessloans}
                          color="textTint"
                          variant="bold14"
                          paddingVertical="md"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          source={right_arrow}
                          style={styles.rightImage}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
  
                  style={styles.buttonContainer}
                  activeOpacity={0.8}
                >
                  <ImageBackground
                    source={orangemask}
                    resizeMode="cover"
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
                        style={styles.bottomContainer}
        
                       onPress={() => navigation.navigate("ChatBot")}>
                        <Text
                          style={styles.accessloans}
                          color="orange"
                          variant="bold14"
                          paddingVertical="md"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          source={right_arrow}
                          style={styles.rightImage}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
  
                  style={styles.buttonContainer}
                  activeOpacity={0.8}
                >
                  <ImageBackground
                    source={bluemask}
                    resizeMode="cover"
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
                        style={styles.bottomContainer}
        
                       onPress={() => navigation.navigate("ChatBot")}>
                        <Text
                          style={styles.accessloans}
                          color="primaryColorLight"
                          variant="bold14"
                          paddingVertical="md"
                        >
                          {t("mybank.loanAndOffers.accessLoans")}
                        </Text>
                        <Image
                          source={right_arrow}
                          style={styles.rightImage}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                </TouchableOpacity>
              </ScrollView>
            </Box>
          </Box>
        </SafeAreaView>
        <Modal ref={moreModalRef}>
          
        </Modal>
      </ImageBackground>
    </Box>
  );
}

export default LoansAndOffers;
