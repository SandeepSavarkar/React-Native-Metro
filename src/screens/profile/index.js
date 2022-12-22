import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import userActions from "../../store/actions/user";
import { styles } from "./style";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = (props) => {
  const { userLogout, userUpdate } = props;

  const handleLogout = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    userLogout({ fcmToken });
  };
  const handleUpdate = () => {
    let param = {
      name,
      address,
    };

    userUpdate(param, (data) => {
      debugger;
      setName(data.name);
      setAddress(data.address);
    });
  };
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  useFocusEffect(
    React.useCallback(() => {
      debugger;
      setAddress(props.userData.address);
      setName(props.userData.name);
    }, [])
  );

  // let {name,phoneNo,address} = props.userData;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
          }}
          style={styles.img}
        />
        <Label large mt={20}>
          User Name
        </Label>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <InputText
            label="Name"
            border_radius={10}
            mt={10}
            value={name}
            onChangeText={setName}
          />
          <InputText
            label="Address"
            border_radius={10}
            mt={10}
            value={address}
            onChangeText={setAddress}
          />
          <InputText
            label="Mobile"
            border_radius={10}
            mt={10}
            value={props.userData.phoneNo.toString()}
            editable={false}
          />
          <View style={{ alignItems: "center" }}>
            <Button
              btn_xl
              title="Update"
              border_radius={10}
              mt={10}
              onPress={handleUpdate}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Button
              btn_xl
              title="Logout"
              border_radius={10}
              mt={10}
              onPress={handleLogout}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userLogout: userActions.userLogoutAction,
      userUpdate: userActions.userUpdateAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
