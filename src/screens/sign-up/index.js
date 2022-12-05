import { Formik } from "formik";
import { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";

const SignUp = ({navigation,userInfo}) => {
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
    userInfo(params);
    // console.log(params,'paramsparamsparams');
  };
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
        >
          {({ values, handleChange, handleSubmit }) => (
            <View>
              <InputText
                placeholder="Enter name"
                border_radius={20}
                mt={10}
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
              />
              <InputText
                placeholder="Enter address"
                border_radius={20}
                mt={10}
                name="address"
                value={values.address}
                onChangeText={handleChange("address")}
              />
              <InputText
                placeholder="Enter Mobile Number"
                border_radius={20}
                mt={10}
                name="phoneNo"
                value={values.phoneNo}
                onChangeText={handleChange("phoneNo")}
              />
              <InputText
                placeholder="Enter your password"
                border_radius={20}
                mt={10}
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
              />
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
      userInfo: userActions.userSignIn,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
