import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import color from "../theme/color";

export default function AccountDetail({ AccountHolderName, EmailId }) {
  return (
    <View>
      <View style={styles.parent}>
        <View style={{}}>
          <Image
            style={styles.image}
            source={require("../images/EditPage/profilePicture.png")}
          />
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.Name}>{AccountHolderName}</Text>

          <Text>{EmailId}</Text>
        </View>
        <View style={{ position: "absolute", top: 10, right: 0 }}>
          <TouchableOpacity>
            <Text style={styles.text}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: hp(8),
    height: hp(8),
  },
  parent: {
    flexDirection: "row",
    marginHorizontal: 10,

    paddingTop: 15,
  },
  text: {
    color: color.violet,
    fontFamily: "Bold",
  },
  Name:{
    fontFamily:'Bold',
    fontSize:15,
  }
});
