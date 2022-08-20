import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNames:{
    display:'flex',
    justifyContent:"flex-start",
    marginVertical:10,
    marginHorizontal:16,
    flexDirection:'row'
  },
  buttonVerve:{
    marginLeft:47
  },
  buttonMasterCard:{
    marginLeft:26
  },
  text: {
    textTransform: "uppercase",
    position: "relative",
    zIndex: 100,
    paddingHorizontal: 15,
    top: 35,
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 50,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  primaryButton: {
    backgroundColor: "#0033AA",
    justifyContent: "center",
    alignItems: "center",
  },
});
