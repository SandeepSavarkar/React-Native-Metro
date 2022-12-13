import { CommonActions } from "@react-navigation/native";
import { Formik } from "formik";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import { getAuthInitialValues } from "../../utils/form-helper/initial-values";
import { user } from "../../store/actions";

const Login = ({ navigation, userInfo }) => {
  const handleLogin = () => {
    navigation.navigate(Routes.SignUp);
  };
  const redirectToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.Authenticated }],
      })
    );
  };

  const handleSubmit = (values) => {
    debugger;
    console.log("values: ", values);
    userInfo(values);
    // redirectToHome();
  };

  const LoginSchema = Yup.object().shape({
    phoneNo: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Phone number is not valid")
      .required("Required"),
    password: Yup.string()
      .min(6, "Minimun length 6")
      .max(30)
      .required("Required"),
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "5%",
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
          }}
        />
      </View>
      <Formik
        initialValues={{
          phoneNo: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <View style={{ width: "100%" }}>
            <InputText
              placeholder="Enter mobile number"
              border_radius={20}
              mt={10}
              name="phoneNo"
              value={values.phoneNo}
              onChangeText={handleChange("phoneNo")}
            />
            {errors.phoneNo ? <Label> {errors.phoneNo}</Label> : null}
            <InputText
              placeholder="Enter your password"
              border_radius={20}
              mt={10}
              name="password"
              value={values.password}
              onChangeText={handleChange("password")}
            />
            {errors.password ? <Label>{errors.password}</Label> : null}
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
              onPress={handleSubmit}
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userInfo: user.userLoginAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
