import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityLoader,
  FlatList,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import ProductList from "./ProductList";
const data = require("../../assets/products.json");
let { width } = Dimensions.get("window");

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Products container</Text>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.list}>
            {products.map((item, index) => (
              <ProductList key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  scroll: {
    width: width,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ProductsContainer;
