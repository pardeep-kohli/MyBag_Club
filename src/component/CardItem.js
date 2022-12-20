import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../theme/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
export default function CardItem({amount,productname}) {
  return (
    <>
      {/* <View>
<View>
  <Image/>
</View>
<View style={{flex:, flexDirection:,alignItems:"center", justifyContent:"space-between"}}>
  <View>

  <Text>{productName}</Text>
  </View>
  <View style={{flexDirection:"row", alignItems:"center",}}>
<View>
  <Icon {minus}/>
</View>
<View>
  <Text>1</Text>
</View>
<View>
  <Icon {plus}/>
</View>
  </View>
</View>
</View> */}

      <View style={styles.parent}>
        <View style={styles.imageView}>
          <Image
            style={ styles.image}
            source={require("../images/Demo_pic.png")}
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <View
            style={styles.ItemDetailView}
          >
            <View style={{ paddingHorizontal: 3 }}>
              <Text>{productname}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ paddingRight: 8 }}>
                <TouchableOpacity>
                  <FontAwesome
                    name="minus-circle"
                    size={24}
                    color={color.violet}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text>1</Text>
              </View>
              <View style={{ paddingLeft: 8 }}>
                <FontAwesome
                 
                  name="plus-circle"
                  size={24}
                  color={color.violet}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 8,
            }}
          >
            <View style={{ paddingHorizontal: 3 }}>
              <Text style={styles.ItemPrice}>PRICE</Text>
            </View>

            <View>
              <Text>{amount}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  ItemPrice: {
    color: color.darkGrey,
  },
  parent: {
    flexDirection: "row",
    backgroundColor: color.white,
    paddingHorizontal: 10,
    marginVertical:5,
  },
  imageView: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
   image:{
    height:hp(10),
    width:hp(10),
  },
  ItemDetailView:{
  paddingVertical: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  borderBottomColor: color.grey,
  }
});
