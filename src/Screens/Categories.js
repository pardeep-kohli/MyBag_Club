import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import color from '../theme/color';
import CategoryHeading from '../component/CategoryHeading.js';

export default function Categories() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName="SHOES AND SANDALS" number="80" />
    </View>
  );
}