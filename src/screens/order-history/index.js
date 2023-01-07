import React, { useCallback, useEffect } from "react";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import orderActions from "../../store/actions/order";
import { FieldArray, Formik } from "formik";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Card from "../../components/card";
import commonUtils from "../../utils/commonUtils";

const OrderHistory = (props) => {
  const dispatch = useDispatch();
  const { navigation, common } = props;

  const handleView = (orderData) => () => {
    commonUtils.navigate({ route: Routes.OrderDetails, param: { orderData } });
  };

  useFocusEffect(
    React.useCallback(() => {
      orderActions.OderHistroyAction(dispatch);
    }, [])
  );

  const orders = useSelector((state) => state.order.order);

  const renderItem = ({ item }) => (
    <Card item={item} key={item.orderId} onPress={handleView} />
  );
  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.orderId}
      />
    </View>
  );
};

// const mapStateToProps = (state) => ({
//   orderDetail: state.order,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       orderHistroyInfo: orderActions.OderHistroyAction,
//     },
//     dispatch
//   );

export default OrderHistory;
