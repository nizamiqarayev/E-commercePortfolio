import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Selection from './Selection'

const SortScreen = () => {
  return (
    <View>
      <Selection title={"Name (A / Z)"} value={"sad"} />
      
      <Selection title={"Name (A / Z)"} value={"sad"} />

      <Selection title={"Name (A / Z)"} value={"sad"} />

      <Selection title={"Name (A / Z)"} value={"sad"} />

    </View>
  )
}

export default SortScreen

const styles = StyleSheet.create({})