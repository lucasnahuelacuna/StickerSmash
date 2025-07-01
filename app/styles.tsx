import React from 'react';
import { StyleSheet, View } from 'react-native';

const StylesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    box2: {
        height: 50,
        width: 50,
        backgroundColor: 'green'
    },
    box3: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default StylesScreen;