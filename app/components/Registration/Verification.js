import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import CountDown from 'react-native-countdown-component';
import CustomTimer from '../UI/CustomTimer';
import colors from '../../config/colors';
const dimension = Dimensions.get('screen').height / 830;

let inputData = ['', '', '', ''];

const Verification = ({route}) => {
  // console.log(route.params.email);
  const [enteredOtp, setEnteredOtp] = useState('');
  console.log(route.params.otp);
  const [errorMsg, setErrorMsg] = useState(false)
  const [val, setVal] = useState(route.params.otp);
  // console.log('====================================');
  // console.log(val);
  // console.log('====================================');
  // console.log(val);
  const [otparr, setOtpArr] = useState([]);

  const [otpReadyforTest, setotpReadyforTest] = useState('false');


  const [resendAvailable, setResendAvailable] = useState(false);

  const changeHandler = (index, text) => {
    if (index <= 3 && text != '') {
      if (index < 3) {
        this[`input${index + 1}`].focus();
      }

      if (errorMsg == true) {
        setErrorMsg(false)
      }

      inputData[index] = text;

      if (inputData.length - 1 == index) {
        dataVerifier();
      }
    } else {
      if (index != 0 && index != 4 && text == '') {
        this[`input${index + -1}`].focus();
        inputData[index] = text;
        dataVerifier();
      }
    }
  };

  const dataVerifier = () => {
    let tempBool = false;
    // console.log(inputData);
    inputData.forEach(element => {
      if (element != '') {
        tempBool = true;
      } else {
        tempBool = false;
      }
    });
    setotpReadyforTest(tempBool);
  };

  const resendCode = async () => {
    try {
      const value = await axios.post(
        route.params.confirmType,
        {email: `${route.params.email}`},
      );
      // console.log(value.data.code);

      setVal(value.data.code);
      setResendAvailable(false);
      // setTimer(5*60)
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    // console.log({email: route.params.email});

    inputData = ['', '', '', ''];

    setotpReadyforTest(false);
  

    const temparr = [];
    for (let i = 0; i < 4; i++) {
      temparr.push(
        <TextInput
          key={i}
          style={styles.textInput}
          maxLength={1}
          textAlign="center"
          placeholderTextColor={'C4C5C4'}
          keyboardType="number-pad"
          // onFocus={()=>{clickHandler(i)}}
          onChangeText={text => changeHandler(i, text)}
          ref={input => {
            this[`input${i}`] = input;
          }}
        />,
      );
    }
    setOtpArr(temparr);
  }, []);

  const otpFinalVerification = () => {
    let inputValue = '';
    inputData.forEach(element => {
      inputValue += element;
    });
    // console.log('input', inputValue);
    // console.log('val', val);
    // console.log(inputValue == val);
    if (inputValue == val) {
      // console.log('input', inputValue);
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text
            style={{
              marginTop: 30 * dimension,
              marginBottom: 20 * dimension,
              fontSize: 36 * dimension,
              fontWeight: '700',
              color: '#0C1A30',
            }}>
            Verification
          </Text>
          <Text
            style={{
              color: '#838589',
              fontSize: 16 * dimension,
              fontWeight: '400',
            }}>
            We have sent the verification code to {route.params.email}
          </Text>
        </View>
        <View
          style={{
            marginTop: 60 * dimension,
            flex: 1,
          }}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: '#0C1A30',
                  fontSize: 20 * dimension,
                  fontWeight: '400',
                }}>
                Verification Code
              </Text>
              {resendAvailable ? (
                <Pressable onPress={resendCode}>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 14 * dimension,
                      fontWeight: '400',
                    }}>
                    Re-send code
                  </Text>
                </Pressable>
              ) : (
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 14 * dimension,
                    fontWeight: '400',
                  }}>
                  Resend not yet available
                </Text>
              )}
            </View>
            {/* <View style={{flexDirection: 'row'}}>{OtpArr}</View> */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {otparr.map(input => {
                  return input;
                })}

              </View>
              <View style={{ alignSelf: 'flex-start', marginTop:5}}>
                {
                  resendAvailable ? <></> :<View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{ fontWeight: '700', fontSize: 15, color: '#0C1A30' }}>
                    Resend Available in:  
                  </Text>
                    <CustomTimer initialMinutes={5} initialSeconds={0} onFinish={setResendAvailable}/>
                  
                </View>
                }
                {errorMsg? <View style={styles.errorView}>
                <Ionicons
                  name={'alert-circle-outline'}
                  size={24}
                  color={colors.errorRed}
                />
                <Text
                  style={{
                    color: colors.errorRed,
                    fontSize: px(16),
                    fontWeight: '400',
                    marginLeft: 5,
                  }}>
                  Entered Code is Invalid
                </Text>
              </View> : <></>}
                
              </View>
            </View>
          </View>

          <View style={{marginTop: 150 * dimension}}>
            <View style={{height: 60 * dimension}}>
              <Button
                backgroundColor={
                  otpReadyforTest && val != 0 ? '#3669c9' : '#C4C5C4'
                }
                color={'white'}
                onPress={
                  otpReadyforTest && val != 0
                    ? () => {
                        if (otpFinalVerification() == true) {
                          navigate.navigate(route.params.path, {
                            email: route.params.email,
                          });
                        } else {

                          setErrorMsg(true)
                          // console.log('dsds');
                        }
                      }
                    : () => {}
                }>
                Continue
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: px(25),
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginHorizontal: px(6),
    paddingVertical: px(16),
    paddingHorizontal: px(20),
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    marginTop: px(20),
    elevation: 2,
  },
  errorView: {
    flexDirection: 'row',
    marginTop:10,
    alignItems: "center",
  }
});

export default Verification;
