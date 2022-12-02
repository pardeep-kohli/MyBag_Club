import { View, Text, StyleSheet, TextInput, Animated } from "react-native";
import React, { useState } from "react";
import color from "../../theme/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Input({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.inputView}>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? color.red
              : isFocused
              ? color.violet
              : color.grey,
          },
        ]}
      >
        <View style={[styles.icon_container, {
            borderColor: error
              ? color.red
              : isFocused
              ? color.violet
              : color.grey,
          },]}>
          <MaterialCommunityIcons name={iconName} size={20} color={error
              ? color.red
              : isFocused
              ? color.violet
              : color.grey} />
        </View>
        <TextInput
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          autoCorrect={false}
          style={styles.input}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
            <View style={styles.eye_container}>
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword == false ? "eye-outline" : "eye-off-outline"}
            size={20}
            color={hidePassword == false ? color.violet : color.grey}
          />
          </View>
        )}
      </Animated.View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: hp(2),
    color: color.grey,
  },
  inputContainer: {
    
    backgroundColor: color.light,
    flexDirection: "row",
    borderWidth: 1.5,
    borderRadius: 4,
  },
  input: {
    color: color.darkBlue,
    flex: 1,
    paddingHorizontal: 2,
    fontFamily: "Regular",
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft:10
  },
  error: {
    color: color.red,
    fontSize: hp(1.5),
    marginTop: hp(0.5),
  },
  icon_container:{
   borderRightWidth:1.5,
   borderColor:color.grey,
   width:'15%',
   alignItems:'center',
   justifyContent: 'center',
  },
  eye_container:{
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal:10

  }
});