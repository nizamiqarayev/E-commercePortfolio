import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState, useTransition} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ToastAndroid,
  Alert,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import colors from '../../config/colors';
import Reviews from '../Reviews/Reviews';
import base from '../../helpers/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../ProductCard/ProductCard';
import px from '../../assets/utility/dimension';

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // numune qurdum tam optimize deyil - mentiq bu formada olacaq
  //datani storeda saxlayin - logout olduqda clear edin;
  // getData in storeda cagirin ve funksiyani daha seliqeli edin;

  const getData = async () => {
    // url-i burda yazdim ama file yaradib butun url-ləri ora ataq.
    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      let wishlist = await AsyncStorage.getItem('wishlist');
      if (wishlist) wishlist = JSON.parse(wishlist);
      else {
        setData([]);
        return setLoading(false);
      }
      setData(wishlist);
      return setLoading(false);
    }
    const userId = await AsyncStorage.getItem('_id');
    base.token = token;
    const response = await base.api().get(`wishlists/${userId}`);
    const data = await response.data;
    setData(data.data.products);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const ProductItem = useCallback(({item}) => {
    return (
      <View style={styles.cardContainer}>
        <ProductCard data={item} />
      </View>
    );
  }, []);

  const EmptyList = useCallback(() => {
    return (
      loading || (
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'DMSans-Medium',
            alignSelf: 'center',
          }}>
          Wishlist is empty
        </Text>
      )
    );
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={colors.EarthGreen}
          style={{alignSelf: 'center'}}
        />
      ) : (
        <FlatList
          data={data}
          style={styles.list}
          numColumns={2}
          contentContainerStyle={{padding: px(20)}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginTop: px(20),
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          renderItem={ProductItem}
          ListEmptyComponent={EmptyList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default Wishlist;
