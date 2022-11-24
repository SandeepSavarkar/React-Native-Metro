import { useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";
// import Styles from '../../utils/commonStyles';

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
    <View>
      <Text>Profile Screen</Text>
    </View>
    // <View style={Styles.container}>
    //   <Header title="Profile" />
    //   <View style={styles.imgContainer}>
    //     <Image
    //       source={{
    //         uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
    //       }}
    //       style={styles.img}
    //     />
    //     <Label large mt={20}>
    //       User Name
    //     </Label>
    //   </View>
    //   <View style={styles.formContainer}>
    //     <View style={styles.fieldContainer}>
    //       <View>
    //         <EditingInput placeholder="Sandy" label="Name" />
    //       </View>
    //       <View>
    //         <EditingInput
    //           placeholder="sandysawarkar20@gmail.com"
    //           label="Email"
    //         />
    //       </View>
    //       <View>
    //         <EditingInput placeholder="7773885303" label="Mobile" />
    //       </View>
    //       <View style={{ alignItems: "center " }}>
    //         <Button btn_xl text="Update" />
    //       </View>
    //     </View>
    //   </View>
    // </View>
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
