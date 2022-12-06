import { useEffect, useState, useCallback } from "react";
import { CommonActions } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Label from "../../components/label";
import Routes from "../../router/router";
import userActions from "../../store/actions/user";
import { FieldArray, Form, Formik, useFormikContext } from "formik";
import InputText from "../../components/InputText";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/button";
import { styles } from "./style";

const OrderMedicineForm = () => {
  const { handleBlur, handleChange, values, setFieldValue } =
    useFormikContext();

  const handleRemoveItem = useCallback(
    (index) => () => {
      console.log("values: ", values);
      values.medicines.splice(index, 1);
    },
    [values.medicines]
  );

  const createMedicines = () => ({
    text: "",
    quantity: null,
    stripe: false,
  });
  console.log("values: ", values);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View>
        {values?.medicines?.map(({ text, quantity }, index) => (
          <View key={index} style={styles.shadow}>
            <InputText
              onChangeText={handleChange(`medicines[${index}].text`)}
              onBlur={handleBlur(`medicines[${index}].text`)}
              value={values.medicines[index].text}
              placeholder="Enter medicine"
              border_radius={10}
              mt={10}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <InputText
                  onChangeText={handleChange(`medicines[${index}].quantity`)}
                  onBlur={handleBlur(`medicines[${index}].quantity`)}
                  value={values.medicines[index].quantity}
                  containerStyle={{ width: "50%" }}
                  placeholder="Quantity"
                  border_radius={10}
                  mt={5}
                />
                <Label ms={10}>Quantity</Label>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
                <BouncyCheckbox
                  size={25}
                  fillColor="#0174cf"
                  unfillColor="#FFFFFF"
                  text="Stripe"
                  iconStyle={{ borderColor: "#0174cf" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{
                    fontFamily: "JosefinSans-Regular",
                  }}
                  onPress={(isChecked) => {
                    values.medicines[index].stripe = isChecked;
                  }}
                />
              </View>
              <TouchableOpacity onPress={handleRemoveItem(index)}>
                <Icon name="trash-bin-outline" color="red" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <Label
          onPress={() => {
            setFieldValue("medicines", [
              ...values.medicines,
              createMedicines(),
            ]);
            setFieldValue("image", {});
          }}
          xlarge
          color="#0174cf"
          align="right"
          mt={10}
        >
          + Add Order
        </Label>
      </View>
      {/* <Button
        mb={10}
        containerStyle={{ borderRadius: 10, bottom: 0 }}
        buttonStyle={{
          paddingVertical: 12,
          borderRadius: 10,
          backgroundColor: "#0174cf",
        }}
        textStyle={{ fontSize: 20 }}
        onPress={handleSubmit(values)}
        title="Place Order"
      />*/}
    </View>
  );
};

export default OrderMedicineForm;
