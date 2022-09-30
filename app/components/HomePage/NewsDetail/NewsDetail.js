import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dummy from '../../../assets/data/DummyData/Dummy'
import px from '../../../assets/utility/dimension'
import getdate from '../../../assets/utility/Date'
import colors from '../../../config/colors'
const NewsDetail = () => {
  const data= Dummy[0]
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri:data.coverPhoto}}></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{getdate(data.startDate)}</Text>
      </View>
      <View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  )
}

export default NewsDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imageContainer:{
    
    margin:px(25),
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:px(200),
    borderRadius:px(10),
    
  },
  title:{
    color:'black',
    fontSize:px(24),
    
  },
  titleContainer:{
    marginHorizontal:px(25),
  },
  dateContainer:{
    marginTop:px(10),
    marginBottom:px(30),
    marginHorizontal:px(25),
  },
  date:{
    color:colors.darkgray,
  },
  description:{
    color:colors.black,
  },
  descriptionContainer:{

  }

})