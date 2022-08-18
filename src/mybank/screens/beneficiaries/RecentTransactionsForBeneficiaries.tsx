import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

import beneficiaryList from "@/mybank/screens/beneficiaries/files/beneficiariesList";
import { styles } from "@/mybank/screens/beneficiaries/styles/RecentTranactionListStyles";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

function RecentTransactionsForBeneficiaries() {
  return (
    <Box>
      <Text
        color="lightGrey"
        marginBottom="md"
        style={{ paddingTop: RFValue(24), paddingBottom: RFValue(24) }}
        textAlign="left"
        variant="bold14"
      >
        RECENT TRANSACTIONS
      </Text>
      <Box flex={1} flexDirection="row" marginVertical="lg">
        {beneficiaryList.map((item) => (
          <Box
            alignItems="center"
            flex={1}
            justifyContent="center"
            key={item.name}
            paddingHorizontal="md"
            paddingVertical="lg"
          >
            <LinearGradient colors={item.background} style={styles.container}>
              <TouchableOpacity
                style={[
                  styles.container,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text color="whiteColor" textAlign="center" variant="medium18">
                  {item.name.slice(0, 2).toUpperCase()}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <Box height={100} width={60}>
              <Text
                color="primaryBlack"
                paddingVertical="sm"
                textAlign="center"
                variant="regular12"
              >
                {item.name}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RecentTransactionsForBeneficiaries;
