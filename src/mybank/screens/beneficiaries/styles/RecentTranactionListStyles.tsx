import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius: RFValue(50),
        height: RFValue(64),
        width: RFValue(64),
      },
})