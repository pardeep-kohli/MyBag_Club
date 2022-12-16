import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {SimpleLineIcons} from "react-native-vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
export default function ResetButton() {
  return (
    <TouchableOpacity>
      <View style={styles.parent}>
        <SimpleLineIcons name="reload" size={24} color="black" />
        <Text style={styles.text}>Reset</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  parent: {
    alignItems:'center',
  paddingVertical:2,
     justifyContent:'center',
  },
  text:{
  fontFamily:'Regular',
  fontSize:8,
  paddingTop:3,
  }
});
