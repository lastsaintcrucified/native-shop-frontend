import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
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
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.title}>
            {name.length > 15 ? name.substring(0, 10) + "..." : name}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>

        {countInStock > 0 ? (
          <View>
            <Icon
              name="cart-plus"
              type="font-awesome"
              color="white"
              containerStyle={styles.icn}
              onPress={() => props.addCart(props)}
            />
          </View>
        ) : (
          <Text>Currently unavailable</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    marginTop: 58,
    marginBottom: 5,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 35,
  },
  image: {
    width: width / 2 - 40,
    height: width / 2 - 60,
    marginTop: -100,
    position: "absolute",
    backgroundColor: "transparent",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    color: "black",
  },
  price: {
    fontSize: 15,
    color: "#f85e4a",
    marginTop: 6,
  },
  button: {
    color: "green",
    marginTop: 15,
    fontSize: 15,
  },
  icn: {
    backgroundColor: "#fa8576",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (product) => dispatch(addCart({ quantity: 1, product })),
});
export default connect(null, mapDispatchToProps)(ProductCard);
