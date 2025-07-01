import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ParamsScreen = () => {
    const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
        <Text>Params Screen</Text>
        <Text>{id}</Text>
        <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ParamsScreen;