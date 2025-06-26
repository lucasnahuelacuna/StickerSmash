import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.buttonGroup}>
                <Button title='+' onPress={() => setCount(count + 1)} />
                <Button title='-' onPress={() => setCount(count - 1)} />
                <Button title='Reset' onPress={() => setCount(0)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    marginBottom: 20
  },
  count: {
    fontSize: 48,
    color: '#333',
    marginBottom: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10
  }
});
