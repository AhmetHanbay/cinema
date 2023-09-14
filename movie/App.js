/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import cast from "./src/screens/best";
import best from "./src/screens/cast";
import style from "./src/screens/style";


const Stack = createNativeStackNavigator()

const App = () => {

  return(
<NavigationContainer>
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Deta' component={Deta}/>

  </Stack.Navigator>
</NavigationContainer>
  );
};



export default App;
