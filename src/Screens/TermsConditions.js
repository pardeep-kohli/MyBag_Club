import { View, Text, StatusBar,StyleSheet, ScrollView } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import CategoryHeading from "../component/CategoryHeading";
export default function TermsConditions() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <ScrollView>
      <CategoryHeading CategoryName="TERMS AND CONDITIONS" />
      <View style={styles.TextView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
          tellus enim dignissim odio. A auctor erat magna nisl. Senectus orci
          mattis nisi aliquam montes, cursus vel. Nunc vulputate et dictum nec
          mattis enim. Blandit pulvinar nulla urna condimentum aenean rhoncus.
          Scelerisque eget eget pellentesque purus. Et nibh iaculis ullamcorper
          malesuada aliquet mi. Gravida quisque tristique vitae commodo praesent
          ut. Magnis libero sed sodales cum. Cursus pharetra placerat cursus
          dolor, augue volutpat, imperdiet justo, leo. Ultricies in facilisis
          neque, justo. Viverra viverra mi facilisi ullamcorper sed sed.
          Ultrices fusce risus amet, fringilla dolor purus dis. Phasellus
          elementum fringilla scelerisque diam orci, maecenas.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    TextView:{
    
        paddingHorizontal:10,
        paddingTop:20,
        
    },
    text:{
        textAlign:"justify",
        fontFamily:'Regular'
    }
})