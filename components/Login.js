import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Button from './UI/Button';
import IconButton from './UI/IconButton';

const Login = () => {
  const [iconName, setIconName] = useState('eye-outline');
  const [buttonColor,setButtonColor]=useState('#C4C5C4')
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [passwordType, setPasswordType] = useState(true);
  useEffect(()=>{
    if(inputs.email!=''&&inputs.password!=''){
      setButtonColor('#3669C9')
      
    }else{
      setButtonColor('#838589')
    }
  },[inputs])
  
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
    console.log(inputs);
  }
  return (
    <ScrollView centerContent={true} >
      <View style={styles.container}>
        <View style={{marginTop:deviceHeight*72}}>
          <View>
            <Text style={styles.welcomeText}>Welcome back to Mega Mall</Text>
            <Text style={styles.descriptionText}>
              Please enter data to login
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
        <View style={styles.forgotPassword}>
          <Button color={'black'}>Forgot Password</Button>
          <Button color={'#3669C9'}>Sign Up</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const screenheight = Dimensions.get('screen').height;
const windowheight=Dimensions.get('window').height
const deviceHeight = screenheight / 1063;
const styles = StyleSheet.create({
  container: {
    height:windowheight-deviceHeight*110,
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: deviceHeight * 32,
    fontWeight: '700',
    color: '#0C1A30',
    marginBottom: deviceHeight * 20,
  },
  descriptionText: {
    color: '#838589',
    fontSize: deviceHeight * 24,
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
    fontSize: deviceHeight * 20,
    marginBottom: deviceHeight * 20,
  },
  forgotPassword: {
    height:deviceHeight*60,
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
  },
  signin: {
    height: deviceHeight * 60,
    marginTop: deviceHeight * 70,
  },
});

export default Login;
