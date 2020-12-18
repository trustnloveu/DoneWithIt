import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";

// isInternetReachable    >   false   * NULL이면, remote server에 pinging 중
// type                   >   unknown * not determined yet (not like, wifi ...), 기기 접속 전
function OfflineNotice(props) {
  const netInfo = useNetInfo();
  // console.log(netInfo);

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
