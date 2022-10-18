import { View, Text } from 'react-native'
import React from 'react'
import IconButton from '../../../UI/IconButton'
import px from '../../../../assets/utility/dimension'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../../../config/colors'

export default function Selection({title,value, valuesetter}) {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:'center', marginHorizontal:px(25) , paddingVertical:px(16),borderBottomWidth:1,borderBottomColor:"lightgray"}}>
          <Text style={{ fontSize:18,color:colors.fontColor ,fontWeight:"DMSans-Bold"}}>{title}</Text>
          {value != null ? <IconButton name="checkmark-circle-outline"  size={20} color={colors.EarthGreen} /> :<IconButton name="ellipse-outline" size={20} color={"black"} />}
    </View>
  )
}