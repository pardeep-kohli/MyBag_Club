import { View, Text, StatusBar,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../theme/color";
import CategoryHeading from "../component/CategoryHeading";
import Header from "../component/Header";
import { FontAwesome } from "@expo/vector-icons";
export default function HelpFAQ() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName="HELP AND FAQ" />
      <View style={styles.parent}>
      <View style={styles.OuterView}>
        <Text style={styles.text}>Do you combine shipments?</Text>
        <TouchableOpacity> 
        <FontAwesome style={styles.icon} name="minus-circle" size={24} color={color.violet} />
        </TouchableOpacity>
      </View>
        <View style={styles.OuterView}>
        <Text style={styles.text}>Do you ship internationally?</Text>
        <TouchableOpacity> 
        <FontAwesome style={styles.icon} name="minus-circle" size={24} color={color.violet} />
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
}
const styles=StyleSheet.create({
  OuterView:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:color.lightGrey,
    // backgroundColor:'red',
    marginVertical:10,
    elevation:2,
    paddingVertical:15,
    marginTop:5,
  } ,
  text:{
    paddingLeft:20,
    fontFamily:'Bold',
  } ,
  icon:{
    paddingRight:10,
  },
  parent:{
    marginHorizontal:10,
    paddingVertical:15,
  }
})
