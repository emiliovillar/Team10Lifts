import React, { useState } from 'react';
import { Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../lib/supabase';

export default function SignUp({ navigation }: any ) {
  const [ name, setName ] = useState(' ');
  const [ email, setEmail ] = useState(' ');
  const [ password, setPassword ] = useState(' ');

  const [ loading, setLoading ] = useState(false);
  const [ message, setMessage ] = useState('');

  async function handleSignUp() {
    setMessage('');

    if ( !name.trim() || !email.trim() || !password.trim() ) {
      setMessage('Please enter your name, email, and password.');
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            name: name.trim(),
          },
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (!data.user) {
        setMessage('Account was not created. Please try again.');
        return;
      }

      const { error: profileError } = await supabase.from('profiles').upsert({
        id: data.user.id,
        name: name.trim(),
        email: email.trim(),
      });

      if (profileError) {
        setMessage(`Account created, but profile failed: ${profileError.message}`);
        return;
      }

      setMessage('Account created successfully!');

      navigation.navigate('Home');
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong while creating the account.');
    } finally {
      setLoading(false);
    }

    console.log(
      'URL from app:',
      JSON.stringify(process.env.EXPO_PUBLIC_SUPABASE_URL)
    );
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
          backgroundColor: 'white',
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
            color: 'white',
            marginTop: 20,
            textAlign: 'center',
          }}
        > {message} </Text>
      ) : null}
    </LinearGradient>
  );
}