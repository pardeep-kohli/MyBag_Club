import { View, Text, Image, StatusBar,StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import CategoryHeading from "../component/CategoryHeading";
import Input2 from "../component/inputs/Input2";
import VioletButton from "../component/VioletButton";
export default function ContactUs() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header/>
      <ScrollView>

      <CategoryHeading CategoryName="CONTACT US"/>
      
      <View style={{}} >

      </View>
      {/* <Text>hi</Text> */}
        <Image style={styles.image} source={require("../images/contactUs/newpic.png")} />
       
     
 
        <Text style={styles.heading}>GET IN TOUCH!</Text>
 
     <View style={styles.inputOuterView}>
     <Input2
            label={"First Name"}
           placeholder="Enter here"
          /> 
            <Input2
            label={"Email"}
           placeholder="Enter here"
          /> 
            <Input2
            label={"Message"}
           placeholder="Enter here"
          /> 
     </View>
     <View style={styles.buttonView}>
     <VioletButton  buttonName="SEND"/>
     </View>
      </ScrollView>
    </View>
    
  );
}
const styles=StyleSheet.create({
image:{
    height:hp(30),
    width:hp(55),
  // tintColor:'red',
},
heading:{
    textAlign:'center',
    fontFamily:'Bold',
    color:color.violet,
    fontSize:18,
},
parent:{
   
},
inputOuterView:{
    marginHorizontal:15,
},
buttonView:{
    marginHorizontal:25,
    paddingTop:15,
}
})