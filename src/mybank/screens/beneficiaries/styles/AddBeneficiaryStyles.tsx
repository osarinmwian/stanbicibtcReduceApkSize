import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const style = StyleSheet.create({
  image: {
    width: 37,
    height: 37,
  },
  text: {
    textTransform: "uppercase",
    position: "relative",
    zIndex: 100,
    color: "grey",
    paddingHorizontal: 15,
    top: 35,
  },
  container: {
    width: 88,
    height: 88,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44,
    marginVertical: 24,
  },
  bankSelect: {
    position: "relative",
    top: -10,
    left: -8,
  },
  bottomContainer:{
    marginTop:-15,
  },
  smallImageContainer: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(5),
    justifyContent: "center",
    alignItems: "center",
    marginRight: RFValue(12),
  },
  smallImage: {
    tintColor: "#616E88",
  },
  arrowImage:{
    tintColor:"#767676"
  },
  inputContainer: {
    width: 300,
  },
  bottomInput: {
    position: "absolute",
    marginLeft: -10,
    width: 280,
  },
});
