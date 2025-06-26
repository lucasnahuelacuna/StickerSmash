import { StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
