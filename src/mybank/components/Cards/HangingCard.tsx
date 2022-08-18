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
    <IconVector name="chevron-down-sharp-white" size="sm" />
  </Box>
);

export const HangingCard: VFC = () => {
  const { t } = useTranslation();

  return (
    <Card backgroundColor="pfmcard" padding="md">
      <Box>
        <Box>
          <Text fontSize={RFValue(16)} fontVariant="h1" fontWeight="400">
            Finance Management
          </Text>
          <Text fontSize={RFValue(14)} fontVariant="p" fontWeight="normal">
            {t("pfm.learnMore")}
          </Text>
        </Box>
        <Text color="textColor2" fontSize={RFValue(12)} my="md">
          {t("pfm.selectAccount")}
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
            >
              <Box>
                <Text color="whiteColor" fontSize={RFValue(11)}>
                  0000826353 - {t("pfm.current").toUpperCase()}
                </Text>
                <Text color="whiteColor" fontWeight="bold">
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
                  <Box ml="md">
                    <IconVector name="eye-closed" size="md" />
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
