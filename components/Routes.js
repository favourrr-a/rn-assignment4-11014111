import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen
          name = "Login"
          component = { Login }
        />
        <Stack.Screen
          name = "Home"
          component = { Home }
        />      
        </Stack.Navigator>
    </NavigationContainer>
  );
};