import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

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
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const HomeTab = () => (
    <Tab.Navigator
      initialRouteName="MainScreen"

      screenOptions={{
        tabBarOptions: {
          labelStyle: {
            fontSize: RFPercentage(20),
          },
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        showLabel: false,
        tabStyle: { backgroundColor: Colors.white },
        activeTintColor: "#2B217F",
        inactiveTintColor: Colors.grey,
      }}
    // tabBarOptions={{
    //   keyboardHidesTabBar: true
    // }}
    >
      <Tab.Screen
        name="Home"
        // options={{ header: () => null }}
        component={MainScreen}

        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={RFPercentage(4)} />
          ),
        }}
      />
      <Tab.Screen
        name="Features"
        // options={{ header: () => null }}
        component={AllFeaturesScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" color={color} size={RFPercentage(3.2)} />

          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        // options={{ header: () => null }}
        component={ProfileScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={RFPercentage(3.1)} />
          ),
        }}
      />

    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
        <Stack.Screen name="HomeTab" component={HomeTab} />
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

//Happy Coding :)
