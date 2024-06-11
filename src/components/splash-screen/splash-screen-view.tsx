import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const SplashScreenView = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

