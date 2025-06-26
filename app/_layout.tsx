import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="counter" options={{ headerTitle: 'Counter' }} />
      <Stack.Screen name="todolist" options={{ headerTitle: 'Todo List' }} />
      <Stack.Screen name="apirequest" options={{ headerTitle: 'Api Request' }} />
    </Stack>
  );
}
