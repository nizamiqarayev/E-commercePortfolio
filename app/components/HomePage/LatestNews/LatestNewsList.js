import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LatestNewsListItem from './LatestNewsListItem'

const LatestNewsList = ({ amountOfNews }) => {
    const [newsArr, setnewsArr]=useState([])


    useEffect(() => {
        newsInjector(amountOfNews)
    },[])

    const newsInjector = (amount) => {
        const temparr=[]
        for (let index = 0; index < amount; index++) {
            temparr.push(<LatestNewsListItem key={index}></LatestNewsListItem>)
        }
        setnewsArr([...newsArr,temparr])
    }


  return (
      <View>
          <FlatList data={newsArr} renderItem={({ item }) => {
              return item
          }}  />
        
          
    </View>
  )
}

export default LatestNewsList

const styles = StyleSheet.create({})