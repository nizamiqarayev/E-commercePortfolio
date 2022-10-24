import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import Dummy from '../../assets/data/DummyData/Dummy';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Button from '../UI/Button';
import ReviewItem from './ReviewItem';
import Antdesign from 'react-native-vector-icons/AntDesign';

const ReviewItems = () => {
  const element = [];
  for (let index = 0; index < 3; index++) {
    element.push(Math.floor(Math.random() * (Dummy.length - 1)));
  }
  return (
    <View>
      <ReviewItem data={Dummy[element[0]]} key={0}></ReviewItem>
      <ReviewItem data={Dummy[element[1]]} key={1}></ReviewItem>
      <ReviewItem data={Dummy[element[2]]} key={2}></ReviewItem>
    </View>
  );
};

const Reviews = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.textColor}>Reviews (85)</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Antdesign
            name="star"
            size={px(14)}
            style={styles.star}
            color={colors.OrangeFresh}></Antdesign>
          <Text style={[styles.textColor, {marginLeft: px(3)}]}>4.6</Text>
        </View>
      </View>
      <ReviewItems></ReviewItems>
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

export default memo(Reviews);
