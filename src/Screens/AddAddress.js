import { View, StatusBar , StyleSheet,Text} from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import CategoryHeading from '../component/CategoryHeading'
import Input2 from '../component/inputs/Input2'
import CheckBox from '../component/Checkbox'
import { ScrollView } from 'react-native-gesture-handler'
import VioletButton from '../component/VioletButton'

export default function AddAddress() {
 

  return (
    <View>
   <StatusBar backgroundColor={color.violet}/>
   <ScrollView><Header/>
   <CategoryHeading CategoryName="ADD ADDRESS"/>
   <View style={styles.parent}>
    <Input2 
    label ={"Address"}
    placeholder="Address"/>
    <Input2 
    label={"Country"}
    placeholder="India"/>
    <Input2 
    label={"State"}
    placeholder="Delhi"/>
    <Input2
    label={"City"}
    placeholder="Enter your postal code"/>
    <Input2
    label={"zip"}
    placeholder="Enter here"/>

</View>

    <View style={styles.checkBoxouterView}>
      <View style={styles.OptionView}>
   <CheckBox 
   optionName={"Home"}/>
   </View>
   <View style={styles.OptionView}>
    <CheckBox 
   optionName={"Work"}/>
   </View >
   <View style={styles.OptionView}>
    <CheckBox 
   optionName={"Other"}/>
   </View>
   </View>
   <View>

   </View>
   
   <View style={styles.Button}>
  <VioletButton buttonName={"Save"}/>
  </View>

   
   </ScrollView>
   
    </View>
  )
}
const styles=StyleSheet.create({
  checkBoxouterView:{
    flexDirection:"row",
   paddingHorizontal:5,
    paddingTop:10,

 
  },
  parent:{
    paddingHorizontal:15,
    paddingTop:15
  },
  OptionView:{
    paddingLeft:10,
  },
  Button:{
    paddingTop:90,
    paddingHorizontal:15,
  }
})