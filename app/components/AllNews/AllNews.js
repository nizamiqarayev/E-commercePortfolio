import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LatestNewsList from '../HomePage/LatestNews/LatestNewsList'

const AllNews = () => {
  return (
    <View>
          <LatestNewsList amountOfNews={20} extraRender={true} />
    </View>
  )
}

export default AllNews

const styles = StyleSheet.create({})