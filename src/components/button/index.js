import React from "react";
import { View, TouchableHighlight, Text, TouchableOpacity } from "react-native";
import { Color } from "../../utils/color";
//import {fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge} from 'src/utils/theme';
import Theme, {
  responsiveHeight,
  responsiveWidth,
} from "../../utils/themeUtils";
import PropTypes from "prop-types";

const Button = (props) => {
  // const onClick = () => {
  //   if (props.click) props.click();
  // };

  let btnContainerStylesArray = [];
  let btnTextStylesArray = [];
  if (props.btn_xs) {
    btnContainerStylesArray.push({ paddingHorizontal: 20 });
    btnTextStylesArray.push({ fontSize: Theme.fontXSmall });
  } else if (props.btn_sm) {
    btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 7 });
    btnTextStylesArray.push({ fontSize: Theme.fontSmall });
  } else if (props.btn_lg) {
    btnContainerStylesArray.push({ paddingHorizontal: 20, paddingVertical: 9 });
    btnTextStylesArray.push({ fontSize: Theme.fontLarge });
  } else if (props.btn_xl) {
    btnContainerStylesArray.push({
      paddingHorizontal: 20,
      paddingVertical: 11,
    });
    btnTextStylesArray.push({ fontSize: Theme.fontXLarge - 2 });
  } else {
    btnContainerStylesArray.push({
      height: responsiveHeight(8),
      paddingHorizontal: 20,
      paddingVertical: 8,
    });
    btnTextStylesArray.push({ fontSize: Theme.fontSmall });
  }
  let btnWholeStyles = [];
  btnWholeStyles.push({
    marginTop: props.mt,
    marginBottom: props.mb,
    marginStart: props.ms,
    marginEnd: props.me,
    width: props.width ? props.width : "100%",
    justifyContent: "center",
    alignItems: "center",
  });
  if (props.btn_block) {
    btnWholeStyles.push({
      alignSelf: "stretch",
    });
  }

  let borderColor = props.borderColor
    ? props.borderColor
    : props.backgroundColor;
  btnContainerStylesArray.push({
    backgroundColor: props.backgroundColor,
    borderColor: borderColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: props.border_radius,
    borderWidth: 1,
    borderBottomWidth: 0,
    width: props.width ? props.width : "100%",
    height: props.height,
  });
  btnTextStylesArray.push({ color: props.textColor });

  return (
    <View
      style={[btnWholeStyles, props.containerStyle, { height: props.height }]}
    >
      <TouchableOpacity
        style={[btnContainerStylesArray, props.buttonStyle]}
        rippleContainerBorderRadius={30}
        onPress={props.onPress}
      >
        <Text style={[btnTextStylesArray, props.textStyle]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  ...TouchableHighlight.defaultProps,
  textColor: Color.WHITE,
  backgroundColor: Color.PRIMARY,
  btn_xs: false,
  btn_sm: false,
  btn_lg: false,
  btn_xl: false,
  btn_block: false,
  border_radius: 0,
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
};
Button.propTypes = {
  ...TouchableHighlight.propTypes,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  btn_xs: PropTypes.bool,
  btn_sm: PropTypes.bool,
  btn_lg: PropTypes.bool,
  btn_xl: PropTypes.bool,
  btn_block: PropTypes.bool,
  border_radius: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
};
export default Button;
