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

import Account from '../components/Login/Account';
import base from '../helpers/base';
import { useNavigationState } from '@react-navigation/native';




const BottomTabs = createBottomTabNavigator();

const BottomTabsenComponent = () => {
  const [isLogin,setIsLogin]=useState(false)


useEffect(()=>{
  async function getToken(){
    let token= base.token
    if(base.token.length!==0){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  }
  getToken()
},[base.token])
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
      component={isLogin?Account:Login}
      
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