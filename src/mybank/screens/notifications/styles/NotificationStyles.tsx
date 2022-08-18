import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 20,
  },
  content: {
    marginHorizontal: 10,
  },
  topContent: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
  },
  buttonContainer: {
    marginBottom: 20,
    height: 130,
    paddingHorizontal: 8,
    width: "100%",
  },
  notificationText: {
    textTransform: "uppercase",
    marginLeft: -10,
  },
  subheading: {
    width: "80%",
  },
});
