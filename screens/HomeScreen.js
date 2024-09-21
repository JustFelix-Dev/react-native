import React from 'react'
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, View, useWindowDimensions } from 'react-native';
import Greet from '../components/Greet';
import Box from '../components/Box';
import CustomButton from '../components/CustomButtons/CustomButton';
const logoImg = require("../assets/adaptive-icon.png")
import ListItem from "../data.json";

const HomeScreen = ({navigation}) => {

    const [ isModalVisible,setIsModalVisible] = useState(false);
  const [ name,setName ] = useState();
  const [ isDarkMode,setIsDarkMode ]= useState(false);
  
  const handleMode = ()=>{
    setIsDarkMode((prev)=> !prev)
  }
  // const [ dimensions,setDimensions] = useState({
  //   window: Dimensions.get('window')
  // })

  // useEffect(()=>{
  // const subscription = Dimensions.addEventListener('change',({window})=>{
  //   setDimensions({window})
  // });

  // return ()=> subscription?.remove();
  // })

  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;


  // console.log({ windowHeight,windowWidth })

  const styles = StyleSheet.create({
    safeContainer: {flex:1},
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
    lightblue:{backgroundColor:'lightblue'},
    text:{
       ...Platform.select({
        ios:{
          color:'navy',
          fontWeight:'bold'
        },
        android:{
          color:'navy',
          fontWeight:'bold',
        }
       }),
       fontSize: windowWidth > 500 ? 50 : 24,
    },
    input:{
      height:40,
      margin:10,
      padding:10,
      borderWidth:2,
      borderRadius: 10

    },
    multiline:{
      minHeight:100,
      textAlignVertical:'top'
    }
  })

  return (
    <SafeAreaView style={styles.safeContainer}>
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
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ut doloribus assumenda doloremque nostrum amet quo rem! Aliquid veniam quam fugit eius, nemo sapiente? Temporibus totam numquam incidunt at ducimus doloremque voluptate nemo quos blanditiis, rem tempore aspernatur minus optio eos similique sapiente, repellendus laudantium voluptates nesciunt consequuntur esse minima. Impedit quia praesentium optio officiis eius nihil totam commodi, molestiae, sunt veniam neque. Voluptatibus, maxime unde aliquid omnis expedita voluptas deserunt! Repellat repellendus sunt cum nesciunt necessitatibus amet voluptas? Repudiandae, in? Laudantium ut dicta aliquam suscipit velit alias debitis fugit ratione illo possimus beatae ad cupiditate eius consequuntur distinctio facere cum tenetur pariatur, reprehenderit iste totam veritatis atque voluptates minima. Illo itaque suscipit praesentium ipsam doloremque consectetur velit a, architecto asperiores accusantium dolorum rerum similique repellat ea. Omnis deleniti repellendus dolorem dolor aliquid cum quod necessitatibus. Ex animi tempora ducimus non natus voluptates, porro totam nemo itaque, illum odit ad officia delectus maxime hic facilis quos eos sapiente corrupti aperiam. Neque suscipit voluptatem necessitatibus nam autem voluptates quam illum? Doloribus neque numquam aliquam maiores architecto aperiam, vel veritatis facilis quidem ut! Consequatur ullam, architecto placeat quibusdam harum facere eveniet, vel, nobis voluptatem aut laborum. Temporibus ratione quae iure eius repellendus earum illo aliquid aperiam dolorum!</Text>
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
 
     {/* DIMENSIONS API */}
      <View style={{ width: windowWidth > 500 ? '40%' : '80%',height: windowHeight > 600 ? 200 : 140, display:'flex',alignItems:'center',justifyContent:"center",backgroundColor:'aqua',marginTop: Platform.OS === 'android' ? 20: 0}}>
       <Text style={styles.text}>Dimesions API</Text>
      </View>
      <CustomButton title={'Press Me'} onPress={()=>alert('Pressed!')}/>
      <View>
       <FlatList
       data={ListItem}
       renderItem={({ item })=>{
         return (
           <View key={item.id} style={{borderWidth:2}}>
             <Text>{item.name}</Text>
             <Text>{item.type}</Text>
           </View>
         )
       }}
       keyExtractor={(item,index)=> item.id.toString()}
       ItemSeparatorComponent={()=><View style={{height:15}}></View>}
       ListEmptyComponent={<Text>No Item Found!</Text>}
       ListHeaderComponent={<Text style={{fontSize:24}}>Admin List:</Text>}
       ListFooterComponent={<Text style={{fontSize:24}}>End of the  List</Text>}
       />
 
       <View>
         <Text>Forms:</Text>
         <TextInput  style={styles.input} placeholder='email@example.com'  secureTextEntry keyboardType='default' value={name} onChangeText={setName} />
         <Text style={{fontSize:20}}>My name is {name}</Text>
         <TextInput style={[styles.input,styles.multiline]} placeholder='Enter your message ...' multiline/>
         <View style={{padding:10,height:200}}>
         <Text>Dark Mode:</Text>
         <Switch value={isDarkMode} onValueChange={handleMode} trackColor={{ false:"#767577",true:"green"}}
         thumbColor={{false:"grey"}}
          />
         <Button title='Go to About' onPress={()=> navigation.navigate('About',{ name:"Raymond"})}/>
         </View>
         <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0 } >
 
         </KeyboardAvoidingView>
       </View>
      </View>
     </ScrollView>
    </View>
     </SafeAreaView>
  )
}

export default HomeScreen
