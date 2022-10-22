import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from '../../../ProductCard/ProductCard'
import px from '../../../../assets/utility/dimension'
import colors from '../../../../config/colors'

const ProductCardList = ({products}) => {
  
  return (
    <View style={styles.container}>
      <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}  content data={products} renderItem={({ item }) => (
        <View style={styles.list}>
        <ProductCard
          key={item._id}
           data={item}
          />
        </View>
      )}
        numColumns={2} />
      </View>
  )
}

export default ProductCardList

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    paddingHorizontal: px(10),
    backgroundColor:colors.offGray
  },
  list: {
    marginHorizontal: px(10),
    marginVertical:px(15),
  }
})