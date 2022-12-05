import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/themeUtils";

const styles = StyleSheet.create({
  fdr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    margin: 10,
  },
  slide1: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
