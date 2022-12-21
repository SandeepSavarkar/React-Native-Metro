import { Formik } from "formik";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Appearance,
} from "react-native";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import * as Yup from "yup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import userActions from "../../store/actions/user";
import OtpInputs from "react-native-otp-inputs";
import { Color } from "../../utils/color";

const SignUp = ({ navigation, userRegister }) => {
  const handleAlreadyRegister = () => navigation.navigate(Routes.Login);
  const [isVerifyOTP, setIsVerifyOTP] = useState(false);

  const handleRegistertion = async (values) => {
    let params = {
      name: values.name,
      password: values.password,
      phoneNo: values.phoneNo,
      address: values.address,
      isAdmin: false,
    };
    userRegister(params);
  };

  const handleSignUp = () => {
    setIsVerifyOTP(true);
  };

  const handleChangeNumber = () => {
    setIsVerifyOTP(false);
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().max(50, "Too Long!").required("Required"),
    address: Yup.string().max(250, "Too Long!").required("Required"),
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
      <View style={{ width: "100%" }}>
        <Label mt={10} xxxlarge me={10} style={{ textAlign: "center" }}>
          Sign Up
        </Label>
        <Formik
          initialValues={{ phoneNo: "", address: "", password: "", name: "" }}
          onSubmit={handleRegistertion}
          validationSchema={SignupSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <View>
              <InputText
                placeholder="Enter name"
                border_radius={20}
                mt={10}
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
                editable={!isVerifyOTP}
              />
              {errors.name ? <Label> {errors.name}</Label> : null}
              <InputText
                placeholder="Enter address"
                border_radius={20}
                mt={10}
                name="address"
                value={values.address}
                onChangeText={handleChange("address")}
                editable={!isVerifyOTP}
              />
              {errors.address ? <Label>{errors.address}</Label> : null}
              <InputText
                placeholder="Enter Mobile Number"
                border_radius={20}
                mt={10}
                name="phoneNo"
                value={values.phoneNo}
                onChangeText={handleChange("phoneNo")}
                editable={!isVerifyOTP}
              />
              {errors.phoneNo ? <Label>{errors.phoneNo}</Label> : null}
              <InputText
                placeholder="Enter your password"
                border_radius={20}
                mt={10}
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                editable={!isVerifyOTP}
              />
              {errors.password ? <Label>{errors.password}</Label> : null}

              {isVerifyOTP ? (
                <>
                  <View style={styles.spacing}>
                    <OtpInputs
                      handleChange={(value) => console.log("value", value)}
                      numberOfInputs={4}
                      inputContainerStyles={[
                        styles.inputContainerStyles,
                        {
                          borderColor: Color.PRIMARY,
                          borderWidth: 2,
                        },
                      ]}
                      inputStyles={styles.inputStyles}
                      keyboardType="number-pad"
                      focusStyles={{ borderColor: Color.PRIMARY }}
                      // contextMenuHidden={true} // if we want remove paste option
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Button
                      btn-lg
                      title="Verify OTP"
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
                  </View>
                </>
              ) : (
                <View style={{ marginTop: 10 }}>
                  <Button
                    btn-lg
                    title="Sign Up"
                    mt={10}
                    containerStyle={{ borderRadius: 20 }}
                    buttonStyle={{
                      paddingVertical: 12,
                      borderRadius: 20,
                      backgroundColor: "#0174cf",
                    }}
                    textStyle={{ fontSize: 20 }}
                    onPress={handleSignUp}
                  />
                </View>
              )}
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={handleAlreadyRegister}>
          <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
            Already registered?
          </Label>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChangeNumber}>
          <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
            Change Number
          </Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userRegister: userActions.userRegisterAction,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
    marginHorizontal: 30,
    position: "relative",
    marginTop: 30,
  },
  inputContainerStyles: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    alignItems: "center",
  },
  inputStyles: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "SofiaProSoftBold",
    color: Color.PRIMARY,
    width: 50,
    height: 50,
  },
});
