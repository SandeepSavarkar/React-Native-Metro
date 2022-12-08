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
import { order } from "../../store/actions/index";
import { FieldArray, Form, Formik } from "formik";
import InputText from "../../components/InputText";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/button";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrderMedicine = (props) => {
  const { navigation, common } = props;
  const [isImageUpload, setIsImageUpload] = useState(false);

  const handleSubmit = async (values) => {
    let params = values;
    params.orderStatus = true;

    var formData = new FormData();
    formData.append("orderStatus", true);
    formData.append("medicines", JSON.stringify(values.medicines));
    await values.images.map((item) => {
      formData.append(`images`, {
        name: "Images.jpeg",
        uri: item.path,
        type: item.mime,
      });
    });

    props.orderPlaced(formData);
    console.log("values: ", values);
  };

  useEffect(() => {
    // props.userInfo();
  }, []);

  const createMedicines = () => ({
    text: "",
    quantity: null,
    stripe: false,
  });

  function pickSingleWithCamera(cropping, values, mediaType = "photo") {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log("Camera image: ", image);
        values.images.push(image);
      })
      .catch((e) => alert(e));
  }

  function pickMultiple(values) {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: "desc",
      includeExif: true,
      forceJpg: true,
    })
      .then((images) => {
        // Check This
        values.images.push(images[0]);
        // values.images = {...values.images,images};
        console.log(values.images, "PAPA");
      })
      .catch((e) => alert(e));
  }

  const handleRemoveItem = useCallback(
    (values, index, setFieldValue) => () => {
      console.log("values: ", values);
      values.medicines.splice(index, 1);
      setFieldValue("medicines", values.medicines);
    },
    []
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <ScrollView>
          <Formik
            initialValues={{
              medicines: [
                {
                  text: "",
                  quantity: null,
                  stripe: false,
                },
              ],
              images: [],
            }}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              setFieldValue,
              handleSubmit,
            }) => (
              <View>
                <Label
                  onPress={() => pickSingleWithCamera(false, values)}
                  xlarge
                  color="#0174cf"
                  align="right"
                  mt={10}
                >
                  Capture
                </Label>
                <Label
                  onPress={() => pickMultiple(values)}
                  xlarge
                  color="#0174cf"
                  align="right"
                  mt={10}
                >
                  Upload
                </Label>
                <View style={{ flexDirection: "row" }}>
                  {values.images?.map((item, index) => (
                    <View
                      style={{
                        marginLeft: 15,
                        backgroundColor: "blue",
                        marginTop: 25,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          left: 40,
                          top: -20,
                        }}
                        onPress={() => {
                          values.images.splice(index, 1);
                          console.log("Values", values);
                        }}
                      >
                        <Icon name="trash-bin-outline" color="red" size={25} />
                      </TouchableOpacity>
                      <Image
                        source={{
                          uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
                        }}
                        style={{ height: 50, width: 50 }}
                      />
                    </View>
                  ))}
                </View>
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
                          onChangeText={handleChange(
                            `medicines[${index}].text`
                          )}
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
                              onChangeText={handleChange(
                                `medicines[${index}].quantity`
                              )}
                              onBlur={handleBlur(
                                `medicines[${index}].quantity`
                              )}
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
                          <TouchableOpacity
                            onPress={handleRemoveItem(
                              values,
                              index,
                              setFieldValue
                            )}
                          >
                            <Icon
                              name="trash-bin-outline"
                              color="red"
                              size={25}
                            />
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
                        setIsImageUpload(false);
                      }}
                      xlarge
                      color="#0174cf"
                      align="right"
                      mt={10}
                    >
                      + Add Order
                    </Label>
                  </View>
                  <Button
                    mb={10}
                    containerStyle={{ borderRadius: 10, bottom: 0 }}
                    buttonStyle={{
                      paddingVertical: 12,
                      borderRadius: 10,
                      backgroundColor: "#0174cf",
                    }}
                    textStyle={{ fontSize: 20 }}
                    onPress={handleSubmit}
                    title="Place Order"
                  />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      orderPlaced: order.addOrderAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderMedicine);
