import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import colors from '../../config/colors';
import px from '../../assets/utility/dimension';
import Button from '../UI/Button';

const OrderedProductCard = ({data}) => {
  const [sale, setIsSale] = useState(data.product.isSale);
  // console.log('dataFromItem', data);
  // console.log(data.name);
  return (
    <View style={{}}>
      <View
        style={{
          marginHorizontal: px(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={{uri: data.product.coverPhoto}} />
        <View>
          <Text style={{width: px(220), color: colors.black}}>
            {data.product.name}
          </Text>
          {sale ? (
            <View>
              <Text style={[styles.price, {color: colors.black}]}>
                $ {data.product.salePrice} X {data.count}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={[styles.price, {color: colors.black}]}>
                $ {data.product.price} X {data.count}
              </Text>
            </View>
          )}
          <View>
            <Text style={[styles.price, {color: colors.black}]}>
              Total Amount: $
              {sale
                ? data.product.salePrice.replace(/\s/g, '') * data.count
                : data.product.price.replace(/\s/g, '') * data.count}
            </Text>
          </View>
        </View>
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
