import React from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./Navigators/Main";
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 60,
  },
});
