import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductCard = () => {
    const sale=true
  return (
    <View style={styles.container}>
      <View>
        <Image style={{width:px(40),height:px(20),position:'absolute',bottom:0}} source={require('../../assets/data/ProductCartDummy/Group634.jpg')}/>
        <Image
          style={styles.image}
          source={require('../../assets/data/ProductCartDummy/image5.png')}
        />
      </View>
      <View style={{marginBottom:px(15), marginTop:px(25)}}>
        <View style={{marginBottom:px(4)}}>
          <Text style={styles.title}>TMA-2 HD Wireless</Text>
        </View>
        <View style={{marginBottom:px(10)}}>
          <Text style={styles.price}>Rp. 1.500.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.star}
              source={require('../../assets/data/ProductCartDummy/Vector.jpg')}
            />
            <Text style={styles.text}>4.6</Text>
          <View style={{marginLeft:px(10)}}>
            <Text style={styles.text}>86 Reviews</Text>
          </View>
          </View>
          <View>
            <Entypo
              name="dots-three-vertical"
              size={px(14)}
              color={colors.darkgray}></Entypo>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: px(10),
    width: px(156),
    borderRadius: px(10),
  },
  image: {
    height: px(125),
    width: px(125),
    marginTop: px(15),
  },
  title: {
    fontFamily: 'DMSans-Medium',
    color: colors.black,
    fontSize: px(14),
  },
  price: {
    fontFamily: 'DMSans-Bold',
    color: colors.errorRed,
    fontSize: px(12),
  },
  star: {
    width: px(12),
    height: px(12),
  },
  text: {
    color: colors.black,
    fontSize: px(10),
  },
});

export default ProductCard;
