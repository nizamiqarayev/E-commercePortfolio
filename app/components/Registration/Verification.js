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
import Button from '../UI/Button';
import px from '../../assets/utility/dimension';
import CountDown from 'react-native-countdown-component';
const dimension = Dimensions.get('screen').height / 830;

let inputData = ['', '', '', ''];

const Verification = ({route}) => {
  console.log(route.params.email);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [val, setVal] = useState(0);

  const [otparr, setOtpArr] = useState([]);

  const [otpReadyforTest, setotpReadyforTest] = useState('false');


  const [minutes, setMinutes] = useState(5)
  
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(10)
  

  const [resendAvailable, setResendAvailable] = useState(false)

  const changeHandler = (index, text) => {
    if (index <= 3 && text != '') {
      if (index < 3) {
        this[`input${index + 1}`].focus();
      }

      inputData[index] = text;

      if (inputData.length - 1 == index) {
        dataVerifier();
      }
    } else {
      if (index != 0 && index != 4 && text == '') {
        this[`input${index + -1}`].focus();
        inputData[index] = text;
        dataVerifier()
      }
    }
  };

  const dataVerifier = () => {
    let tempBool = false;
    console.log(inputData);
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
        'https://izzi-ecom.herokuapp.com/user/emailConfirm',
        {email: `${route.params.email}`},
      );
      console.log(value.data.code);

      setVal(value.data.code);
      setResendAvailable(false)
      // setTimer(5*60)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log({email: route.params.email});

    inputData = ['', '', '', ''];

    setotpReadyforTest(false)
    async function verifier() {
      try {
        const value = await axios.post(
          'https://izzi-ecom.herokuapp.com/user/emailConfirm',
          {email: `${route.params.email}`},
        );
        console.log(value.data.code);
        setVal(value.data.code);
        return value;
      } catch (error) {
        console.log(error);
      }
    }
    verifier();

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
    console.log('input', inputValue);
    console.log('val', val);
    console.log(inputValue == val);
    if (inputValue == val) {
      console.log('input', inputValue);
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
            We have sent the verification code to +628*******716 Change?
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
              {
                resendAvailable ? <Pressable onPress={resendCode}>
                
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 14 * dimension,
                    fontWeight: '400',
                  }}>
                  Resend code
                </Text>
              </Pressable> :  <Text
                  style={{
                    color: 'blue',
                    fontSize: 14 * dimension,
                    fontWeight: '400',
                  }}>
                  Resend not yet available 
                </Text>
              }
              
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
              <View style={{ alignSelf: "flex-start" }}>

                <View style={{ flexDirection: "row", justifyContent: "center",alignItems:"center" }}>
                <CountDown until={timer}
                  style={{marginHorizontal:2}}
                  size={15}
                  onFinish={() => {
                    setResendAvailable(true)
                  }}
                  digitStyle={{backgroundColor: 'transparent'}}
                  digitTxtStyle={{color: '#0C1A30'}}
                  timeToShow={['M', 'S']}
                  timeLabels={{ m: '', s: '' }}
                  showSeparator
                />
                <Text style={{fontWeight:"700", fontSize:15,color: '#0C1A30'}}>Till Resend</Text>
                </View>
               
              </View>
            </View>
          </View>

          <View style={{marginTop: 150 * dimension}}>
            <View style={{height: 60 * dimension}}>
              <Button
                backgroundColor={
                  otpReadyforTest && val != 0 ? '#3669c9':'#C4C5C4'
                }
                color={'white'}
                onPress={
                  otpReadyforTest && val != 0
                    ? () => {
                        if (otpFinalVerification() == true) {
                          navigate.navigate('Profile Password', {
                            email: route.params.email,
                          });
                        } else {
                          console.log('dsds');
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
});

export default Verification;