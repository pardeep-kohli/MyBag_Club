import { View, Text, StatusBar,Image } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header.js'
import SearchBox from '../component/SearchBox.js'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function Home() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <View style={{}}>
        <SearchBox />
        <View style={{width:'100%',alignSelf:'center',paddingTop:15}}>
          <Image
          style={{height:hp(26),width:hp(54)}} 
          source ={require("../images/ScrollImage.png")}/>
        </View>
      </View>
      
    </View>
  );
}