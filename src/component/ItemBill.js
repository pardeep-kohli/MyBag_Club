import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import BottomButton from "./BottomButton";
export default function ItemBill({ number }) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.View}>
          <Text style={styles.BillContent}>Total</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.BillContent}>Total</Text>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.View}>
          <Text style={styles.BillContent}>Shopping</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.BillContent}>{number}</Text>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.View}>
          <Text style={styles.BillContent}>Taxes</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.BillContent}>{number}</Text>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.View}>
          <Text style={styles.BillContent}>Grand Total</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.BillContent}>{number}</Text>
        </View>
      </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderBottomColor: color.grey,
    paddingVertical: 5,
  },
  innerView: {},
  BillContent: {
    fontFamily: "Regular",
    color: color.darkGrey,
  },
});
