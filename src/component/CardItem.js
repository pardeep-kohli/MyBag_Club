import { View, Text,Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp  } from 'react-native-responsive-screen'
export default function CardItem() {
  return (
    <View>
      <View>
        <Image style={{height:hp(6),width:hp(6)}} source={require("../images/Demo_pic.png")}/>
      </View>
    </View>
  )
}