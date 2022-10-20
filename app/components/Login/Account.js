import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import base from '../../helpers/base';
import Button from '../UI/Button';

const Account = ({navigation}) => {

    const[informations,setInformations]=useState({
        name:'',
        email:'',
        profilePicture:''
    })

   async function getNameEmail(){

    let name= await AsyncStorage.getItem('username')
    let email= await AsyncStorage.getItem('email')
    let profilePicture= await AsyncStorage.getItem('profilePicture')

    setInformations({
        name:name,
        email:email,
        profilePicture:profilePicture
    })
    return informations
    }
    useEffect(()=>{
        getNameEmail()
    },[])

    async function logOut(){
        await AsyncStorage.clear()
        base.token=''
        Home()
    }
    function Home() {
        navigation.navigate('HomePage');
      }

  return (
    <View style={styles.container}>
      <View style={styles.AccountContainer}>
        <View style={styles.IconContainer}>
          <Image source={{uri:informations.profilePicture,width:px(100),height:px(100)}}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Username:{informations.name.toLocaleUpperCase()}</Text>
          <Text style={styles.textStyle}>Email:{'\n'}{informations.email}</Text>
        </View>
      </View>
      <View style={styles.ButtonStyle}>
          <Button onPress={logOut} color={colors.errorRed} borderColor={colors.errorRed}>
            <Text style={styles.Logout}>Log Out</Text>
          </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: px(30),
    backgroundColor: colors.white,
    flex: 1,
  },
  IconContainer: {
    backgroundColor: colors.white,
    elevation:6
  },
  AccountContainer: {
    flexDirection: 'row',
  },
  Logout:{
    fontFamily:'DMSans-Medium',
    fontSize:px(16),
    color:colors.errorRed,
  },
  ButtonStyle: {
    marginTop:px(20),
    height:px(55),
  },
  textStyle:{
    fontFamily:'DMSans-Medium',
    fontSize:px(14),
    color:colors.fontColor,
  },
  textContainer:{

    padding:px(15),
    justifyContent:'space-between'
  },
});

export default Account;
