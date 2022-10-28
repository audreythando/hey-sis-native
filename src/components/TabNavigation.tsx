import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../../screens/HomeScreen";
import DMScreen from "../../screens/DMScreen";
import MentionScreen from "../../screens/MentionScreen";
import SearchScreen from "../../screens/SearchScreen";
import YouScreen from "../../screens/YouScreen";
import { Feather as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          elevation: 0,
          backgroundColor: "#300F34",
        },
        headerTintColor: "#ffffff",
        headerTitleAlign: "left",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "DM") {
            iconName = focused ? "message-circle" : "message-circle";
          } else if (route.name === "Mention") {
            iconName = focused ? "at-sign" : "at-sign";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "You") {
            iconName = focused ? "smile" : "smile";
          }

          // You can return any component that you like here!
          // @ts-ignore
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="DM" component={DMScreen} />
      <Tab.Screen name="Mention" component={MentionScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="You" component={YouScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;