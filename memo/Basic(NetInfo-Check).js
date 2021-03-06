import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button } from "react-native";

export default function App() {
  const netInfo = useNetInfo();

  return <Button disabled={!netInfo.isInternetReachable} />;
}
