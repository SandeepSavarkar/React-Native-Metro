import { CommonActions } from "@react-navigation/native";
import { Formik } from "formik";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";
import { requestUserPermission } from "../../constants/notificationHelper";
import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import auth from "@react-native-firebase/auth";
const Login = ({ navigation }) => {
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

  const handleSubmit = async (values) => {
    const confirmation = await auth().signInWithPhoneNumber("+918487840846");

    console.log("Values", confirmation);
  };
  requestUserPermission();
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
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
        initialValues={{ mobileNumber: "", password: "" }}
        onSubmit={(values) => console.log("onsubmit")}
      >
        {() => (
          <View style={{ width: "100%" }}>
            <Formik
              initialValues={{
                 mobileNumber: "", password: "password" 
              }}
              onSubmit={values => console.log(values,'213')}
            >
              {({values,handleSubmit,handleChange}) => (
                <View>
                  <InputText
                    placeholder="Enter mobile number or username"
                    border_radius={20}
                    mt={10}
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChangeText={handleChange("mobileNumber")}
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
                    text="Login"
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
