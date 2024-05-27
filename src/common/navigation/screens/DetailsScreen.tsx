import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetailsScreen;
