import React from 'react';

import {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import base from '../../helpers/base';
import CheckoutComponent from './CheckoutComponent';

const Checkout = () => {
  const [data, setData] = useState([]);

 

  useEffect(() => {
    async function getData() {
        try {
          const response = await base.api().get('checkouts/all');
    
          setData(response.data.products);
          // console.log('1', response.data.products.length);
        } catch (error) {}
        // console.log('2', loading);
      }
    getData();

    // console.log('3', loading);
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        // <></>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
                return(<CheckoutComponent item={item}></CheckoutComponent>)
            }}></FlatList>
        </View>
      ) : (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ActivityIndicator: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    width: base.screenWidth,
    height: base.screenHeight,
    justifyContent: 'center',
    backgroundColor: colors.offGray,
    opacity: 0.5,
  },
});

export default Checkout;
