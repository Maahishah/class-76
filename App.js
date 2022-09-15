
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from "./screens/Home";
import IssLocationScreen from './screens/issLocation';
import MeteorScreen from './screens/meteor';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName ="home" >
   
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="IssLocation" component={IssLocationScreen} />
      <Stack.Screen name="Meteor" component={MeteorScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

