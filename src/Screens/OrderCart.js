import { View, Text, StatusBar, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import CategoryHeading from '../component/CategoryHeading'
import CardItem from '../component/CardItem'
import ItemBill from '../component/ItemBill'
import BottomButton from '../component/BottomButton'
export default function OrderCart() {
  return (
    <View style={styles.parent}>
    <StatusBar backgroundColor={color.violet}/>
    <Header/>
    <CategoryHeading CategoryName={"REVIEW YOUR CARD"}/>
      <ScrollView>
    <CardItem amount ={"45"}
    productname ={"AFFINITI for ... "}/>
   
    <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
   <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
   <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
   <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
      <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
      <CardItem amount ={"45"}
    productname ={"Rocket Dog... "}/>
      <CardItem amount ={"45"}
    productname ={"Rocket ... "}/>
     <ItemBill/> 
 </ScrollView>
     <View style={{backgroundColor:color.darkGrey}}>
        
        <BottomButton ButtonName={"CHECKOUT"} />
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  parent:{
    backgroundColor:"#EEEFF0",
    flex:1,
  },
    
  
})