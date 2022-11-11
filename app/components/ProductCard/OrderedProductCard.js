import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import colors from '../../config/colors';
import px from '../../assets/utility/dimension';

const OrderedProductCard = ({data}) => {
  const [sale] = useState(data.product.isSale);
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
              <Text style={[styles.price, {color: colors.fontColor}]}>
                $ {data.product.salePrice} X {data.count}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={[styles.price, {color: colors.fontColor}]}>
                $ {data.product.price} X {data.count}
              </Text>
            </View>
          )}
          <View>
            <Text style={[styles.price, {color: colors.fontColor}]}>
              Total Amount: $
              {sale
                ? (
                    data.product.salePrice.replace(/\s/g, '') * data.count
                  ).toFixed(2)
                : data.product.price.replace(/\s/g, '') * data.count.toFixed(2)}
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
