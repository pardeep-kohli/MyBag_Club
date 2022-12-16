import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import VioletButton from "../component/VioletButton";
import BackButton from "../component/Backbutton";

export default function ForgetPassword2({ navigation }) {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <StatusBar backgroundColor={color.violet} />
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.ImageOuterView}>
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../images/forgotpasswordimage.png")}
        />
      </View>

      <Text style={styles.description}>
        We have sent a password recovery instruction to your email.
      </Text>
      <View style={styles.ButtonView}>
        <VioletButton
          buttonName="OKAY"
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  description: {
    fontSize: 19,
    fontFamily: "Regular",
    textAlign: "center",
  },
  ButtonView: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  ImageOuterView: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
});
