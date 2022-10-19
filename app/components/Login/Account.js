import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import base from '../../helpers/base';
import Button from '../UI/Button';

const Account = ({navigation}) => {

    const[informations,setInformations]=useState({
        name:'',
        email:''
    })

   async function getNameEmail(){

    let name= await AsyncStorage.getItem('username')
    let email= await AsyncStorage.getItem('email')

    setInformations({
        name:name,
        email:email
    })
    return informations
    }
    useEffect(()=>{
        getNameEmail()
    },[])

    async function logOut(){
        await AsyncStorage.clear()
        console.log(base.token);
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
          <Ionicons name="person-outline" size={72} color={colors.darkgray} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Username:{informations.name}</Text>
          <Text style={styles.textStyle}>Email:{informations.email}</Text>
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
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: px(20),
    padding: px(10),
    backgroundColor: colors.white,
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
    height:px(40),
  },
  textStyle:{
    fontFamily:'DMSans-Medium',
    fontSize:px(14),
    color:colors.fontColor,
  },
  textContainer:{
    padding:px(15),
    justifyContent:'space-around'
  },
});

export default Account;
