import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityLoader,
  ScrollView,
  Dimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";

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
      <SearchBar
        placeholder="search..."
        containerStyle={{
          width: width - 20,
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "black",
        }}
        inputContainerStyle={{ backgroundColor: "white", borderColor: "black" }}
        // onChangeText={this.updateSearch}
      />
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
