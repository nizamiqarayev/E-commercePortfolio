import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LatestNewsListItem from './LatestNewsListItem';
import Dummy from '../../../assets/data/DummyData/Dummy';

let renderedListMaxIndex = 0;
const LatestNewsList = ({amountOfNews, extraRender}) => {
  const [newsArr, setnewsArr] = useState([]);
  useEffect(() => {
    renderedListMaxIndex = 0;

    newsInjector(amountOfNews);
  }, []);

  const newsInjector = amount => {
    console.log(renderedListMaxIndex);
    if (renderedListMaxIndex < Dummy.length) {
      const temparr = [];

      const intervalIndex = renderedListMaxIndex + amount;

      let interval = 0;
      if (intervalIndex < Dummy.length) {
        interval = amount;
      } else {
        if (intervalIndex - Dummy.length < amount) {
          interval = intervalIndex - Dummy.length;
        }
      }
      if (interval > 0) {
        for (
          let index = renderedListMaxIndex;
          index < renderedListMaxIndex + interval;
          index++
        ) {
          temparr.push(<LatestNewsListItem key={index} data={Dummy[index]} />);
        }

        setnewsArr([...newsArr, temparr]);
      }
      renderedListMaxIndex = intervalIndex;

    }
  };

  return (
    <View>
      <FlatList
        data={newsArr}
        onEndReached={() => {
          if (extraRender) {
            newsInjector(5);
            console.log(newsArr);
          }
        }}
        onEndReachedThreshold={0.75}
        renderItem={({item}) => {
          return item;
        }}
      />
    </View>
  );
};

export default LatestNewsList;

const styles = StyleSheet.create({});
