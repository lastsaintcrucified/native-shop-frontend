import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";

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
    marginTop: 130,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default Header;
