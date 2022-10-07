import React from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Stars from './Stars';

const Reviews = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={styles.textColor}>Reviews (85)</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.star}
            source={require('../../assets/data/ProductCartDummy/Vector.jpg')}
          />
          <Text style={[styles.textColor,{marginLeft:px(3)}]}>4.6</Text>
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:px(10),
    marginHorizontal:px(25),
  },
  textColor: {
    color: colors.fontColor,
    fontSize:px(16),
    fontFamily:'DMSans-Bold'
  },
  star: {
    width: px(14),
    height: px(14),
    
  },
});

export default Reviews;
