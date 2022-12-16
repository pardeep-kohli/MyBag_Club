import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';

export default function Heading({HeadLine}) {
  return (
    <View style={styles.HeadLine}>
      <Text style={styles.text}>{HeadLine}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  HeadLine: {
    backgroundColor:color.darkGrey,
    paddingHorizontal:15,
    paddingVertical:6,

    marginTop:10,
  },
  text: {
    color: "white",
 fontFamily:'Bold',
    fontSize:15,
  },
});