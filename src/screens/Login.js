import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

function Login({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [text, setText] = useState('');
  const login = () => {
    setText(firstName);
  };
  const [count, setCount] = useState(1);
  React.useLayoutEffect( () => {
    navigation.setOptions({
      headerLeft:()=>(
        <TouchableOpacity 
        style={styles.button1}
         onPress={()=>setCount((c)=> c +1 )}><Text style={styles.textstyle3}>Addition</Text>            
        </TouchableOpacity>
      ),
    });
  },[navigation]);
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize:22, padding:10}}> Create an account</Text>
      </View>
      <View style={{ flex: 19, marginVertical: 40 }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.textstyle1}>Username </Text>
          <TextInput
            style={styles.inputfeild}
            onChangeText={(firstName) => setFirstName(firstName)}
            value={firstName}
            placeholder="Enter username:"
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.textstyle1}>Password </Text>
          <TextInput
            style={styles.inputfeild}
            onChangeText={(lastName) => setLastName(lastName)}
            value={lastName}
            secureTextEntry={true}
            placeholder="Enter Password:"
          />
        </View>
        <View style={{ flex: 1.2 }}>
          <View>
            <Text style={styles.textstyle1}>You are a ? </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{
                  uri: 'data:image/png;base64,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',
                }}
                style={{ width: 40, height: 40, marginHorizontal: 7 }}
              />
              <Text style={styles.textstyle2}>Student</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{
                  uri: 'data:image/png;base64,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',
                }}
                style={{ width: 40, height: 40, marginHorizontal: 7 }}
              />
              <Text style={styles.textstyle2}>Employer</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: -3 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textstyle3}>Login</Text>            
          </TouchableOpacity>
        <Text style={styles.textstyle1}>{count} </Text>

        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    margin: 20,
   
  },
  inputfeild: {
    height: 40,
    weidth: 50,
    padding: 10,
    borderWidth: 1,
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'black',
    color: 'white',
  },
  textstyle1: {
    padding: 5,
    fontSize: 18,
    color:"#000",
  },
  textstyle2: {
    padding: 9,
    fontSize: 12,
  },
  textstyle3: {
    padding: 5,
    fontSize: 20,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 5,
    marginHorizontal: 70,
    borderRadius: 100,
  },
  button1: {
    backgroundColor: 'pink',
    padding: 5,
    borderRadius : 10,
    marginRight: 70,

  },
  textstyle: {
    color: "black",
  },


});

export default Login;
