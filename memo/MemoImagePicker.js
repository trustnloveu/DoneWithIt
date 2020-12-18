import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "../app/components/Screen";

export default function ImagePicker() {
  // componentDidMount
  // useEffect

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(
    //   Permissions.CAMERA_ROLL,
    //   Permissions.LOCATION
    // );
    // result.granted
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    // result.granted => granted
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
