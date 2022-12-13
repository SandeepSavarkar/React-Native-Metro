import { useCallback, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import orderActions from "../../store/actions/order";
import styles from "./style";
import { responsiveWidth } from "../../utils/themeUtils";
import Swiper from "react-native-swiper";

const OrderDetails = (props) => {
  const { createdAt, medImage, medicines, orderId, orderStatus } =
    props.route.params.orderData;
  let DateValue = new Date(createdAt)
    .toLocaleString(undefined, { timeZone: "Asia/Kolkata" })
    .split(",");
  const date = DateValue[0];
  const time = DateValue[1];

  const LabelValue = ({ keys, value }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Label xlarge style={{ width: "40%" }}>
          {keys} :
        </Label>
        <Label xlarge bolder align={"center"} style={{ width: "60%" }}>
          {value || "vsavasvds"}
        </Label>
      </View>
    );
  };

  const StatusBadge = ({ status }) => {
    let color = "#FFA500",
      bgColor = "#FFD580";
    if (status == "Completed") {
      color = "green";
      bgColor = "#90EE90";
    }
    if (status == "Cancel") {
      color = "red";
      bgColor = "#FFCCCB";
    }
    return (
      <View
        style={{
          backgroundColor: bgColor,
          paddingVertical: 2,
          paddingHorizontal: 10,
          borderRadius: 10,
          // width: responsiveWidth(20),
          alignItems: "center",
        }}
      >
        <Label color={color}>{status}</Label>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,

          borderWidth: 1,
        }}
      >
        <Text>{item.text}</Text>
        <Text>{item.quantity}</Text>
        <Text>{item.stripe}</Text>
      </View>
    );
  };

  const sampleData = [
    {
      text: "Medicine 1",
      quantity: "2",
      stripe: false,
    },
    {
      text: "Medicine 2",
      quantity: "4",
      stripe: true,
    },
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 10 }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <View style={{ width: "40%" }}>
          <Label xlarge>Status</Label>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <StatusBadge status="Pending" />
        </View>
      </View>
      <LabelValue keys="Order Id" value={orderId} />
      <LabelValue keys="Date" value={date} />
      <LabelValue keys="Time" value={time} />
      <LabelValue keys="Order Items" value={"Medicines"} />

      {medicines.length > 0 && (
        <View
          style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}
        >
          <Label xlarge align={"center"} mt={10}>
            Medicines
          </Label>
          <FlatList
            data={medicines}
            renderItem={renderItem}
            numColumns={1}
            keyExtractor={(item, index) => item.key}
          />
        </View>
      )}
      <Label xlarge align={"center"} mt={10}>
        Image Uploaded
      </Label>
      <Swiper style={styles.wrapper} showsButtons={true}>
        {[1, 2].map(() => (
          <View style={styles.slide1}>
            <Image
              style={{
                width: 150,
                height: 150,
              }}
              source={{
                uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
              }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      orderDetail: orderActions.OderHistroyAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
