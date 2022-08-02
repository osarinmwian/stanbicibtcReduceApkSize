import { loginBackground } from "@/mybank/assets/image";
import { TransactionCategoryModal } from "@/mybank/components/Modals/TransactionCategoryModal";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { BaseButton } from "@/shared/components/Buttons";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, VFC } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const TransactionHistoryScreen: VFC<PfmNavigationProps<"TransactionHistoryScreen">> = ({
    navigation,
}) => {
    const TransactionCategoryModalRef = useRef<BottomSheetModal>(null);

    const onOpenTransactionCategoryModal = () => TransactionCategoryModalRef.current?.present();
    return (
        <SafeAreaView flex={1}>
            <ImageBackground flex={1} source={loginBackground}>
                <Box height={RFValue(50)} />
                <Box
                    flex={1}
                    backgroundColor="whiteColor"
                    borderTopStartRadius="sm"
                    borderTopEndRadius="sm"
                    padding="md"
                >
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Box padding="md" mb="sm" borderRadius="sm" backgroundColor="cardSecondary">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">TRANSACTION AMOUNT</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">N200,000</Text>
                            </Box>
                        </Box>
                        <Box padding="md" mb="sm" borderRadius="sm">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">TO</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">SALARY_DANGOTE_JANUARY_BATCH_1</Text>
                            </Box>
                        </Box>
                        <Box padding="md" mb="sm" borderRadius="sm" backgroundColor="cardSecondary">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">STATUS</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">SUCCESSFULL</Text>
                            </Box>
                        </Box>
                        <Box padding="md" mb="sm" borderRadius="sm">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">NARRATION</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">My guy, use this one flex for weekend. Hope you’re not annoyed anymore.</Text>
                            </Box>
                        </Box>
                        <Box padding="md" mb="sm" borderRadius="sm" backgroundColor="cardSecondary">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">TRANSACTION DATE</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">JANUARY 12, 2021 15:32</Text>
                            </Box>
                        </Box>
                        <Box padding="md" mb="sm" borderRadius="sm">
                            <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">TRANSACTION TYPE</Text>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">CREDIT</Text>
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" alignItems="center" padding="md" mb="sm" borderRadius="sm" backgroundColor="cardSecondary">
                            <Box>
                                <Text fontWeight="300" fontSize={RFValue(12)} color="darkGrey">TRANSACTION CATEGORY</Text>
                                <Box justifyContent="center">
                                    <Text fontSize={RFValue(14)} color="primaryColor" fontWeight="500">Education</Text>
                                </Box>
                            </Box>
                            <Box>
                                <TouchableOpacity
                                    onPress={onOpenTransactionCategoryModal}
                                >
                                    <Text fontSize={RFValue(12)} color="primaryColor" fontWeight="400">CHANGE</Text>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                        <Box>
                            <BaseButton justifyContent="center">
                                <Box padding="sm">
                                    <Text color="whiteColor" fontWeight="400">DOWNLOAD RECIEPT</Text>
                                </Box>
                            </BaseButton>
                        </Box>
                    </ScrollView>
                </Box>
                <TransactionCategoryModal bottomSheetModalRef={TransactionCategoryModalRef} />
            </ImageBackground >
        </SafeAreaView >
    )
}