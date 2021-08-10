import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsContainer from "../Screens/Products/ProductsContainer";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={ProductsContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <MyStack />;
}
