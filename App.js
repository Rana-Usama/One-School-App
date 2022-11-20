import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SignupScreen from './app/screens/SignupScreen';
import EnterOtpScreen from './app/screens/EnterOtpScreens';
import LoginScreen from './app/screens/LoginScreen';
import ForgetScreen from './app/screens/ForgetScreen';
import NewPasswordScreen from './app/screens/NewPasswordScreen';
import MainScreen from './app/screens/MainScreen';
import AllFeaturesScreen from './app/screens/AllFeaturesScreen';
import DetailScreen from './app/screens/DetailScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';

//config

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ProfileScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AllFeaturesScreen" component={AllFeaturesScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
