import React from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
let { width } = Dimensions.get("window");
const ProductList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: width / 1.9,
    margin: 5,
    marginTop: 60,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    elevation: 8,
    borderColor: "#f2f2f2",
    borderWidth: 1,
  },
});

export default ProductList;
