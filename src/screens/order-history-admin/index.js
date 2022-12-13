import { useCallback, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import orderActions from "../../store/actions/order";
import { FieldArray, Formik } from "formik";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Card from "../../components/card";

const OrderHistoryAdmin = (props) => {
  const { navigation, common } = props;

  const handleView = (id) => () => {
    navigation.navigate(Routes.OrderDetails, {
      id,
    });
  };
  // useEffect(()=>{
  //   props.orderHistroyInfo();
  // },[])

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
  orderDetail: state.order,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      orderHistroyInfo: orderActions.OderHistroyAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryAdmin);
