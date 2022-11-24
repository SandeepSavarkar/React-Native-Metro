import Snackbar from "react-native-snackbar";
import {
  CommonActions,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { Color } from "../utils/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

const navigationRef = createNavigationContainerRef();

// show snacbar message
const snackBar = ({ message, success = true }) => {
  setTimeout(() => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      textColor: Color.WHITE,
      backgroundColor: success ? Color.PRIMARY : Color.ERROR,
    });
  }, 200);
};

// redirect to screen
const navigate = ({ route, param, reset = false }) => {
  if (navigationRef.isReady()) {
    if (!reset) navigationRef.navigate(route, param);
    else {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: route }],
        })
      );
    }
  }
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateTime = (d) => {
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const dayNumber = d.getDay();
  let currentHours = d.getHours();
  let currentMinutes = d.getMinutes();
  const ampm = currentHours >= 12 ? "pm" : "am";

  const strDate = `${day}, ${month} ${dayNumber}`;

  currentHours %= 12;
  currentHours = currentHours || 12;
  currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  const strTime = `${currentHours}:${currentMinutes} ${ampm.toUpperCase()}`;
  return { strTime, strDate };
};

const randomString = () => {
  const date = new Date();
  return date.toUTCString();
};

const getValue = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};
const setValue = async (key, value) => {
  const result = await AsyncStorage.setItem(key, value);
  return result;
};

export default {
  navigationRef,
  snackBar,
  navigate,
  dateTime,
  randomString,
  getValue,
  setValue,
};
