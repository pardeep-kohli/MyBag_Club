import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header.js";
import SearchBox from "../component/SearchBox.js";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Heading from "../component/Heading";
import MyBagClubCard from "../component/MyBagClubCard";
import { FontAwesome } from "@expo/vector-icons";
import MyBagCardSmall from "../component/MyBagCardSmall";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View>
        <StatusBar backgroundColor={color.violet} />
        <Header />

        <SearchBox />
        <View style={{ width: "100%", alignSelf: "center", paddingTop: 15 }}>
          <Image
            style={{ height: hp(26), width: hp(54) }}
            source={require("../images/ScrollImage.png")}
          />
        </View>
        <Text style={styles.text}>All Categories</Text>
        <View>
          <View style={styles.categories}>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/necklace.png")}
              />
              <Text style={styles.TextView}>Necklaces</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/accessories.png")}
              />

              <Text style={styles.TextView}>Accessories</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/perfume.png")}
              />
              <Text style={styles.TextView}>Fragrances</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/clothing.png")}
              />
              <Text style={styles.TextView}>Clothing</Text>
            </View>
          </View>
          <Heading HeadLine="ON SALE" />
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
          <TouchableOpacity>
            <View style={styles.ShowAll}>
              <Text style={styles.Touchableshow}>Show All</Text>
            </View>
          </TouchableOpacity>
          <Heading HeadLine="RECOMMENDED" />
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
          <TouchableOpacity>
            <View style={styles.ShowAll}>
              <Text style={styles.Touchableshow}>Show All</Text>
            </View>
          </TouchableOpacity>

          <Heading HeadLine="DISCOUNT OFFER" />
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
          <TouchableOpacity>
            <View style={styles.ShowAll}>
              <Text style={styles.Touchableshow}>Show All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "ExtraBold",
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 15,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageView: {
    borderWidth: 1,
    height: 72,
    width: 72,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 36,
    borderColor: color.violet,
  },
  image: {
    height: hp(4),
    width: hp(4),
  },
  TextView: {
    fontSize: 8,
    fontFamily: "Bold",
    textAlign: "center",
    paddingTop: 3,
  },
  ShowAll: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
  CardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  Touchableshow: {
    fontFamily: "Regular",
  },
});
