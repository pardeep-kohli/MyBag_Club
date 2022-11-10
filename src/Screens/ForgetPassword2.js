import { View, Text, StatusBar,Image } from 'react-native'
import React from 'react'
import color from '../theme/color'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import VioletButton from '../component/VioletButton';

export default function ForgetPassword2() {
  return (
    <View style={{paddingHorizontal:15}}>
      <StatusBar backgroundColor={color.violet} />
      <View style={{ alignSelf: "center", paddingTop: 30 }}>
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../images/forgotpasswordimage.png")}
        />
      </View>
      <Text
        style={{
          flexWrap: "wrap",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 19 }}>
          We have sent a password recovery instruction to your email.
        </Text>
      </Text>
      <View style={{paddingTop:10}}>
        <VioletButton buttonName="OKAY" />
      </View>
    </View>
  );
}