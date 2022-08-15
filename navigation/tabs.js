import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import DetailsScreen from './src/screens/Details'

 const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
      <Tab.Navigator>
         <Tab.Screen name = "Login " component ={Login} />
         <Tab.Screen name = "Home " component ={Home} />
         <Tab.Screen name = "DetailsScreen " component ={DetailsScreen} />
      </Tab.Navigator>
    );
}
 export default Tabs;