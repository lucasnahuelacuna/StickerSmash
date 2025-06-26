import { StyleSheet, Text, View } from 'react-native';

export default function ApiRequestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Api Request Screen</Text>
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