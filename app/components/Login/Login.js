import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import px from '../../assets/utility/dimension';

const Login = ({navigation}) => {
  const [iconName, setIconName] = useState('eye-outline');
  const [buttonColor, setButtonColor] = useState('#C4C5C4');
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [passwordType, setPasswordType] = useState(true);
  useEffect(() => {
    if (inputs.email != '' && inputs.password != '') {
      setButtonColor('#3669C9');
    } else {
      setButtonColor('#838589');
    }
  }, [inputs]);
  function forgotPassword() {
    navigation.navigate('resetpassword');
  }
  function SignUp() {
    navigation.navigate('Register');
  }
  function changePasswordVisibility() {
    if (iconName == 'eye-outline') {
      setIconName('eye-off-outline');
    } else {
      setIconName('eye-outline');
    }
    setPasswordType(!passwordType);
  }
  function getInputs(inputName, data) {
    setInputs({
      ...inputs,
      [inputName]: data,
    });
  }
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="always"
      bounces={false}>
      <View style={styles.container}>
        <View style={{marginTop:px(72)}}>
          <View>
            <Text style={styles.welcomeText}>Welcome back to Mega Mall</Text>
            <Text style={styles.descriptionText}>
              Please enter data to login
            </Text>
          </View>
          <View style={{marginTop: px(50)}}>
            <View style={{marginBottom:px(30)}}>
              <Text style={styles.inputText}>Email/ Phone</Text>
              <TextInput
                style={styles.inputContainer}
                placeholderTextColor={'#C4C5C4'}
                placeholder="Enter your email address/ phone number"
                onChangeText={getInputs.bind(this, 'email')}
              />
            </View>
            <View>
              <Text style={styles.inputText}>Password</Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={[styles.inputContainer, {flex: 1}]}
                  placeholderTextColor={'#C4C5C4'}
                  placeholder="Enter your password"
                  onChangeText={getInputs.bind(this, 'password')}
                  secureTextEntry={passwordType}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <IconButton
                    size={24}
                    color={'#838589'}
                    onPress={changePasswordVisibility}
                    name={iconName}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.signin}>
            <Button color={'white'} backgroundColor={buttonColor}>
              Sign In
            </Button>
          </View>
        </View>
        <View style={[styles.forgotPassword]}>
          <Button color={'black'} onPress={forgotPassword}>
            Forgot Password
          </Button>
          <Button onPress={SignUp} color={'#3669C9'}>Sign Up</Button>
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

    marginHorizontal: px(25),
    justifyContent: 'space-between',
    height:windowheight-px(85)
  },
  welcomeText: {
    fontSize: px(25),
    color: '#0C1A30',
    marginBottom: px(20),
    fontFamily:'DMSans-Bold',

  },
  descriptionText: {
    color: '#838589',
    fontSize: px(24),
    fontWeight: '400',
    fontFamily:'DMSans-Regular'
  },
  inputContainer: {
    color: '#0C1A30',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    paddingVertical:px(16),
    paddingHorizontal: px(20),
  },
  inputText: {
    color: '#0C1A30',
    fontSize: px(14),
    marginBottom: px(20),
    fontFamily:'DMSans-Regular'
  },
  forgotPassword: {
    height: px(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  signin: {
    height: px(40),
    marginTop: px(70),
  },
});

export default Login;
