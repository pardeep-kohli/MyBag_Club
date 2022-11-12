import { View, Text,StyleSheet ,Image,ScrollView} from 'react-native'
import React from 'react'


export default function MyBagClubCard({
  Description,
  CategoryName,
  OldPrice,
  NewPrice,
  imageSrc,
}) {
  return (
    <View style={styles.parent}>
      <View style={{}}>
        <Image
          style={{ position: "absolute", left: 0, top: 4 ,height:20,width:20}}
          source={require("../images/Salelogo.png")}
        />
      </View>
      <View>
        <Image
          style={{ height: 140, width: 110, alignSelf: "center" }}
          source={imageSrc}
        />
      </View>
      <Text>Category:{CategoryName}</Text>
      <Text>{Description}</Text>
      <View style={styles.price}>
        <View>
          <Text style={styles.OldPrice}>{OldPrice}</Text>
        </View>
        <View>
          <Text style={{ color: "#781C45", fontWeight: "bold" }}>
            {NewPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parent: {
    paddingHorizontal: 5,
    borderWidth: 1,
    width: "45%",
    borderRadius: 10,
    marginTop: 40,
  },
  OldPrice: {
    textDecorationLine: "line-through",
  },
});