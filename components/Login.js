import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './UI/Button';

const Login = () => {
    
    return (
        <View style={styles.container}>
            <Button backgroundColor={'#3669C9'}>Sign in</Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width:200,
    }
});

export default Login;