import { View, Text, StatusBar,StyleSheet ,TextInput, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import color from '../theme/color';
import BackButton from '../component/Backbutton';
import Email from '../component/Email';
import VioletButton from '../component/VioletButton';
import { Entypo } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Login() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <View style={{ marginLeft: 30 }}>
        <BackButton />
      </View>
      <View>
        <Text style={styles.text}>Log in to your account</Text>
      </View>
      <Email />
      <View style={styles.TextBox}>
        <View style={styles.icon}>
          <Entypo name="lock" size={15} color="grey" />
        </View>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <TextInput style={styles.Text} placeholder="Password" />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View style={{}}></View>
        <View style={{ paddingTop: 10, marginRight: 20, paddingBottom: 20 }}>
          <Text style={{ color: "grey" }}>Forgot Password?</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <VioletButton buttonName="LOGIN" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <View>
          <Text>Don't have an account</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1,justifyContent:'flex-end' }}>
        <Image
          style={{ height: hp(30), width: hp(30) }}
          source={require("../images/loginpagepic.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4C5669",
    marginHorizontal:30,
    marginTop:20,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "grey",
    alignItems: "center",
  },
  TextBox: {
    flexDirection: "row",

    borderWidth: 1,

    borderColor: "grey",
    marginTop: 20,
    height: 40,

    borderRadius: 8,
    marginHorizontal:25,
  },
  Text: {
    paddingLeft: 10,
    
  },
  text2:{
    color:color.violet,
    fontWeight:"bold",
  }
});