import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import React from "react";
import color from "../theme/color";
import ItemDetail from "../component/ItemDetail";
import Header from "../component/Header";
import PriceAndRating from "../component/PriceAndRating";
import Description from "../component/Description";
import Heading from "../component/Heading";
import ReviewTab from "../component/ReviewTab";
import DeliveryReturn from "../component/DeliveryReturn";
import VioletButton from "../component/VioletButton";
import PaymentDetails from "../component/PaymentDetails";
import BottomButton from "../component/BottomButton";
import { FontAwesome } from "@expo/vector-icons";
import MyBagCardSmall from "../component/MyBagCardSmall";
export default function DetailedScreen() {
  return (
    <View  style={{ flex: 1 }}>
      <StatusBar backgroundColor={color.violet} />
        <Header />
      <ScrollView>
       
        <View style={styles.SubParent}>
          <ItemDetail
            ImgSrc={require("../images/Demo_pic.png")}
            CategoryName="Women's Heels"
            ItemDescription="AFFINITI for Wm B Woods US 10AAAA Taupe Pink Blue Genuine Reptile Pump Shoe VTG"
            Availability="in stock"
          />

          <PriceAndRating
            AprroxRating="100+ Ratings"
            SizeDescription="Women's Shoes US 10"
            Price="$46"
            Time="90 min"
            Rating="4.1"
          />
          <View style={styles.TabOuterView}>
            <View>
              <Text style={styles.tab}>Description</Text>
            </View>
            <View>
              <Text style={styles.tab}>Review</Text>
            </View>
            <View>
              <Text style={styles.tab}>Delivery & Return</Text>
            </View>
          </View>
          {/* <ReviewTab /> */}
          <DeliveryReturn
            OrderingDetails={
              " Create a personal account to become a member of the club!  Don't worry -- we are not going to send you a bunch of emails every day!  WE WILL send you notices of special sales available to club members only test!  "
            }
            ReturnDetails={
              " You may try on the item we ship but it cannot be worn and labels/tags cannot be removed without voiding the return policy which is:  We will accept unworn items for 15 days after delivery; buyer is responsible for return postage.  Item must be returned in the original packaging and at the same postal rate/service level as shipped."
            }
          />
          {/* <Description ProductDescription="Beautiful dyed genuine reptile -- pink, taupe, blue, mauve -- upper with fine black leather piping accent; ivory lining and insole (as with many vintage shoes this pair does not have a padded insole); leather sole; covered heel Size WOMENS 10AAAA (very narrow) Sole interior measurements (inches) 10.75 x 2.75 Condition: Pre-owned, well cared for and have been worn only a couple of times. Please see the photos -- they are of the actual item listed. VINTAGE" /> */}
          
          </View>
        <Heading HeadLine={"RECOMMENDED"} />
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <FontAwesome
              style={{ alignSelf: "center" }}
              name="angle-left"
              size={24}
              color="black"
            />
            <View style={styles.CardView}>
              <MyBagCardSmall
                Description="AFFINITI for Wm B Woods US 10AAAA ..."
                CategoryName="Women's Heels"
                OldPrice="$45"
                NewPrice="$56"
                imageSrc={require("../images/MyBagCard/MyBagCard.png")}
              />
              <MyBagCardSmall
                CategoryName="Women's Heels"
                Description="AFFINITI for Wm B Woods US 10AAAA ..."
                OldPrice="$45"
                NewPrice="$56"
                imageSrc={require("../images/MyBagCard/MyBagCard.png")}
              />
            </View>
            <FontAwesome
              style={{ alignSelf: "center" }}
              name="angle-right"
              size={24}
              color="black"
            />
          </View>
         

      
    
      

      
      </ScrollView>
      <View style={{backgroundColor:color.violet}}>
      <BottomButton ButtonName={"ADD TO CART"}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  SubParent: {
    marginHorizontal: 15,

  },
  TabOuterView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: color.violet,
  },
  tab: {
    paddingHorizontal: 18,

    paddingVertical: 8,
    marginTop: 10,
  },
  CardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
