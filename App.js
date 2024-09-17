import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, View, useWindowDimensions } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';
import CustomButton from './components/CustomButtons/CustomButton';
const logoImg = require("./assets/adaptive-icon.png")
import ListItem from "./data.json";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NetworkScreen from './screens/NetworkScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (

    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
        <Stack.Screen name='Network' component={NetworkScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

