import { checkInternetConnection } from "react-native-offline";
import { axiosInstance } from "./axiosInstance";
import commonUtils from "../../utils/commonUtils";
import { serviceMethods } from "../../constants/service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosApiCall = (method, url, params) => {
  switch (method) {
    case serviceMethods.POST:
      return axiosInstance.post(url, params);
    case serviceMethods.PUT:
      return axiosInstance.put(url, params);
    case serviceMethods.DELETE:
      return axiosInstance.delete(url, params);
    default:
      return axiosInstance.get(url, { params });
  }
};

const call = async ({
  url = "",
  method = "",
  params = {},
  auth = true,
  showMsg = false,
  contentType = null,
}) =>
  checkInternetConnection().then(async (isConnected) => {
    if (isConnected) {
      axiosInstance.defaults.headers.post["content-type"] = contentType
        ? "multipart/form-data"
        : "application/json";
      await AsyncStorage.getItem("token").then((token) => {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      });
      return new Promise(async (resolve) => {
        try {
          debugger;
          const result = await axiosApiCall(method, url, params);
          debugger;
          resolve(result.data);
        } catch (error) {
          debugger;
          if (showMsg && error?.response?.data)
            commonUtils.snackBar({
              message: error.response.data.message,
              success: false,
            });
          if (auth && error.response?.status === 401) {
            // commonUtils.navigate({ route: routes.NON_AUTH, reset: true });
          }
          if (!showMsg && error.message) {
            commonUtils.snackBar({
              message: error.message,
              success: false,
            });
          }
          resolve(null);
        }
      });
    }
    commonUtils.snackBar({
      message: "No Internet",
      success: false,
    });
  });

export default call;
