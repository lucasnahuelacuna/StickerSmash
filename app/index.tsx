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
        <Text style={styles.text}>Counter</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push('/todolist')}>
        <Text style={styles.text}>Todo List</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push('/apirequest')}>
        <Text style={styles.text}>Api Request</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push('/styles')}>
        <Text style={styles.text}>Styles</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => router.push({
        pathname: '/params',
        params: { id: 123, name: 'Anthony Hopkins'}
      })}>
        <Text style={styles.text}>Params</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: '#eee',
    height: 100,
    justifyContent: 'center',
    marginVertical: 25,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
