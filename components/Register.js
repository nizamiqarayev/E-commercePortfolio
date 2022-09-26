import React from 'react';
import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import Button from '../UI/Button';

const Register = () => {
  const placeholder = 'Masukan Alamat Email/ No Telepon Anda';
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            marginTop: 30,
            marginBottom: 20,
            fontSize: 25,
            fontWeight: '700',
            color: '#0C1A30',
          }}>
          Register Account
        </Text>
        <Text style={{color: '#838589', fontSize: 14, fontWeight: '400'}}>
          Masukan Email/ No. Hp untuk mendaftar
        </Text>
      </View>
      <View
        style={{
          marginTop: 60,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <Text style={{color: '#0C1A30', fontSize: 14, fontWeight: '400'}}>
            Email/Phone
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#C4C5C4"
            underlineColorAndroid={'transparent'}
          />
        </View>

        <View>
          <View>
            <Button backgroundColor={'#C4C5C4'} color={"white"}>Continue</Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 102,
              paddingBottom: 30,
            }}>
            <Text style={{marginRight:5}}>Have an account?</Text>
            <Pressable
              onPress={() => {
                console.log('asdada');
              }}>
              <Text style={{color:"#3669c9"}}> Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flex: 1,
  },
  textInput: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Register;
