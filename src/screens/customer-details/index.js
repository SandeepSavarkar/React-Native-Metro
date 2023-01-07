import React, { useCallback, useEffect } from "react";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import customActions from "../../store/actions/customer";
import styles from "./style";
import Card from "../../components/card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Routes from "../../router/router";
import commonUtils from "../../utils/commonUtils";

const CustomerDetail = ({ route }) => {
  const { params } = route;
  console.log("userId: ", params?.userId);
  const dispatch = useDispatch();
  const customerDetail = useSelector((state) => state.customer.customerDetail);

  useFocusEffect(
    React.useCallback(() => {
      customActions.CustomerDetailAction(dispatch, { userId: params?.userId });
    }, [])
  );
  const LabelValue = ({ keys, value }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Label xlarge style={{ width: "40%" }}>
          {keys} :
        </Label>
        <Label xlarge bolder align={"center"} style={{ width: "70%" }}>
          {value}
        </Label>
      </View>
    );
  };

  const handleView = (orderData) => () => {
    commonUtils.navigate({ route: Routes.OrderDetails, param: { orderData } });
  };

  const renderItem = ({ item }) => (
    <Card item={item} key={item.userId} onPress={handleView} />
  );

  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 10 }}>
      <View>
        <LabelValue keys="Name" value={customerDetail?.name} />
        <LabelValue keys="Mobile" value={customerDetail?.phoneNo} />
        <LabelValue keys="Pending Order" value={customerDetail?.pendingOrder} />
        <LabelValue keys="Total Order" value={customerDetail?.totalOrder} />
        <LabelValue keys="Address" value={customerDetail?.address} />
        <FlatList
          data={customerDetail?.orderHistroy}
          renderItem={renderItem}
          keyExtractor={(item) => item.orderId}
        />
      </View>
    </View>
  );
};

export default CustomerDetail;
