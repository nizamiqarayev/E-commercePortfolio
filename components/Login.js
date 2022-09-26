import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from './UI/Button';
import IconButton from './UI/IconButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome back to Mega Mall</Text>
        <Text style={styles.descriptionText}>Please enter data to login</Text>
      </View>
      <View style={{marginTop: 50}}>
        <View style={{marginBottom: 30}}>
          <Text style={styles.inputText}>Email/ Phone</Text>
          <TextInput
            style={styles.inputContainer}
            placeholderTextColor={'#C4C5C4'}
            placeholder="Enter your email address/ phone number"
          />
        </View>
        <View>
          <Text style={styles.inputText}>Password</Text>
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={[styles.inputContainer, {flex: 1}]}
              placeholderTextColor={'#C4C5C4'}
              placeholder="Enter your password"
            />
            <View style={{position: 'absolute', right: 0}}>
              <IconButton size={24} color={'#838589'} name={'eye-outline'} />
            </View>
          </View>
        </View>
      </View>
      <View style={{height:60,marginTop:70}} >
        <Button backgroundColor={'#3669C9'}>Sign In</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 72,
  },
  welcomeText: {
    fontSize: 42,
    fontWeight: '700',
    color: '#0C1A30',
    marginBottom: 20,
  },
  descriptionText: {
    color: '#838589',
    fontSize: 24,
    fontWeight: '400',
  },
  inputContainer: {
    color: '#0C1A30',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  inputText: {
    color: '#0C1A30',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Login;
