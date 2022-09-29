import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import px from '../../../assets/utility/dimension';

const LatestNewsListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={[styles.text, {marginTop: 20}]}>
          Philosophy That Addresses Topics Such As Goodness
        </Text>
        <Text style={styles.text}>Agar tetap kinclong, bodi motor ten... </Text>
        <Text style={[styles.text, {marginBottom: 20}]}> 13 Jan 2021</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          size
          source={require('../../../assets/images/480-4800827_little-penguin-simple-cute-penguin-cartoon.png')}
        />
      </View>
    </View>
  );
};

export default LatestNewsListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
        borderBottomWidth: 1,
    borderColor: "#EDEDED"
  },
  textView: {width: px(225), marginRight: px(20)},
  text: {
    marginBottom: 10,
  },

  image: {
    height: px(80),
      width: px(80),
    borderRadius:10,
  },
});
