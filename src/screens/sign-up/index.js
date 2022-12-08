import { Formik } from "formik";
import { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import * as Yup from "yup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import userActions from "../../store/actions/user";

const SignUp = ({ navigation,userRegister }) => {
  const handleAlreadyRegister = () => navigation.navigate(Routes.Login);

  const handleRegistertion = async (values) => {
    let params = {
      name: values.name,
      password: values.password,
      phoneNo: values.phoneNo,
      address: values.address,
      isAdmin: false,
    };
    console.log(params, "paramsparamsparams");
    userRegister(params);
    console.log(params,'paramsparamsparams');
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().max(50, "Too Long!").required("Required"),
    address: Yup.string().max(250, "Too Long!").required("Required"),
    phoneNo: Yup.string().matches(/^[6-9]\d{9}$/, "Phone number is not valid").required("Required"),
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
              />
              {errors.name ? <Label> {errors.name}</Label> : null}
              <InputText
                placeholder="Enter address"
                border_radius={20}
                mt={10}
                name="address"
                value={values.address}
                onChangeText={handleChange("address")}
              />
              {errors.address ? <Label>{errors.address}</Label> : null}
              <InputText
                placeholder="Enter Mobile Number"
                border_radius={20}
                mt={10}
                name="phoneNo"
                value={values.phoneNo}
                onChangeText={handleChange("phoneNo")}
              />
              {errors.phoneNo ? <Label>{errors.phoneNo}</Label> : null}
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
                text="Sign Up"
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
          )}
        </Formik>
        <TouchableOpacity onPress={handleAlreadyRegister}>
          <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
            Already registered?
          </Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  common: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userRegister: userActions.userRegisterAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);



