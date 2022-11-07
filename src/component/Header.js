import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.parent}>
      <View>
        <Ionicons
          name="ios-menu"
          size={30}
          color="#781C45"
        />
      </View>
      <View>
        <Image
          style={{ height: 47, width: 43 }}
          source={require("../images/logo.png")}
        />
      </View>
      <View>
        <FontAwesome5 name="shopping-cart" size={26} color="#781C45" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
   
    borderBottomWidth: 1,
    borderColor: "#DADADA",
    height:70,
    alignItems:'center'
  },
});