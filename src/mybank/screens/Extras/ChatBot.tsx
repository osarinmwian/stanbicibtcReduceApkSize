import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/mybank/screens/Extras/styles/ChatBotStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

function ChatBot() {
  const moreModalRef = useRef<BottomSheetModal>(null);

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
              flex={1}
              flexDirection="row"
              justifyContent="center"
              marginTop="sm"
            >
              <Text
                color="textColorInverted"
                textAlign="center"
                textTransform="uppercase"
                variant="medium14"
              >
                {t("mybank.chatBot.chatBotTitle")}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.cancel}
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
                <Box alignItems="center" justifyContent="center">
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
                    <Text color="lightGrey" textAlign="center">
                      {t("mybank.chatBot.welcomeNote")}
                    </Text>
                  </Box>
                </Box>
                <Box paddingVertical="lg">
                  <BaseButton
                    alignItems="center"
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    justifyContent="center"
                    marginVertical="sm"
                  >
                    <Box>
                      <Text
                        color="primaryColorLight"
                        textAlign="center"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.buyAirtime")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    alignItems="center"
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    justifyContent="center"
                    marginVertical="sm"
                  >
                    <Box>
                      <Text
                        color="primaryColorLight"
                        textAlign="center"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.transferMoney")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    alignItems="center"
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    justifyContent="center"
                    marginVertical="sm"
                  >
                    <Box>
                      <Text
                        color="primaryColorLight"
                        textAlign="center"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.complaint")}
                      </Text>
                    </Box>
                  </BaseButton>
                  <BaseButton
                    alignItems="center"
                    backgroundColor="superlightGrey"
                    borderRadius="xs"
                    height={RFValue(50)}
                    justifyContent="center"
                    marginVertical="sm"
                  >
                    <Box>
                      <Text
                        color="primaryColorLight"
                        textAlign="center"
                        variant="bold14"
                      >
                        {t("mybank.chatBot.helpwithSomething")}
                      </Text>
                    </Box>
                  </BaseButton>
                </Box>
              </Box>
            </ScrollView>
            <Modal ref={moreModalRef} />
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default ChatBot;
