import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconButton from '../UI/IconButton';
import Button from '../UI/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dimension = Dimensions.get('screen').height / 830;

const ProfilePassword = () => {
  const [passwordType, setPasswordType] = useState(true);

  const [warning, setWarning] = useState(false);

  const [input, setInput] = useState({
    name: '',
    password: '',
    referral: '',
  });

  const changePasswordVisibility = () => {
    setPasswordType(!passwordType);
  };

  const inputHandler = (text, inputType) => {
    if (inputType == 'password' && text.length < 6 && text.length != 0) {
      setWarning(true);
    }
    else {
      setWarning(false);

    }

    setInput({
      ...input,
      [inputType]: text,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profile & Password</Text>
            <Text
              style={{
                color: '#838589',
                fontWeight: '400',
                fontSize: 14 * dimension,
              }}>
              Complete the following latest data to enter the Mega Mall
              application
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputCellContainer}>
              <Text style={styles.label}> Full Name </Text>
              <TextInput
                placeholder="Enter your full name"
                style={[styles.input]}
                onChangeText={text => {
                  inputHandler(text, 'name');
                }}
              />
            </View>
            <View style={styles.inputCellContainer}>
              <Text style={styles.label}>Password</Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={[styles.input, {flex: 1}]}
                  placeholderTextColor={'#C4C5C4'}
                  placeholder="Enter your password"
                  onChangeText={text => {
                    inputHandler(text, 'password');
                  }}
                  secureTextEntry={passwordType}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <IconButton
                    size={24}
                    color={'#838589'}
                    onPress={changePasswordVisibility}
                    name={'eye-outline'}
                  />
                </View>
              </View>
              {warning ? (
                <View style={styles.warning}>
                  <Ionicons
                    name={'alert-circle-outline'}
                    size={24}
                    color={'red'}
                  />
                  <Text>Password must be 6 characters or more</Text>
                </View>
              ) : (
                <></>
              )}
            </View>

            <View style={styles.inputCellContainer}>
              <Text style={styles.label}> Referal Code (Optional) </Text>
              <TextInput
                style={[styles.input]}
                placeholder="Input your code"
                onChangeText={text => {
                  inputHandler(text, 'referral');
                }}
              />
            </View>
          </View>
          <View style={{width: '100%'}}>
            <Button backgroundColor={'#3669C9'} color={'white'}>
              Confirmation
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25 * dimension,
  },
  headerContainer: {
    marginTop: 65 * dimension,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 25 * dimension,
    marginBottom: 20 * dimension,
    color: '#0C1A30',
  },
  inputContainer: {
    marginTop: 50 * dimension,
    flex: 1,
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  label: {
    marginBottom: 20 * dimension,
  },
  inputCellContainer: {
    marginBottom: 30 * dimension,
  },
  warning: {
    flexDirection: "row",
    marginTop: 10 * dimension,
    alignItems:"center"
  }
});
