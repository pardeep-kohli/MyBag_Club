import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import InputBox from "../component/InputBox";
import BackButton from "../component/Backbutton";
import VioletButton from "../component/VioletButton";
import { ScrollView } from "react-native-gesture-handler";
import Input2 from "../component/inputs/Input2";
export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView>
          <BackButton onPress={() => navigation.goBack()} />
        
        <View>
          <Text style={styles.heading}>Create your account</Text>
        </View>
        <View>
       
          <Input2
            label={"First Name"}
            compulsory
            placeholder="Enter First Name"
          />
          <Input2
            label={"Last Name"}
            compulsory
            placeholder="Enter Last Name"
          />
          <Input2 label={"Email"} compulsory placeholder="Enter Email" />
          <Input2 label={"Phone"} compulsory placeholder="Enter phone number" />
          <Input2
            label="Address"
            multiline={true}
            numberOfLines={7}
            textAlignVertical={"top"}
            placeholder="Address"
            compulsory
          />
        </View>
        <View style={{ marginVertical:10 }}>
          <VioletButton
            buttonName="Continue"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
   fontFamily:'Bold',
    fontSize: 21,
    marginLeft: 15,
    marginTop: 20,
    paddingBottom: 10,
  },
  container:{
    paddingHorizontal:15,
    flex:1
  }
});
