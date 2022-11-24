import React from 'react';
import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};
//===========Responsive Fonts============//
export const fontXXSmall = hp(1.2);
export const fontXSmall = hp(1.5);
export const fontSmall = hp(1.7);
export const fontNormal = hp(1.9);
export const fontLarge = hp(2.1);
export const fontXLarge = hp(2.5)
export const fontXXLarge = hp(2.8);
export const fontXXXLarge = hp(3.4);
export const fontXXXXLarge = hp(4.0);

//===========Responsive Height and Width============// 
export const responsiveWidth = num => wp(num)
export const responsiveHeight = num => hp(num)

export default {
    fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge, fontXXLarge, responsiveHeight, responsiveWidth,
};