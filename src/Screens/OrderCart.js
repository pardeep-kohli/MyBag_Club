import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import CategoryHeading from '../component/CategoryHeading'
import CardItem from '../component/CardItem'
export default function OrderCart() {
  return (
    <View>
    <StatusBar backgroundColor={color.violet}/>
    <Header/>
    <CategoryHeading CategoryName={"REVIEW YOUR CARD"}/>
    <CardItem/>
    </View>
  )
}