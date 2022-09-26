import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const Button = ({children,backgroundColor,color,onPress,borderColor}) => {
    
    return (
        <View >
            <Pressable onPress={onPress}>
                <View style={[styles.container,{backgroundColor:backgroundColor,borderColor:borderColor}]}>
                    <Text style={{color:color,textAlign:'center'}}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical:12,
        paddingHorizontal:12,
        borderRadius:10,
    }
});

export default Button;