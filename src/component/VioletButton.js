import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../theme/color";

export default function VioletButton({ buttonName }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={{ color: "white" }}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",

    padding: 10,
    borderRadius: 10,
    backgroundColor: color.violet,
  },
});
