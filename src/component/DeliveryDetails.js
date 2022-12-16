import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function DeliveryDetails({ UserName, place, Address }) {
  return (
    <View>
      <View style={styles.parent}>
        <Text style={styles.text}>
          {place},{UserName}
        </Text>
        <View style={styles.radioButton}></View>
      </View>
      <View style={styles.textView}>
      <Text style={styles.Address}>{Address}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:15,
  },
  text: {
    flexWrap: "wrap",
  },
  radioButton: {
    height: hp(2.6),
    width: hp(2.6),
    borderRadius: hp(1.3),
    borderWidth: 1,
  },
  Address:{
    fontFamily:'Regular',
    backgroundColor:'red',
    
  },
  textView:{
    
  }
});
