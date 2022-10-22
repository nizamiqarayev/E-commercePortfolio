import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import {useSelector} from 'react-redux';
import px from '../../../assets/utility/dimension';
import IconButton from '../../UI/IconButton';
import colors from '../../../config/colors';

const AllCategories = ({onPress, navigation}) => {
  const categoriesFromStore = useSelector(state => state.categories);

  const renderItems = ({item, index}) => {};

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        
       
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
            onPress={() => navigation.goBack()}
          />
           <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 28,
              marginRight: 20,
              color: colors.fontColor
          }}>
          All Categories
        </Text>
        </View>
        <View style={styles.allNewsContainer}>
          <FlatList
            style={styles.flatlist}
            data={categoriesFromStore.content}
            renderItem={({ item }) => {
              return (
                <CategoryItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  title={item.name}
                  color={item.bgColor}
                />
              );
            }}
            numColumns={3}
            
            
          />
          {/* {categoriesFromStore.content.map(item => (
            <CategoryItem
              key={item._id}
              image={item.image}
              title={item.name}
              color={item.bgColor}
            />
          ))} */}
        </View>
        </View>
      </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  parent: {
    flex:1,
    marginTop: '20%',
    marginBottom:'40%',
   marginHorizontal:px(20)
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.offGray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#644F98",
    padding:px(5)
  },
  allNewsContainer: {
    marginTop: 10,

 
  },
  flatlist: {
  }
});
