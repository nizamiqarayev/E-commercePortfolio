import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import ProductDetail from '../ProductDetail/ProductDetail';

const Order = () => {
    
    return (
        <View style={styles.container}>
            <ProductDetail></ProductDetail>
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