import {FlatList, StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import base from '../../../helpers/base';
import colors from '../../../config/colors';
import LatestNewsListItem from './LatestNewsListItem';
import Dummy from '../../../assets/data/DummyData/Dummy';
import axios from 'axios';

let renderedListMaxIndex = 0;
const LatestNewsList = ({ homepage,amountOfNews, extraRender}) => {
  const [newsArr, setnewsArr] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [loadedNews, setLoadedNews] = useState([]);

  const [counter, setCounter] = useState(1)

  const [nextAvailable , setNextAvailable] = useState(false)

  useEffect(() => {
    datafetcher(1);
  }, []);

  const datafetcher = async index => {
    setLoading(true)
    if (!loadedNews.includes(index)) {
      const response = await axios.get(
        `https://izzi-ecom.herokuapp.com/news/${index}`,
      );
      
      setNextAvailable(response.data.next)
      setNewsData(response.data.data);
    }
    setLoading(false)
  };

  const newsInjector = () => {


    const temparr = [];
    if (amountOfNews == null && newsData.length!=0) {
      for (let index = 0; index < newsData.length; index++) {
        temparr.push(<LatestNewsListItem key={newsData[index]._id} data={newsData[index]} index={counter} />);
      }
    } else {

      if (newsData.length != 0) {
       
        for (let index = 0; index < amountOfNews; index++) {
      
          temparr.push(<LatestNewsListItem key={index} data={newsData[index]} />);
        }
     }
      
     
    }
    
    const finaltemparr=newsArr.concat(temparr)

    setnewsArr(finaltemparr);

  };
  useEffect(() => {
    newsInjector();
  }, [newsData]);

  return (
    <>
    {loading?<View style={styles.ActivityIndicator}>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>:<></>}
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newsArr}
        scrollEnabled={homepage? false:true}
        onEndReached={() => {
          if (nextAvailable == true && extraRender ==true) {
     
            datafetcher(counter + 1)
            setCounter(counter+1)
          }
        }}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => {
          return item;
        }}
      />
    </View>
    </>
  );
};

export default LatestNewsList;

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    width: base.screenWidth,
    height: base.screenHeight,
    justifyContent: 'center',
    backgroundColor: colors.offGray,
    opacity: 0.5,
  },
});
