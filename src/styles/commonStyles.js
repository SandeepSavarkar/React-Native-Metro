import { StyleSheet } from "react-native";
import { Color } from "../utils/color";
import { responsiveHeight } from "../utils/themeUtils";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noInternet: {
    justifyContent: "center",
    height: responsiveHeight(5),
    width: "100%",
    backgroundColor: Color.BLACK,
    alignItems: "center",
  },    
});

export default commonStyles;
