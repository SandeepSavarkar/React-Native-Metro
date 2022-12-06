import {StyleSheet, StatusBar} from 'react-native';
export const stylesTest = (theme) =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "5%",
      backgroundColor: theme.colors.BACKGROUND,
    },
    splashImage: {
      flex: 1,
      resizeMode: "cover",
    },
  });
