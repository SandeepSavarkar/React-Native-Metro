import { Component } from "react";
import { StyleSheet } from "react-native";
import { Color, ThemeUtils } from "../../utils";
export const styles = StyleSheet.create({
  imgContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.INPUT_BACKGROUND,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  img: {
    width: ThemeUtils.relativeWidth(40),
    height: ThemeUtils.relativeHeight(20),
    borderRadius: 70,
  },

  fieldContainer: {
    width: ThemeUtils.relativeWidth(70),
    height: ThemeUtils.relativeHeight(45),
    justifyContent: "space-around",
  },
});
