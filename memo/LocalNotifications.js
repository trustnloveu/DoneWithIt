import React from "react";
import { Button } from "react-native";
import { Notifications } from "expo";

import Screen from "../app/components/Screen";

export default function App() {
  const showNotification = () => {
    // Notifications.presentLocalNotificationAsync({
    //   title: "Congratulations",
    //   body: "Your order was successfully placed!",
    // });

    // scheduling object
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Congratulations",
        body: "Your order was successfully placed!",
      },
      {
        time: new Date().getTime() + 2000,
      }
    );
  };

  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  );
}
