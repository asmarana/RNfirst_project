import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';

const DetailsScreen = () => {
  const [data, setData] = useState([])
  const[pageCurrent,setPageCurrent] = useState(1)
  const [isLoading, setisLoading] = useState(false)
  const [itemToRender,setitemToRender] = useState(10)
  useEffect(() => {
    console.log("pageCurrent:",pageCurrent )
    getData();
  }, [pageCurrent])


  const getData = async () => {
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=${itemToRender} &_page=${pageCurrent}`
    fetch(apiURL).then((res) => res.json())
    .then((resJson) => {
      setData(data.concat(resJson))
      setisLoading(false)

    }) 
  }
  function handleLoadMore () {
    setPageCurrent(pageCurrent+1)
    setitemToRender(itemToRender+10)
    setisLoading(true)

  }
  const reachToEnd = ({layoutMeasurement,contentOffset, contentSize}) => {
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height;
  }
          return (
        <ScrollView style={styles.container} 
          onScroll={({nativeEvent}) => {
            if (reachToEnd(nativeEvent)) {
              handleLoadMore();
            }
          }}
          scrollEventThrottle={400}

        >
          {data.map((item,index)=>{  
          const i=index+1;
          if(i <= itemToRender){
          return (
            <View style={styles.itemrow} >
            <Image source={{ uri: item.url }} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>{item.id}</Text>
            </View>
            )
          }
          })}
        </ScrollView>
  );
}
const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    backgroundColor: "#f5fcff"

  },
  itemrow: {
    borderBottomColor: '#ccc',
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
});
export default DetailsScreen;


// import React, { useEffect, useState } from 'react';
// import { StyleSheet, FlatList, Image, View, Text, ScrollView } from 'react-native';
// import { ActivityIndicator } from 'react-native-paper';

// const DetailsScreen = () => {
//   const [data, setData] = useState([])
//   const [isLoading, setisLoading] = useState(false)
//   const[pageCurrent,setPageCurrent] = useState(1)

//   useEffect(() => {
//     console.log("pageCurrent:",pageCurrent )
//     setisLoading(true)
//     getData();
//   }, [pageCurrent])

//   const getData = async () => {
//     const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${pageCurrent}`
//     fetch(apiURL).then((res) => res.json())
//       .then((resJson) => {
//         setData(data.concat(resJson))
//         setisLoading(false)
//       })
//   }
//   function handleLoadMore () {
//     setPageCurrent(pageCurrent+1 )
//     setisLoading(true)
//   } 
//   function renderFooter() {
//     return (
//       isLoading?
//          <View stye={styles.loader}>
//         <ActivityIndicator size="small" />
//       </View>
//       :null
//     )
//   }
//   return (
//     <ScrollView
//       style={styles.container}
//  >{data.map((item,index)=>{
//   return (
//     <View style={styles.itemRow} >
//       <Image source={{ uri: item.url }} style={styles.itemImage} />
//       <Text style={styles.itemText}>{item.title}</Text>
//       <Text style={styles.itemText}>{item.id}</Text>
//       <renderFooter/>
//     </View>
//   )
//  })}
 
//       </ScrollView>
   
//   );
// }
// const styles = StyleSheet.create({

//   container: {
//     marginTop: 20,
//     backgroundColor: "#f5fcff"

//   },
//   itemrow: {
//     borderBottomColor: '#ccc',
//     marginBottom: '10',
//     borderBottomWidth: 1,
//   },
//   itemImage: {
//     width: 400,
//     height: 200,
//     resizeMode: 'cover'
//   },
//   itemText: {
//     fontSize: 16,
//     padding: 5,
//     color: 'black',
//   },
//   loader: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
// });






// export default DetailsScreen;

