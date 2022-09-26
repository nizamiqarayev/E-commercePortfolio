import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from './UI/Button';

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
          <View>
            
            <TextInput
            style={styles.inputContainer}
            placeholderTextColor={'#C4C5C4'}
            placeholder="Enter your email address/ phone number"
          />
            </View>
        </View>
        <View>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.inputContainer}
            placeholderTextColor={'#C4C5C4'}
            placeholder="Enter Account Password"
          />
        </View>
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
