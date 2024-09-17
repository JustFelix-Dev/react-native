import React from 'react'
import { Button, Text, View } from 'react-native'

const AboutScreen = ({navigation}) => {
  return (
   <View>
    <Text>Welcome to the About Screen!</Text>
    <Button title='Go to Network Screen' onPress={()=> navigation.navigate('Network')}/>
   </View>
  )
}

export default AboutScreen
