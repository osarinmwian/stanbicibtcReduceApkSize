import { loginBackground } from "@/mybank/assets/image";
import { CategoryButton } from "@/mybank/components/Buttons/CategoryButton";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { SvgIconPackType } from "@/shared/assets/icons";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { SafeAreaView, ImageBackground, Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";
import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

type TransactionType = {
    title: string,
    leftIcon: SvgIconPackType,
    subtitle: string,
    iconBackgroundColor: PaletteType,
    amount: string;
}


export const FinancialManagementScreen: VFC<PfmNavigationProps<"financialManagementScreen">> = ({
    navigation,
}) => {
    const { t } = useTranslation();

    const transactions: TransactionType[] = [
        { title: 'SALARY_DANGOTE_JANUARY...', leftIcon: 'arrow-backward', subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`, iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "3,400" },
        { title: 'WINIFRED EKWUNIFE', leftIcon: 'arrow-forward', subtitle: `${t("pfm.credit").toUpperCase()}. 07/01/2021, 1:25:05 AM`, iconBackgroundColor: "pfmmoneyinbackgroundcolor", amount: "500" },
        { title: 'EHIZOJIE IHAYERE', leftIcon: 'arrow-backward', subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`, iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "3,900" },
        { title: 'EHIZOJIE IHAYERE SOLOMON/MOBILE ...', leftIcon: 'arrow-backward', subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`, iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "750" }
    ]
    return (
        <SafeAreaView flex={1}>
            <ImageBackground flex={1} source={loginBackground}>
                <Box height={RFValue(50)} />
                <Box
                    flex={1}
                    backgroundColor="whiteColor"
                    borderTopStartRadius="sm"
                    borderTopEndRadius="sm"
                >
                    <ScrollView>
                        <Box
                            flex={1}
                        >
                            <Box
                                padding="md"
                                pb="none"
                            >
                                <CategoryButton
                                    {...{
                                        title: 'Education',
                                        leftIcon: 'graduationCap',
                                        subtitle: '140 transactions',
                                        amount: '30,000,000',
                                        rightColor: 'pfmeducationblue',
                                        backgroundColor: 'pfmeducationbackgroundcolor'
                                    }}
                                />
                                <BaseButton onPress={() => navigation.navigate("EditCategoryNameScreen")}>
                                    <Box my="lg" alignItems="center" flexDirection="row">
                                        <Text color="primaryColor" fontWeight="500" fontSize={RFValue(12)}>{t("pfm.editCategoryName").toUpperCase()}</Text>
                                        <Box ml="sm">
                                            <IconVector name="chevron-right-slim" size="m" />
                                        </Box>
                                    </Box>
                                </BaseButton>

                                <Box flexDirection="row" justifyContent="space-evenly">
                                    <Box flex={0.9} padding="md" borderRadius="sm" backgroundColor="cardSecondary">
                                        <Box alignItems="center">
                                            <Text fontSize={RFValue(14)} fontWeight="400">N10,125,540.00</Text>
                                        </Box>
                                        <Box flexDirection="row" alignItems="center" mt="xs" justifyContent="center">
                                            <Text color="pfmorange">{t("pfm.withdrawal")}</Text>
                                        </Box>
                                    </Box>
                                    <Box flex={0.2} />
                                    <Box flex={0.9} padding="md" borderRadius="sm" backgroundColor="cardSecondary">
                                        <Box alignItems="center">
                                            <Text fontSize={RFValue(14)} fontWeight="400">N100,56,700.86</Text>
                                        </Box>
                                        <Box flexDirection="row" alignItems="center" mt="xs" justifyContent="center">
                                            <Text color="pfmgreen">{t("pfm.deposit")}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box my="lg" alignItems="center" flexDirection="row">
                                    <Text color="primaryColor" fontWeight="400" fontSize={14}>{t("pfm.category").toUpperCase()}</Text>
                                </Box>
                            </Box>
                            {transactions.map((item, index) => <CategoryButton
                                key={index}
                                {...item}
                                {...{
                                    backgroundColor: index % 2 ? 'pfmeducationbackgroundcolor' : "transparent",
                                    rightColor: "black",
                                    size: "sm",
                                    borderRadius: "none",
                                    mb: 'sm',
                                    leftIconProps: { size: "sm" }
                                }}
                                onPress={() => navigation.navigate("TransactionHistoryScreen")}
                            />)}
                        </Box>
                    </ScrollView>
                </Box>
            </ImageBackground>
        </SafeAreaView >
    )
}