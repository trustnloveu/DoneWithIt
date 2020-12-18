import Constants from "expo-constants";

const settings = {
  develpoment: {
    apiUrl: "http://192.168.24.47:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.24.47:9000/api",
  },
  production: {
    apiUrl: "http://192.168.24.47:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.develpoment;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.production;
};

export default getCurrentSettings();
