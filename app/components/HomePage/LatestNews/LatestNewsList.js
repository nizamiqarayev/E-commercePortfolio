import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LatestNewsListItem from './LatestNewsListItem';

const LatestNewsList = ({amountOfNews, extraRender}) => {
  const [newsArr, setnewsArr] = useState([]);

  useEffect(() => {
    newsInjector(amountOfNews);
  }, []);

  const newsInjector = amount => {
    const temparr = [];
    for (let index = 0; index < amount; index++) {
      temparr.push(<LatestNewsListItem key={index} />);
    }
    setnewsArr([...newsArr, temparr]);
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
