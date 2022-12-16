import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import color from "../theme/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function MyBagCardSmall({
  Description,
  CategoryName,
  OldPrice,
  NewPrice,
  imageSrc,
}) {
  return (
    <View style={styles.parent}>
      <View>
        <Image
          style={styles.SaleTag}
          source={require("../images/Salelogo.png")}
        />
      </View>
      <View>
        <Image
          style={{ height: hp(15), width: hp(13), alignSelf: "center" }}
          source={imageSrc}
        />
      </View>
      <View>
        <Text numberOfLines={1} style={styles.Category}>Category:{CategoryName}</Text>
        <Text numberOfLines={2} style={styles.Description}>{Description}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.OldPrice}>{OldPrice}</Text>

        <Text style={styles.NewPrice}>{NewPrice}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
   
  },
  parent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    width: "45%",
    borderRadius: 10,
    marginTop: 20,
  },
  OldPrice: {
    textDecorationLine: "line-through",
    fontFamily: "Regular",
  },
  NewPrice: {
    color: color.violet,
    fontFamily: "Bold",
  },
  Category: {
    color: color.grey,
    fontFamily: "SemiBold",
    fontSize: 8,
    paddingBottom: 5,
  },
  Description: {
    fontFamily: "Regular",
  },
  SaleTag:{
  position: "absolute",
  left: -2,
  top: 0,
  height: hp(3),
  width: hp(3),
  }
});