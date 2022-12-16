import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import Categories from './Categories'
import PriceAndRating from '../component/PriceAndRating'
export default function Favourite() {
  return (
    <View>
    <StatusBar backgroundColor={color.violet}/>
   
    <Categories CategoryName="WISHLIST"/>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <PriceAndRating
          AprroxRating="100+ Ratings"
          SizeDescription="Women's Shoes US 10"
          Price="$46"
          Time="90 min"
          Rating="4.1"
        />
         <PriceAndRating
          AprroxRating="100+ Ratings"
          SizeDescription="Women's Shoes US 10"
          Price="$46"
          Time="90 min"
          Rating="4.1"
        />
        </View>

    </View>
  )
}