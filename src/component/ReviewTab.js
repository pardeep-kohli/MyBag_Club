import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import color from '../theme/color';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SmallButton from './SmallButton';

export default function ReviewTab() {
  return (
    <View>
      <View style={styles.parent}>
    <View style={styles.starView}>
 
    <Entypo name="star" size={32} color={color.grey}/>
 
     
      <Entypo name="star" size={32} color={color.grey} />
  
        
        <Entypo name="star" size={32} color={color.grey}/>
        <Entypo name="star" size={32} color={color.grey}/>
      
          
          <Entypo name="star" size={32} color={color.grey} />
          <Entypo name="star" size={32} color={color.lightGrey} />
          </View>
          </View>
          {/* <View styles={{borderWidth:1,paddingVertical:10}}>
            <TextInput placeholder='Name'/>
          </View>
          <View styles={{borderWidth:1,paddingVertical:10}}>
            <TextInput placeholder='Email'/>
          </View>
          <View styles={{borderWidth:1,paddingVertical:10}}>
            <TextInput placeholder='Message'/>
          </View> */}
          <View style={styles.TextInputView}>
            <View style={styles.TextInput1}>
              <TextInput placeholder='Name'/>
            </View>
            <View style={styles.TextInput2}>
            <TextInput placeholder='Email'/>
            </View>
          </View>
          <View style={styles.TextInput3}>
            <TextInput placeholder='Message'/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <View style={{paddingVertical:10}}>
         <SmallButton ButtonName={"Send"}/>     
         </View> 
         </View>
          </View>
  )
}
const styles= StyleSheet.create({
  parent:{
    alignItems:'center',
    paddingVertical:10,
    justifyContent:'center',
  },
  starView:{
    flexDirection:'row',
    paddingVertical:10,
  },
  InputView:{
    flexDirection:'row',
  },
  TextInputView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  TextInput1:{
  borderWidth:1,
  borderColor:color.grey,
  width:"32%",
  borderRadius:5,
  paddingHorizontal:10,

  paddingVertical:5,
  },
  TextInput2:{
    borderWidth:1,
    borderColor:color.grey,
    width:"65%",
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    },
    TextInput3:{
      borderWidth:1,
      borderColor:color.grey,
      height:hp(10),
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      marginVertical:10,
      }
})