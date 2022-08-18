import React, { VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, Card } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "@/shared/theme/palette";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { useTranslation } from "react-i18next";

export const SideIcon = () => (
  <Box
    backgroundColor="transparentWhite"
    height={RFValue(25)}
    width={RFValue(25)}
    borderRadius="lg"
    justifyContent="center"
    alignItems="center"
  >
    <IconVector name="chevron-down-sharp-white" size="sm" width={RFValue(12)} />
  </Box>
);

export const HangingCard: VFC = () => {
  const { t } = useTranslation();

  return (
    <Card backgroundColor="pfmcard" padding="md">
      <Box>
        <Box>
          <Text variant="medium16">{t("pfm.financeManagement")}</Text>
          <Text fontVariant="p" variant="regular14">
            {t("pfm.learnMore")}
          </Text>
        </Box>
        <Text color="textColor2" my="md" variant="font12" fontWeight="500">
          {t("pfm.selectAccount").toUpperCase()}
        </Text>
        <Box borderWidth={0} borderRadius="sm">
          <LinearGradient
            style={{ borderRadius: 8 }}
            start={{ x: 0.05, y: 0.0 }}
            colors={[
              palette.pfminnercardlineargradientcolorstart,
              palette.pfminnercardlineargradientcolorend,
            ]}
          >
            <Box
              padding="sm"
              paddingHorizontal="md"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  color="whiteColor"
                  variant="regular10"
                  fontSize={RFValue(11)}
                >
                  0000826353 - {t("pfm.current").toUpperCase()}
                </Text>
                <Text color="whiteColor" variant="bold12">
                  EHINOZIE SOLOMON IHAYERE
                </Text>
                <Box my="md" flexDirection="row" alignItems="center">
                  <Box>
                    <Text>
                      <Text color="whiteColor" fontWeight="bold">
                        N{" "}
                      </Text>
                      <Text
                        color="whiteColor"
                        fontSize={RFValue(24)}
                        fontWeight="bold"
                      >
                        XXX,XXX.
                      </Text>
                      <Text color="whiteColor" fontWeight="bold">
                        XX
                      </Text>
                    </Text>
                  </Box>
                  <Box ml="md" mt="sm">
                    <IconVector name="eye-closed" width={RFValue(24)} />
                  </Box>
                </Box>
              </Box>
              <Box justifyContent="center">
                <SideIcon />
              </Box>
            </Box>
          </LinearGradient>
        </Box>
      </Box>
    </Card>
  );
};
