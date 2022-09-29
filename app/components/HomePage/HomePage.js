import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LatestNewsList from './LatestNews/LatestNewsList';
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical:px(30)}}>
        <View>
          <Text style={styles.latestNewsHeaderText}>Latest News</Text>
        </View>

        <LatestNewsList amountOfNews={3} />

        <View>
          <Button>See All News</Button>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  latestNewsHeaderText: {fontWeight: '700', fontSize: px(25), color: '#0C1A30'},
});
