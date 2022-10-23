import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import px from '../../../assets/utility/dimension';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import {
  fetchProducts,
  setAllProductsDisplay,
} from '../../../store/slices/products';
import {useIsFocused} from '@react-navigation/native';

const ProductsCarousel = ({inProductDetails, inProductId}) => {
  const productsAllData = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [inDetailsViewData, setInDetailsViewData] = useState([]);

  const focus = useIsFocused();

  useEffect(() => {
    if (productsAllData.allproductsloaded == false) {
      dispatch(fetchProducts());
    }
  }, []);
  useEffect(() => {
    if (productsAllData.allproductsloaded == true) {
      if (inProductDetails == false || inProductDetails == null) {
        dispatch(setAllProductsDisplay({final: productsAllData.products}));
      } else {
        const tempdata = productsAllData.products.filter(item => {
          return item._id != inProductId;
        });

        dispatch(setAllProductsDisplay({final: tempdata}));
      }
    }
  }, [productsAllData.allproductsloaded, focus, inProductId]);

  return (
    <FlatList
      style={styles.scrollView}
      contentContainerStyle={{
        paddingVertical: px(10),
      }}
      data={productsAllData.allProductsDisplay}
      renderItem={({item}) => (
        <View style={{marginHorizontal: px(15)}}>
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
