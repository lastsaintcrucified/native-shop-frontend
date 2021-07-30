import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { ListItem, Badge } from "react-native-elements";
let { width } = Dimensions.get("window");
const FilteredCatagory = ({
  active,
  catagories,
  changeCatagory,
  setActive,
}) => {
  return (
    <View style={styles.scroll}>
      <ScrollView bounces={true} horizontal={true}>
        <ListItem containerStyle={styles.list}>
          <Badge
            status={active === -1 ? "warning" : "primary"}
            value="All"
            onPress={() => {
              changeCatagory("all");
            }}
            badgeStyle={styles.badge}
          />
          {catagories.map((cat, index) => {
            return (
              <Badge
                key={index}
                status={active === index ? "warning" : "primary"}
                value={cat.name}
                onPress={() => {
                  changeCatagory(cat._id.$oid);
                  setActive(index);
                }}
                badgeStyle={styles.badge}
              />
            );
          })}
        </ListItem>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: width,
  },
  badge: {
    padding: 15,
  },
  list: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
});

export default FilteredCatagory;
