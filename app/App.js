import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from './components/Registration/Register';
import Login from './components/Login/Login';
import Verification from './components/Registration/Verification';
import ResetPassword from './components/Login/ResetPassword';
import UpdatePassword from './components/Login/UpdatePassword';
import ProfilePassword from './components/Registration/ProfilePassword';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {
  const BottomTab = () => {
    return (
      <BottomTabs.Navigator >
        <BottomTabs.Screen  name="Login" component={Login}  options={{}}></BottomTabs.Screen>
        <BottomTabs.Screen
          name="Register"
          component={Register}></BottomTabs.Screen>
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="main"
          options={{
            headerShown: false,
          }}
          component={BottomTab}></Stack.Screen>
        <Stack.Screen name="second" component={Login}></Stack.Screen>
        <Stack.Group
          screenOptions={{
            headerTitle: '',
          }}>
          <Stack.Screen
            name="verification"
            component={Verification}
            options={
              {
                headerShadowVisible: false
              }}
          ></Stack.Screen>
           <Stack.Screen
            name="Profile Password"
            component={ProfilePassword}
            options={
              {
              headerShadowVisible: false
            }
          }></Stack.Screen>
          <Stack.Screen
            name="updatepassword"
            component={UpdatePassword}></Stack.Screen>
          <Stack.Screen
            name="resetpassword"
            component={ResetPassword}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
