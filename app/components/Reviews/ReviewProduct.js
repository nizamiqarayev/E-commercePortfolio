import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Stars from './Stars';
import * as Progress from 'react-native-progress'

const ReviewProduct = () => {
    
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View style={styles.averageRatingContainer}>
                        <Text style={styles.averageRatingText}>4.6</Text>
                        <Text style={styles.averageOverRatingText}>/ 5</Text>
                    </View>
                    <Text style={styles.countOfReviews}>86 Reviews</Text>
                </View>
                <View>
                    <View style={styles.progressBarContainer}>
                        <Stars filled={5}></Stars>
                        <Progress.Bar borderWidth={0} color={colors.OrangeFresh} progress={0.7} ></Progress.Bar>
                    </View>
                </View>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    averageRatingText:{
        color:colors.fontColor,
        fontFamily:"DMSans-Bold",
        fontSize:px(28),
        lineHeight:px(39.06),
    },
    averageOverRatingText:{
        color:colors.fontColor,
        fontFamily:'DMSans-Medium',
        fontSize:px(14),
        lineHeight:px(30),
    },
    averageRatingContainer:{
        flexDirection:'row',
        alignItems:'flex-end'
    },
    countOfReviews:{
        color:colors.fontColor,
        fontFamily:'DMSans-Medium',
    },
    progressBarContainer:{
        flexDirection:'row',
        alignItems:'center',
        

    }


});

export default ReviewProduct;