import React, { VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, Card } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "@/shared/theme/palette";
import { IconVector } from "@/shared/assets/icons/IconVector";
//@ts-ignore
import Ionicon from 'react-native-vector-icons/Ionicons';

export const SideIcon = () => (
    <Box backgroundColor="transparentWhite" height={RFValue(25)} width={RFValue(25)} borderRadius="lg" justifyContent="center" alignItems="center">
        <Ionicon name="chevron-down-sharp" color="white" size={RFValue(20)} />
    </Box>
)

export const HangingCard: VFC = () => (
    <Card backgroundColor="pfmCard" padding="md">
        <Box>
            <Box>
                <Text fontVariant="h1" fontSize={RFValue(16)} fontWeight="400">Finance Management</Text>
                <Text fontVariant="p" fontWeight="normal" fontSize={RFValue(14)}>
                    Learn More about your finance
                </Text>
            </Box>
            <Text color="textColor2" my="md" fontSize={RFValue(12)}>
                SELECT ACCOUNT
            </Text>
            <Box borderWidth={0} borderRadius="sm">
                <LinearGradient style={{ borderRadius: 8 }} start={{ x: 0.05, y: 0.0 }} colors={[palette.pfmInnerCardLinearGradientColorStart, palette.pfmInnerCardLinearGradientColorEnd]}>
                    <Box padding="sm" flexDirection="row" justifyContent="space-between">
                        <Box>
                            <Text color="whiteColor" fontSize={RFValue(11)}>
                                0000826353 - CURRENT
                            </Text>
                            <Text color="whiteColor" fontWeight="bold">
                                EHINOZIE SOLOMON IHAYERE
                            </Text>
                            <Box my="md" flexDirection="row" alignItems="center">
                                <Box>
                                    <Text>
                                        <Text color="whiteColor" fontWeight="bold">N </Text>
                                        <Text color="whiteColor" fontSize={RFValue(24)} fontWeight="bold">XXX,XXX.</Text>
                                        <Text color="whiteColor" fontWeight="bold">XX</Text>
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
    </Card >
);
