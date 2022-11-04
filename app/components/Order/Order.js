import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import colors from '../../config/colors';
import Button from '../UI/Button';
import base from '../../helpers/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../ProductCard/ProductCard';
import px from '../../assets/utility/dimension';
import OrderedProductCard from '../ProductCard/OrderedProductCard';

const Order = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStoreData = async () => {
    try {
      let card = await AsyncStorage.getItem('card');
      if (card) {
        card = JSON.parse(card);
      }
      setData(card);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem('_id');
      if (!userId) {
        return getStoreData();
      }
      const response = await base.api().get(`cards/${userId}`);
      const data = await response.data;
      const products = data.products;
      setData(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const Product = useCallback(({item}) => {
    return <OrderedProductCard data={item} />;
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
          Card is empty
        </Text>
      )
    );
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          color={colors.EarthGreen}
          size={'large'}
          style={{alignSelf: 'center'}}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          contentContainerStyle={{padding: px(20)}}
          // columnWrapperStyle={{
          //   justifyContent: 'space-between',
          //   marginTop: px(20),
          // }}
          showsVerticalScrollIndicator={false}
          renderItem={Product}
          ListEmptyComponent={EmptyList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Order;
