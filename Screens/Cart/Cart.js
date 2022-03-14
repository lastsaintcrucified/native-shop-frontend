import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Text, ListItem, Avatar, Button, Icon } from "react-native-elements";
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/actions/cartAction";
import CartItem from "./CartItem";
var { height, width } = Dimensions.get("window");
const Cart = ({ cartItems, clearCart, removeFromCart, navigation }) => {
  var total = 0;
  cartItems.forEach((element) => {
    total = Math.round(total + element.product.price);
    return total;
  });
  console.log(cartItems);
  return (
    <>
      {cartItems.length ? (
        <>
          <View>
            <ScrollView>
              <SwipeListView
                data={cartItems}
                renderItem={(itm) => <CartItem itm={itm} />}
                renderHiddenItem={(data) => (
                  <View style={styles.hiddenContainer}>
                    <TouchableOpacity>
                      <Icon
                        raised
                        name="trash"
                        type="font-awesome"
                        color="#f50"
                        onPress={() => removeFromCart(data.item)}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                disableRightSwipe={true}
                previewOpenDelay={3000}
                friction={1000}
                tension={40}
                leftOpenValue={75}
                stopLeftSwipe={75}
                rightOpenValue={-75}
              />
            </ScrollView>
          </View>
          <View style={styles.bottomLayer}>
            <Text>${total}</Text>
            <View style={styles.btnGrp}>
              <Button
                title="Clear"
                type="clear"
                titleStyle={styles.btn}
                onPress={() => clearCart()}
              />
              <Button
                title="Checkout"
                type="clear"
                titleStyle={styles.btn}
                onPress={() => navigation.navigate("CheckOut")}
              />
            </View>
          </View>
        </>
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
    marginTop: StatusBar.currentHeight + 60,

    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLayer: {
    flexDirection: "row",
    width: width,
    justifyContent: "space-between",
    position: "absolute",
    padding: 5,
    left: 0,
    bottom: 0,
    backgroundColor: "white",
  },
  btn: {
    color: "red",
  },
  btnGrp: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hiddenContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});
const mapStateToProps = ({ cartItems }) => ({
  cartItems: cartItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
