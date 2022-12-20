import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import color from "../theme/color";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../component/Header";
import AccountDetail from "../component/AccountDetail";
import Heading from "../component/Heading";

export default function Account() {
  return (
    <View>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView>
        <Header />
        <AccountDetail
          AccountHolderName={"deepak"}
          EmailId={"deepak@gmail.com"}
        />

        <Heading HeadLine="MY ACCOUNT" />
        <View style={styles.Address}>
          <Entypo
            style={{ paddingRight: 10 }}
            name="home"
            size={20}
            color="black"
          />

          <View style={styles.innerView}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.subHeading}>Manage Address</Text>
            </View>
            <View>
              <TouchableOpacity>
                <FontAwesome name="angle-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <View >
  <View>
    <icon/>
  </View>
  <View styl{{flexDirection:rw, altime :ce,jus, spabetw}}>
  <View>
  <text>madrs</text>
  </View>
  <View>
  <Icon
  </View>
  </View>
</View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  Address: {
    flexDirection: "row",
    // justifyContent:"space-between",
    marginHorizontal: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  subHeading: {},
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
