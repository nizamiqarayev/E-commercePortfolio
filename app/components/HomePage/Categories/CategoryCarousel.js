import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import px from '../../../assets/utility/dimension';

const CategoryCarousel = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
      <CategoryItem
        image={
          'https://media.istockphoto.com/photos/illustration-of-a-penguin-picture-id519890151?k=20&m=519890151&s=612x612&w=0&h=1Sgx88r1Ne5uQiENnpPNEc3S2LYO_RwR99RaS9i5PgI='
        }
        color={'#E4F3EA'}
        title={'Pengus'}
      />
    </ScrollView>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
    scrollView: {
      height:px(120),
      marginVertical: px(16)
  },
});
