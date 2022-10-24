import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import base from '../../helpers/base';
import Button from '../UI/Button';

const Account = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [informations, setInformations] = useState({
    name: '',
    email: '',
    profilePicture: null,
  });

  async function getNameEmail() {
    let name = await AsyncStorage.getItem('username');
    let email = await AsyncStorage.getItem('email');
    let profilePicture = await AsyncStorage.getItem('profilePicture');

    setInformations({
      name: name,
      email: email,
      profilePicture: profilePicture,
    });
    return informations;
  }
  useEffect(() => {
    setLoading(true);
    getNameEmail();
    setLoading(false);
  }, []);

  async function logOut() {
    setLoading(true);
    const userId = await AsyncStorage.getItem('_id');

    const wishRes = await base.api().get(`wishlists/${userId}`);
    const wishData = await wishRes.data;
    const products = wishData.data.products;
    const cardRes = await base.api().get(`cards/${userId}`);
    const cardData = await cardRes.data;
    const cards = cardData.products;
    await AsyncStorage.clear();
    await AsyncStorage.setItem('wishlist', JSON.stringify(products));
    await AsyncStorage.setItem('card', JSON.stringify(cards));
    base.token = '';

    Home();
  }
  function Home() {
    navigation.navigate('HomePage');
  }

  return (
    <>
      {loading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.container}>
        <View style={styles.AccountContainer}>
          <View style={styles.IconContainer}>
            <Image
              style={{width: px(100), height: px(100)}}
              source={{uri: informations.profilePicture}}></Image>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Username:{informations.name.toUpperCase()}
            </Text>
            <Text style={styles.textStyle}>
              Email:{'\n'}
              {informations.email}
            </Text>
          </View>
        </View>
        <View style={styles.ButtonStyle}>
          <Button
            onPress={logOut}
            color={colors.errorRed}
            borderColor={colors.errorRed}>
            <Text style={styles.Logout}>Log Out</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: px(30),
    backgroundColor: colors.white,
    flex: 1,
  },
  ActivityIndicator: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    width: base.screenWidth,
    height: base.screenHeight,
    justifyContent: 'center',
    backgroundColor: colors.offGray,
    opacity: 0.5,
  },
  IconContainer: {
    backgroundColor: colors.white,
    elevation: 6,
  },
  AccountContainer: {
    flexDirection: 'row',
  },
  Logout: {
    fontFamily: 'DMSans-Medium',
    fontSize: px(16),
    color: colors.errorRed,
  },
  ButtonStyle: {
    marginTop: px(20),
    height: px(55),
  },
  textStyle: {
    fontFamily: 'DMSans-Medium',
    fontSize: px(14),
    color: colors.fontColor,
  },
  textContainer: {
    padding: px(15),
    justifyContent: 'space-between',
  },
});

export default Account;
