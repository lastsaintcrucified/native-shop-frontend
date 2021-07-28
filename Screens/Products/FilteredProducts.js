import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { ListItem, Icon, Avatar, Text } from "react-native-elements";
let { width } = Dimensions.get("window");
const FilteredProducts = ({ productsFiltered }) => {
  //   console.log("filter->", productsFiltered);
  return (
    <View style={styles.container}>
      <ScrollView>
        {productsFiltered.length > 0 ? (
          productsFiltered.map((item) => (
            <ListItem key={item.price}>
              <Avatar source={{ uri: item.image }} />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        ) : (
          <Text h3> No products Found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});

export default FilteredProducts;
