import React from 'react';
import { Text } from 'react-native';
import { Color } from '../../utils/color';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fontLarge, fontNormal, fontSmall, fontXLarge, fontXSmall, fontXXLarge, fontXXSmall, fontXXXLarge, fontXXXXLarge } from '../../utils/themeUtils';

const Label = (props) => {

    const onClick = () => {
        if (props.onPress)
            props.onPress();
    };

    let stylesArray = [];
    if (props.xxxxlarge)
        stylesArray.push({ fontSize: fontXXXXLarge });
    else if (props.xxxlarge)
        stylesArray.push({ fontSize: fontXXXLarge });
    else if (props.xxlarge)
        stylesArray.push({ fontSize: fontXXLarge });
    else if (props.xlarge)
        stylesArray.push({ fontSize: fontXLarge });
    else if (props.large)
        stylesArray.push({ fontSize: fontLarge });
    else if (props.normal)
        stylesArray.push({ fontSize: fontNormal });
    else if (props.small)
        stylesArray.push({ fontSize: fontSmall });
    else if (props.xsmall)
        stylesArray.push({ fontSize: fontXSmall });
    else if (props.xxsmall)
        stylesArray.push({ fontSize: fontXXSmall });
    else
        stylesArray.push({ fontSize: fontNormal });

    if (props.bold)
        stylesArray.push({ fontWeight: "500" });
    else if (props.bolder)
        stylesArray.push({ fontWeight: "bold" });
    else if (props.light)
        stylesArray.push({ fontWeight: "400" });
    else if (props.lighter)
        stylesArray.push({ fontWeight: "200" });
    else
        stylesArray.push({ fontWeight: "normal" });

   
    stylesArray.push({
        color: props.color,
        marginTop: props.mt,
        marginBottom: props.mb,
        marginStart: props.ms,
        marginEnd: props.me,
        textAlign: props.align,
        lineHeight: props.lineHeight,
        padding: props.padding
    });
    stylesArray.push(props.style);
    return (
        <Text allowFontScaling={false} numberOfLines={props.singleLine ? 1 : null} style={stylesArray}
            onPress={props.onPress ? onClick :  null} >
            {props.children}
        </Text>
    );
}

Label.defaultProps = {
    xxsmall: false,
    xsmall: false,
    small: false,
    normal: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    bold: false,
    bolder: false,
    lighter: false,
    light: false,
    color: Color.TEXT_PRIMARY,
    roboto_regular: false,
    roboto_medium: false,
    device_info: false,
    align: "left",
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    padding: 0,
    singleLine: false,
    sofia_medium: false,
    poopins_regular: false,
    poopins_semibold: false
};
Label.propTypes = {
    xxsmall: PropTypes.bool,
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    color: PropTypes.string,
    roboto_medium: PropTypes.bool,
    roboto_regular: PropTypes.bool,
    device_info: PropTypes.bool,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
    padding: PropTypes.number,
    align: PropTypes.string,
    singleLine: PropTypes.bool,
    sofia_medium: PropTypes.bool,
    poopins_regular: PropTypes.bool,
    poopins_semibold: PropTypes.bool
};
export default Label;