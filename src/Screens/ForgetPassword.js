import { View, Text,StatusBar,Image,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Email from '../component/Email';
import { FontAwesome } from "@expo/vector-icons";
import VioletButton from "../component/VioletButton";

export default function ForgetPassword() {
  return (
    <View style={{paddingHorizontal:15}}>
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
      <Text
        style={{
          flexWrap: "wrap",
          textAlign: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 19 }}>
          Enter the email address associated with your account
        </Text>
      </Text>
      <Email
        icon={
          <FontAwesome
            style={{ paddingTop: 7 }}
            name="envelope"
            size={15}
            color="grey"
          />
        }
        placeholder="Email"
      />
      <View style={{ paddingVertical:40 }}>
        <VioletButton buttonName="SEND" />
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
heading:{
  fontWeight:'bold',
  fontSize:20,
}  
})
