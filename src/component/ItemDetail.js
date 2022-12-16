import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons';
import color from '../theme/color';

export default function ItemDetail({ImgSrc,CategoryName,ItemDescription,Availability}) {
  return (
    <View>
    <View style={styles.ParentView}>
    <View style={{width:"50%",justifyContent:'center',alignItems:'center'}}>
    <Image
    style={styles.imageStyle} 
    source={ImgSrc}/>
    </View>

    <View style={{width:"50%"}}>
        <Text>Category:{CategoryName}</Text>
        <Text style={{flexWrap:'wrap',fontFamily:"Bold",fontSize:15}}>{ItemDescription}</Text>
        <Text>{Availability}</Text>
    </View>
   
    </View>
     <Ionicons  name="heart" size={24} color={color.violet} />
     </View>
  )
}
const styles=StyleSheet.create({
    ParentView:{
        flexDirection:'row',
        justifyContent:'space-between',
      
        paddingTop:20,
        width:'100%',
    },
    imageStyle:{
      height: hp(23), 
      width: hp(23) ,
    

    }
})