import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import {useSelector} from 'react-redux';

const AllCategories = () => {
  const categoriesFromStore = useSelector(state => state.categories);

  return (
    <View style={styles.allNewsContainer}>
      {categoriesFromStore.content.map(item => (
        <CategoryItem
          key={item._id}
          image={item.image}
          title={item.name}
          color={item.bgColor}
        />
      ))}
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  allNewsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
