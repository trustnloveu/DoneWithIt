import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  // componentDidMount
  // const unsubscribe = NetInfo.addEventListener((netInfo) =>
  //   console.log(netInfo)
  // );
  // //componentWillUnmount
  // unsubscribe();

  const netInfo = useNetInfo();

  return null;
}
