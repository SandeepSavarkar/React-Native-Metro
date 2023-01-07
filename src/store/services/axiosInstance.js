import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import config from '../../constants/config';

const axiosInstance = axios.create({
//   baseURL: config.BASE_API_URL,
  baseURL: "https://ea84-2402-8100-384c-75e6-e16b-ac51-afd3-c7a2.in.ngrok.io/api/",
  timeout: 15000,
});
axiosInstance.defaults.headers.post['content-type'] = 'application/json';

(async () => {
  AsyncStorage.getItem('token').then((token) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  });
})();       

export { axiosInstance };
