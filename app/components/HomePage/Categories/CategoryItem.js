import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import px from '../../../assets/utility/dimension';

const CategoryItem = ({ image, title, color }) => {
    useEffect(() => {
        console.log(image);
    })
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
          width: px(72),
          height: px(72),
        }}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    
        justifyContent: "center",
    alignItems:"center"
  },
  image: {
    width: px(40),
    height: px(40),
  },
});
