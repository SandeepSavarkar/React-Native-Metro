import { useCallback, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Label from "../../components/label";
import userActions from "../../store/actions/user";
import styles from "./style";
import { responsiveWidth } from "../../utils/themeUtils";
import Swiper from "react-native-swiper";
import DropdownComponent from "./Dropdown";

const OrderDetails = (props) => {
  const { navigation, common, route, orderId, orderItems, status, date, time } =
    props;
  const id = route.params;
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

  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          width: "100%",
        }}
      >
        <Label xlarge>Change Status</Label>
        <DropdownComponent />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <View style={{ width: "40%" }}>
          <Label xlarge>Current Status</Label>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <StatusBadge status="Pending" />
        </View>
      </View>
      <LabelValue keys="Order Id" value={orderId} />
      <LabelValue keys="Order Items" value={orderItems} />
      <LabelValue keys="Date" value={date} />
      <LabelValue keys="Time" value={time} />
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
      userInfo: userActions.userInfoServiceAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
