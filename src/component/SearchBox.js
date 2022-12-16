import { View, Text, TextInput ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import color from '../theme/color';
export default function SearchBox() {
  return (
    <View style={styles.parent}>
      <View style={{ flex: 0.2,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name="search1" size={18} color="black" />
      </View>
      <View style={{ flexDirection:"row", flex: 2, alignItems: "center"}}>
        <View>
          <Text style={{fontWeight:'bold'}}>Delivering To:</Text>
        </View>
        <View>
          <TextInput placeholder="Search" />
        </View>
      </View>
      <View style={styles.ImageView}>
        <Image
          style={{ height: hp(2), width: hp(2) }}
          source={require("../images/filter.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 6,
    marginTop: 20,
    paddingVertical: 4,
    borderColor:color.black,
    paddingHorizontal:8,
  },
  ImageView: {
    alignItems: "center",
    justifyContent: "center",
    
  },
});