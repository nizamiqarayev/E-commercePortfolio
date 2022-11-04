import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import colors from '../../config/colors';
import px from '../../assets/utility/dimension';
import Button from '../UI/Button';

const OrderedProductCard = ({data}) => {
  const [sale, setIsSale] = useState(true);
  console.log('dataFromItem', data);
  console.log(data.name);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image style={styles.image} source={{uri: data.coverPhoto}} />
        <Text style={{color: colors.black}}>{data.name}</Text>
        {sale ? (
          <View>
            <Text style={styles.price}>$ {data.salePrice}</Text>
            <Text
              style={[
                styles.price,
                {
                  color: colors.disabledButton,
                  fontSize: px(10),
                  textDecorationLine: 'line-through',
                  marginTop: 5,
                },
              ]}>
              $ {data.price}
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.price}>$ {data.price}</Text>
            <Text
              style={[
                styles.price,
                {
                  color: colors.disabledButton,
                  fontSize: px(10),
                  textDecorationLine: 'line-through',
                  marginTop: 5,
                  opacity: 0,
                },
              ]}>
              {data.price}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: px(115),
    width: px(115),
    marginTop: px(15),
  },
});

export default OrderedProductCard;
