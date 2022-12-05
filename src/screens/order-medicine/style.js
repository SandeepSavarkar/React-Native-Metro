import { StyleSheet } from "react-native";
import { Color, ThemeUtils } from "../../utils";
import { responsiveHeight, responsiveWidth } from "../../utils/themeUtils";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE_SMOKE,
  },
  subContainer: {
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.ALICE_BLUE,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  fieldContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  img: {
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    borderRadius: 70,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
