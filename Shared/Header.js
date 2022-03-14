import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Header = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f5f7",
  },
});

export default Header;
