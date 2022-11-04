import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import colors from '../../config/colors';
import px from '../../assets/utility/dimension';

const OrderedProductCard = ({data}) => {
  console.log(data);
  const [sale, setIsSale] = useState(data.isSale);

  return (
    <View>
      <Image style={styles.image} source={{uri: data.coverPhoto}} />

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
  );
};

export default OrderedProductCard;

const styles = StyleSheet.create({
  image: {
    height: px(115),
    width: px(115),
    marginTop: px(15),
  },
});
