import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import Dummy from '../../assets/data/DummyData/Dummy';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Button from '../UI/Button';
import ReviewItem from './ReviewItem';


const Reviews = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.textColor}>Reviews (85)</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.star}
            source={require('../../assets/data/ProductCartDummy/Vector.jpg')}
          />
          <Text style={[styles.textColor, {marginLeft: px(3)}]}>4.6</Text>
        </View>
      </View>
      <FlatList
        data={Dummy.slice(0, 3)}
        key={(item)=>item.id}
        renderItem={({item}) => {
          return <ReviewItem data={item} />;
        }}></FlatList>
      <View style={{height: px(50), marginTop: px(25)}}>
        <Button
          color={colors.fontColor}
          borderColor={colors.black}
          onPress={() => {
            navigation.navigate('ReviewProduct');
          }}>
          See All Reviews
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: px(10),
    marginHorizontal: px(25),
  },
  textColor: {
    color: colors.fontColor,
    fontSize: px(16),
    fontFamily: 'DMSans-Bold',
  },
  star: {
    width: px(14),
    height: px(14),
  },
});

export default Reviews;
