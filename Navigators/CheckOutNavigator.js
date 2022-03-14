import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, StatusBar } from "react-native";
//Screens
import CheckOut from "../Screens/Cart/checkOut/Checkout";
import Payment from "../Screens/Cart/checkOut/Payment";
import Confirm from "../Screens/Cart/checkOut/Confirm";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="Shipping" component={CheckOut} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default function CheckOutNavigator() {
  return <MyTabs />;
}
