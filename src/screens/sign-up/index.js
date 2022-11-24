import { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Label from "../../components/label";
import Routes from "../../router/router";

const SignUp = ({ navigation }) => {
  const handleAlreadyRegister = () => navigation.navigate(Routes.Login);

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
        <InputText placeholder="Enter name" border_radius={20} mt={10} />
        <InputText placeholder="Enter address" border_radius={20} mt={10} />
        <InputText
          placeholder="Enter Mobile Number"
          border_radius={20}
          mt={10}
        />
        <InputText
          placeholder="Enter your password"
          border_radius={20}
          mt={10}
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
        />
        <TouchableOpacity onPress={handleAlreadyRegister}>
          <Label mt={10} xlarge me={10} style={{ textAlign: "right" }}>
            Already registered?
          </Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
