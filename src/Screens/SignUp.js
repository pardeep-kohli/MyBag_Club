import { View, Text,StatusBar,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';
import InputBox from "../component/InputBox";
import BackButton from "../component/Backbutton";
import VioletButton from '../component/VioletButton';
import { ScrollView } from 'react-native-gesture-handler';
export default function SignUp() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView>
        <View style={{ marginLeft: 15 }}>
          <BackButton />
        </View>
        <View>
          <Text style={styles.heading}>Create your account</Text>
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
          <InputBox
            label="First Name"
            star="*"
            placeholder="Enter  first Name"
          />
          <InputBox label="Last Name" star="*" placeholder="Enter Last Name" />
          <InputBox label="Email" star="*" placeholder="Enter email" />
          <InputBox label="Phone" placeholder="Enter phone number" />
          <InputBox
            label="Address"
            multiline={true}
            numberOfLines={7}
            textAlignVertical={"top"}
            placeholder="Address"
          />
        </View>
        <View style={{ paddingHorizontal: 100, paddingTop: 15 }}>
          <VioletButton buttonName="Continue" />
        </View>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    heading:{
     fontWeight:'bold', 
     fontSize:21,
     marginLeft:15,  
     marginTop:20,
     paddingBottom:10,
     
    }
})