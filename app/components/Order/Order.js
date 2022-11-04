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
import {useEffect} from 'react';
import payment from '../../paymentMethods/widget';

const Order = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);

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
    setLoading(false);
  };

  const calculateTotal = () => {
    var total = 0;
    if (data.length > 0) {
      data.map(product => {
        if (product.isSale) {
          console.log('isSale', product.salePrice);
          total = total + parseFloat(product.salePrice);
        } else {
          console.log('NoSale', product.price);
          total = total + parseFloat(product.price);
        }
      });
    }
    setTotalPrice(total);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  useEffect(() => {
    calculateTotal();
  }, [data]);

  const Product = useCallback(
    ({item}) => {
      console.log('item', item);
      return <OrderedProductCard data={item} />;
    },
    [loading],
  );

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
    <View style={{flex: 1}}>
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
            // contentContainerStyle={{padding: px(20)}}
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
      <View>
        <Text>Total Amount: {totalPrice}$</Text>
      </View>
      <View style={{height: px(40), width: '100%'}}>
        <Button
          onPress={() => {
            navigation.navigate('payment');
          }}
          color={colors.fontColor}>
          Checkout
        </Button>
      </View>
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
