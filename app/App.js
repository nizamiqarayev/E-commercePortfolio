import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../components/Register';
import Login from '../components/Login';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {

  const BottomTab = () => {
    
    asdasdad

    return(
      <BottomTabs.Navigator>
        <BottomTabs.Screen name='Login' component={Login}></BottomTabs.Screen>
        <BottomTabs.Screen name='Register' component={Register}></BottomTabs.Screen>
      </BottomTabs.Navigator>
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={BottomTab}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({});

export default App;
