import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
export default function PaymentDetails({PaymentOptions}) {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>{PaymentOptions}</Text>
      <RadioButton/>
    
    </View>
  )
}
const styles=StyleSheet.create({
  parent:{
    flexDirection:'row',
    justifyContent:'space-between',
   marginHorizontal:10,
   
    // backgroundColor:'red',
    

  },
  text:{
    fontFamily:'Regular',
   
    alignSelf:'center',
  }

})