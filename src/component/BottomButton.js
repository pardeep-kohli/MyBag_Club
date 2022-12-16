import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";

export default function BottomButton({ButtonName}) {
  return (
    <TouchableOpacity>
      <View style={styles.OuterView}>
        <Text style={styles.text}>{ButtonName}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
OuterView:{
    paddingVertical:7,
    alignItems:'center',
    // paddingVertical:2,
       justifyContent:'center',
       
},
text:{
    fontFamily:'Bold',
    color:color.white,
}

})

