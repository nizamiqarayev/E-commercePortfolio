import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import px from '../../../assets/utility/dimension';
import getdate from '../../../assets/utility/Date';
import colors from '../../../config/colors';
import Button from '../../UI/Button';
import axios from 'axios';
import LatestNewsListItem from '../LatestNews/LatestNewsListItem';
import { useIsFocused } from '@react-navigation/native';
const NewsDetail = ({route,navigation}) => {
  const scrollref=useRef()
  const index = route.params.index;
  let randomindex = Math.floor(Math.random() * 7);
  if (index == randomindex) {
    randomindex = Math.floor(Math.random() * 7);
  }
  const focused=useIsFocused()
  const [otherData, setOtherData] = useState([]);
  const [otherDatalength, setOtherDataLength] = useState();
  async function otherNewsRequest() {
    const response = await axios.get(
      `https://izzi-ecom.herokuapp.com/news/${randomindex}`,
    );
    setOtherData(response.data.data);
    setOtherDataLength(response.data.data.length);
  }
  useEffect(()=>{
    if(focused){
      otherNewsRequest()      
    }
  },[focused])
  const data = route.params.data;
  const OtherNews=()=>{
    scrollref.current.scrollTo({
      x:0,
      y:0,
    })
    
    let random1=Math.floor(Math.random()*otherDatalength)
    let random2=Math.floor(Math.random()*otherDatalength)
    while (random1===random2) {
      random2=Math.floor(Math.random()*otherDatalength)
    }
    return (
      <>
        <LatestNewsListItem
          key={otherData[random1]._id}
          data={otherData[random1]}
          index={random1}
        />
        <LatestNewsListItem
          key={otherData[random2]._id}
          data={otherData[random2]}
          index={random2}
            
        />
      </>
    );
  }
  // const otherNews = data => {
  //   return (
  //     <View
  //       key={data.id}
  //       style={{
  //         flexDirection: 'row',
  //         marginBottom: px(30),
  //         justifyContent: 'space-between',
  //         height: px(100),
  //         borderBottomWidth: 1,
  //         borderBottomColor: '#EDEDED',
  //       }}>
  //       <View style={{width: '70%', justifyContent: 'space-around'}}>
  //         <Text
  //           style={{
  //             fontSize: px(14),
  //             color: colors.black,
  //             fontFamily: 'DMSans-Regular',
  //           }}>
  //           {data.title}
  //         </Text>
  //         <Text
  //           style={{
  //             fontSize: px(12),
  //             color: colors.black,
  //             fontFamily: 'DMSans-Regular',
  //           }}
  //           numberOfLines={1}>
  //           {data.description}
  //         </Text>
  //         <Text style={{color: colors.darkgray}}>
  //           {getdate(data.startDate)}
  //         </Text>
  //       </View>
  //       <View style={{height: px(80)}}>
  //         <Image
  //           style={{
  //             width: px(80),
  //             borderRadius: px(10),
  //             height: px(80),
  //             flex: 2,
  //           }}
  //           source={{uri: data.coverPhoto}}></Image>
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <ScrollView ref={scrollref} style={{marginHorizontal: px(25), marginBottom: px(20)}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data.image}}></Image>
        </View>
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{getdate(data.date)}</Text>
        </View>
        <View>
          <Text style={styles.description}>{data.content}</Text>
        </View>
      </View>
      <View>
        <View style={{marginTop: px(30), marginBottom: px(25)}}>
          <Text style={styles.title}>Other News</Text>
        </View>
        <View style={styles.otherNews}>
          {otherDatalength&&<OtherNews/>}
        </View>
        <View style={{flex: 1}}>
          <Button onPress={()=>{
            navigation.navigate('allnews')
          }} color={colors.black} borderColor={colors.black}>
            See all News
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    margin: px(25),
    alignItems: 'center',
  },
  image: {
    width: px(325),
    height: px(200),
    borderRadius: px(10),
  },
  title: {
    color: 'black',
    fontFamily: 'DMSans-Regular',
    fontSize: px(20),
  },
  otherNews: {},
  dateContainer: {
    marginTop: px(10),
    marginBottom: px(30),
  },
  date: {
    color: colors.darkgray,
  },
  description: {
    color: colors.black,
    fontFamily: 'DMSans-Regular',
    fontSize: px(14),
  },
  descriptionContainer: {},
});
