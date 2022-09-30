import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdatePassword = ({navigation}) => {
  const [iconName, setIconName] = useState('eye-outline');
  const [confirmIconName, setConfirmIconName] = useState('eye-outline');
  const [buttonColor, setButtonColor] = useState('#C4C5C4');
  const [inputs, setInputs] = useState({
    newpassword: '',
    confirmpassword: '',
  });
  const [passwordType, setPasswordType] = useState(true);
  const [confirmPasswordType, setConfirmPasswordType] = useState(true);
  useEffect(() => {
    if (
      inputs.newpassword.length == inputs.confirmpassword.length &&
      inputs.confirmpassword == inputs.newpassword &&
      inputs.newpassword.length > 6
    ) {
      setButtonColor('#3669C9');
    } else {
      setButtonColor('#838589');
    }
  }, [inputs]);
  function changePasswordVisibility() {
    if (iconName == 'eye-outline') {
      setIconName('eye-off-outline');
    } else {
      setIconName('eye-outline');
    }
    setPasswordType(!passwordType);
  }
  function changeConfirmPasswordVisibility() {
    if (confirmIconName == 'eye-outline') {
      setConfirmIconName('eye-off-outline');
    } else {
      setConfirmIconName('eye-outline');
    }
    setConfirmPasswordType(!confirmPasswordType);
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
        <View style={{marginTop: deviceHeight * 100}}>
          <View>
            <Text style={styles.welcomeText}>Update Password</Text>
            <Text style={styles.descriptionText}>
              Complete the following latest data to enter the Mega Mall
              application
            </Text>
          </View>
          <View style={{marginTop: deviceHeight * 50}}>
            <View>
              <Text style={styles.inputText}>New Password</Text>
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
                  onChangeText={getInputs.bind(this, 'newpassword')}
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconButton
                  name={'information-circle-outline'}
                  size={18}
                  color={'#999'}></IconButton>
                <Text style={{color: '#999'}}>
                  Password must be 6 characters or more
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.inputText}>Confirm New Password</Text>
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
                  onChangeText={getInputs.bind(this, 'confirmpassword')}
                  secureTextEntry={confirmPasswordType}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <IconButton
                    size={24}
                    color={'#838589'}
                    onPress={changeConfirmPasswordVisibility}
                    name={confirmIconName}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
          <View style={styles.signin}>
            <Button color={'white'} backgroundColor={buttonColor}>
             Save Update
            </Button>
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
    marginRight: deviceHeight * 100,
  },
  descriptionText: {
    color: '#838589',
    fontSize: deviceHeight * 18,
    fontWeight: '400',
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

export default UpdatePassword;
