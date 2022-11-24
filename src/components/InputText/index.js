import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style";
// import CloseIcon from 'react-native-vector-icons/Octicons';
import { Color } from "../../utils/color";
import PropTypes from "prop-types";
import Theme, {
  fontLarge,
  fontNormal,
  fontSmall,
  fontXLarge,
  fontXSmall,
  fontXXLarge,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/themeUtils";
import Label from "../label";

const InputText = (props) => {
  const [secureEntry, setSecureEntry] = useState(false);
  const toggleEye = () => {
    setSecureEntry(!secureEntry);
  };

  let inputContainerStylesArray = [];
  let inputTextStylesArray = [];

  if (props.input_sm) {
    inputContainerStylesArray.push({
      height: responsiveHeight(5),
    });
    inputTextStylesArray.push({
      fontSize: fontSmall,
      paddingLeft: props.iconName ? 35 : 15,
    });
  } else if (props.input_md) {
    inputContainerStylesArray.push({
      height: responsiveHeight(6),
    });
    inputTextStylesArray.push({
      fontSize: fontLarge,
      paddingLeft: props.iconName ? 45 : 15,
    });
  } else if (props.input_lg) {
    inputContainerStylesArray.push({
      height: responsiveHeight(8),
    });
    inputTextStylesArray.push({
      fontSize: fontXXLarge,
      paddingLeft: props.iconName ? 55 : 15,
    });
  } else {
    inputContainerStylesArray.push({
      height: responsiveHeight(7),
    });
    inputTextStylesArray.push({
      fontSize: fontNormal,
      paddingLeft: props.iconName ? 40 : 15,
    });
  }

  let borderColor = props.borderColor
    ? props.borderColor
    : props.backgroundColor;

  inputContainerStylesArray.push({
    marginTop: props.mt,
    marginBottom: props.mb,
    marginStart: props.ms,
    marginEnd: props.me,
    backgroundColor: props.backgroundColor,
    borderColor: borderColor,
    justifyContent: "center",
    alignItems: "center",
    width: props.width,
    borderRadius: props.border_radius,
    borderWidth: 1,
    // borderBottomWidth: 0,
  });
  inputTextStylesArray.push({
    color: props.textColor,
    width: props.width,
    height: "100%",
    borderWidth: 2,
    borderColor: "#0174cf",
    borderRadius: props.border_radius,
  });

  return (
    <>
      <View style={[inputContainerStylesArray, props.containerStyle]}>
        {/* <Icon size={props.iconSize} name={props.iconName} color={props.iconColor} style={styles.icon} /> */}
        <TextInput
          style={[inputTextStylesArray, props.styleText]}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onChangeText={props.onChangeText}
          secureTextEntry={secureEntry}
          value={props.value}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
        />
        {props.password ? (
          <TouchableOpacity onPress={toggleEye} style={styles.closeIcon}>
            {secureEntry ? (
              <Icon
                name="eye-off-outline"
                size={props.eyeIconSize}
                color={props.closeColor}
              />
            ) : (
              <Icon
                name="eye-outline"
                size={props.eyeIconSize}
                color={props.closeColor}
              />
            )}
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={props.onPress} style={styles.closeIcon}>
          {/* <CloseIcon
                        name={props.closeIcon}
                        size={props.closeIconSize ? props.closeIconSize : 25}
                        color={props.closeColor}
                    /> */}
        </TouchableOpacity>
      </View>
      {props.error ? (
        <Label normal align="center" color={Color.RED} mt={5}>
          {props.error}
        </Label>
      ) : null}
    </>
  );
};
InputText.defaultProps = {
  textColor: Color.BLACK,
  backgroundColor: Color.WHITE,
  input_xs: false,
  input_sm: false,
  input_lg: false,
  input_xl: false,
  input_block: false,
  border_radius: 0,
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
  placeholder: "placeholder",
  iconColor: Color.BLACK,
  iconSize: responsiveHeight(3),
  pdLeft: responsiveWidth(1.5),
  eyeIconColor: Color.BLACK,
  eyeIconSize: responsiveHeight(3),
  width: "100%",
};
InputText.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  input_xs: PropTypes.bool,
  input_sm: PropTypes.bool,
  input_lg: PropTypes.bool,
  input_xl: PropTypes.bool,
  input_block: PropTypes.bool,
  border_radius: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
  placeholder: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  eyeIconColor: PropTypes.string,
  eyeIconSize: PropTypes.number,
  pdLeft: PropTypes.number,
  width: PropTypes.string,
};
export default InputText;
