import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import config from '../../constants/config';

const axiosInstance = axios.create({
//   baseURL: config.BASE_API_URL,
  baseURL: "http://192.168.1.159:3002/api/",
  timeout: 15000,
});
axiosInstance.defaults.headers.post['content-type'] = 'application/json';

(async () => {
  AsyncStorage.getItem('token').then((token) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  });
})();       

export { axiosInstance };
