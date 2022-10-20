import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import ProductDetail from '../ProductDetail/ProductDetail';
import Button from '../UI/Button';

const Order = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Button onPress={()=>{
                navigation.navigate('ProductDetail');
            }} color={colors.white} backgroundColor={colors.blue}>Press me</Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.white
    }
});

export default Order;