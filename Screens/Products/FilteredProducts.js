import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { ListItem, Icon, Avatar, Text } from "react-native-elements";
let { width } = Dimensions.get("window");
const FilteredProducts = ({ productsFiltered, navigation }) => {
  //   console.log("filter->", productsFiltered);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {productsFiltered.length > 0 ? (
          productsFiltered.map((item, index) => (
            <ListItem
              key={index}
              onPress={() =>
                navigation.navigate("Product Detail", { item: item })
              }
            >
              <Avatar
                source={{ uri: item.image }}
                imageProps={{ resizeMode: "contain" }}
              />
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
    marginBottom: 200,
  },
});

export default FilteredProducts;
