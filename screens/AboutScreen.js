import React from 'react'
import { Button, Text, View } from 'react-native'

const AboutScreen = ({navigation,route}) => {
  const { name } = route.params;
  return (
   <View>
    <Text>Welcome to the About Screen {name}!</Text>
    <Button title='Go to Network Screen' onPress={()=> navigation.navigate('Network')}/>
   </View>
  )
}

export default AboutScreen
