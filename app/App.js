import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabsenComponent from './stack/BottomTabsenComponent';
import StackComponent from './stack/Stack';
import { Provider } from 'react-redux';
import { store } from './store/store';


LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
  `[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!`,
  `[mobx] Out of bounds read`,
  'Non-serializable values were found in the navigation state',
  'Task orphaned',
]);


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
