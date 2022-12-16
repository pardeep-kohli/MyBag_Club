import { View, Text, StatusBar,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import CategoryHeading from '../component/CategoryHeading'
import MyBagClubCard from '../component/MyBagClubCard'
import MyBagCardSmall from '../component/MyBagCardSmall'
import BottomButton from '../component/BottomButton'
export default function RecentlyViewed() {
  return (
    <View style={{flex:1}}>
   <StatusBar backgroundColor={color.violet}/>
   <Header/>
   <CategoryHeading CategoryName={"RECENTLY VIEWED"}/>
   <ScrollView>
   <View>
   <View style={styles.cardView}>
        <MyBagClubCard
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/MyBagCard/MyBagCard.png")}
        />
        <MyBagClubCard
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/MyBagCard/MyBagCard.png")}
        />
        <MyBagClubCard
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/MyBagCard/MyBagCard.png")}
        />
        <MyBagClubCard
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/MyBagCard/MyBagCard.png")}
        />
         <MyBagClubCard 
           Description="AFFINITI for Wm B Woods US 10AAAA ..."
           CategoryName="Women's Heels"
           OldPrice="$45"
           NewPrice="$56"
           imageSrc={require("../images/MyBagCard/MyBagCard.png")}
         
        />
        <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/MyBagCard/MyBagCard.png")}
        />


        

      </View>
     
   </View>
   </ScrollView>
   <View style={{backgroundColor:color.darkGrey}}>
    <BottomButton ButtonName={"CLEAR RECENTLY VIEW"}/>
   </View>
    </View>
   
  )
}
const styles=StyleSheet.create({
    cardView:{
      flexDirection:'row',
     flexWrap:'wrap',
     justifyContent:'space-around',
     paddingHorizontal:10,
     marginTop:10,
    }
})