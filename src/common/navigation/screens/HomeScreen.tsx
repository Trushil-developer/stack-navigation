import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppStackNavigation } from '../app/hooks';

type HomeScreenType = {
    navigation?: AppStackNavigation;
}

const HomeScreen = ({ navigation }: HomeScreenType) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
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

export default HomeScreen;
