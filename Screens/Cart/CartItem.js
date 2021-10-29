import React from "react";
import { Text, ListItem, Avatar, Button } from "react-native-elements";

const CartItem = ({ itm }) => {
  return (
    <ListItem bottomDivider>
      <Avatar
        source={{
          uri: itm.item.product.image
            ? itm.item.product.image
            : "https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_1280.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{itm.item.product.name}</ListItem.Title>
        <ListItem.Subtitle>{itm.item.product.brand}</ListItem.Subtitle>
      </ListItem.Content>
      <Text style={{ alignSelf: "flex-end" }}>${itm.item.product.price}</Text>
    </ListItem>
  );
};

export default CartItem;
