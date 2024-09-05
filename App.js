import { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';
const logoImg = require("./assets/adaptive-icon.png")

const App = () => {

  const [ isModalVisible,setIsModalVisible] = useState(false);

  const styles = StyleSheet.create({
    container: { flex:1,backgroundColor:"plum",padding:30 },
    box:{height:100,width:100,padding:10,marginHorizontal:10,borderWidth:1,borderColor:'green',borderStyle:"dotted"},
    boxShadow:{
      shadowColor:"#333333",
      shadowOffset:{
        height:6,
        width:6,
      },
      shadowOpacity: 0.6,
      shadowRadius: 4
    },
    androidShadow:{
      shadowColor:"#333",
      elevation:40
    },
    lightgreen:{backgroundColor:'lightgreen'},
    lightblue:{backgroundColor:'lightblue'}
  })

  return (
   <View style={styles.container}>
    {/* <StatusBar backgroundColor={'plum'} barStyle={'dark-content'} /> */}

    {/* MULTIPLE STYLES*/}
    <Text style={[styles.box,styles.lightgreen,styles.boxShadow]}>I am a light green box</Text>
    <Text style={[styles.box,styles.lightblue,styles.androidShadow]}>I am a light blue box</Text>

    {/* ACTIVITY INDICATOR! */}
    {/* <ActivityIndicator/>
    <ActivityIndicator size={'large'}/>
    <ActivityIndicator size={'large'} color={'midnightblue'}/>
    <ActivityIndicator size={'large'} color={'midnightblue'} animating={false}/> */}

    {/* ALERT */}
    <Button title='Alert'  onPress={()=> Alert.alert('Invalid Data!')}/>
    <Button title='Alert2'  onPress={()=> Alert.alert('Invalid Data!','DOB is incorrect')}/>
    <Button title='Alert3'  onPress={()=> Alert.alert('Invalid Data!','DOB is incorrect',[
      {
        text: "Cancel",
        onPress:()=>{console.log('Cancel is Pressed!')}
      },
      {
        text: "OK",
        onPress:()=>{console.log('OK is Pressed!')}
      }
    ])}/>

    {/* PROP  */}
    {/* <Greet name='Felix'/> */}
    <ScrollView>
     
     <Pressable onPress={()=> console.log('Image Pressed!')}>
     <Image source={logoImg} style={{height:150,width:150}}/>
     </Pressable>

     <Pressable onPress={()=> console.log('Text Pressed!')}>
     <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ut doloribus assumenda doloremque nostrum amet quo rem! Aliquid veniam quam fugit eius, nemo sapiente? Temporibus totam numquam incidunt at ducimus doloremque voluptate nemo quos blanditiis, rem tempore aspernatur minus optio eos similique sapiente, repellendus laudantium voluptates nesciunt consequuntur esse minima. Impedit quia praesentium optio officiis eius nihil totam commodi, molestiae, sunt veniam neque. Voluptatibus, maxime unde aliquid omnis expedita voluptas deserunt! Repellat repellendus sunt cum nesciunt necessitatibus amet voluptas? Repudiandae, in? Laudantium ut dicta aliquam suscipit velit alias debitis fugit ratione illo possimus beatae ad cupiditate eius consequuntur distinctio facere cum tenetur pariatur, reprehenderit iste totam veritatis atque voluptates minima. Illo itaque suscipit praesentium ipsam doloremque consectetur velit a, architecto asperiores accusantium dolorum rerum similique repellat ea. Omnis deleniti repellendus dolorem dolor aliquid cum quod necessitatibus. Ex animi tempora ducimus non natus voluptates, porro totam nemo itaque, illum odit ad officia delectus maxime hic facilis quos eos sapiente corrupti aperiam. Neque suscipit voluptatem necessitatibus nam autem voluptates quam illum? Doloribus neque numquam aliquam maiores architecto aperiam, vel veritatis facilis quidem ut! Consequatur ullam, architecto placeat quibusdam harum facere eveniet, vel, nobis voluptatem aut laborum. Temporibus ratione quae iure eius repellendus earum illo aliquid aperiam dolorum! Aliquam nam ratione praesentium assumenda labore, vel ipsum et facilis reprehenderit, pariatur tempora, fugiat neque voluptatem. Perspiciatis assumenda, minus, fugiat eius reprehenderit totam aspernatur, nulla enim rem cumque blanditiis! Explicabo possimus commodi asperiores? Enim, tenetur. Blanditiis sed temporibus quam eius alias non aperiam praesentium tenetur iste officia earum obcaecati molestiae, dolorem unde sapiente. Veniam animi unde accusamus ratione numquam repellendus eius in itaque blanditiis voluptatum consectetur perferendis ut dolorem modi cupiditate nihil inventore nulla maiores, placeat asperiores eveniet. Vero architecto iure nisi voluptas atque quas molestiae consectetur non similique! Explicabo cum repellendus architecto similique ducimus.</Text>
     </Pressable>
     <Image source={logoImg} style={{height:150,width:150}}/>
    {/* <Text>Hello World</Text>
    <Image source={{uri: 'https://picsum.photos/200'}} style={{height:150,width:150}}/> */}
    {/* <ImageBackground source={logoImg} style={{flex:1}}>
      <Text>Image Text</Text>
    </ImageBackground> */}
    <Button title='Submit' 
    // disabled 
    color={'midnightblue'} onPress={()=> setIsModalVisible(true)}/>
    <Modal visible={isModalVisible} 
    animationType='fade'
    presentationStyle='pageSheet'
    onRequestClose={()=> setIsModalVisible(false)}>
      <View style={{ flex:1,backgroundColor:"aqua",padding:20}}>
          <Text>Modal Content</Text>
          <Button title='Close Modal' color='brown' onPress={()=> setIsModalVisible(false)}/>
      </View>
    </Modal>
    {/* LAYOUT - FLEX */}
    <View style={{  backgroundColor:"orangered",borderWidth:2,borderColor:"red",display:'flex',flexDirection:"column"}}>
    <Box style={{backgroundColor:"saddlebrown"}}>Box 1</Box>
    <Box style={{backgroundColor:"navy",flexBasis:140}}>Box 2</Box>
    <Box style={{backgroundColor:"green"}}>Box 3</Box>
    <Box style={{backgroundColor:"goldenyellow"}}>Box 4</Box>
    <Box style={{backgroundColor:"lightcoral"}}>Box 5</Box>
    <Box style={{backgroundColor:"lightgreen"}}>Box 6</Box>
    <Box style={{backgroundColor:"aqua"}}>Box 7</Box>
    </View>
    </ScrollView>
   </View>
  )
}

export default App

