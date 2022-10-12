import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import px from '../../assets/utility/dimension';

const Stars = ({filled}) => {
  const empty = 5 - filled;

    const temparr = [];
    for (let index = 0; index < filled; index++) {
      temparr.push(<Image
      key={index}
        style={styles.star}
        source={require('../../assets/data/ProductCartDummy/Vector.jpg')}
      />);
    }
    for (let index = 0; index < empty; index++) {
        temparr.push(<Image
        key={index+5}
            style={styles.star}
            source={require('../../assets/data/ProductCartDummy/Vector1.png')}
          />);
      }


  return <View style={styles.container}>
    {temparr}
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
   
  },
  star: {
    width: px(14),
    height: px(14),
    marginRight:px(5),
    
  },
});

export default Stars;
