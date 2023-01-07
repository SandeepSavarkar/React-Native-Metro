import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/themeUtils";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    padding: responsiveWidth(2),
  },
  container: {
    flexDirection: "column",
  },
  fdr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
