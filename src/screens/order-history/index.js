import { useCallback, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";
import { FieldArray, Formik } from "formik";
import Button from "../../components/button";
import InputText from "../../components/InputText";

const OrderHistory = (props) => {
  const { navigation, common } = props;
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.notAuthenticated }],
      })
    );
  };

  const handleAdd = (arrayHelpers) => () => {
    console.log("arrayHelpers: ", arrayHelpers.values);
    arrayHelpers.push({  });
  };
  const handleCreateOrder = (values) => () => {
    console.log("handleCreateOrder(values): ", values);
    ``;
  };
  // useEffect(() => {
  //   props.userInfo();
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Formik initialValues={{}}>
        {({ values }) => (
          <View style={{ width: "100%" }}>
            <FieldArray
              name="medicine"
              render={(arrayHelpers) => {
                console.log("values: ", values);
                const details = values?.medicine || [];
                return (
                  <>
                    {details?.map((detail, cdIndex) => (
                      <InputText
                        placeholder="Enter mobile number or username"
                        border_radius={20}
                        mt={10}
                        name={`username${cdIndex}`}
                      />
                    ))}
                    <Button
                      btn-lg
                      text="Add"
                      mt={10}
                      containerStyle={{ borderRadius: 20 }}
                      buttonStyle={{
                        paddingVertical: 12,
                        borderRadius: 20,
                        backgroundColor: "#0174cf",
                      }}
                      textStyle={{ fontSize: 20 }}
                      onPress={handleAdd(arrayHelpers)}
                    />
                  </>
                );
              }}
            />
            <TouchableOpacity onPress={handleCreateOrder(values)}>
              <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
                Home
              </Label>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={handleLogin}>
              <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
                Sign Up
              </Label>
            </TouchableOpacity>
            <TouchableOpacity onPress={redirectToHome}>
              <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
                Home
              </Label>
            </TouchableOpacity> */}
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = (state) => ({
  common: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userInfo: userActions.userInfoServiceAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
