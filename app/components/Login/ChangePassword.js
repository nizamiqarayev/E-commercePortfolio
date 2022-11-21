import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Button from '../UI/Button';

const ChangePassword = () => {
  const [inputs, setInputs] = useState({
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
  });
  const [button, setButton] = useState(false);
  function getInputs(inputName, data) {
    setInputs({
      ...inputs,
      [inputName]: data,
    });
  }
  console.log(inputs);
  useEffect(() => {
    if (
      inputs.confirmpassword === inputs.newpassword &&
      inputs.confirmpassword.length >= 6
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [inputs]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{justifyContent: 'space-between', flex: 1}}
      enableOnAndroid={true}
      style={styles.container}>
      <View>
        <View>
          <Text style={styles.HeadText}>Change Password</Text>
        </View>
        <View style={styles.MainContainer}>
          <View>
            <Text style={styles.RegularText}>Old Password</Text>
            <TextInput
              autoComplete="off"
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.InputContainer}
              onChangeText={getInputs.bind(this, 'oldpassword')}></TextInput>
          </View>
          <View>
            <Text style={styles.RegularText}>New Password</Text>
            <TextInput
              autoComplete="off"
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.InputContainer}
              onChangeText={getInputs.bind(this, 'newpassword')}></TextInput>
          </View>
          <View>
            <Text style={styles.RegularText}>Confirm New Password</Text>
            <TextInput
              autoComplete="off"
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.InputContainer}
              onChangeText={getInputs.bind(
                this,
                'confirmpassword',
              )}></TextInput>
          </View>
          <Text style={{color: colors.darkgray, marginTop: px(20)}}>
            Password length must be more than 6 symbols
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: px(20),
          borderRadius: px(20),
          height: px(50),
        }}>
        <Button
          backgroundColor={button ? colors.blue : colors.darkgray}
          color={colors.white}>
          Confirm
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: px(25),
    paddingBottom: px(40),
  },
  MainContainer: {
    paddingHorizontal: px(15),
  },
  HeadText: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Bold',
    fontSize: px(24),
    marginTop: px(20),
    marginBottom: px(60),
  },
  RegularText: {
    color: colors.fontColor,
    fontFamily: 'DMSans-Regular',
    fontSize: px(16),
    marginTop: px(20),
  },
  InputContainer: {
    borderBottomColor: colors.softGray,
    borderBottomWidth: px(1),
    color: colors.fontColor,
  },
});

export default ChangePassword;
