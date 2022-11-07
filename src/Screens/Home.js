import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header.js'
import SearchBox from '../component/SearchBox.js'
export default function Home() {
  return (
    <View>
    <StatusBar backgroundColor={color. violet}/>
      <Header/>
      <SearchBox/>
    </View>
  )
}