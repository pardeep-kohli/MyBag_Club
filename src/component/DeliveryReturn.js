import { View, Text,StyleSheet } from "react-native";
import React from "react";

export default function DeliveryReturn({OrderingDetails,ReturnDetails}) {
  return (
    <View style={styles.parent}>
      <Text style={styles.Heading}>Order and Return Policy</Text>
      <Text style={styles.OrderingDetails}>ORDERING:{OrderingDetails}</Text>
      <Text style={styles.ReturnDetails}>
        RETURNS:{ReturnDetails}
      </Text>
    </View>
  );
}
const styles=StyleSheet.create({
    parent:{
        paddingVertical:15,
      
    },
    ReturnDetails:{
   fontFamily:'Regular',
   paddingTop:5,
   textAlign:"justify"
    },
    OrderingDetails:{
        fontFamily:'Regular',
        paddingVertical:10,
        textAlign:"justify"
    },
    Heading:{
        fontFamily:'Bold',
    }

})
