import React from 'react';
import {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Button from '../UI/Button';

const Test = ({route}) => {
    const toast = route.params.toast
    console.log(toast);
  return (
    <View style={styles.container}>

      <View style={styles.Button}>
        <Button
          onPress={toast}
          backgroundColor={colors.blue}
          color={colors.white}>
          Press me
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Button: {
    height: px(90),
  },
});

export default Test;
