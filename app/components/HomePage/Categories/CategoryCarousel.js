import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import px from '../../../assets/utility/dimension';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCategoriesArray } from '../../../store/slices/Categories';

const CategoryCarousel = () => {
  
  const categoriesFromStore= useSelector((state) => state.categories)
  const dispatch= useDispatch()


  const dataFetcherForCategories = async () => {
    const response = await axios.get('https://izzi-ecom.herokuapp.com/categories/')
    dispatch(setCategoriesArray({categories:response.data}))
  }
  useEffect(() => {
    if (categoriesFromStore.content.length == 0) {
      dataFetcherForCategories()
    }
  },[categoriesFromStore])
 

  return (
    <FlatList
      style={styles.scrollView}
      data={categoriesFromStore.content}
      renderItem={({item}) => (
        <CategoryItem
          key={item._id}
          id={item._id}
          image={item.image}
          title={item.name}
          color={item.bgColor}
        />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
  scrollView: {
    height: px(120),
    marginTop: px(12),
    marginBottom:px(5)
  },
});
