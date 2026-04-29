import React, { useState } from 'react';
import { Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../lib/supabase';

export default function LogIn({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleLogIn() {
    setMessage('');

    if (!email.trim() || !password.trim()) {
      setMessage('Please enter your email and password.');
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage('Logged in successfully!');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong while logging in.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>
        Log In
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 12,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Log In" onPress={handleLogIn} />
      )}

      {message ? (
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          {message}
        </Text>
      ) : null}
    </LinearGradient>
  );
}