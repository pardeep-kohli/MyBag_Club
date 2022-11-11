import { View, Text, StatusBar,StyleSheet ,TextInput, TouchableOpacity,Image, ScrollView} from 'react-native'
import React from 'react'
import color from '../theme/color';
import BackButton from '../component/Backbutton';
import Email from '../component/Email';
import VioletButton from '../component/VioletButton';
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
export default function Login() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <StatusBar backgroundColor={color.violet} />

        <BackButton />
        <View>
          <Text style={styles.text}>Log in to your account</Text>
        </View>
        
        <Email
          icon={<Ionicons style={{}} name="mail" size={15} color="grey" />}
          placeholder="Email"
        />
        <Email
          icon={
            <Ionicons style={{}} name="lock-closed" size={15} color="grey" />
          }
          placeholder="Password"
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <View style={{}}></View>
          <View style={{ paddingTop: 10, paddingBottom: 20 }}>
            <Text style={{ color: "grey" }}>Forgot Password?</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <VioletButton buttonName="LOGIN" />
        </View>
        <View style={styles.SignUpOption}>
          <View>
            <Text>Don't have an account</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ImageView}>
          <Image
            style={{ height: hp(40), width: hp(40), alignSelf: "flex-end" }}
            source={require("../images/logopagesnap.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4C5669",

    marginTop: 20,
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
    marginHorizontal: 25,
  },
  Text: {
    paddingLeft: 10,
  },
  text2: {
    color: color.violet,
    fontWeight: "bold",
  },
  SignUpOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  ImageView: {
    // flex: 1,
    flexDirection: "column",
    justifyContent:'center',
    // alignItems:"baseline",
    // borderWidth:1,
    // alignSelf:'baseline',
    // position: "absolute",
    // bottom: 0,
    width:'100%',
  },
});