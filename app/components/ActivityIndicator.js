import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  // 출력화면이 보이면(true), 해당 컴포넌트에서 return null
  // 출력화면이 보이지 않으면(false), 컴포넌트 출력
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animations/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
export default ActivityIndicator;
