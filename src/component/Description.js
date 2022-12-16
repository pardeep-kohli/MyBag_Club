import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Description({ProductDescription}) {
  return (
    <View style={styles.parent}>
      <Text styles={styles.Text}>{ProductDescription}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  parent:{
    // backgroundColor:'red',
  
    paddingTop:20,
    paddingBottom:40,
  },
  Text:{
    textAlign:'justify',
    fontFamily:'Regular',
  }

})