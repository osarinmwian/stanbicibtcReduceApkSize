import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { Image, TouchableOpacity } from "react-native";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { BaseButton } from "@/shared/components/Buttons";
import { Modal } from "@/shared/components/Modal";
import { StyleSheet } from "react-native";
import { RFValue } from "@/shared/utils/functions";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/mybank/screens/Extras/styles/ChatBotStyles";

function ChatBot() {
  const moreModalRef = useRef<BottomSheetModal>(null);
  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);
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
          <Box flex={0.1}>
            <Box
              alignItems="center"
              flexDirection="row"
              flex={1}
              marginTop="sm"
              justifyContent="center"
            >
              <Text
                color="textColorInverted"
                textAlign="center"
                variant="medium14"
                textTransform="uppercase"
              >
                {t("mybank.chatBot.chatBotTitle")}
              </Text>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => navigation.navigate("LandingPage")}
              >
                <Image source={require("@/shared/assets/image/close.png")} />
              </TouchableOpacity>
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
            <ScrollView>
              <Box>
                <Box justifyContent="center" alignItems="center">
                  <BaseButton
                    backgroundColor="whiteColor"
                    style={styles.container}
                  >
                    <Image
                      source={require("@/mybank/assets/image/messagebot.png")}
                      style={styles.image}
                    />
                  </BaseButton>
                  <Text variant="bold18">{t("mybank.chatBot.bankName")}</Text>
                  <Text variant="bold18">{t("mybank.chatBot.assistant")}</Text>
                  <Box marginVertical="md" width="80%">
                    <Text textAlign="center" color="lightGrey">
                      {t("mybank.chatBot.welcomeNote")}
                    </Text>
                  </Box>
                </Box>
                <Box paddingVertical="lg">
                  <BaseButton
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    marginVertical="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box>
                      <Text
                        textAlign="center"
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.buyAirtime")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    marginVertical="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box>
                      <Text
                        textAlign="center"
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.transferMoney")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    marginVertical="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box>
                      <Text
                        textAlign="center"
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.complaint")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    marginVertical="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box>
                      <Text
                        textAlign="center"
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.helpwithSomething")}
                      </Text>
                    </Box>
                  </BaseButton>
                </Box>
              </Box>
            </ScrollView>
            <Modal ref={moreModalRef}>
              
            </Modal>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default ChatBot;
