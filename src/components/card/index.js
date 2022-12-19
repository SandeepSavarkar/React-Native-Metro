import React from "react";
import { Alert, View, Image, TouchableOpacity } from "react-native";
import Label from "../label";
import styles from "./style";
import Button from "../button";
import Icon from "react-native-vector-icons/Ionicons";
import { responsiveHeight } from "../../utils/themeUtils";
// import Style from "../../../utils/CommonStyles";

const LabelValue = ({ keys, value }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Label>{keys} :</Label>
      <Label bolder>{value || "-"}</Label>
    </View>
  );
};

const Card = (props) => {
  const { orderId, orderStatus, orderItems, date, time } = props.item;

  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity
        style={[styles.card, props.style]}
        onPress={props.onPress(props.item)}
      >
        <View style={styles.fdr}>
          <LabelValue keys="Order Id" value={orderId} />
          {orderStatus ? (
            <View
              style={{
                backgroundColor: "#90EE90",
                paddingVertical: 2,
                paddingHorizontal: 5,
              }}
            >
              <Label color="green">{orderStatus}</Label>
            </View>
          ) : null}
        </View>
        <LabelValue keys="Order Items" value={orderItems} />
        <View style={styles.fdr}>
          <LabelValue keys="Date" value={date} />
          <LabelValue keys="Time" value={time} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
