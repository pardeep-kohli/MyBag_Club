import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import React from "react";
import color from "../theme/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function UserAddress({place,Address}) {
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={color.violet}/>
      <View style={styles.parent}>
        <View>
          <MaterialCommunityIcons
            name="home"
            size={22}
            color={color.darkGrey}
          />
        </View>
        <View style={{ marginLeft: 5 }}>
          <View>
            <Text style={styles.place}>{place}</Text>
          </View>
          <Text style={styles.UserAddress}>
          {Address}
          </Text>
          <View style={styles.IconView}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={24}
                color={color.darkGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color={color.darkGrey}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  UserAddress: {
    textAlign: "justify",
    fontFamily: "Regular",
    paddingVertical: 5,
    flexWrap: "wrap",
    // color:"#2A201E"
  },
  parent: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.grey,
  },
  IconView: {
    flexDirection: "row",
    paddingVertical:5,
  },
  place: {
    fontFamily: "Bold",
  },
});
