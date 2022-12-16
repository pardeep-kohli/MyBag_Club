import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import color from '../theme/color'
export default function SmallButton({ButtonName}) {
  return (
    <TouchableOpacity> 
    <View style={styles.buttonView}>
     <Text style={styles.text}>{ButtonName}</Text>
    </View>
    </TouchableOpacity>

  )
}
const styles=StyleSheet.create({
    text:{
        Fontfamily:'Bold',
        color:color.white,
        textAlign:'center'
    },
    buttonView:{
    backgroundColor:color.violet,
    width:hp(10),
    paddingVertical:8,
    paddingHorizontal:5,
    borderRadius:5,
    }
})