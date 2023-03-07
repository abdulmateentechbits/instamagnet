/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation();
    const [isSplash, setIsSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSplash(false);
        }, 3000);
    }, []);

    useEffect(() => {
        if (isSplash === false) {
            navigation.navigate('WelcomeStack');
        }
    }, [isSplash, navigation]);


    return (
        <View style={styles.container}>
            {isSplash && (
                <Image
                    source={require('../../assets/images/logo-color.png')}
                    style={styles.image}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Splash;
