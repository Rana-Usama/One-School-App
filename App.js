import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SignupScreen from './app/screens/SignupScreen';
import EnterOtpScreen from './app/screens/EnterOtpScreens';
import LoginScreen from './app/screens/LoginScreen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="EnterOtpScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
