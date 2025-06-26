import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TodoListScreen() {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<any>([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now().toString(), text: task }]);
            setTask('');
        }
    }

    const removeTask = (id: string) => {
      const updateTasks = tasks.filter((item: any) => item.id !== id);
      setTasks(updateTasks);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>

      <View style={styles.inputContainer}>
        <TextInput 
            placeholder='New Task'
            value={task}
            style={styles.input}
            onChangeText={setTask}
            onSubmitEditing={addTask}
        />
        <Pressable style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <View>
        {
            tasks.length > 0 ? (
                <>
                    {
                      tasks.map((item: any, index: any) => (
                        <View style={styles.task} key={index}>
                          <Text style={styles.taskText}>{item.text}</Text>
                          <Pressable onPress={() => removeTask(item.id)}>
                            <Text style={styles.delete}>DELETE</Text>
                          </Pressable>
                        </View>
                      ))
                    }
                </>
            ) : (
                <Text style={styles.empty}>There are not tasks</Text>
            )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10
  },
  input: {
    flex: 1,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff'
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600'
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30
  },
  task: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskText: {
    fontSize: 16
  },
  delete: {
    color: '#007AFF',
    fontSize: 15
  }
});