import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabsenComponent from './stack/BottomTabsenComponent';
import StackComponent from './stack/Stack';
import { Provider } from 'react-redux';
import { store } from './store/store';
//comment

const App = () => {
  const BottomTab = () => {
    return (
      <BottomTabsenComponent />
    )
  };

  return (
    <Provider store={store}>

   
    <NavigationContainer>
      <StackComponent />
      
      </NavigationContainer>
      
      </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
