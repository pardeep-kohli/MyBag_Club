import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function DeliveryDetails({ UserName, place, Address }) {
  return (
    <View>
      <View style={styles.parent}>
        <Text style={styles.userDetail}>
          {place},{UserName}
        </Text>
        <View style={styles.radioButton}></View>
      </View>
      <View style={styles.InnerView}>
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
    paddingHorizontal:10,
  },
  userDetail: {
    flexWrap: "wrap",
    fontFamily:'Bold',
  },
  radioButton: {
    height: hp(2.6),
    width: hp(2.6),
    borderRadius: hp(1.3),
    borderWidth: 1,
  },
  Address:{
    fontFamily:'Regular',
  
    
  },
  InnerView:{
    paddingRight:30,
    paddingLeft:10,
    // backgroundColor:'red',
    
  }
});
