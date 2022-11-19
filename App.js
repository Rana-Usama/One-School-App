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

//config

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
