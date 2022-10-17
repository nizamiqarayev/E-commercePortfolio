import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Octicons from 'react-native-vector-icons/Octicons'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Feather from 'react-native-vector-icons/Feather'; 
import colors from '../config/colors';
import Wishlist from '../components/Wishlist/Wishlist';
import Order from '../components/Order/Order';
import HomePage from '../components/HomePage/HomePage';

import Login from '../components/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';




const BottomTabs = createBottomTabNavigator();

const BottomTabsenComponent = () => {
  const [isLogin,setIsLogin]=useState(false)
async function getToken(){
  const token= await AsyncStorage.getItem('token')
  if(token!==null){
    setIsLogin(true)
  }
  return token
}
useEffect(()=>{
  
},[getToken().length])
  return (
    <BottomTabs.Navigator>
    <BottomTabs.Screen
      name="HomePage"
      component={HomePage}
      options={{
        tabBarLabel: 'HOME',
        tabBarIcon: ({focused, color}) => (
          <Octicons
            name="home"
            size={24}
            color={focused ? color : colors.darkgray}
          />
        ),
      }}></BottomTabs.Screen>
    <BottomTabs.Screen
      name="Wishlist"
      component={Wishlist}
      options={{
        tabBarLabel: 'WISHLIST',
        tabBarIcon: ({focused, color}) => (
          <Ionicons
            name="heart-outline"
            size={24}
            color={focused ? color : colors.darkgray}
          />
        ),
      }}></BottomTabs.Screen>
    <BottomTabs.Screen
      name="Order"
      component={Order}
      options={{
        tabBarLabel: 'ORDER',
        tabBarIcon: ({focused, color}) => (
          <Feather
            name="shopping-bag"
            size={24}
            color={focused ? color : colors.darkgray}
          />
        ),
      }}></BottomTabs.Screen>
      
      <BottomTabs.Screen
      name={isLogin?'Account':'Login'}
      component={isLogin?()=>{}:Login}
      listeners={{
        tabPress:(e)=>{
          if(isLogin===true){e.preventDefault()}
        },
        tabLongPress:undefined
      }}
      options={{
        tabBarIcon: ({focused, color}) => (
          <Ionicons
            name="person-outline"
            size={24}
            color={focused ? color : colors.darkgray}
          />
        ),
      }}
    />
    
    
  </BottomTabs.Navigator>
);
  
}

export default BottomTabsenComponent

const styles = StyleSheet.create({})