import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import {useSelector} from 'react-redux';
import px from '../../../assets/utility/dimension';
import IconButton from '../../UI/IconButton';

const AllCategories = ({onPress, seeAllCategories, setSeeAllCategories}) => {
  const categoriesFromStore = useSelector(state => state.categories);

  return (
    <Modal visible={seeAllCategories} animationType="slide">
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 28,
            marginRight: 20,
          }}>
          All Categories
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <IconButton
            name={'close'}
            size={25}
            color={'black'}
            onPress={() => setSeeAllCategories(false)}
          />
        </View>
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
      </View>
    </Modal>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  allNewsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
