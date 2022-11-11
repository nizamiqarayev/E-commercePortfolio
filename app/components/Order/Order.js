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
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetchUserId();
    fetchEmail();
    console.log(data);
  }, [data]);

  const fetchUserId = async () => {
    const userId = await AsyncStorage.getItem('_id');
    setUserId(userId);
  };

  const fetchEmail = async () => {
    const email = await AsyncStorage.getItem('email');
    console.log(email);
    setEmail(email);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{marginRight: px(10)}}>
            <Text
              style={{
                color: colors.fontColor,
                fontFamily: 'DMSans-Bold',
                fontSize: px(16),
              }}>
              Total Amount: {totalPrice}$
            </Text>
          </View>
        );
      },
    });
  }, [totalPrice]);
  const paymentFinished = async () => {
    let checkoutComplete = false;
    if (data.length > 0) {
      checkoutComplete = await sendingCheckout();
    }
    if (checkoutComplete) {
      await deletion();
    }
  };
  const deletion = async () => {
    for (let i = 0; i < data.length; i++) {
      try {
        const response = await base.api().delete('cards/delete', {
          data: {
            userId: userId,
            productId: data[i].product._id,
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    // data.forEach(async element => {});
  };
  const sendingCheckout = async () => {
    const productsArr = [];
    data.forEach(element => {
      productsArr.push({
        productId: element.product._id,
        count: element.count,
      });
    });
    try {
      const response = await base.api().post('checkouts/send', {
        userId: userId,
        products: productsArr,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

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
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    var total = 0;
    if (data.length > 0) {
      data.map(product => {
        if (product.isSale) {
          // console.log('isSale', product.product.salePrice * product.count);
          total =
            total + parseFloat(product.product.salePrice.replace(/\s/g, ''));
        } else {
          // console.log('NoSale', product.product.price);
          total =
            total +
            parseFloat(
              product.product.price.replace(/\s/g, '') * product.count,
            );
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
      // console.log('item', item);
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

      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          marginBottom: px(10),
        }}>
        <View style={{height: px(50), width: '90%'}}>
          <Button
            backgroundColor={colors.blue}
            onPress={() => {
              console.log(email);
              console.log(userId);

              navigation.navigate('payment', {
                total: totalPrice,
                email: email,
                userId: userId,
                onCompletion: paymentFinished,
              });
            }}
            color={colors.white}>
            Checkout
          </Button>
        </View>
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
