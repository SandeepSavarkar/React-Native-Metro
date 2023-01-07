import React, { useCallback, useEffect } from "react";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import Label from "../../components/label";
import Routes from "../../router/router";
import orderActions from "../../store/actions/order";
import customActions from "../../store/actions/customer";
import styles from "./style";
import { FieldArray, Formik } from "formik";
import Button from "../../components/button";
import InputText from "../../components/InputText";
import Card from "../../components/card";
import commonUtils from "../../utils/commonUtils";

const customer = [
  {
    userId: 1,
    name: "Sandeep Savarkar",
    phoneNo: "7896541354",
  },
  {
    userId: 2,
    name: "Ronald Thayil",
    phoneNo: "7896541354",
  },
];
const Customer = (props) => {
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state.order.order);
  const { navigation, common } = props;

  const handleView = (userId) => () => {
    commonUtils.navigate({ route: Routes.CustomerDetail, param: { userId } });
  };

  useFocusEffect(
    React.useCallback(() => {
      customActions.CustomerListAction(dispatch);
    }, [])
  );
  const customers = useSelector((state) => state.customer.customers);
  console.log("customers : ", customers);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity style={styles.card} onPress={handleView(item.userId)}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Label>{item.name}</Label>
          <Label>{item.phoneNo}</Label>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={(item) => item.orderId}
      />
    </View>
  );
};

export default Customer;
