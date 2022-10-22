import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import px from '../../../assets/utility/dimension';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import {fetchProducts, setAllProductsDisplay} from '../../../store/slices/products';

const ProductsCarousel = () => {
  const productsAllData = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsAllData.allproductsloaded == false) {
      dispatch(fetchProducts());
      }
  }, []);
    useEffect(() => {
        if (productsAllData.allproductsloaded == true) {
            dispatch(setAllProductsDisplay({final: productsAllData.products}));
            }
    },[productsAllData.allproductsloaded])

  return (
    <FlatList
      style={styles.scrollView}
      data={productsAllData.allProductsDisplay}
      renderItem={({item}) => (
        <View style={{marginHorizontal:px(15)}}>
          <ProductCard key={item._id} data={item} />
        </View>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductsCarousel;

const styles = StyleSheet.create({
  scrollView: {
    // height: px(200),
      
    marginTop: px(12),
    marginBottom: px(5),
  },
});
