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
import Wishlist from './components/Wishlist/Wishlist';
import Order from './components/Order/Order';
import HomePage from './components/HomePage/HomePage';
import NewsDetail from './components/HomePage/NewsDetail/NewsDetail';
import Octicons from 'react-native-vector-icons/Octicons'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Feather from 'react-native-vector-icons/Feather'; 
import colors from './config/colors';
//comment
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {
  const BottomTab = () => {
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
          name="Login"
          component={Login}
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
          component={BottomTab}
        />
        <Stack.Screen name="second" component={Login} />
        <Stack.Group
          screenOptions={{
            headerTitle: '',
          }}>
            <Stack.Screen
              name="Register"
              component={Register}
            />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
