import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ProductCardList from './SubComponents/CartsComponents/ProductCardList';
import {
  fetchProducts,
  setCategorySpecificProductsDispatch,
  setFilteredProducts,
  setProductsForDisplay,
} from '../../store/slices/products';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../UI/SearchBar';
import px from '../../assets/utility/dimension';
import IconButton from '../UI/IconButton';
import Button from '../UI/Button';
import colors from '../../config/colors';
import {useIsFocused} from '@react-navigation/native';
import { Sorting } from '../../assets/utility/Sorting';
const CategorySpecificProducts = ({route, navigation}) => {
  const dispatch = useDispatch();

  const productsAllData = useSelector(state => state.products);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (productsAllData.allproductsloaded == false) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    if (productsAllData.allproductsloaded == true) {
      pickCategorySpecificProducts();
    }
  }, [productsAllData.products]);

  useEffect(() => {
    dispatch(
      setFilteredProducts({
        filteredProducts: productsAllData.categorySpecificProducts,
      }),
    );
  }, [productsAllData.categorySpecificProducts]);

  useEffect(() => {
    dispatch(
      setProductsForDisplay({
        final: productsAllData.filteredProducts,
      }),
    );
  }, [productsAllData.filteredProducts]);

  const pickCategorySpecificProducts = async () => {
    if (productsAllData.allproductsloaded) {
      if (productsAllData.products.length !== 0) {
        const filteredData = productsAllData.products.filter(
          item => item.category === route.params.id,
        );

        dispatch(setCategorySpecificProductsDispatch({products: filteredData}));
      }
    }
  };

  useEffect(() => {
    if(productsAllData.productsForDisplay.length!==0)
    Sorting(productsAllData.productsForDisplay,"A-Z","price-L-H")

  },[productsAllData.productsForDisplay])

  

  return (
    <View style={styles.container}>
      <View style={styles.searchBarAndTitleContainer}>
        <Text
          style={{
            fontFamily: 'DMSans-Bold',
            fontSize: 32,
            color: colors.fontColor,
            marginVertical: px(10),
          }}>
          {route.params.title}
        </Text>
        <View style={styles.searchBarContainer}>
          {productsAllData.categorySpecificProducts.length == 0 ? (
            <></>
          ) : (
            
              <SearchBar data={productsAllData.filteredProducts} />
              
           
          )}
          {  productsAllData.categorySpecificProducts.length == 0 ? <></> :<View style={styles.searchIcon}>
                <IconButton name={'search'} size={20} />
              </View>}
        </View>
      </View>
      <View style={{height: '70%', paddingBottom: px(10)}}>
        <ProductCardList products={productsAllData.productsForDisplay} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.navigate('Filter&Sorting');
          }}
          backgroundColor={colors.white}
          color={colors.fontColor}
          borderColor={colors.black}>
          Filter&Sorting
        </Button>
      </View>
    </View>
  );
};

export default CategorySpecificProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarAndTitleContainer: {
    marginHorizontal: px(10),
    marginVertical: px(10),
  },
  searchBarContainer: {
    height: px(50),
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
  },
  buttonContainer: {
    height: px(60),
    marginHorizontal: px(15),
  },
});
