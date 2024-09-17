import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'

const NetworkScreen = () => {
  const [postList, setPostList] = useState([]);
  const [ isLoading,setIsLoading] = useState(true);
  const [refreshing, setRefreshing ] = useState(false);

    const fetchData = async( limit=10 )=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

        const data = await response.json()

        setPostList(data)
        setIsLoading(false)
    }

    useEffect(()=>{
       fetchData()
    },[])

    const handleRefresh = ()=>{
        setRefreshing(true)
        fetchData(20)
        setRefreshing(false)
    }

const styles = StyleSheet.create({
   listContainer:{
       flex:1,
       backgroundColor:'whitesmoke',
       paddingHorizontal: 10,
    //    paddingTop: StatusBar.currentHeight
   },
   loadingContainer:{
    flex:1,
    paddingTop: StatusBar.currentHeight,
    justifyContent:"center",
    alignItems:"center"
   }
    })

    if(isLoading){
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'navy'}/>
                <Text>Loading...</Text>

            </View>
        )
    }
  return (
     <View style={styles.listContainer}>
        <FlatList
        data={postList}
        renderItem={({item})=>{
            return (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )
        }}
        ItemSeparatorComponent={()=>(
        <View style={{height:16}}/>
        )}
        ListEmptyComponent={<Text>No List Found!</Text>}
        ListHeaderComponent={<Text>List of Posts:</Text>}
        ListFooterComponent={<Text>Post ended here!</Text>}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        />
     </View>
  )
}

export default NetworkScreen;
