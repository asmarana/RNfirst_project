import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const[pageCurrent,setPageCurrent] = useState(1)

  useEffect(() => {
    console.log("pageCurrent:",pageCurrent )
    setisLoading(true)
    getData();
  }, [pageCurrent])

  getData = async () => {
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${pageCurrent}`
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson))
        setisLoading(false)
      })
  }
  function handleLoadMore () {
    setPageCurrent(pageCurrent+1 )
    setisLoading(true)
  } 
  function renderFooter() {
    return (
      isLoading?
         <View stye={styles.loader}>
        <ActivityIndicator size="small" />
      </View>
      :null
    )
  }
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
      return (
        <View style={styles.itemRow} >
          <Image source={{ uri: item.url }} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.itemText}>{item.id}</Text>
        </View>
      )
      }}
      ListFooterComponent={()=>renderFooter()}
      onEndReached = {()=>handleLoadMore()}
      onEndReachedThreshold = {1}
    />
  );
}
const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    backgroundColor: "#f5fcff"

  },
  itemrow: {
    borderBottomColor: '#ccc',
    marginBottom: '10',
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 400,
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16,
    padding: 5,
    color: 'black',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Home;

