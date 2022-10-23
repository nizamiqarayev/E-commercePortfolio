import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ data }) => {

  const navigation = useNavigation()
  const [starReview , setStarReview] = useState(0)
console.log(data);
  const [sale,setIsSale] = useState(data.isSale)
  useEffect(() => {
    reviewCounter()
  },[])
  
  const reviewCounter = () => {
    let count = 0
    //   console.log(data.reviews[0].starCount);
    // for (let i = 0; i < data.reviews; i++){
    //  count=count+ data.reviews[i].starCount
    // }
    if (data.reviews.length != 0) {
      data.reviews.forEach(item => {
        count += item.starCount
      });
      setStarReview(count/data.reviews.length)
    }
    
}
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {
        navigation.navigate("ProductDetail",)
      }}>
      <View>
        <Image style={{width:px(40),height:px(20),position:'absolute',bottom:0}} source={require('../../assets/data/ProductCartDummy/Group634.jpg')}/>
        <Image
          style={styles.image}
          source={{uri:data.coverPhoto}}
        />
      </View>
      <View style={{marginBottom:px(15), marginTop:px(25)}}>
        <View style={{marginBottom:px(4)}}>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <View style={{marginBottom:px(10)}}>
          <Text style={styles.price}>$ {sale ? data.salePrice :data.price}</Text>
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
            <Text style={styles.text}>{Number.isInteger(starReview)? starReview:starReview.toFixed(1)}</Text>
          <View style={{marginLeft:px(10)}}>
            <Text style={styles.text}>{data.reviews.length}  Reviews</Text>
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
        </Pressable>
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
