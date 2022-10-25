import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
import {useNavigationState} from '@react-navigation/native';
import px from '../assets/utility/dimension';

const BottomTabs = createBottomTabNavigator();

const BottomTabsenComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  let token;
  const [profilePicture, setProfilePicture] = useState();

  useEffect(() => {
    async function getToken() {
      token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setIsLogin(true);
        let picture = await AsyncStorage.getItem('profilePicture');
        setProfilePicture(picture);
      } else {
        setIsLogin(false);
      }
    }
    getToken();
  }, [AsyncStorage.getItem('token')]);
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
        name="Card"
        component={Order}
        options={{
          tabBarLabel: 'CARD',
          tabBarIcon: ({focused, color}) => (
            <Feather
              name="credit-card"
              size={24}
              color={focused ? color : colors.darkgray}
            />
          ),
        }}></BottomTabs.Screen>

      <BottomTabs.Screen
        name={isLogin ? 'Account' : 'Login'}
        component={isLogin ? Account : Login}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View>
              {isLogin ? (
                <Image
                  style={{
                    borderRadius:1000,
                  }}
                  source={{
                    uri: profilePicture,
                    width: px(24),
                    height: px(24),
                  }}></Image>
              ) : (
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={focused ? color : colors.darkgray}
                />
              )}
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsenComponent;

const styles = StyleSheet.create({});
