import { CommonActions } from "@react-navigation/native";
import { Formik } from "formik";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import { Color,getColor } from "../../utils";
import { getAuthInitialValues } from "../../utils/form-helper/initial-values";
import {useThemedStyles,useTheme} from '../../components/rn-theme-wrapper';
import {stylesTest} from './style'
import { colors } from "../../utils/getColor";
const Login = ({ navigation }) => {

  const styleTestData = useThemedStyles(stylesTest);
  const theme = useTheme();
  const handleLogin = () => {
    navigation.navigate(Routes.SignUp);
  };
  const redirectToHome = () => {
    theme.customeTheme(colors.dark);
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: Routes.Authenticated }],
    //   })
    // );
  };

  const handleSubmit = (values) => () => {
    console.log("values: ", values);
    // redirectToHome();
  };

  return (
    <View
      style={styleTestData.body}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
          }}
        />
      </View>
      <Formik initialValues={getAuthInitialValues()}>
        {({ values }) => (
          <View style={{ width: "100%" }}>
            <InputText
              placeholder="Enter mobile number or username"
              border_radius={20}
              mt={10}
              name="username"
            />
            <InputText
              placeholder="Enter your password"
              border_radius={20}
              mt={10}
              name="password"
            />
            <Button
              btn-lg
              title="Login"
              mt={10}
              containerStyle={{ borderRadius: 20 }}
              buttonStyle={{
                paddingVertical: 12,
                borderRadius: 20,
                backgroundColor: "#0174cf",
              }}
              textStyle={{ fontSize: 20 }}
              onPress={handleSubmit(values)}
            />
            <TouchableOpacity onPress={handleLogin}>
              <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
                Sign Up
              </Label>
            </TouchableOpacity>
            <TouchableOpacity onPress={redirectToHome}>
              <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
                Home
              </Label>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
});

export default Login;
