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
      <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ListItem containerStyle={styles.list}>
          <Badge
            status={active === -1 ? "success" : "warning"}
            value="All"
            textStyle={active === -1 ? { color: "white" } : { color: "black" }}
            onPress={() => {
              changeCatagory("all");
            }}
            badgeStyle={styles.badge}
          />
          {catagories &&
            catagories.map((cat, index) => {
              return (
                <Badge
                  key={index}
                  status={active === index ? "success" : "warning"}
                  value={cat?.name}
                  textStyle={
                    active === index
                      ? { color: "white", fontSize: 14 }
                      : { color: "black" }
                  }
                  onPress={() => {
                    changeCatagory(cat?._id.$oid);
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
    height: 23,
    padding: 2,
  },
  list: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
});

export default FilteredCatagory;
