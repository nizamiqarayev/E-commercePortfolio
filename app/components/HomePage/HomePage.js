import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import LatestNewsList from './LatestNews/LatestNewsList';
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const HomePage = ({route,navigation}) => {
  const focused=useIsFocused()
 useEffect(()=>{
    async function getitem(){

      let a = await AsyncStorage.getItem('username')
    }
    getitem()
  },[focused])
  return (
    <View style={styles.container}>
      <View style={{paddingVertical:px(30)}}>
        <View>
          <Text style={styles.latestNewsHeaderText}>Latest News</Text>
        </View>

        <LatestNewsList amountOfNews={3} extraRender={false} />

        <View style={{height: px(60)}}>
        <Button
            backgroundColor={'white'}
            color={"#0C1A30"}
            borderColor={"#0C1A30"}
                onPress={() => {
                  navigate.navigate('allnews');
                }}>
                See All News
              </Button>
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
