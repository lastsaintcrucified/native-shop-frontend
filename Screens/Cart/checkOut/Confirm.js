import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, ListItem, Avatar, Icon } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/cartAction";

var { height, width } = Dimensions.get("window");

const Confirm = (props) => {
  const data = props.route.params?.order.order;
  const confirmOrder = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart1");
    }, 500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text h3>Confirm Order</Text>
        <View style={styles.shipping}>
          <Text style={{ textAlign: "center" }} h4>
            Shipping To:
          </Text>
          <View style={{ padding: 8 }}>
            <Text style={styles.shpTxt}>Address1: {data?.address1}</Text>
            <Text style={styles.shpTxt}>Address2: {data?.address2}</Text>
            <Text style={styles.shpTxt}>City: {data?.city}</Text>
            <Text style={styles.shpTxt}>Phone: {data?.phone}</Text>
            <Text style={styles.shpTxt}>Zip: {data?.zip}</Text>
          </View>
          <Text style={{ textAlign: "center" }} h4>
            Items:
          </Text>
          {data?.orderItems.map((item, indx) => (
            <ListItem style={styles.lstItm} key={indx} bottomDivider>
              <Avatar source={{ uri: item.product.image }} />
              <ListItem.Content>
                <ListItem.Title style={{ color: "red" }}>
                  {item.product.name}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Content right>
                <ListItem.Title right style={{ color: "green" }}>
                  ${item.product.price}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
          <View style={{ marginTop: 30, alignSelf: "center" }}>
            <Button title="Place Order" onPress={confirmOrder} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },

  main: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  shipping: {
    alignSelf: "center",
    padding: 8,

    marginTop: 8,
    width: width / 1.2,
  },
  shpTxt: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  lstItm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(Confirm);
