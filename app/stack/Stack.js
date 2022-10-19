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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsenComponent from './BottomTabsenComponent';
import ReviewProduct from '../components/Reviews/ReviewProduct';
import FilterTopTabs from './FilterTopTabs';
import px from '../assets/utility/dimension';
import CategorySpecificProducts from '../components/CategoriesProducts/CategorySpecificProducts';
import AddToCart from '../components/AddToCart/AddToCart';

const Stack = createNativeStackNavigator();

const StackComponent = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   contentStyle: {backgroundColor: 'white'},
    // }}
    >
      <Stack.Screen
        name="main"
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: 'white'},
        }}
        component={BottomTabsenComponent}
      />
      <Stack.Screen name="ReviewProduct" component={ReviewProduct} />
      <Stack.Group
        screenOptions={{
          headerTitle: '',
          contentStyle: {backgroundColor: 'white'},
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

      <Stack.Screen
        name="allcategories"
        component={AllCategories}
        options={{presentation: 'modal', animation: 'fade'}}
      />

      <Stack.Screen
        name="categoryproducts"
        component={CategorySpecificProducts}
        options={{
          presentation: 'containedModal',
          animation: 'fade_from_bottom',
          title: "Catalog",
          headerTitleAlign: "center",
        
        }}
      />

      <Stack.Screen
        name="addtocart"
        component={AddToCart}
        options={{presentation: 'modal', animation: 'fade'}}
      />

      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Filter&Sorting"
          component={FilterTopTabs}
          options={{
            presentation: 'transparentModal',
            animation: 'fade',
            // contentStyle: { paddingHorizontal: px(30) },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackComponent;

const styles = StyleSheet.create({});
