import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  function displayMessage(message: string) {
    console.log(message);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={() => router.push('/counter')}>
        <Text>Counter</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push('/todolist')}>
        <Text>Todo List</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push('/apirequest')}>
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
