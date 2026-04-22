import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        Sign Up
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 12,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
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

      <Button title="Create Account" onPress={() => console.log('Signing up...')} />
    </LinearGradient>
  );
}