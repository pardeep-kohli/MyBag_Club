import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Email = () => {
  return (
    <View style={styles.TextBox}>
      <View style={styles.icon}>
        <FontAwesome
          style={{ paddingTop: 7 }}
          name="envelope"
          size={15}
          color="grey"
        />
      </View>
      <View style={{ flex: 6 }}>
        <TextInput style={styles.Text} placeholder="Email" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TextBox: {
    flexDirection: "row",

    marginHorizontal: 30,
    borderWidth: 1,

    borderColor: "grey",
    marginTop: 20,
    height: 40,
    position: "relative",

    borderRadius: 8,
  },
  icon: {
    flex: 1,

    borderRightWidth: 1,
    borderRightColor: "grey",
    alignItems: "center",
  },
  Text: {
    paddingTop: 3,
    paddingLeft: 10,
  },
});
export default Email;
