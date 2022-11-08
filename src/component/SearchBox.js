import { View, Text, TextInput ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

export default function SearchBox() {
  return (
    <View style={styles.parent}>
      <View style={{flex:0.2}}>
        <AntDesign name="search1" size={20} color="black" />
      </View>
      <View style={{flexDirection :'row',flex:2,alignItems:'center'}}>
        <View >
          <Text>Delivering To:</Text>
        </View>
        <View>
          <TextInput placeholder="Search" />
        </View>
      </View>
      <View>
        <Image
          style={{ }}
          source={require("../images/loginpagepic.png")}
        />
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
  parent:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    marginHorizontal:10,
    borderRadius:10,
    marginTop:10,

  }
})