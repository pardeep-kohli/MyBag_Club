import { View, Text, StatusBar,StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import CategoryHeading from "../component/CategoryHeading";
import { ScrollView } from "react-native-gesture-handler";

export default function Shipping() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView>
      <Header />
      <CategoryHeading CategoryName="SHIPPING"/>
      <View style={styles.parent}>
        <Text style={styles.text}>
          MYBAGCLUB ships exclusively via USPS domestically. Unless otherwise
          specified we will be shipping your order via Priority Mail -- which
          means that your item will be fully insured and on the fastest and most
          cost effective class of shipping available. For some items USPS First
          Class is the best choice -- we will let you know if that is the
          shipping option in the product listing.
          </Text>
          <Text style={styles.text}> For International Shipping
          please contact us and we will gladly provide you with the service and
          cost of shipping the items you are interested in.
          </Text>
          <View style={styles.textView}>
          <Text style={styles.text}>
         Combined Shipping:
          We will gladly combine your purchases. Please contact us prior to
          payment for the correct shipping cost.
          </Text>
          </View>
          <Text style={styles.text}>
           Unless specifically noted in
          the listing all shipping expenses are paid for by the client. 
          </Text>
          <View style={styles.outertext}>
          <Text style={styles.text}>test,shipping3</Text>
          </View>
       
      </View>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    text:{
        fontFamily:"Regular",
        textAlign:"justify"
    },
    parent:{
        paddingHorizontal:10,
        paddingTop:20,
    },
    textView:{
        paddingVertical:10,
    },
    outertext:{
        paddingTop:10,
    }
})