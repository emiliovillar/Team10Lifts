import React, { useState, useEffect } from 'react';
import { Text, FlatList, Button } from 'react-native';
import { supabase } from './lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';

type Todo = {
  id: number;
  name: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data, error } = await supabase
          .from('todos')
          .select('id, name');
        
        if (error) {
          console.error('Error fetching todos: ', error.message);
          return;
        }

        setTodos(data ?? []);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';

        console.error('Error fetching todos: ', message);
      }
    };

    getTodos();
  }, []);

  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 60,
      }}>

      <Text style={{color:'white', fontSize: 24, marginBottom: 20}}>
        Todo List
      </Text>

      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />

      <FlatList<Todo>
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Text style={{color:'white', fontSize: 18, marginBottom: 10}}>
            {item.name}
          </Text>
        )}
      />
    </LinearGradient>
  );
}