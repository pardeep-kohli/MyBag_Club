import React,{ useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/Screens/SignUp";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import ForgetPassword from "./src/Screens/ForgetPassword";
import ForgetPassword2 from "./src/Screens/ForgetPassword2";
import ResetPassword from "./src/Screens/ResetPassword";
import Filter from "./src/Screens/Filter"
import BottomNavigation from "./routes/navigation/BottomNavigation";
import useFonts from "./src/api/useFonts";
import TermsConditions from "./src/Screens/TermsConditions";
import PrivacyPolicy from "./src/Screens/PrivacyPolicy";
import Shipping from "./src/Screens/Shipping";
import AboutUs from "./src/Screens/AboutUs";
import ContactUs from "./src/Screens/ContactUs";
import AddAddress from "./src/Screens/AddAddress";
import EditProfile from "./src/Screens/EditProfile";
import Account from "./src/Screens/Account";
import MyAddress from "./src/Screens/MyAddress";
import ThankYouScreen from "./src/Screens/ThankYouScreen";
import HelpFAQ from "./src/Screens/HelpFAQ";
import DetailedScreen from "./src/Screens/DetailedScreen";
import PaymentDetails from "./src/component/PaymentDetails";
import Checkout from "./src/Screens/Checkout";
import OrderCart from "./src/Screens/OrderCart";
import Categories from "./src/Screens/Categories";
import RecentlyViewed from "./src/Screens/RecentlyViewed";
import WishList from "./src/Screens/Favourite";
import Favourite from "./src/Screens/Favourite";
import Gothrough1 from "./src/SplashScreen/Gothrough1"
import Gothrough2 from "./src/SplashScreen/Gothrough2";
import Gothrough3 from "./src/SplashScreen/Gothrough3";
export default function App() {
  const Stack = createStackNavigator();
  useEffect(() => {
    useFonts();
  }, []);
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPassword2" component={ForgetPassword2} />
          <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
        {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} />  */}
          


      </Stack.Navigator> 
     
    </NavigationContainer>
    // <SafeAreaView>
    //   <RootNavigation/>
    // </SafeAreaView>
    
);
}
