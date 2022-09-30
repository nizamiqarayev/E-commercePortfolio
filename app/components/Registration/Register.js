import {useNavigation} from '@react-navigation/native';
import React from 'react';
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
import px from '../../assets/utility/dimension';
import Button from '../UI/Button';
const dimension = Dimensions.get('screen').height / 830;

const Register = () => {
  const dp = px => {
    return px / PixelRatio.get();
  };
  const sp = px => {
    return px / (PixelRatio.getFontScale() * PixelRatio.get());
  };

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
              fontSize: 32 * dimension,
              fontWeight: '700',
              color: '#0C1A30',
            }}>
            Register Account
          </Text>
          <Text
            style={{
              color: '#838589',
              fontSize: 16 * dimension,
              fontWeight: '400',
            }}>
            Enter Email / No. Phone to register{' '}
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
              Email/Phone
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor="#C4C5C4"
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={{marginTop: 150 * dimension}}>
            <View style={{height: px(60)}}>
              <Button
                backgroundColor={'#C4C5C4'}
                color={'white'}
                onPress={() => {
                  navigate.navigate('verification', {
                    path: 'registerfinish',
                  });
                }}>
                Continue
              </Button>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 120 * dimension,
                paddingBottom: 20 * dimension,
              }}>
              <Text style={{marginRight: 5 * dimension, color: '#838589'}}>
                Have an account?
              </Text>
              <Pressable onPress={() => {}}>
                <Text style={{color: '#3669c9'}}> Sign In</Text>
              </Pressable>
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
    paddingVertical: 16 * dimension,
    paddingHorizontal: 20 * dimension,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    marginTop: 20 * dimension,
  },
});

export default Register;
