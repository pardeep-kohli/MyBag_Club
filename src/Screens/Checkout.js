import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import CategoryHeading from "../component/CategoryHeading";
import PaymentDetails from "../component/PaymentDetails";
import VioletButton from "../component/VioletButton";
import DeliveryDetails from "../component/DeliveryDetails";
import ResetButton from "../component/ResetButton";
import BottomButton from "../component/BottomButton";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function Checkout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName={"CHECKOUT"} />
      <View style={styles.headerView}>
        <View style={styles.innerView}>
         <Text>DELIVERY DETAILS</Text>
        </View>
        <View style={styles.innerView}>
        <Text>PAYMENT DETAILS</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {/* <PaymentDetails
   PaymentOptions={"Cash at the door"}/>
 
   <PaymentDetails 
   PaymentOptions={"PayPal"}/> */}
        <DeliveryDetails
          Address={
            "J326 Dakshinpuri new delhi 110062  j Block dakshinpuri ambedkar nagar sec 5 , Near Kali building school"
          }
          UserName={"Deepak"}
          place={"home"}
        />
      </View>

      <View>
        <VioletButton buttonName={"CONTINUE"} />
        <ResetButton/>
      
       
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
    headerView:{
     flexDirection:'row',   
    },
    innerView:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        paddingVertical:hp(2),
        borderWidth:1,
    }
})