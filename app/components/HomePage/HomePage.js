import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import LatestNewsList from './LatestNews/LatestNewsList';
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import ProductCard from '../ProductCard/ProductCard';
import colors from '../../config/colors';

const HomePage = ({route, navigation}) => {
  const focused = useIsFocused();
  useEffect(() => {
    if (focused) {
      async function getitem() {
        let a = await AsyncStorage.getItem('username');
      }
      getitem();
    }
  }, [focused]);
  return (

    <View style={styles.container}>
      <View style={{paddingVertical: px(30)}}>
        <View>
          <Text style={styles.latestNewsHeaderText}>Latest News</Text>
        </View>

        <LatestNewsList amountOfNews={3} />
          <ProductCard></ProductCard>
        <View style={{height:100}}>
          <Button color={colors.black}>See All News</Button>
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
