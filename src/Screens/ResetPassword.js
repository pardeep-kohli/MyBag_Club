import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import color from "../theme/color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import UserInput from "../component/UserInput";
import VioletButton from "../component/VioletButton";
import BackButton from "../component/Backbutton";
import Input2 from "../component/inputs/Input2";
export default function ResetPassword({ navigation }) {
  return (
    <View style={{ paddingHorizontal: 10, flex: 1 }}>
      <BackButton onPress={() => navigation.goBack()} />
      <StatusBar backgroundColor={color.violet} />
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ alignSelf: "center", paddingTop: 40 }}>
          <Image
            style={{ height: hp(30), width: hp(30) }}
            source={require("../images/resetPassword.png")}
          />
        </View>

        <Text style={styles.heading}>Create new password</Text>

        <Text style={styles.description}>
          <Text>Enter your new password below</Text>
        </Text>
        <Input2 label={"Password"} placeholder="Enter Password" />
        <Input2 label={"Confirm Password"} placeholder="Confirm Password" />
        <View style={{ paddingVertical: 30 }}>
          <VioletButton
            buttonName="CREATE"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,

    paddingTop: 30,
    color: color.darkGrey,
    fontFamily: "Bold",
  },

  description: {
    flexWrap: "wrap",
    fontSize: 17,
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
    paddingBottom: 10,
    fontFamily: "Regular",
  },
});
