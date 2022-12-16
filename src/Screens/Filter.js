import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import color from "../theme/color"
import { MaterialIcons } from '@expo/vector-icons';
import FilterList from '../component/FilterList';
import SmallButton from '../component/SmallButton';
export default function Filter() {
  return (
    <View style={{flex:1}}>
    <StatusBar backgroundColor={color.violet}/>
   <FilterList/>
<View style={styles.SubHeaderView}> 
   <View style={styles.outerView}>
   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />
 <View style={styles.filterTextView}>
  <Text styles={styles.text}>Type</Text>
  </View>

   </View>

   <View style={styles.outerView}>
   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />
  
  <View style={styles.filterTextView}>
  <Text styles={styles.text}>Category</Text>
   </View>
   </View>

   <View style={styles.outerView}>

   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />
  
   <View style={styles.filterTextView}>
   <Text styles={styles.text}>Sub Category</Text>
   </View>
   </View>

   <View style={styles.outerView}>
   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />

 
 <View style={styles.filterTextView}>
    <Text>Origin</Text>
   
    </View>
    </View>

   
   <View style={styles.outerView}>
   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />
   <View style={styles.filterTextView}>
  <Text styles={styles.text}>Price Range</Text>
  </View>
  </View>
  
  <View style={styles.outerView}>
   <MaterialIcons  style={styles.icon } name="arrow-forward" size={30} color={color.black} />
   <View style={styles.filterTextView}>
      <Text style={styles.text}>VQA</Text>
   </View>
   </View>
   </View>
  <View style={styles.buttonView}>
   <View>
    <SmallButton  ButtonName="APPLY"/>
    </View>
    <View style={{paddingHorizontal:10}}>
    <SmallButton  ButtonName="RESET"/>
    </View>
  </View>
  <View style={{paddingVertical:10}}>
   

  </View>
  
    </View>
  )
}
const styles=StyleSheet.create({
 
 
  icon:{
    paddingHorizontal:10,
  },
  filterTextView:{
    justifyContent:'center',
    paddingHorizontal:20,
  
    
 
  },
  outerView:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:color.grey,
    paddingVertical:2
  },
  filterTextView1:{
    justifyContent:'center',
    paddingHorizontal:10,
    borderWidth:1,
  },
  buttonView:{
    flexDirection:'row',
    justifyContent:'flex-end',
  paddingTop:250,
    alignItems:"flex-end",
  },
  text:{
  
  },
  SubHeaderView:{
    backgroundColor:color.white,
  }
})