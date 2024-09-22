import React from 'react'
import { Button, Text, View } from 'react-native';

const DashboardScreen = ({navigation}) => {
  return (
      <View>
        <Text>Dashboard Screen</Text>

        <Button title='Toggle Drawer ' onPress={()=> navigation.toggleDrawer()}/>
        <Button title='Open Settings ' onPress={()=> navigation.jumpTo('Settings')}/>
      </View>
  )
}

export default DashboardScreen;
