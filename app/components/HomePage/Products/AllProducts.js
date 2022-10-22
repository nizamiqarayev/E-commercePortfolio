import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCardList from '../../CategoriesProducts/SubComponents/CartsComponents/ProductCardList';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const AllProducts = () => {
  const productsAllData = useSelector(state => state.products);
  const dispatch = useDispatch();


   const isFocused = useIsFocused()


  return (
    <View>
      <ProductCardList products={productsAllData.allProductsDisplay}/>
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({});
