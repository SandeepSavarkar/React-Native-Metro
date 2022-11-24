import { useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";

const Home = (props) => {
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
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Label xxlarge>Home Screen</Label>
      <Label xlarge>User Info</Label>
      {common?.user?.user && <Label xlarge>{common?.user?.user?.title}</Label>}
      <TouchableOpacity onPress={handleLogout}>
        <Label small>Log Out</Label>
      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
