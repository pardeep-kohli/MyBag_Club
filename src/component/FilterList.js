import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import color from "../theme/color"
import FilterBackButton from './FilterBackButton'
export default function FilterList({navigation}) {
  return (
    <View style={styles.parent}>
      
 
      <FilterBackButton   onPress={() => navigation.goBack()}/>
    <View style={styles.TextView}>
    
        <Text style={styles.text }>Select Sort</Text>
  
 
        <Text style={styles.text2 }>Best Selling</Text>
    
    </View>
  
   </View>
   
  )
}
const styles=StyleSheet.create({
  parent:{
    paddingBottom:10,
    backgroundColor:color.darkGrey,
    flexDirection:'row',
    paddingTop:25,
  },
  
  text:{
   fontSize :12,
   color:color.white,
   fontFamily:'Bold'
  },
  text2:{
    fontSize :15,
    color:color.white,
    fontFamily:'Bold'
   },

  TextView:{
    paddingHorizontal:10,
  }
  
})