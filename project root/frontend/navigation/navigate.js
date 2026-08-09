import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import GuestScreen from '../screens/pages/guest';

const Stack = createNativeStackNavigator(); 

const flow = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Guest" component={GuestScreen} />  
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 

export default flow;