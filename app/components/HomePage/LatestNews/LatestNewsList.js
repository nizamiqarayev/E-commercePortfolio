import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LatestNewsListItem from './LatestNewsListItem';
import Dummy from '../../../assets/data/DummyData/Dummy';
import axios from 'axios';

let renderedListMaxIndex = 0;
const LatestNewsList = ({amountOfNews, extraRender}) => {
  const [newsArr, setnewsArr] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const [loadedNews, setLoadedNews] = useState([]);

  const [counter, setCounter] = useState(1)

  const [nextAvailable , setNextAvailable] = useState(false)

  useEffect(() => {
    datafetcher(1);
  }, []);

  const datafetcher = async index => {
    if (!loadedNews.includes(index)) {
      const response = await axios.get(
        `https://izzi-ecom.herokuapp.com/news/${index}`,
      );
      
      setNextAvailable(response.data.next)
      setNewsData(response.data.data);
    }
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
    <View>
      <FlatList
        data={newsArr}
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
  );
};

export default LatestNewsList;

const styles = StyleSheet.create({});
