import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ProductCardList from './SubComponents/CartsComponents/ProductCardList';
import {
  fetchProducts,
  setCategorySpecificProductsDispatch,
  setFilteredProducts,
} from '../../store/slices/products';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../UI/SearchBar';
import px from '../../assets/utility/dimension';
import IconButton from '../UI/IconButton';
import Button from '../UI/Button';
import colors from '../../config/colors';
const CategorySpecificProducts = ({route,navigation}) => {
  const dispatch = useDispatch();

  const productsAllData = useSelector(state => state.products);
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    pickCategorySpecificProducts();
  }, [productsAllData.products]);

  useEffect(() => {
    dispatch(
      setFilteredProducts({
        filteredProducts: productsAllData.categorySpecificProducts,
      }),
    );
  }, [productsAllData.categorySpecificProductsLoaded]);

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

  const searchBarSort = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        {productsAllData.categorySpecificProducts.length == 0 ? <></> : <SearchBar data={productsAllData.filteredProducts} />}
        <View style={styles.searchIcon}>
          <IconButton name={'search'} size={20} />
        </View>
      </View>
      <ProductCardList products={productsAllData.productsForDisplay} />
      <View style={styles.buttonContainer}>
        <Button onPress={() => {
          navigation.navigate("Filter&Sorting")
        }} backgroundColor={colors.white} color={colors.fontColor} borderColor={colors.black}>Filter&Sorting</Button>
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
  searchBarContainer: {
    height: px(50),
    marginHorizontal: px(10),
    marginVertical: px(10),
  },
  searchIcon: {
    position: "absolute",
    right: 0,
    
  },
  buttonContainer: {
    height: px(60),
    marginHorizontal:px(15)
  }
});
