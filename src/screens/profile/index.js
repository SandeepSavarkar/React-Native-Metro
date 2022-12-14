import { useEffect, useState } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";
import { styles } from "./style";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import commonUtils from "../../utils/commonUtils";

const Profile = (props) => {
  const { navigation } = props;
  const handleLogout = () => {
    AsyncStorage.clear();
    commonUtils.snackBar({ message: "Logout Successfully" });
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.notAuthenticated }],
      })
    );
  };
  const [name, setName] = useState(props.userData.name);
  const [address, setAddress] = useState(props.userData.address);

  // let {name,phoneNo,address} = props.userData;

  useEffect(() => {
    // props.userInfo();
  }, []);
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
            value={props.userData.phoneNo}
            editable={false}
          />
          <View style={{ alignItems: "center" }}>
            <Button btn_xl title="Update" border_radius={10} mt={10} />
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
      userInfo: userActions.userInfoServiceAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
