import { StyleSheet } from "react-native";
import { Color } from "../../../utils/color";
import { responsiveHeight, responsiveWidth } from "../../utils/themeUtils";

const styles = StyleSheet.create({
    
    icon: {
        position: 'absolute',
        left: responsiveWidth(2.0)
    },

    closeIcon: {
        position: 'absolute',
        right: responsiveWidth(2.5)     
    },
})

export default styles;