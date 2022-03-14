import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityLoader,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import Banner from "../../Shared/Banner";
import FilteredProducts from "./FilteredProducts";
import FilteredCatagory from "./FilteredCatagory";
import ProductList from "./ProductList";

const data = require("../../assets/products.json");
const catagoryData = require("../../assets/catagories.json");
let { width, height } = Dimensions.get("window");

const ProductsContainer = (props) => {
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
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/Shabab.png")}
        />
        <SearchBar
          placeholder="..."
          placeholderTextColor="#f3f5f7"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          clearIcon={{ color: "red" }}
          searchIcon={{
            color: "#f3f5f7",
            iconStyle: { fontSize: 25, fontWeight: "bold" },
          }}
          value={search}
          onChangeText={handleSearch}
          onClear={handleClear}
        />
      </View>
      {focus == true ? (
        <FilteredProducts
          productsFiltered={fiteredProducts}
          navigation={props.navigation}
        />
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
                  <ProductList
                    key={index}
                    item={item}
                    navigation={props.navigation}
                  />
                ))
              ) : active !== -1 ? (
                <Text style={styles.catText}>
                  No Products found for this catagory!!
                </Text>
              ) : (
                products.map((item, index) => (
                  <ProductList
                    navigation={props.navigation}
                    key={index}
                    item={item}
                  />
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
    backgroundColor: "#f3f5f7",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,

    marginBottom: 10,
  },
  scroll: {
    width: width,
    marginBottom: 130,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
  },
  searchContainer: {
    width: width,
    padding: 0,
    marginTop: 0,
    backgroundColor: "#f3f5f7",
    borderWidth: 1,
    borderColor: "#f3f5f7",
    borderBottomColor: "#f3f5f7",
    borderTopColor: "#f3f5f7",
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
  image: {
    width: 50,
    height: 50,
  },
});

export default ProductsContainer;
