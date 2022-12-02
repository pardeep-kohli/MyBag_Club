import { View, Text,StatusBar,Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import color from '../theme/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Email from '../component/Email';
import { FontAwesome } from "@expo/vector-icons";
import VioletButton from "../component/VioletButton";
import BackButton from '../component/Backbutton';
import Input from '../component/inputs/Input';
export default function ForgetPassword({navigation}) {
  return (
    <ScrollView style={{paddingHorizontal:15}}>
       <BackButton onPress={()=>navigation.goBack()}/>
      <StatusBar backgroundColor={color.violet} />
      <View style={{ alignSelf: "center", paddingTop: 30 }}>
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../images/resetPasswordPic.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={styles.heading}>Forget Password?</Text>
      </View>
      <View
        style={{
         
          marginTop: 10,
          width:'100%'
        }}
      >
        <Text style={{ fontSize: 19 ,marginBottom:20,textAlign:'center'}}>
          Enter the email address associated with your account
        </Text>
      </View>
      <Input iconName={"email"} placeholder={"Email"} />
      <View style={{ paddingVertical:40 }}>
        <VioletButton buttonName="SEND" onPress={()=>navigation.navigate("ForgetPassword2")}/>
      </View>
    </ScrollView>
  );
}
const styles=StyleSheet.create({
heading:{
  fontWeight:'bold',
  fontSize:20,
}  
})
