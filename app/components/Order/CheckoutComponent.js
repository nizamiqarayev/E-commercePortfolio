import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';

const CheckoutComponent = ({item}) => {
  const [sale, setSale] = useState(item.productId.isSale);
  const navigation=useNavigation();
  // console.log(item);
  return (
    <Pressable onPress={()=>{
      navigation.navigate('ProductDetail',{id:item.productId._id})
    }} style={{flex:1}}>
      <View
        style={{
          marginHorizontal: px(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={styles.image}
          source={{uri: item.productId?.coverPhoto}}
        />
        <View>
          <Text style={{width: px(220), color: colors.black}}>
            {item.productId?.name}
          </Text>
          {sale ? (
            <View>
              <Text style={styles.price}>
                $ {item.productId?.salePrice} X {item.count}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.price}>
                $ {item.productId?.price} X {item.count}
              </Text>
            </View>
          )}
          <View>
            <Text style={{color:colors.fontColor}}>
              Total Amount: $
              {sale
                ? item.productId?.salePrice.replace(/\s/g, '') * item.count
                : item.productId?.price.replace(/\s/g, '') * item.count}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: px(115),
    width: px(115),
    marginTop: px(15),
  },
});

export default CheckoutComponent;
