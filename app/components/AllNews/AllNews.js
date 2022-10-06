import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LatestNewsList from '../HomePage/LatestNews/LatestNewsList';
import Dummy from '../../assets/data/DummyData/Dummy';
const AllNews = () => {
  return (
    <View>
      <LatestNewsList amountOfNews={null} extraRender={true} />
    </View>
  );
};

export default AllNews;

const styles = StyleSheet.create({});
