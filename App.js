import React from 'react';
import {
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import DetailsScreen from './src/screens/Details'
import Title from './src/screens/Title';

const ImageStack = createNativeStackNavigator();

function ImageStackScreen() {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen name="DetailsScreen" component={DetailsScreen} />
      <ImageStack.Screen name="Title" component={Title} />
    </ImageStack.Navigator>
  );
}

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'pink',
          tabBarInactiveTintColor: 'gray',
        })}

      >
        <Tab.Screen name="Login " component={Login}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/icons/login.png")}
              style={{ width: 20, height: 20 }} />)
          }} />
        <Tab.Screen name="Home " component={Home} options={{
          tabBarBadge: 2,
          tabBarIcon: () => (<Image source={require("./assets/icons/home.png")}
            style={{ width: 20, height: 20 }} />)
        }} />
        <Tab.Screen name="DetailsScreen " component={DetailsScreen}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/icons/details.png")}
              style={{ width: 20, height: 20 }} />)
          }} />
        <Tab.Screen name="Images" component={ImageStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("./assets/icons/details.png")}
              style={{ width: 20, height: 20 }} />)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
