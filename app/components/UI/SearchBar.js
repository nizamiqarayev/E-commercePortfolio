import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../config/colors'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProducts, setProductsForDisplay } from '../../store/slices/products'


//sorts by title
const SearchBar = ({ data }) => {

    const [input, setInput] = useState("")
   

    const dispatch = useDispatch()
    
    const filter = () => {
        
            const filteredData = data.filter((item) => {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = input.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

          
            dispatch(setProductsForDisplay({final:filteredData}))

        
    }
   
    useEffect(() => {
        filter()
    },[input,data])

  return (
      <View style={styles.container}>
          <TextInput style={styles.input} onChangeText={(text) => {setInput(text) }}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.softGray,
        borderRadius: 10,
        justifyContent: "center",
    },
    input: {
        marginLeft: 10,
        marginRight: 40,
        color:colors.fontColor
    }
})