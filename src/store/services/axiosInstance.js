import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import config from '../../constants/config';

const axiosInstance = axios.create({
//   baseURL: config.BASE_API_URL,
  baseURL: "https://b4af-49-15-165-103.in.ngrok.io/api/",
  timeout: 15000,
});
axiosInstance.defaults.headers.post['content-type'] = 'application/json';

(async () => {
  AsyncStorage.getItem('token').then((token) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  });
})();       

export { axiosInstance };
