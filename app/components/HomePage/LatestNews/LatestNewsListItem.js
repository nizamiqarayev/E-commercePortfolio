import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import px from '../../../assets/utility/dimension';
import {useNavigation} from '@react-navigation/native';

const LatestNewsListItem = ({data,index,onPress}) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (data != null) {
      console.log('id', data._id);
    }
  }, [data]);
  return (
    <View style={{overflow: 'hidden'}}>
      <Pressable
        style={styles.container}
        android_ripple={{color: '#FFFFAD'}}
        onPress={onPress?onPress:() => {
          navigation.navigate('newsdetail',{data:data,index:index});
        }}>
        <View style={styles.textView}>
          <Text style={[styles.text, {marginTop: 20}]}>
            {data != null ? data.title : ''}
          </Text>
          <Text style={styles.text} numberOfLines={1}>{data != null ? data.content : ''}</Text>
          <Text style={[styles.text, {marginBottom: 20}]}>{data != null ? `${new Date(data.date).toDateString()}` : ''}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={
              data != null
                ? {uri: data.image}
                : require('../../../assets/images/480-4800827_little-penguin-simple-cute-penguin-cartoon.png')
            }
          />
        </View>
      </Pressable>
    </View>
  );
};

export default LatestNewsListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    borderBottomWidth: 1,
    borderColor: '#EDEDED',
  },
  textView: {width: px(225), marginRight: px(20)},
  text: {
    marginBottom: 10,
    color: '#0C1A30',
  },

  image: {
    height: px(80),
    width: px(80),
    borderRadius: 10,
  },
});
