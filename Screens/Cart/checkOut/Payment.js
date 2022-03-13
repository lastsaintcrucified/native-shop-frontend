import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text, Header, ListItem, Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
const methods = [
  { name: "Cash On Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "Master Card", value: 3 },
  { name: "Others", value: 4 },
];
const Payment = (props) => {
  const order = props.route.params;
  const [selected, setSelected] = useState();
  const [card, setCard] = useState();

  return (
    <View>
      <Header
        centerComponent={{
          text: "Payment method",
          style: styles.heading,
        }}
      />
      <View>
        {methods.map((item, indx) => {
          return (
            <ListItem
              key={indx}
              onPress={() => setSelected(item.value)}
              bottomDivider
            >
              <ListItem.CheckBox
                iconRight
                containerStyle={styles.check}
                title={item.name}
                iconType="material"
                checkedIcon="done"
                uncheckedIcon=""
                checked={selected == item.value}
              />
            </ListItem>
          );
        })}
        {selected == 3 ? (
          <View>
            <Picker
              style={{
                margin: 10,
                height: 50,
                color: "green",
                justifyContent: "center",
                backgroundColor: "white",
              }}
              selectedValue={card}
              onValueChange={(itemValue) => setCard(itemValue)}
            >
              {paymentCards.map((item, indx) => (
                <Picker.Item
                  key={indx}
                  label={`${item.name} `}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        ) : null}
        <View style={{ marginTop: 30, alignSelf: "center" }}>
          <Button
            title="Confirm"
            onPress={() => props.navigation.navigate("Confirm", { order })}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  check: {
    backgroundColor: "white",
    borderWidth: 0,
  },
});
export default Payment;
