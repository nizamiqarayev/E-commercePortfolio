import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Dummy from '../../../assets/data/DummyData/Dummy';
import px from '../../../assets/utility/dimension';
import getdate from '../../../assets/utility/Date';
import colors from '../../../config/colors';
import Button from '../../UI/Button';
const NewsDetail = () => {
  const data = Dummy[0];
  const otherdata = [Dummy[1], Dummy[2]];

  const otherNews = data => {
    return (
      <View
        key={data.id}
        style={{
          flexDirection: 'row',
          marginBottom: px(30),
          justifyContent: 'space-between',
          height: px(100),
          borderBottomWidth: 1,
          borderBottomColor: '#EDEDED',
        }}>
        <View style={{width: '70%', justifyContent: 'space-around'}}>
          <Text
            style={{
              fontSize: px(14),
              color: colors.black,
              fontFamily: 'DMSans-Regular',
            }}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: px(12),
              color: colors.black,
              fontFamily: 'DMSans-Regular',
            }}
            numberOfLines={1}>
            {data.description}
          </Text>
          <Text style={{color: colors.darkgray}}>
            {getdate(data.startDate)}
          </Text>
        </View>
        <View style={{height: px(80)}}>
          <Image
            style={{
              width: px(80),
              borderRadius: px(10),
              height: px(80),
              flex: 2,
            }}
            source={{uri: data.coverPhoto}}></Image>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{marginHorizontal: px(25), marginBottom: px(20)}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data.coverPhoto}}></Image>
        </View>
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{getdate(data.startDate)}</Text>
        </View>
        <View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
      <View>
        <View style={{marginTop: px(30), marginBottom: px(25)}}>
          <Text style={styles.title}>Other News</Text>
        </View>
        <View style={styles.otherNews}>
          {otherdata.map(item => {
            return otherNews(item);
          })}
        </View>
        <View style={{flex: 1}}>
          <Button color={colors.black} borderColor={colors.black}>
            See all News
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    margin: px(25),
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: px(200),
    borderRadius: px(10),
  },
  title: {
    color: 'black',
    fontFamily: 'DMSans-Regular',
    fontSize: px(20),
  },
  otherNews: {},
  dateContainer: {
    marginTop: px(10),
    marginBottom: px(30),
  },
  date: {
    color: colors.darkgray,
  },
  description: {
    color: colors.black,
    fontFamily: 'DMSans-Regular',
    fontSize: px(14),
  },
  descriptionContainer: {},
});
