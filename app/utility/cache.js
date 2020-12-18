import { AsyncStorage } from "react-native";
// import moment from "moment";
import dayjs from "dayjs";

// optional
const prefix = "cache";
const expiryInMinutes = 5;

// store
const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

// function to check expired or not
const isExpired = (item) => {
  // const now = moment(Date.now());
  // const storedTime = moment(itme.timestamp);
  // return now.diff(storedTime, "minutes") > expiryInMinutes;

  const now = dayjs();
  const storedTime = dayjs(itme.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

// get  >   query function
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS principle) : Function or Method should either be Command(change status of system) or Query(return status of system), but not both
      // It's volation of CQS rule, below   >   However, it can be exception on resonable purpose
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    // return item that is not expired
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
