import {View, Text, Pressable} from 'react-native';
import React from 'react';
import IconButton from '../../../UI/IconButton';
import px from '../../../../assets/utility/dimension';
import colors from '../../../../config/colors';

export default function Selection({
  title,
  value,
  selectedValue,
  valuesetter,
  alternateValue,
}) {
  return (
    <Pressable
      onPress={() => {
        if (value == selectedValue) {
          valuesetter('');
        } else {
          valuesetter(value);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: px(10),
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: colors.fontColor,
          }}>
          {title}
        </Text>
        {value == selectedValue ? (
          <IconButton
            name="checkmark-circle-outline"
            size={20}
            color={colors.EarthGreen}
          />
        ) : (
          <IconButton name="ellipse-outline" size={20} color={'black'} />
        )}
      </View>
    </Pressable>
  );
}
