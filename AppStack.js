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

export const AboutStack=()=>{

  const screenOptions = {
    headerStyle:{
     backgroundColor: "#6a51ae",
    },
    headerTintColor:"#fff",
    headerTitleStyle: { fontWeight:"bold"},
    headerRight: ()=>(
     <Pressable onPress={()=> alert('Menu button pressed!')}>
       <Text style={{ color:"fff",fontSize:16 }} >Menu</Text>
     </Pressable>
    ),
    contentStyle: {
      backgroundColor:"#e8e4f3"
    },
   }
   
  return (
    <Stack.Navigator  initialRouteName='Home' 
    screenOptions={screenOptions}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='About' component={AboutScreen} initialParams={{name:"Guest"}} options={({route})=>({title: route.params.name})} />
      <Stack.Screen name='Network' component={NetworkScreen}/>
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AboutStack/>
    </NavigationContainer>
  )
}

export default App

