import react from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./src/SplashScreen/SignupN";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import { Gothrough1, Gothrough2, Gothrough3 } from "./src/SplashScreen";
import SignUp from "./src/Screens/SignUp";
import ForgetPassword from "./src/Screens/ForgetPassword";
import ForgetPassword2 from "./src/Screens/ForgetPassword2";
import ResetPassword from "./src/Screens/ResetPassword";
import Heading from "./src/component/Heading";
import Filter from "./src/Screens/Filter";
import Categories from "./src/Screens/Categories";

import DetailedScreen from "./src/Screens/DetailedScreen";
export default function App() {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Login/>
    // <SignUp/>
    // <ForgetPassword/>
    // <ForgetPassword2/>
    // <ResetPassword/>
    // <Home/>
    // <Heading HeadLine="On Sale"/>
    // <Categories/>
    // <Filter/>
    <DetailedScreen/>
);
}
