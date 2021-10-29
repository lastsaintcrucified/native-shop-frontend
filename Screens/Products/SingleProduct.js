import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";
let { width, height } = Dimensions.get("window");
const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image
            ? item.image
            : "https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_1280.png",
        }}
        resizeMode="contain"
      />
      <View style={styles.main}>
        <View style={styles.headline}>
          <Text h1>{item.name}</Text>
          <Text h3>{item.brand}</Text>
          <Text h4>Item available: {item.countInStock}</Text>
        </View>
        <View style={styles.bottom}>
          <Text h4Style={{ color: "red" }} h4>
            ${item.price}
          </Text>
          <Button
            title="Add"
            type="outline"
            disabled={item.countInStock <= 0}
            raised
            buttonStyle={{ borderColor: "white" }}
            titleStyle={{ color: "blue" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    height: height / 2,
    display: "flex",
    justifyContent: "space-between",
  },
  headline: {
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    width: width,
    display: "flex",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: width / 2,
    height: width / 2,
    backgroundColor: "transparent",
  },
});
export default SingleProduct;
