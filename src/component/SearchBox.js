import { View, Text, TextInput ,Image} from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

export default function SearchBox() {
  return (
    <View>
      <View>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <View>
        <Text>Delivery To:</Text>
      </View>
      <View>
        <TextInput placeholder='Search'/>
      </View>
      <View>
        <Image source={require("../images/filter.png")}/>
      </View>
    </View>
  );
}