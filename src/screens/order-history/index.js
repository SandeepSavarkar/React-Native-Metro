import { useCallback, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";
import { FieldArray, Formik } from "formik";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Card from "../../components/card";

const OrderHistory = (props) => {
  const { navigation, common } = props;

  const handleView = (id) => () => {
    navigation.navigate(Routes.OrderDetails, {
      id,
    });
  };

  const renderItem = ({ item }) => (
    <Card item={item} key={item.id} onPress={handleView} />
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, 3, 4, 5, 6, 7, 8, 9, 7, 7]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
