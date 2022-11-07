import react from 'react'
import {  View } from 'react-native';
import Gothrough1 from './src/SplashScreen/Gothrough1';
import Gothrough2 from "./src/SplashScreen/Gothrough2"
import Gothrough3 from './src/SplashScreen/Gothrough3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/SplashScreen/Signup';
import Login from './src/SplashScreen/Login';
import Home from './src/Screens/Home';


export default function App() {
  // const Stack = createNativeStackNavigator(); 
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Home/>
    </View>
  );}