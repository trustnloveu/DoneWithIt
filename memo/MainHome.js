import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../app/components/Screen";
import AuthNavigator from "../app/navigation/AuthNaviagtor";
import navigationTheme from "../app/navigation/navigationTheme";
import AppNavigator from "../app/navigation/AppNavigator";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

// React Navigator automatically inject route prop
// can set Naviagation Titles dinamically
const TweetDetails = ({ route }) => (
  //useRoute
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      // can put either Object or function which returns Object
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "white",
        headerShown: false,
      }}
    />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
