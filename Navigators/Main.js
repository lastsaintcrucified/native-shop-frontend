import React from "react";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

//Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
const Tab = createBottomTabNavigator();
var displayBadge = 0;
const Main = ({ cartItems }) => {
  var badgeValue = cartItems.length;
  displayBadge = cartItems.length;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              style={{ position: "relative" }}
              color={color}
              size={30}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <Icon name="shopping-cart" color={color} size={30} />
              <Badge
                badgeStyle={styles.badge}
                textStyle={styles.badgeText}
                containerStyle={{ position: "absolute", right: 25, top: 8 }}
                value={badgeValue}
              />
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  badge: {
    backgroundColor: "white",
    borderColor: "red",
  },
  badgeText: {
    color: "red",
  },
});
const mapStateToProps = ({ cartItems }) => ({
  cartItems: cartItems,
});
export default connect(mapStateToProps, null)(Main);
