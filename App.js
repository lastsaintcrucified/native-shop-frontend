import React from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 60,
  },
});
