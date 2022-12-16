import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import CategoryHeading from "../component/CategoryHeading";
export default function AboutUs() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName="ABOUT US" />
      <View style={styles.parent}>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Who is mybagclub.com</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.text}>
            We are a reseller of pre-owned and new merchandise! Our goal is to
            return good, useable items from ending up in landfills or locked in
            dusty attics! Over the past 20 years we have perfected cleaning and
            santizing items so that they can re-enter the marketplace for
            resale. Many of our items are vintage (10+ years) or antique (50+
            years).
            </Text>
            <View style={styles.descriptiontext2}>
                <Text style={styles.text}> We are located in Golden Colorado. You can reach us via our
            email -- mybagclub@gmail.com.
            </Text>
            </View>
         
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  descriptionView: {
    paddingTop: 20,
  },
  parent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  descriptiontext2:{
    paddingTop:20
  },
  text:{
 fontFamily:'Regular',
 textAlign:'justify',
  },
  heading:{
    color:color.violet,
    fontFamily:'Bold',
    fontSize:15,
  },
  headingView:{
    paddingTop:10,
  }
});
