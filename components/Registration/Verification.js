import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
  PixelRatio,
} from 'react-native';
import Button from '../UI/Button';
const dimension = Dimensions.get('screen').height / 830;

const Register = ({route}) => {
  const val = Math.floor(1000 + Math.random() * 9000);

  console.log(route.params.path);
    console.log(dimension);


    const OtpArr = []
    

    useEffect(() => {
        
    })

  //   const dp = px => {
  //     return px / PixelRatio.get();
  //   };
  //   const sp = px => {
  //     return px / (PixelRatio.getFontScale() * PixelRatio.get());
  //   };

   
  

  const navigate = useNavigation();

  const placeholder = 'Enter Email/Phone Number to Register';
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
            <Text
              style={{
                color: '#0C1A30',
                fontSize: 20 * dimension,
                fontWeight: '400',
              }}>
              Verification Code
            </Text>
            <OtpGenerator />
          </View>

          <View style={{marginTop: 150 * dimension}}>
            <View style={{height: 60 * dimension}}>
              <Button backgroundColor={'#C4C5C4'} color={'white'}>
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
    marginHorizontal: 25 * dimension,
    flex: 1,
  },
  textInput: {
    paddingVertical: 20 * dimension,
    paddingHorizontal: 16 * dimension,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    marginTop: 20 * dimension,
  },
});

export default Register;
