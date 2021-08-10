import React from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/Shabab.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Header;
