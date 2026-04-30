import React, { useState } from 'react';
import { Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../lib/supabase';

export default function SignUp({ navigation }: any ) {
  const [ email, setEmail ] = useState(' ');
  const [ password, setPassword ] = useState(' ');

  const [ loading, setLoading ] = useState(false);
  const [ message, setMessage ] = useState('');

  async function handleSignUp() {
    setMessage('');

    if (!email.trim() || !password.trim()) {
      setMessage('Please enter your email and password.');
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (!data.user) {
        setMessage('Account was not created. Please try again.');
        return;
      }

      if (!data.session) {
        setMessage('Account created! Please log in.');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Log In' }],
        });
        return;
      }

      setMessage('Account created and logged in!');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong while creating the account.');
    } finally {
      setLoading(false);
    }
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
        Sign Up
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        keyboardType='email-address'
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
          backgroundColor: '#5D00FF',
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      { loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Create Account" onPress={handleSignUp} />
      )}

      { message ? (
        <Text
          style={{
            color: '#5D00FF',
            marginTop: 20,
            textAlign: 'center',
          }}
        > {message} </Text>
      ) : null}
    </LinearGradient>
  );
}