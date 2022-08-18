import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/mybank/screens/notifications/styles/NotificationStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { Image, ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

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
              <Text
                color="textColorInverted"
                textTransform="uppercase"
                variant="medium14"
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
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <Text color="lightGrey" style={styles.title} variant="bold14">
                  {t("mybank.notifications.notificationSubheading")}
                </Text>
                <BaseButton
                  backgroundColor="superlightGrey"
                  style={styles.buttonContainer}
                >
                  <Box style={styles.topContent}>
                    <Box flex={0.15}>
                      <Image
                        height={RFValue(20)}
                        marginTop="xxs"
                        source={require("@/mybank/assets/image/gift.png")}
                        width={RFValue(20)}
                      />
                    </Box>
                    <Box flex={0.85}>
                      <Text
                        color="tertiaryAndBlack"
                        marginBottom="sm"
                        variant="medium14"
                      >
                        {t("mybank.notifications.containerTitle")}
                      </Text>
                      <Text style={styles.subheading} variant="regular14">
                        {t("mybank.notifications.notificationContent")}
                      </Text>
                      <BaseButton backgroundColor="transparent">
                        <Text
                          color="primaryColorLight"
                          style={styles.notificationText}
                          variant="bold14"
                        >
                          {t("mybank.notifications.topUpButton")}
                        </Text>
                      </BaseButton>
                    </Box>
                    <Box alignItems="center" justifyContent="center">
                      <Image
                        height={RFValue(35)}
                        source={require("@/mybank/assets/image/badge.png")}
                        width={RFValue(35)}
                      />
                    </Box>
                  </Box>
                </BaseButton>
                <BaseButton
                  backgroundColor="primaryColor"
                  style={styles.buttonContainer}
                >
                  <Box style={styles.content}>
                    <Text
                      color="whiteColor"
                      marginBottom="sm"
                      variant="medium14"
                    >
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text
                      color="whiteColor"
                      style={styles.subheading}
                      variant="regular14"
                    >
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        color="whiteColor"
                        style={styles.notificationText}
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <Text color="lightGrey" style={styles.title} variant="bold14">
                  {t("mybank.notifications.previousNotification")}
                </Text>
                <BaseButton
                  backgroundColor="superlightGrey"
                  style={styles.buttonContainer}
                >
                  <Box style={styles.content}>
                    <Text
                      color="tertiaryAndBlack"
                      marginBottom="sm"
                      variant="medium14"
                    >
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text style={styles.subheading} variant="regular14">
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        color="primaryColorLight"
                        style={styles.notificationText}
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <BaseButton
                  backgroundColor="superlightGrey"
                  style={styles.buttonContainer}
                >
                  <Box style={styles.content}>
                    <Text
                      color="tertiaryAndBlack"
                      marginBottom="sm"
                      variant="medium14"
                    >
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text style={styles.subheading} variant="regular14">
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        color="primaryColorLight"
                        style={styles.notificationText}
                        variant="bold14"
                      >
                        {t("mybank.notifications.savingsButton")}
                      </Text>
                    </BaseButton>
                  </Box>
                </BaseButton>
                <BaseButton
                  backgroundColor="superlightGrey"
                  style={styles.buttonContainer}
                >
                  <Box style={styles.content}>
                    <Text
                      color="tertiaryAndBlack"
                      marginBottom="sm"
                      variant="medium14"
                    >
                      {t("mybank.notifications.mainSubheading")}
                    </Text>
                    <Text style={styles.subheading} variant="regular14">
                      {t("mybank.notifications.notificationContent")}
                    </Text>
                    <BaseButton backgroundColor="transparent">
                      <Text
                        color="primaryColorLight"
                        style={styles.notificationText}
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
