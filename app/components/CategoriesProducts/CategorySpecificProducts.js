import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ProductCardList from './SubComponents/CartsComponents/ProductCardList';
import { setCategorySpecificProductsDispatch } from '../../store/slices/products';
import { useDispatch } from 'react-redux';
import SearchBar from './SubComponents/SearchBar';
const CategorySpecificProducts = ({ route }) => {
  console.log(route.params.id);
  const dispatch = useDispatch()
  const dataFetcher = () => {
    dispatch(setCategorySpecificProductsDispatch({id:route.params.id}))
  }
  useEffect(() => {
    dataFetcher()
  }
  )
  return (
    <View>
      <SearchBar />
      <ProductCardList />
    </View>
  )
}

export default CategorySpecificProducts

const styles = StyleSheet.create({})