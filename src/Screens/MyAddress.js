import { View, Text, StatusBar,StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import CategoryHeading from "../component/CategoryHeading";
import UserAddress from "../component/UserAddress";
import VioletButton from "../component/VioletButton";
export default function MyAddress() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName={"MY ADDRESS"} />
      <View style={{ marginTop: 10 }}>
        <UserAddress
          Address={
            "J326 Dakshinpuri new delhi 110062  j Block dakshinpuri ambedkar nagar sec 5 , Near Kali building school"
          }
          place={"Home"}
        />
          <UserAddress
          Address={
            "J326 "
          }
          place={"Home"}
        />
    <View style={styles.Button}>
      <VioletButton buttonName={"Add New Address"}/>
    </View>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
  Button:{
    paddingTop:50,
    marginHorizontal:10,
  }

})