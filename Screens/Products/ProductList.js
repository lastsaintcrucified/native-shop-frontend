import React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import ProductCard from "./ProductCard";
let { width } = Dimensions.get("window");
const ProductList = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product Detail", { item: item })}
      style={styles.container}
    >
      <View>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: width / 2,
    margin: 5,
    marginTop: 40,

    backgroundColor: "white",
    borderRadius: 30,
  },
});

export default ProductList;
