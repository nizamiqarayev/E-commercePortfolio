import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import Dummy from '../../assets/data/DummyData/Dummy';
import getdate from '../../assets/utility/Date';
import px from '../../assets/utility/dimension';
import colors from '../../config/colors';
import Stars from './Stars';

const ReviewItem = ({data}) => {
    
    return (
        <View style={styles.container}>
            <View style={{marginRight:px(15)}}>
                <Image style={styles.image} source={{uri:data.coverPhoto}}/>
            </View>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:px(7)}}>
                    <Text style={styles.name} >{data.title}</Text>
                    <Text style={styles.date}>{getdate(data.date)}</Text>
                </View>
                <View style={{marginBottom:px(9)}}>
                    <Stars key={Math.random()} filled={data.rating}/>
                </View>
                <View>
                    <Text style={styles.description}>{data.description}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop:px(20),
        flexDirection:"row",
        
    },
    image:{
        width:px(40),
        height:px(40),
        borderRadius:100,
    },
    name:{
        fontFamily:'DMSans-Medium',
        color:colors.fontColor,
        fontSize:px(14)
    },
    date:{
        color:colors.darkgray,
        fontFamily:'DMSans-Regular',
    },
    description:{
        color:colors.fontColor,
    }
});

export default ReviewItem;