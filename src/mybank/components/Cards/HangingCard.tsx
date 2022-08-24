import { LinearGradient } from "expo-linear-gradient";
import React, { VFC } from "react";
import { useTranslation } from "react-i18next";
import { RFValue } from "react-native-responsive-fontsize";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { Box, Card } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

export const SideIcon = () => (
  <Box
    alignItems="center"
    backgroundColor="transparentWhite"
    borderRadius="lg"
    height={RFValue(25)}
    justifyContent="center"
    width={RFValue(25)}
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
        <Text color="textColor2" fontWeight="500" my="md" variant="font12">
          {t("pfm.selectAccount").toUpperCase()}
        </Text>
        <Box borderRadius="sm" borderWidth={0}>
          <LinearGradient
            colors={[
              palette.pfminnercardlineargradientcolorstart,
              palette.pfminnercardlineargradientcolorend,
            ]}
            start={{ x: 0.05, y: 0 }}
            style={{ borderRadius: 8 }}
          >
            <Box
              flexDirection="row"
              justifyContent="space-between"
              padding="sm"
              paddingHorizontal="md"
            >
              <Box>
                <Text
                  color="whiteColor"
                  fontSize={RFValue(11)}
                  variant="regular10"
                >
                  0000826353 - {t("pfm.current").toUpperCase()}
                </Text>
                <Text color="whiteColor" variant="bold12">
                  EHINOZIE SOLOMON IHAYERE
                </Text>
                <Box alignItems="center" flexDirection="row" my="md">
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
