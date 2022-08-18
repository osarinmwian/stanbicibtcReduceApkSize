import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground, Image } from "@/shared/components/";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { BaseButton } from "@/shared/components/Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/mybank/screens/notifications/styles/NotificationStyles";

function Notifications(): JSX.Element {
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
              <Text
                color="textColorInverted"
                variant="medium14"
                textTransform="uppercase"
              >
                {t("mybank.notifications.notificationTitle")}
              </Text>
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
            <Box marginVertical="md" width="100%">
              <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Text variant="bold14" color="lightGrey" style={styles.title}>
                  {t("mybank.notifications.notificationSubheading")}
                </Text>
                <BaseButton
                  style={styles.buttonContainer}
                  backgroundColor="superlightGrey"
                >
                  <Box style={styles.topContent}>
                    <Box flex={0.15}>
                      <Image
                        source={require("@/mybank/assets/image/gift.png")}
                        height={RFValue(20)}
                        width={RFValue(20)}
                        marginTop='xxs'
                      />
                    </Box>
                    <Box flex={0.85}>
                      <Text variant="medium14" marginBottom='sm' color='tertiaryAndBlack'>
                        {t("mybank.notifications.containerTitle")}
                      </Text>
                      <Text variant="regular14" style={styles.subheading}>
                        {t("mybank.notifications.notificationContent")}
                      </Text>
                      <BaseButton backgroundColor="transparent">
                        <Text
                          style={styles.notificationText}
                          color="primaryColorLight"
                          variant="bold14"
                        >
                          {t("mybank.notifications.topUpButton")}
                        </Text>
                      </BaseButton>
                    </Box>
                    <Box justifyContent="center" alignItems="center">
                      <Image
                        source={require("@/mybank/assets/image/badge.png")}
                        height={RFValue(35)}
                        width={RFValue(35)}
                      />
                    </Box>
                  </Box>
                </BaseButton>
                <BaseButton
                  style={styles.buttonContainer}
                  backgroundColor="primaryColor"
                >
                  <Box style={styles.content}>
                  <Text variant="medium14" marginBottom='sm' color='whiteColor'>
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text variant="regular14" color="whiteColor" style={styles.subheading}>
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        style={styles.notificationText}
                        color="whiteColor"
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <Text color="lightGrey" variant="bold14" style={styles.title}>
                  {t("mybank.notifications.previousNotification")}
                </Text>
                <BaseButton
                  style={styles.buttonContainer}
                  backgroundColor="superlightGrey"
                >
                  <Box style={styles.content}>
                  <Text variant="medium14" marginBottom='sm' color='tertiaryAndBlack'>
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text variant="regular14" style={styles.subheading}>
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        style={styles.notificationText}
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <BaseButton
                  style={styles.buttonContainer}
                  backgroundColor="superlightGrey"
                >
                  <Box style={styles.content}>
                  <Text variant="medium14" marginBottom='sm' color='tertiaryAndBlack'>
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text variant="regular14" style={styles.subheading}>
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        style={styles.notificationText}
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <BaseButton
                  style={styles.buttonContainer}
                  backgroundColor="superlightGrey"
                >
                  <Box style={styles.content}>
                  <Text variant="medium14" marginBottom='sm' color='tertiaryAndBlack'>
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text variant="regular14" style={styles.subheading}>
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        style={styles.notificationText}
                        color="primaryColorLight"
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
              </ScrollView>
            </Box>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default Notifications;
