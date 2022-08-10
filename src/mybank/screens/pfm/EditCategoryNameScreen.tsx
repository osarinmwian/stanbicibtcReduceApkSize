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
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

type TransactionType = {
    title: string,
    leftIcon: SvgIconPackType,
    subtitle: string,
    iconBackgroundColor: PaletteType,
    amount: string;
}

const transactions: TransactionType[] = [
    { title: 'SALARY_DANGOTE_JANUARY...', leftIcon: 'arrow-backward', subtitle: 'DEBIT . 07/01/2021, 1:25:05 AM', iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "3,400" },
    { title: 'WINIFRED EKWUNIFE', leftIcon: 'arrow-forward', subtitle: 'CREDIT . 07/01/2021, 1:25:05 AM', iconBackgroundColor: "pfmmoneyinbackgroundcolor", amount: "500" },
    { title: 'EHIZOJIE IHAYERE', leftIcon: 'arrow-backward', subtitle: 'DEBIT . 07/01/2021, 1:25:05 AM', iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "3,900" },
    { title: 'EHIZOJIE IHAYERE SOLOMON/MOBILE ...', leftIcon: 'arrow-backward', subtitle: 'DEBIT . 07/01/2021, 1:25:05 AM', iconBackgroundColor: "pfmmoneyoutbackgroundcolor", amount: "750" }
]

export const EditCategoryNameScreen: VFC<PfmNavigationProps<"financialManagementScreen">> = () => {
    const { t } = useTranslation();
    return (<SafeAreaView flex={1}>
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
                            <Box my="lg" alignItems="center" flexDirection="row">
                                <Text fontWeight="500" fontSize={16}>{t("pfm.modifyTransferLimit")}</Text>
                            </Box>

                            <Box padding="md" mt="none" mb="sm" borderRadius="sm" backgroundColor="cardSecondary">
                                <Text color="darkGrey" fontWeight="400">{t("pfm.newCategoryName")}</Text>
                                <TextInput placeholder="Enter name" />
                            </Box>
                            <Box justifyContent="center">
                                <Text fontSize={RFValue(12)} fontWeight="400">{t("pfm.onlyCategoryNameInfo")}</Text>
                            </Box>
                        </Box>

                    </Box>
                </ScrollView>
            </Box>
        </ImageBackground>
    </SafeAreaView >
    )
};