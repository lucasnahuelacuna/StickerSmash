import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  function displayMessage(message: string) {
    console.log(message);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={() => displayMessage('Counter')}>
        <Text>Counter</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => displayMessage('Todo List')}>
        <Text>Todo List</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => displayMessage('Api Request')}>
        <Text>Api Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  card: {
    backgroundColor: '#ccc',
    height: 100,
    justifyContent: 'center',
    marginVertical: 25,
    alignItems: 'center',
    borderRadius: 10
  }
});
