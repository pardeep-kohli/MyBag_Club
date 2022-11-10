import { View, Text, StatusBar,StyleSheet,Image } from 'react-native'
import React from 'react'
import color from '../theme/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import UserInput from '../component/UserInput';
import VioletButton from '../component/VioletButton';
export default function ResetPassword() {
  return (
    <View style={{paddingHorizontal:10}}>
      <StatusBar backgroundColor={color.violet} />
      <View style={{alignSelf:'center',paddingTop:40}}>
        <Image
          style={{ height: hp(30), width: hp(30)  }}
          source={require("../images/resetPassword.png")}
        />
      </View>
      <View>
        <Text style={styles.heading}>Create new password</Text>
      </View>
      <Text style={styles.description}>
        <Text>Enter your new password below</Text>
      </Text>
      <View>
        <UserInput placeholder="New Password" />
      </View>
      <View style={{ paddingTop: 20 }}>
        <UserInput placeholder="Confirm password" />
      </View>
      <View style={{paddingVertical:30,alignItems:'center'}}>
        <VioletButton buttonName="CREATE" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#4C5669",
  },

  description: {
    flexWrap: "wrap",
    fontSize: 17,
    textAlign: "center",
    padding: 10,
    marginBottom: 30,
    paddingBottom: 20,
  },
});