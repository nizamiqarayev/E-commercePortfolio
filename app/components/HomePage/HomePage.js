import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LatestNewsList from './LatestNews/LatestNewsList';
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import ProductCard from '../ProductCard/ProductCard';
import colors from '../../config/colors';
import CategoryCarousel from './Categories/CategoryCarousel';
import AllCategories from './Categories/AllCategories';

const HomePage = ({route, navigation}) => {
  const focused = useIsFocused();

  const [seeAllCategories, setCategoriesModal] = useState(false);

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
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Categories</Text>
          <Pressable
            onPress={() => {
              setCategoriesModal(true);
            }}>
            <Text style={{color: colors.blue}}>See All</Text>
          </Pressable>
            <AllCategories seeAllCategories={seeAllCategories} setSeeAllCategories={setCategoriesModal} />
         
          
        </View>
        <CategoryCarousel />
      </View>
      <View style={{paddingVertical: px(30)}}>
        <View>
          <Text style={styles.latestNewsHeaderText}>Latest News</Text>
        </View>

        <LatestNewsList amountOfNews={3} extraRender={false} />

        <View style={{height: px(60)}}>
          <Button
            backgroundColor={'white'}
            color={'#0C1A30'}
            borderColor={'#0C1A30'}
            onPress={() => {
              navigation.navigate('allnews');
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
  title: {
    fontFamily: 'DMSans-regular',
    color: colors.fontColor,
    marginVertical: 8,
    fontWeight: '700',
    fontSize: px(25),
    color: '#0C1A30',
  },
});
