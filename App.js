import React from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import Header from "./Shared/Header";
import ProductsContainer from "./Screens/Products/ProductsContainer";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight + 60,
  },
});
