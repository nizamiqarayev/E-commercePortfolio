import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Register from '../components/Registration/Register';
import Verification from '../components/Registration/Verification';
import ResetPassword from '../components/Login/ResetPassword';
import UpdatePassword from '../components/Login/UpdatePassword';
import ProfilePassword from '../components/Registration/ProfilePassword';
import Login from '../components/Login/Login';

import NewsDetail from '../components/HomePage/NewsDetail/NewsDetail';

import AllNews from '../components/AllNews/AllNews';
import AllCategories from '../components/HomePage/Categories/AllCategories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsenComponent from './BottomTabsenComponent';



const Stack = createNativeStackNavigator();

const StackComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="main"
        options={{
          headerShown: false,
        }}
        component={BottomTabsenComponent}
      />
      <Stack.Screen name="second" component={Login} />
      <Stack.Group
        screenOptions={{
          headerTitle: '',
        }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="verification"
          component={Verification}
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Profile Password"
          component={ProfilePassword}
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="updatepassword" component={UpdatePassword} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
        <Stack.Screen name="allnews" component={AllNews} />
      </Stack.Group>
      <Stack.Screen
        name="newsdetail"
        component={NewsDetail}
        options={{
          headerTitle: 'Detail News',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen name="allcategories" component={AllCategories} />
    </Stack.Navigator>
  );
};

export default StackComponent;

const styles = StyleSheet.create({});
