import React, { useState } from 'react';
import { Text, Button, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../lib/supabase';

export default function LogOut({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleLogOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ color: '#5D00FF', fontSize: 24, marginBottom: 20 }}>
        Log Out
      </Text>

      <Text
        style={{
          color: '#5D00FF',
          fontSize: 18,
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        Are you sure you want to log out?
      </Text>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Log Out" onPress={handleLogOut} />
      )}

      {message ? (
        <Text style={{ color: '#5D00FF', marginTop: 20, textAlign: 'center' }}>
          {message}
        </Text>
      ) : null}
    </LinearGradient>
  );
}