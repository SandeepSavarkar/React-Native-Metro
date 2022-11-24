import { checkInternetConnection } from "react-native-offline";
import { axiosInstance } from "./axiosInstance";
import commonUtils from "../../utils/commonUtils";
import servicesConst from "../../constants/service";

const axiosApiCall = (method, url, params) => {
  switch (method) {
    case servicesConst.serviceMethods.POST:
      return axiosInstance.post(url, params);
    case servicesConst.serviceMethods.PUT:
      return axiosInstance.put(url, params);
    case servicesConst.serviceMethods.DELETE:
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
      return new Promise(async (resolve) => {
        try {
          const result = await axiosApiCall(method, url, params);
          resolve(result.data);
        } catch (error) {
          if (showMsg && error?.response?.data)
            commonUtils.snackBar({
              message: error.response.data.message,
              success: false,
            });
          if (auth && error.response?.status === 401) {
            // commonUtils.navigate({ route: routes.NON_AUTH, reset: true });
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
