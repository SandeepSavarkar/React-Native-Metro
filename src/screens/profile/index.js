import { useEffect } from "react";
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

const Profile = (props) => {
  const { navigation, common } = props;
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.notAuthenticated }],
      })
    );
  };

  useEffect(() => {
    props.userInfo();
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
          <InputText label="Name" border_radius={20} mt={10} />
          <InputText label="Email" border_radius={20} mt={10} />
          <InputText label="Mobile" border_radius={20} mt={10} />
          <View style={{ alignItems: "center" }}>
            <Button btn_xl text="Update" border_radius={20} mt={10} />
          </View>
        </View>
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
      userInfo: userActions.userInfoServiceAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
