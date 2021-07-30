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
import Banner from "../../Shared/Banner";
import FilteredProducts from "./FilteredProducts";
import FilteredCatagory from "./FilteredCatagory";
import ProductList from "./ProductList";

const data = require("../../assets/products.json");
const catagoryData = require("../../assets/catagories.json");
let { width, height } = Dimensions.get("window");

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [fiteredProducts, setFilterdProducts] = useState([]);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState();
  const [catagories, setCatagories] = useState([]);
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFilterdProducts(data);
    setFocus(false);
    setActive(-1);
    setCatagories(catagoryData);
    setInitialState(data);
    return () => {
      setProducts([]);
      setFocus();
      setFilterdProducts([]);
      setActive();
      setCatagories([]);
      setInitialState([]);
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
  //catagories
  const changeCatagory = (cat) => {
    if (cat === "all") {
      setProductsCat(initialState);
      setActive(-1);
    } else {
      setProductsCat(products.filter((item) => item.category.$oid === cat));
    }
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
            <Banner />
            <FilteredCatagory
              active={active}
              catagories={catagories}
              setActive={setActive}
              changeCatagory={changeCatagory}
            />
            <View style={styles.list}>
              {productsCat.length > 0 ? (
                productsCat.map((item, index) => (
                  <ProductList key={index} item={item} />
                ))
              ) : active !== -1 ? (
                <Text style={styles.catText}>
                  No Products found for this catagory!!
                </Text>
              ) : (
                products.map((item, index) => (
                  <ProductList key={index} item={item} />
                ))
              )}
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
    marginBottom: 130,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  searchContainer: {
    width: width - 20,
    borderRadius: 5,
    padding: 0,
    marginTop: 0,
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderBottomColor: "#f2f2f2",
    borderTopColor: "#f2f2f2",
    marginBottom: 5,
  },
  searchInputContainer: {
    backgroundColor: "white",
    padding: 0,
  },
  searchInput: { color: "black" },
  catText: {
    margin: 40,
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ProductsContainer;
