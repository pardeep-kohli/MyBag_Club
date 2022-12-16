import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
import React from "react";
import color from "../theme/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import VioletButton from "../component/VioletButton";
export default function ThankYouScreen() {
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={color.violet} />
      <View style={styles.OuterView}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image style={styles.image} source={require("../images/ThankYou/ThankyouLogo.png")} />
        </View>
        <Text style={styles.ThankYou}> Thank you for your order!</Text>
        <Text style={styles.message}>
          We’ve received your order and it will be dispatched during your
          delivery window. You can access your order details at any time on your
          orders page.
        </Text>
      </View>
      <View style={styles.Button}>
      <VioletButton buttonName={"CONTINUE SHOPPING"}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: hp(8),
    height: hp(8),
    // justifyContent:'center',
    // alignItems:'center'
  },
  ThankYou: {
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "Bold",
    color: color.darkGrey,
    fontSize:15,
  },
  message: {
    textAlign: "center",
    
    fontFamily: "Regular",
  },
  parent: {
    flex: 1,
  
  },
  OuterView:{
    marginHorizontal:20,
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  Button:{
    marginHorizontal:20,
    marginVertical:30,
  }
});
