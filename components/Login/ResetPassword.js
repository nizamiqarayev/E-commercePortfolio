import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import Button from '../UI/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ResetPassword = ({navigation}) => {

  const [buttonColor, setButtonColor] = useState('#C4C5C4');
  const [inputs, setInputs] = useState({
    email: '',
  });
  useEffect(() => {
    if (inputs.email != '') {
      setButtonColor('#3669C9');
    } else {
      setButtonColor('#838589');
    }
  }, [inputs]);
  function verification(){
    navigation.navigate('updatepassword')
  }
  function getInputs(inputName, data) {
    setInputs({
      ...inputs,
      [inputName]: data,
    });
  }
  return (
    <KeyboardAwareScrollView style={{height: deviceHeight}} bounces={false}>
      <View style={styles.container}>
        <View style={{marginTop: deviceHeight * 150}}>
          <View>
            <Text style={styles.welcomeText}>Reset Password</Text>
            <Text style={styles.descriptionText}>
            Enter Email / No. Mobile account to reset your password
            </Text>
          </View>
          <View style={{marginTop: deviceHeight * 50}}>
            <View style={{marginBottom: deviceHeight * 30}}>
              <Text style={styles.inputText}>Email/ Phone</Text>
              <TextInput
                style={styles.inputContainer}
                placeholderTextColor={'#C4C5C4'}
                placeholder="Enter your email address/ phone number"
                onChangeText={getInputs.bind(this, 'email')}
              />
            </View>
          </View>
          <View style={styles.signin}>
            <Button onPress={verification} color={'white'} backgroundColor={buttonColor}>
                Reset
            </Button>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const screenheight = Dimensions.get('screen').height;
const windowheight = Dimensions.get('window').height;
const deviceHeight = screenheight / 1063;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenheight - deviceHeight * 160,
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: deviceHeight * 36,
    fontWeight: '700',
    color: '#0C1A30',
    marginBottom: deviceHeight * 20,
  },
  descriptionText: {
    color: '#838589',
    fontSize: deviceHeight * 18,
    fontWeight: '400',
    marginBottom:deviceHeight*50
  },
  inputContainer: {
    color: '#0C1A30',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    paddingVertical: deviceHeight * 16,
    paddingHorizontal: deviceHeight * 20,
  },
  inputText: {
    color: '#0C1A30',
    fontSize: deviceHeight * 14,
    marginBottom: deviceHeight * 20,
  },
  forgotPassword: {
    height: deviceHeight * 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  signin: {
    height: deviceHeight * 60,
    marginTop: deviceHeight * 70,
  },
});

export default ResetPassword;
