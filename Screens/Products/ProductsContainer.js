import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityLoader,
  ScrollView,
  Dimensions,
} from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import FilteredProducts from "./FilteredProducts";

import ProductList from "./ProductList";
const data = require("../../assets/products.json");
let { width, height } = Dimensions.get("window");

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [fiteredProducts, setFilterdProducts] = useState([]);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setProducts(data);
    setFilterdProducts(data);
    setFocus(false);
    return () => {
      setProducts([]);
      setFocus();
      setFilterdProducts([]);
    };
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    setFocus(true);
    setFilterdProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    // console.log(fiteredProducts);
  };

  const handleClear = () => {
    setFocus(false);
  };

  return (
    <View style={styles.container}>
      {focus == true ? (
        <Icon name="history" type="font-awesome-5" onPress={handleClear} />
      ) : null}
      <SearchBar
        placeholder="search..."
        placeholderTextColor="grey"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.searchInput}
        clearIcon={{ color: "red" }}
        searchIcon={{
          color: "grey",
          iconStyle: { fontSize: 25, fontWeight: "bold" },
        }}
        value={search}
        onChangeText={handleSearch}
        onClear={handleClear}
      />
      {focus == true ? (
        <FilteredProducts productsFiltered={fiteredProducts} />
      ) : (
        <View style={styles.scroll}>
          <ScrollView>
            <View style={styles.list}>
              {products.map((item, index) => (
                <ProductList key={index} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
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
    marginBottom: 200,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchContainer: {
    width: width - 20,
    borderRadius: 5,
    padding: 0,
    marginTop: 0,
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
  },
  searchInputContainer: {
    backgroundColor: "white",
    padding: 0,
  },
  searchInput: { color: "black" },
});

export default ProductsContainer;
