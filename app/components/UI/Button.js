import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

const Button = ({children, backgroundColor, color, onPress, borderColor}) => {
  return (
    <Pressable style={{flex: 1}} onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: backgroundColor, borderColor: borderColor},
          borderColor && {borderWidth: 1},
        ]}>
        <Text style={{color: color, textAlign: 'center'}}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
