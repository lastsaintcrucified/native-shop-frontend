import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { Text, ListItem, Avatar } from "react-native-elements";
import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");
const Cart = ({ cartItems }) => {
  return (
    <>
      {cartItems.length ? (
        <View>
          <ScrollView>
            {cartItems.map((itm, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar
                  source={{
                    uri: itm.product.image
                      ? itm.product.image
                      : "https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_1280.png",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>{itm.product.name}</ListItem.Title>
                  <ListItem.Subtitle>{itm.product.brand}</ListItem.Subtitle>
                </ListItem.Content>
                <Text style={{ alignSelf: "flex-end" }}>
                  ${itm.product.price}
                </Text>
              </ListItem>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text h4>Looks like the Cart is empty.</Text>
          <Text h5>Add somee Item to the Cart to get started.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  empty: {
    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps = ({ cartItems }) => ({
  cartItems: cartItems,
});
export default connect(mapStateToProps, null)(Cart);
