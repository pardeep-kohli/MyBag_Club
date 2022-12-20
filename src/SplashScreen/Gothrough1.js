import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import color from "../theme/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function Gothrough1() {
  return (
    <View>
      <View style={styles.parent}>
        <View style={styles.RoundedCircle}>
          <Text style={{ fontSize: 20 }}>1</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Skip</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={require("../images/splashscreen/goThrough1.png")} />
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={styles.Heading}>ENTER YOUR ADDRESS</Text>
      </View>

      <Text style={styles.DescriptionText}>
        Once you tell us where you are, we'll show you only products that are
        available to you today. Otherwise, you see stuff you can't have, and
        that's just not cool.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 30,
  },
  RoundedCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
  },
  image: {
   height:hp(40),
   width:hp(40),
    marginTop: 40,
  },
  Heading: {
    color: color.violet,
    fontFamily:'Bold',
    fontSize: 20,
    alignItems: "center",
  },
  DescriptionText:{
    textAlign:'center',
   fontSize:20,
   marginHorizontal:40,
   marginTop:20,
  fontFamily:'Regular',
    
  }
});
