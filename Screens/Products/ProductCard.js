import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addCart } from "../../redux/actions/cartAction";

let { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image
            ? image
            : "https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_1280.png",
        }}
        resizeMode="contain"
      />
      <View />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 10) + "..." : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              props.addCart(props);
            }}
          >
            <Text style={styles.button}>Add</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Currently unavailable</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    marginTop: 55,
    marginBottom: 5,
  },
  image: {
    width: width / 2 - 40,
    height: width / 2 - 60,
    marginTop: -120,
    position: "absolute",
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    color: "grey",
  },
  price: {
    fontSize: 20,
    color: "#800000",
    marginTop: 6,
  },
  button: {
    color: "green",
    marginTop: 15,
    fontSize: 15,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (product) => dispatch(addCart({ quantity: 1, product })),
});
export default connect(null, mapDispatchToProps)(ProductCard);
